# Careers Authoring

Create one Markdown file per job posting in this folder. Files that start with `_` are ignored, so `_template.md` is safe to copy from.

Pages are generated at `/careers` (index) and `/careers/<slug>` by `scripts/build-careers.mjs`. They reuse the blog styling from `content/blog/blog.css`.

Required front matter:

```md
---
title: "Automotive Technician"
description: "A one-sentence summary shown on the careers page and in search results."
date: "2026-07-13"
slug: "automotive-technician"
type: "Full-time"
draft: false
---
```

Optional front matter:

- `updated: "2026-07-20"` — bumps the sitemap date when you edit a posting.
- `location: "Newtown, PA"` — this is the default; override if needed.
- `pay: "$25-$35/hr"` — shown as a tag on the card and posting.
- `validThrough: "2026-09-30"` — the posting is hidden automatically after this date.

`type` must be one of: `Full-time`, `Part-time`, `Contract`, `Temporary`, `Internship`.

Set `draft: true` while writing. Drafts are skipped by the normal build.

To preview drafts locally on PowerShell, run:

```powershell
$env:CAREERS_INCLUDE_DRAFTS = "1"
npm.cmd run careers:build
Remove-Item Env:CAREERS_INCLUDE_DRAFTS
```

On macOS or Linux, run:

```sh
CAREERS_INCLUDE_DRAFTS=1 npm run careers:build
```

The Markdown body supports the same syntax as the blog: `##`–`####` headings, paragraphs, lists, links, bold/italic/inline code, blockquotes, code fences, and standalone images.
