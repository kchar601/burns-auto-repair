import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  SITE_URL,
  toAbsoluteUrl,
} from "../src/seo/seoConfig.js";
import {
  PHONE_DISPLAY,
  PHONE_HREF,
  PUBLIC_DIR,
  ROOT_DIR,
  assertInside,
  breadcrumbSchema,
  escapeAttr,
  escapeHtml,
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

const CONTENT_DIR = path.join(ROOT_DIR, "content", "careers");
const CAREERS_OUTPUT_DIR = path.join(PUBLIC_DIR, "careers");
const INCLUDE_DRAFTS = process.env.CAREERS_INCLUDE_DRAFTS === "1";

const APPLY_EMAIL_DISPLAY = "office@burnsautorepair.com";
const APPLY_EMAIL_HREF = "mailto:office+careers@burnsautorepair.com";

const EMPLOYMENT_TYPES = {
  "full-time": "FULL_TIME",
  "part-time": "PART_TIME",
  contract: "CONTRACTOR",
  temporary: "TEMPORARY",
  internship: "INTERN",
};

export async function buildCareers() {
  await fs.mkdir(CONTENT_DIR, { recursive: true });
  assertInside(PUBLIC_DIR, CAREERS_OUTPUT_DIR);

  const jobs = await loadJobs();
  const visibleJobs = jobs.filter((job) => !job.draft || INCLUDE_DRAFTS);

  await fs.rm(CAREERS_OUTPUT_DIR, { recursive: true, force: true });
  await fs.mkdir(CAREERS_OUTPUT_DIR, { recursive: true });
  await fs.writeFile(
    path.join(CAREERS_OUTPUT_DIR, "index.html"),
    renderCareersIndex(visibleJobs),
  );

  await Promise.all(
    visibleJobs.map(async (job) => {
      const outputDir = path.join(CAREERS_OUTPUT_DIR, job.slug);
      assertInside(CAREERS_OUTPUT_DIR, outputDir);
      await fs.mkdir(outputDir, { recursive: true });
      await fs.writeFile(path.join(outputDir, "index.html"), renderJobPage(job));
    }),
  );

  const draftNote = INCLUDE_DRAFTS ? " including drafts" : "";
  console.log(`Built static careers page with ${visibleJobs.length} job posting(s)${draftNote}.`);
  return jobs;
}

export async function loadJobs() {
  await fs.mkdir(CONTENT_DIR, { recursive: true });
  const filenames = await fs.readdir(CONTENT_DIR);
  const markdownFiles = filenames
    .filter((filename) => filename.endsWith(".md"))
    .filter((filename) => !filename.startsWith("_"))
    .sort();

  const jobs = await Promise.all(
    markdownFiles.map(async (filename) => {
      const filePath = path.join(CONTENT_DIR, filename);
      const source = await fs.readFile(filePath, "utf8");
      return parseJob(source, filePath);
    }),
  );

  const slugs = new Set();
  for (const job of jobs) {
    if (slugs.has(job.slug)) {
      throw new Error(`Duplicate careers slug "${job.slug}".`);
    }
    slugs.add(job.slug);
  }

  return jobs.sort((a, b) => b.sortDate.localeCompare(a.sortDate));
}

function parseJob(source, filePath) {
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

  const type = data.type ? String(data.type).trim() : "Full-time";
  const employmentType = EMPLOYMENT_TYPES[type.toLowerCase()];
  if (!employmentType) {
    throw new Error(
      `${relativePath(filePath)} type must be one of: ${Object.keys(EMPLOYMENT_TYPES)
        .map((key) => `"${key}"`)
        .join(", ")}.`,
    );
  }

  const validThrough = data.validThrough
    ? requiredDate(data.validThrough, "validThrough", filePath)
    : null;
  const expired = validThrough
    ? new Date(`${validThrough}T23:59:59.999Z`) < new Date()
    : false;

  return {
    title,
    description,
    date,
    updated,
    sortDate: updated || date,
    displayDate: formatDisplayDate(date),
    slug,
    type,
    employmentType,
    location: data.location ? String(data.location) : "Newtown, PA",
    pay: data.pay ? String(data.pay) : "",
    validThrough,
    bodyHtml: renderMarkdown(markdown),
    // Expired postings behave like drafts so old openings drop off automatically.
    draft: data.draft === true || expired,
    canonicalPath: `/careers/${slug}`,
    url: toAbsoluteUrl(`/careers/${slug}`),
  };
}

function renderCareersIndex(jobs) {
  const jobCards = jobs.length
    ? jobs.map(renderJobCard).join("\n")
    : `<div class="empty-state">
        <h2>No open positions right now.</h2>
        <p>We are always glad to hear from experienced technicians and service advisors. Call the shop at <a href="${PHONE_HREF}">${PHONE_DISPLAY}</a> or email your resume to <a href="${APPLY_EMAIL_HREF}">${APPLY_EMAIL_DISPLAY}</a> and we will keep it on file.</p>
      </div>`;

  return renderPage({
    title: "Careers | Burns' Auto Repair in Newtown, PA",
    description:
      "Open positions at Burns' Auto Repair, a family-owned auto repair shop in Newtown, PA. Join a team that has served the community since 1957.",
    canonicalPath: "/careers",
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "@id": `${toAbsoluteUrl("/careers")}#careers`,
        url: toAbsoluteUrl("/careers"),
        name: "Careers at Burns' Auto Repair",
        description:
          "Open positions at Burns' Auto Repair, a family-owned auto repair shop in Newtown, PA.",
        publisher: schemaPublisher(),
      },
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Careers", path: "/careers" },
      ]),
    ],
    body: `
      <section class="blog-hero">
        <p class="eyebrow">Join the Team</p>
        <h1>Careers at Burns' Auto Repair</h1>
        <p>We are a family-owned shop that has served Newtown since 1957. Browse our open positions below.</p>
      </section>
      <section class="post-list" aria-label="Job openings">
        ${jobCards}
      </section>
    `,
  });
}

function renderJobCard(job) {
  const tags = [job.type, job.location, job.pay].filter(Boolean);
  const draftBadge = job.draft ? '<span class="draft-badge">Draft</span>' : "";

  return `
    <article class="post-card">
      <p class="post-meta">Posted ${escapeHtml(job.displayDate)} ${draftBadge}</p>
      <h2><a href="${escapeAttr(job.canonicalPath)}">${escapeHtml(job.title)}</a></h2>
      <p>${escapeHtml(job.description)}</p>
      <div class="tag-row">${tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</div>
    </article>
  `;
}

function renderJobPage(job) {
  const tags = [job.type, job.location, job.pay].filter(Boolean);
  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "@id": `${job.url}#job`,
    title: job.title,
    description: job.bodyHtml,
    datePosted: job.date,
    employmentType: job.employmentType,
    hiringOrganization: {
      "@type": "Organization",
      name: SITE_NAME,
      sameAs: SITE_URL,
      logo: DEFAULT_OG_IMAGE,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        streetAddress: "19 N Sycamore Street",
        addressLocality: "Newtown",
        addressRegion: "PA",
        postalCode: "18940",
        addressCountry: "US",
      },
    },
  };
  if (job.validThrough) {
    jobPostingSchema.validThrough = `${job.validThrough}T23:59:59-05:00`;
  }

  return renderPage({
    title: `${job.title} | Careers at Burns' Auto Repair`,
    description: job.description,
    canonicalPath: job.canonicalPath,
    noindex: job.draft,
    structuredData: [
      jobPostingSchema,
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Careers", path: "/careers" },
        { name: job.title, path: job.canonicalPath },
      ]),
    ],
    body: `
      <article class="article-shell">
        <a class="back-link" href="/careers">Back to careers</a>
        <header class="article-header">
          <p class="post-meta">Posted ${escapeHtml(job.displayDate)}</p>
          <h1>${escapeHtml(job.title)}</h1>
          <p>${escapeHtml(job.description)}</p>
          <div class="tag-row">${tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</div>
        </header>
        <div class="article-content">
          ${job.bodyHtml}
        </div>
        <aside class="service-cta" aria-label="How to apply">
          <h3>Ready to apply?</h3>
          <p>Email your resume to <a href="${APPLY_EMAIL_HREF}">${APPLY_EMAIL_DISPLAY}</a> with the position title in the subject line.</p>
          <div class="cta-row">
            <a class="button" href="${APPLY_EMAIL_HREF}">Email your resume</a>
          </div>
        </aside>
      </article>
    `,
  });
}

const isMain =
  process.argv[1] &&
  path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);

if (isMain) {
  buildCareers().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
}
