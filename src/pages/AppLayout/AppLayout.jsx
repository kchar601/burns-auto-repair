import { Outlet } from "react-router-dom";
import AppNav from "../../components/AppNav/AppNav";
import AppFooter from "../../components/AppFooter/AppFooter";
import { useScrollManager } from "./../../hooks/useScrollManager";
import { usePageTitle } from "./hooks/usePageTitle";

function AppLayout({ theme }) {
  useScrollManager({
    offset: 96, // your sticky header height
    tabsAnchorId: "services-tabs",
    tabSlugs: [
      "brakes-tires",
      "steering-suspension",
      "ac-heating",
      "check-engine-diagnostics",
      "electrical-systems",
    ],
  });
  usePageTitle(({ pathname, hash }) => {
    const base = "Burns Auto Repair";

    if (pathname.startsWith("/services")) {
      const slug = hash?.replace("#", "");
      const nice =
        slug
          ?.split("-")
          .map((w) => w[0]?.toUpperCase() + w.slice(1))
          .join(" ") || "Services";
      return `${nice} | ${base}`;
    }
    if (pathname === "/") return base;
    if (pathname.startsWith("/services")) return `Services | ${base}`;
    if (pathname.startsWith("/about")) return `About | ${base}`;
    if (pathname.startsWith("/testimonials")) return `Reviews | ${base}`;
    if (pathname.startsWith("/contact")) return `Contact | ${base}`;
    return base;
  });

  return (
    <div>
      <AppNav theme={theme} />
      <main>
        <Outlet />
      </main>
      <AppFooter theme={theme} />
    </div>
  );
}

export default AppLayout;
