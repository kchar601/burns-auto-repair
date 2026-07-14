import fs from "node:fs/promises";
import path from "node:path";
import {
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  toAbsoluteUrl,
} from "../src/seo/seoConfig.js";
import {
  LOGO_FILENAME,
  LOGO_SOURCE,
  PHONE_DISPLAY,
  PHONE_HREF,
  PUBLIC_DIR,
  ROOT_DIR,
  assertInside,
  breadcrumbSchema,
  escapeAttr,
  escapeHtml,
  escapeXml,
  formatDisplayDate,
  parseFrontMatter,
  relativePath,
  renderMarkdown,
  renderPage,
  requiredDate,
  requiredString,
  schemaPublisher,
  slugify,
} from "./lib/shared.mjs";
import { loadJobs } from "./build-careers.mjs";

const CONTENT_DIR = path.join(ROOT_DIR, "content", "blog");
const BLOG_OUTPUT_DIR = path.join(PUBLIC_DIR, "blog");
const BLOG_CSS_SOURCE = path.join(CONTENT_DIR, "blog.css");
const INCLUDE_DRAFTS = process.env.BLOG_INCLUDE_DRAFTS === "1";

const BASE_PAGES = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/services", changefreq: "weekly", priority: "0.9" },
  { path: "/about", changefreq: "monthly", priority: "0.8" },
  { path: "/testimonials", changefreq: "daily", priority: "0.8" },
  { path: "/contact", changefreq: "monthly", priority: "0.8" },
  { path: "/blog", changefreq: "weekly", priority: "0.7" },
  { path: "/careers", changefreq: "weekly", priority: "0.6" },
];

const DEFAULT_AUTHOR = SITE_NAME;

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
  const sitemapJobs = (await loadJobs()).filter((job) => !job.draft);

  await fs.rm(BLOG_OUTPUT_DIR, { recursive: true, force: true });
  await fs.mkdir(BLOG_OUTPUT_DIR, { recursive: true });
  await fs.copyFile(BLOG_CSS_SOURCE, path.join(BLOG_OUTPUT_DIR, "blog.css"));
  await fs.copyFile(LOGO_SOURCE, path.join(BLOG_OUTPUT_DIR, LOGO_FILENAME));
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

  await fs.writeFile(
    path.join(PUBLIC_DIR, "sitemap.xml"),
    renderSitemap(sitemapPosts, sitemapJobs),
  );

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
    canonicalPath: `/blog/${slug}`,
    url: toAbsoluteUrl(`/blog/${slug}`),
    readTime: `${Math.max(1, Math.ceil(wordCount / 220))} min read`,
  };
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
    canonicalPath: "/blog",
    extraHead: '<link rel="alternate" type="application/rss+xml" title="Burns Auto Repair Blog" href="/blog/feed.xml" />',
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "Blog",
        "@id": `${toAbsoluteUrl("/blog")}#blog`,
        url: toAbsoluteUrl("/blog"),
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
        { name: "Blog", path: "/blog" },
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
        { name: "Blog", path: "/blog" },
        { name: post.title, path: post.canonicalPath },
      ]),
    ],
    body: `
      <article class="article-shell">
        <a class="back-link" href="/blog">Back to blog</a>
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

function renderSitemap(posts, jobs) {
  const urls = [
    ...BASE_PAGES,
    ...posts.map((post) => ({
      path: post.canonicalPath,
      changefreq: "monthly",
      priority: "0.6",
      lastmod: post.updated,
    })),
    ...jobs.map((job) => ({
      path: job.canonicalPath,
      changefreq: "monthly",
      priority: "0.5",
      lastmod: job.updated,
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
    <link>${escapeXml(toAbsoluteUrl("/blog"))}</link>
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
