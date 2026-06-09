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

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), staticBlogRoutes()],
  server: {
    port: 80,
  },
});
