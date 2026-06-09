# Blog Authoring

Create one Markdown file per post in this folder. Files that start with `_` are ignored.

Blog styling lives in `content/blog/blog.css`. The build copies it into `public/blog/blog.css`, so edit this source file instead of the generated file.

Required front matter:

```md
---
title: "Post title"
description: "A one-sentence search result description."
date: "2026-06-09"
updated: "2026-06-09"
slug: "post-url-slug"
tags:
  - Maintenance
draft: false
---
```

Set `draft: true` while writing. Drafts are skipped by the normal build.

To preview drafts locally on PowerShell, run:

```powershell
$env:BLOG_INCLUDE_DRAFTS = "1"
npm.cmd run blog:build
Remove-Item Env:BLOG_INCLUDE_DRAFTS
```

On macOS or Linux, run:

```sh
BLOG_INCLUDE_DRAFTS=1 npm run blog:build
```

Supported Markdown:

- `##`, `###`, and `####` headings
- Paragraphs
- Bulleted and numbered lists
- Links
- Bold, italic, and inline code
- Blockquotes
- Fenced code blocks
- Standalone images
