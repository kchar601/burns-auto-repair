import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  SITE_URL,
  toAbsoluteUrl,
} from "../src/seo/seoConfig.js";

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(SCRIPT_DIR, "..");
const CONTENT_DIR = path.join(ROOT_DIR, "content", "blog");
const PUBLIC_DIR = path.join(ROOT_DIR, "public");
const BLOG_OUTPUT_DIR = path.join(PUBLIC_DIR, "blog");
const BLOG_CSS_SOURCE = path.join(CONTENT_DIR, "blog.css");
const BLOG_LOGO_SOURCE = path.join(
  ROOT_DIR,
  "src",
  "assets",
  "burnsautologo white.webp",
);
const BLOG_LOGO_FILENAME = "burnsautologo-white.webp";
const INCLUDE_DRAFTS = process.env.BLOG_INCLUDE_DRAFTS === "1";

const BASE_PAGES = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/services", changefreq: "weekly", priority: "0.9" },
  { path: "/about", changefreq: "monthly", priority: "0.8" },
  { path: "/testimonials", changefreq: "daily", priority: "0.8" },
  { path: "/contact", changefreq: "monthly", priority: "0.8" },
  { path: "/blog/", changefreq: "weekly", priority: "0.7" },
];

const DEFAULT_AUTHOR = SITE_NAME;
const PHONE_DISPLAY = "215-968-3791";
const PHONE_HREF = "tel:+12159683791";

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

async function main() {
  await fs.mkdir(CONTENT_DIR, { recursive: true });
  assertInside(PUBLIC_DIR, BLOG_OUTPUT_DIR);

  const posts = await loadPosts();
  const visiblePosts = posts.filter((post) => !post.draft || INCLUDE_DRAFTS);
  const sitemapPosts = posts.filter((post) => !post.draft);

  await fs.rm(BLOG_OUTPUT_DIR, { recursive: true, force: true });
  await fs.mkdir(BLOG_OUTPUT_DIR, { recursive: true });
  await fs.copyFile(BLOG_CSS_SOURCE, path.join(BLOG_OUTPUT_DIR, "blog.css"));
  await fs.copyFile(
    BLOG_LOGO_SOURCE,
    path.join(BLOG_OUTPUT_DIR, BLOG_LOGO_FILENAME),
  );
  await fs.writeFile(path.join(BLOG_OUTPUT_DIR, "feed.xml"), renderFeed(sitemapPosts));
  await fs.writeFile(
    path.join(BLOG_OUTPUT_DIR, "index.html"),
    renderBlogIndex(visiblePosts),
  );

  await Promise.all(
    visiblePosts.map(async (post) => {
      const outputDir = path.join(BLOG_OUTPUT_DIR, post.slug);
      assertInside(BLOG_OUTPUT_DIR, outputDir);
      await fs.mkdir(outputDir, { recursive: true });
      await fs.writeFile(path.join(outputDir, "index.html"), renderBlogPost(post));
    }),
  );

  await fs.writeFile(path.join(PUBLIC_DIR, "sitemap.xml"), renderSitemap(sitemapPosts));

  const draftNote = INCLUDE_DRAFTS ? " including drafts" : "";
  console.log(`Built static blog with ${visiblePosts.length} post(s)${draftNote}.`);
}

async function loadPosts() {
  const filenames = await fs.readdir(CONTENT_DIR);
  const markdownFiles = filenames
    .filter((filename) => filename.endsWith(".md"))
    .filter((filename) => !filename.startsWith("_"))
    .sort();

  const posts = await Promise.all(
    markdownFiles.map(async (filename) => {
      const filePath = path.join(CONTENT_DIR, filename);
      const source = await fs.readFile(filePath, "utf8");
      return parsePost(source, filePath);
    }),
  );

  const slugs = new Set();
  for (const post of posts) {
    if (slugs.has(post.slug)) {
      throw new Error(`Duplicate blog slug "${post.slug}".`);
    }
    slugs.add(post.slug);
  }

  return posts.sort((a, b) => b.sortDate.localeCompare(a.sortDate));
}

function parsePost(source, filePath) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) {
    throw new Error(`${relativePath(filePath)} needs front matter between --- lines.`);
  }

  const data = parseFrontMatter(match[1]);
  const markdown = match[2].trim();
  const title = requiredString(data.title, "title", filePath);
  const description = requiredString(data.description, "description", filePath);
  const date = requiredDate(data.date, "date", filePath);
  const updated = data.updated ? requiredDate(data.updated, "updated", filePath) : date;
  const slug = slugify(data.slug || title);

  if (!slug) {
    throw new Error(`${relativePath(filePath)} needs a valid slug or title.`);
  }

  const tags = Array.isArray(data.tags) ? data.tags.map(String).filter(Boolean) : [];
  const image = data.image ? toPostAssetUrl(data.image, slug) : DEFAULT_OG_IMAGE;
  const bodyHtml = renderMarkdown(markdown);
  const wordCount = markdown.split(/\s+/).filter(Boolean).length;

  return {
    title,
    description,
    date,
    updated,
    sortDate: updated || date,
    displayDate: formatDisplayDate(date),
    author: data.author ? String(data.author) : DEFAULT_AUTHOR,
    slug,
    tags,
    image,
    bodyHtml,
    draft: data.draft === true,
    canonicalPath: `/blog/${slug}/`,
    url: toAbsoluteUrl(`/blog/${slug}/`),
    readTime: `${Math.max(1, Math.ceil(wordCount / 220))} min read`,
  };
}

function parseFrontMatter(frontMatter) {
  const data = {};
  let currentListKey = null;

  for (const rawLine of frontMatter.split(/\r?\n/)) {
    const line = rawLine.trimEnd();
    const trimmed = line.trim();

    if (!trimmed || trimmed.startsWith("#")) {
      continue;
    }

    const listItem = trimmed.match(/^-\s+(.+)$/);
    if (listItem && currentListKey) {
      data[currentListKey].push(parseScalar(listItem[1]));
      continue;
    }

    const keyValue = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!keyValue) {
      throw new Error(`Unsupported front matter line: ${rawLine}`);
    }

    const [, key, value] = keyValue;
    if (!value) {
      data[key] = [];
      currentListKey = key;
      continue;
    }

    data[key] = parseScalar(value);
    currentListKey = null;
  }

  return data;
}

function parseScalar(value) {
  const trimmed = value.trim();

  if (trimmed === "true") return true;
  if (trimmed === "false") return false;

  if (trimmed.startsWith("[") && trimmed.endsWith("]")) {
    return trimmed
      .slice(1, -1)
      .split(",")
      .map((item) => parseScalar(item.trim()))
      .filter(Boolean);
  }

  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1);
  }

  return trimmed;
}

function renderBlogIndex(posts) {
  const postCards = posts.length
    ? posts.map(renderPostCard).join("\n")
    : `<div class="empty-state">
        <h2>Blog posts are coming soon.</h2>
        <p>New maintenance guides and local auto repair tips will appear here once they are ready to publish.</p>
      </div>`;

  return renderPage({
    title: "Auto Repair Blog | Burns' Auto Repair in Newtown, PA",
    description:
      "Maintenance tips, repair guidance, and local auto care articles from Burns' Auto Repair in Newtown, PA.",
    canonicalPath: "/blog/",
    extraHead: '<link rel="alternate" type="application/rss+xml" title="Burns Auto Repair Blog" href="/blog/feed.xml" />',
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "Blog",
        "@id": `${toAbsoluteUrl("/blog/")}#blog`,
        url: toAbsoluteUrl("/blog/"),
        name: "Burns' Auto Repair Blog",
        description:
          "Maintenance tips, repair guidance, and local auto care articles from Burns' Auto Repair.",
        publisher: schemaPublisher(),
        blogPost: posts
          .filter((post) => !post.draft)
          .map((post) => ({
            "@type": "BlogPosting",
            headline: post.title,
            url: post.url,
            datePublished: post.date,
            dateModified: post.updated,
          })),
      },
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Blog", path: "/blog/" },
      ]),
    ],
    body: `
      <section class="blog-hero">
        <p class="eyebrow">Auto Care Notes</p>
        <h1>Burns' Auto Repair Blog</h1>
        <p>Practical maintenance guides and repair tips from a family-owned Newtown shop.</p>
      </section>
      <section class="post-list" aria-label="Blog posts">
        ${postCards}
      </section>
    `,
  });
}

function renderPostCard(post) {
  const tags = post.tags.length
    ? `<div class="tag-row">${post.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</div>`
    : "";
  const draftBadge = post.draft ? '<span class="draft-badge">Draft</span>' : "";

  return `
    <article class="post-card">
      <p class="post-meta">${escapeHtml(post.displayDate)} <span aria-hidden="true">/</span> ${escapeHtml(post.readTime)} ${draftBadge}</p>
      <h2><a href="${escapeAttr(post.canonicalPath)}">${escapeHtml(post.title)}</a></h2>
      <p>${escapeHtml(post.description)}</p>
      ${tags}
    </article>
  `;
}

function renderBlogPost(post) {
  return renderPage({
    title: `${post.title} | Burns' Auto Repair Blog`,
    description: post.description,
    canonicalPath: post.canonicalPath,
    ogType: "article",
    imageUrl: post.image,
    noindex: post.draft,
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "@id": `${post.url}#article`,
        headline: post.title,
        description: post.description,
        image: post.image,
        datePublished: post.date,
        dateModified: post.updated,
        author: {
          "@type": "Organization",
          name: post.author,
        },
        publisher: schemaPublisher(),
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": post.url,
        },
      },
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Blog", path: "/blog/" },
        { name: post.title, path: post.canonicalPath },
      ]),
    ],
    body: `
      <article class="article-shell">
        <a class="back-link" href="/blog/">Back to blog</a>
        <header class="article-header">
          <p class="post-meta">${escapeHtml(post.displayDate)} <span aria-hidden="true">/</span> ${escapeHtml(post.readTime)}</p>
          <h1>${escapeHtml(post.title)}</h1>
          <p>${escapeHtml(post.description)}</p>
          ${
            post.tags.length
              ? `<div class="tag-row">${post.tags
                  .map((tag) => `<span>${escapeHtml(tag)}</span>`)
                  .join("")}</div>`
              : ""
          }
        </header>
        <div class="article-content">
          ${post.bodyHtml}
        </div>
        <aside class="service-cta" aria-label="Schedule service">
          <h3>Need help with your vehicle?</h3>
          <p>Call Burns' Auto Repair or send us a message and we will help you choose the next step.</p>
          <div class="cta-row">
            <a class="button" href="${PHONE_HREF}">${PHONE_DISPLAY}</a>
            <a class="button secondary" href="/contact">Contact the shop</a>
          </div>
        </aside>
      </article>
    `,
  });
}

function renderPage({
  title,
  description,
  canonicalPath,
  body,
  structuredData = [],
  ogType = "website",
  imageUrl = DEFAULT_OG_IMAGE,
  noindex = false,
  extraHead = "",
}) {
  const canonicalUrl = toAbsoluteUrl(canonicalPath);
  const schema = structuredData
    .map((item) => `<script type="application/ld+json">${JSON.stringify(item)}</script>`)
    .join("\n");

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeAttr(description)}" />
    <meta name="robots" content="${noindex ? "noindex, nofollow" : "index, follow"}" />
    <link rel="canonical" href="${escapeAttr(canonicalUrl)}" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Rambla:wght@700&display=swap" />
    <link rel="stylesheet" href="/blog/blog.css" />
    <link rel="icon" type="image/png" href="/Burns favicon.png" media="(prefers-color-scheme: light)" />
    <link rel="icon" type="image/png" href="/Burns favicon light.png" media="(prefers-color-scheme: dark)" />
    <meta property="og:type" content="${escapeAttr(ogType)}" />
    <meta property="og:site_name" content="${escapeAttr(SITE_NAME)}" />
    <meta property="og:title" content="${escapeAttr(title)}" />
    <meta property="og:description" content="${escapeAttr(description)}" />
    <meta property="og:url" content="${escapeAttr(canonicalUrl)}" />
    <meta property="og:image" content="${escapeAttr(imageUrl)}" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="${escapeAttr(title)}" />
    <meta name="twitter:description" content="${escapeAttr(description)}" />
    <meta name="twitter:image" content="${escapeAttr(imageUrl)}" />
    ${extraHead}
    ${schema}
  </head>
  <body>
    ${renderHeader()}
    <main>
      ${body}
    </main>
    ${renderFooter()}
  </body>
</html>
`;
}

function renderHeader() {
  return `
    <header class="site-header">
      <div class="site-header-inner">
        <a class="logo-link" href="/" aria-label="Burns Auto Repair home">
          <img
            class="site-logo"
            src="/blog/${BLOG_LOGO_FILENAME}"
            alt="Burns Auto Repair logo"
            width="941"
            height="301"
            loading="eager"
            decoding="async"
          />
        </a>
        <nav class="site-nav" aria-label="Main navigation">
          <ul class="site-nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/testimonials">Testimonials</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
        <div class="nav-cta-wrap">
          <a class="nav-cta" href="${PHONE_HREF}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M224.2 89C216.3 70.1 195.7 60.1 176.1 65.4L170.6 66.9C106 84.5 50.8 147.1 66.9 223.3C104 398.3 241.7 536 416.7 573.1C493 589.3 555.5 534 573.1 469.4L574.6 463.9C580 444.2 569.9 423.6 551.1 415.8L453.8 375.3C437.3 368.4 418.2 373.2 406.8 387.1L368.2 434.3C297.9 399.4 241.3 341 208.8 269.3L253 233.3C266.9 222 271.6 202.9 264.8 186.3L224.2 89z"/></svg>${PHONE_DISPLAY}</a>
        </div>
      </div>
    </header>
  `;
}

function renderFooter() {
  return `
    <footer class="site-footer">
      <div class="footer-inner">
        <div class="footer-brand">
          <a class="logo-link footer-logo-link" href="/" aria-label="Burns Auto Repair home">
            <img
              class="site-logo"
              src="/blog/${BLOG_LOGO_FILENAME}"
              alt="Burns Auto Repair logo"
              width="941"
              height="301"
              loading="lazy"
              decoding="async"
            />
          </a>
          <p>Family-owned auto repair in Newtown, PA since 1957.</p>
        </div>
        <div>
          <h2 class="footer-heading">Quick Links</h2>
          <ul class="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/testimonials">Testimonials</a></li>
            <li><a href="/blog/">Blog</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <h2 class="footer-heading">Services</h2>
          <ul class="footer-links">
            <li><a href="/services#state-inspections-emissions">State Inspections &amp; Emissions</a></li>
            <li><a href="/services#scheduled-maintenance">Scheduled Maintenance</a></li>
            <li><a href="/services#brakes-tires">Brakes &amp; Tires</a></li>
            <li><a href="/services#steering-suspension">Steering &amp; Suspension</a></li>
            <li><a href="/services#ac-heating">AC &amp; Heating</a></li>
            <li><a href="/services#check-engine-diagnostics">Check Engine &amp; Diagnostics</a></li>
            <li><a href="/services#electrical-systems">Electrical Systems</a></li>
          </ul>
        </div>
        <div>
          <h2 class="footer-heading">Contact</h2>
          <ul class="footer-links">
            <li><a href="${PHONE_HREF}">${PHONE_DISPLAY}</a></li>
            <li><a href="mailto:office+website@burnsautorepair.com">office@burnsautorepair.com</a></li>
            <li>
              <a href="https://maps.app.goo.gl/XPAXPgE9K1cnejQG6">
                19 N Sycamore Street<br />
                Newtown, PA 18940
              </a>
            </li>
            <li class="social-links">
              <a style="padding: 8px 10px 8px 8px;" aria-label="Link to Facebook" href="https://www.facebook.com/BurnsAutoRepair19/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M240 363.3L240 576L356 576L356 363.3L442.5 363.3L460.5 265.5L356 265.5L356 230.9C356 179.2 376.3 159.4 428.7 159.4C445 159.4 458.1 159.8 465.7 160.6L465.7 71.9C451.4 68 416.4 64 396.2 64C289.3 64 240 114.5 240 223.4L240 265.5L174 265.5L174 363.3L240 363.3z"/></svg></a>
              <a style="padding: 8px;" aria-label="Link to Instagram" href="https://www.instagram.com/burnsautorepair/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z"/></svg></a>
            </li>
          </ul>
        </div>
      </div>
      <small class="copyright">
        &copy; ${new Date().getFullYear()} Burns Auto Repair, Inc. All rights reserved.
        <br />
        <a href="https://www.charltonit.com">Made by Charlton IT</a>
      </small>
    </footer>
  `;
}

function renderMarkdown(markdown) {
  const lines = markdown.split(/\r?\n/);
  const html = [];
  let paragraph = [];
  let list = null;
  let quote = [];
  let codeFence = null;

  const flushParagraph = () => {
    if (!paragraph.length) return;
    html.push(`<p>${renderInline(paragraph.join(" "))}</p>`);
    paragraph = [];
  };

  const flushList = () => {
    if (!list) return;
    html.push(`<${list.type}>${list.items.map((item) => `<li>${renderInline(item)}</li>`).join("")}</${list.type}>`);
    list = null;
  };

  const flushQuote = () => {
    if (!quote.length) return;
    html.push(`<blockquote>${quote.map((line) => `<p>${renderInline(line)}</p>`).join("")}</blockquote>`);
    quote = [];
  };

  for (const line of lines) {
    const trimmed = line.trim();

    if (codeFence) {
      if (trimmed.startsWith("```")) {
        html.push(
          `<pre><code${codeFence.language ? ` class="language-${escapeAttr(codeFence.language)}"` : ""}>${escapeHtml(codeFence.lines.join("\n"))}</code></pre>`,
        );
        codeFence = null;
      } else {
        codeFence.lines.push(line);
      }
      continue;
    }

    const fence = trimmed.match(/^```([A-Za-z0-9_-]+)?$/);
    if (fence) {
      flushParagraph();
      flushList();
      flushQuote();
      codeFence = { language: fence[1] || "", lines: [] };
      continue;
    }

    if (!trimmed) {
      flushParagraph();
      flushList();
      flushQuote();
      continue;
    }

    const heading = trimmed.match(/^(#{2,4})\s+(.+)$/);
    if (heading) {
      flushParagraph();
      flushList();
      flushQuote();
      const level = heading[1].length;
      html.push(`<h${level}>${renderInline(heading[2])}</h${level}>`);
      continue;
    }

    const image = trimmed.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
    if (image) {
      flushParagraph();
      flushList();
      flushQuote();
      html.push(
        `<figure><img src="${escapeAttr(image[2])}" alt="${escapeAttr(image[1])}" loading="lazy" decoding="async" /></figure>`,
      );
      continue;
    }

    const unordered = trimmed.match(/^[-*]\s+(.+)$/);
    if (unordered) {
      flushParagraph();
      flushQuote();
      if (!list || list.type !== "ul") {
        flushList();
        list = { type: "ul", items: [] };
      }
      list.items.push(unordered[1]);
      continue;
    }

    const ordered = trimmed.match(/^\d+\.\s+(.+)$/);
    if (ordered) {
      flushParagraph();
      flushQuote();
      if (!list || list.type !== "ol") {
        flushList();
        list = { type: "ol", items: [] };
      }
      list.items.push(ordered[1]);
      continue;
    }

    const blockquote = trimmed.match(/^>\s?(.+)$/);
    if (blockquote) {
      flushParagraph();
      flushList();
      quote.push(blockquote[1]);
      continue;
    }

    paragraph.push(trimmed);
  }

  flushParagraph();
  flushList();
  flushQuote();

  if (codeFence) {
    throw new Error("Unclosed markdown code fence.");
  }

  return html.join("\n");
}

function renderInline(text) {
  let rendered = escapeHtml(text);
  rendered = rendered.replace(/`([^`]+)`/g, "<code>$1</code>");
  rendered = rendered.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  rendered = rendered.replace(/\*([^*]+)\*/g, "<em>$1</em>");
  rendered = rendered.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    (_, label, href) => `<a href="${escapeAttr(href)}">${label}</a>`,
  );
  return rendered;
}

function renderSitemap(posts) {
  const urls = [
    ...BASE_PAGES,
    ...posts.map((post) => ({
      path: post.canonicalPath,
      changefreq: "monthly",
      priority: "0.6",
      lastmod: post.updated,
    })),
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${escapeXml(toAbsoluteUrl(url.path))}</loc>
    ${url.lastmod ? `<lastmod>${escapeXml(url.lastmod)}</lastmod>\n    ` : ""}<changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;
}

function renderFeed(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(SITE_NAME)} Blog</title>
    <link>${escapeXml(toAbsoluteUrl("/blog/"))}</link>
    <description>Auto repair and maintenance articles from ${escapeXml(SITE_NAME)}.</description>
    <language>en-us</language>
${posts
  .map(
    (post) => `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${escapeXml(post.url)}</link>
      <guid>${escapeXml(post.url)}</guid>
      <pubDate>${new Date(`${post.date}T00:00:00.000Z`).toUTCString()}</pubDate>
      <description>${escapeXml(post.description)}</description>
    </item>`,
  )
  .join("\n")}
  </channel>
</rss>
`;
}

function schemaPublisher() {
  return {
    "@type": "AutoRepair",
    name: SITE_NAME,
    url: SITE_URL,
    logo: DEFAULT_OG_IMAGE,
  };
}

function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: toAbsoluteUrl(item.path),
    })),
  };
}

function toPostAssetUrl(value, slug) {
  const stringValue = String(value);
  if (/^https?:\/\//i.test(stringValue)) {
    return stringValue;
  }
  if (stringValue.startsWith("/")) {
    return toAbsoluteUrl(stringValue);
  }
  return toAbsoluteUrl(`/blog/${slug}/${stringValue}`);
}

function requiredString(value, key, filePath) {
  if (typeof value !== "string" || !value.trim()) {
    throw new Error(`${relativePath(filePath)} needs a ${key} field.`);
  }
  return value.trim();
}

function requiredDate(value, key, filePath) {
  const stringValue = requiredString(value, key, filePath);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(stringValue)) {
    throw new Error(`${relativePath(filePath)} ${key} must use YYYY-MM-DD.`);
  }
  const parsed = new Date(`${stringValue}T00:00:00.000Z`);
  if (Number.isNaN(parsed.valueOf())) {
    throw new Error(`${relativePath(filePath)} ${key} is not a valid date.`);
  }
  return stringValue;
}

function formatDisplayDate(value) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${value}T00:00:00.000Z`));
}

function slugify(value) {
  return String(value)
    .toLowerCase()
    .trim()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function assertInside(parentDir, childPath) {
  const relative = path.relative(parentDir, childPath);
  if (relative.startsWith("..") || path.isAbsolute(relative)) {
    throw new Error(`Refusing to write outside ${relativePath(parentDir)}.`);
  }
}

function relativePath(filePath) {
  return path.relative(ROOT_DIR, filePath).replaceAll(path.sep, "/");
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function escapeAttr(value) {
  return escapeHtml(value).replace(/"/g, "&quot;");
}

function escapeXml(value) {
  return escapeAttr(value).replace(/'/g, "&apos;");
}
