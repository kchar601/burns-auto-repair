import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

function staticBlogRoutes() {
  return {
    name: "static-blog-routes",
    configureServer(server) {
      server.middlewares.use(rewriteBlogRequest);
    },
    configurePreviewServer(server) {
      server.middlewares.use(rewriteBlogRequest);
    },
  };
}

function rewriteBlogRequest(request, _response, next) {
  const [pathname, query = ""] = request.url.split("?");

  if (pathname === "/blog" || pathname === "/blog/") {
    request.url = withQuery("/blog/index.html", query);
  } else {
    const postMatch = pathname.match(/^\/blog\/([^/.]+)\/?$/);
    if (postMatch) {
      request.url = withQuery(`/blog/${postMatch[1]}/index.html`, query);
    }
  }

  next();
}

function withQuery(pathname, query) {
  return query ? `${pathname}?${query}` : pathname;
}

// Injects a <link rel="preload"> for the hero image using the Vite-hashed URLs.
// This allows the browser to start fetching the LCP image before JS executes.
function heroImagePreloadPlugin() {
  return {
    name: "hero-image-preload",
    transformIndexHtml: {
      order: "post",
      handler(html, ctx) {
        if (!ctx.bundle) return html;

        const keys = Object.keys(ctx.bundle);
        const find = (substr) =>
          keys.find((k) => k.includes(substr) && k.endsWith(".webp"));

        const w640 = find("shopzoomed-640-");
        const w800 = find("shopzoomed-800-");
        const w1000 = find("shopzoomed-1000-");
        // Original: shopzoomed-{hash}.webp — no width number in the name
        const full = keys.find(
          (k) =>
            /assets\/shopzoomed-[A-Za-z]/.test(k) && k.endsWith(".webp")
        );

        if (!w640) return html;

        const parts = [
          w640 && `/${w640} 640w`,
          w800 && `/${w800} 800w`,
          w1000 && `/${w1000} 1000w`,
          full && `/${full} 1582w`,
        ].filter(Boolean);

        const tag = `<link rel="preload" as="image" type="image/webp" imagesrcset="${parts.join(", ")}" imagesizes="100vw" fetchpriority="high">`;
        // Insert before the render-blocking CSS so the image fetches in parallel
        const cssMarker = '<link rel="stylesheet"';
        if (html.includes(cssMarker)) {
          return html.replace(cssMarker, `${tag}\n    ${cssMarker}`);
        }
        return html.replace("</head>", `  ${tag}\n  </head>`);
      },
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), heroImagePreloadPlugin(), staticBlogRoutes()],
  server: {
    port: 80,
  },
});
