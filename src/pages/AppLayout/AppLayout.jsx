import { Outlet } from "react-router-dom";
import AppNav from "../../components/AppNav/AppNav";
import AppFooter from "../../components/AppFooter/AppFooter";
import { useScrollManager } from "./../../hooks/useScrollManager";
import { usePageTitle } from "./../../hooks/usePageTitle";

const SERVICE_TITLES = {
  "brakes-tires": "Brakes & Tires",
  "steering-suspension": "Steering & Suspension",
  "ac-heating": "AC & Heating",
  "check-engine-diagnostics": "Check Engine & Diagnostics",
  "electrical-systems": "Electrical Systems",
  "scheduled-maintenance": "Scheduled Maintenance",
  "state-inspections-emissions": "State Inspections & Emissions",
};

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
      const raw = (hash || "").replace("#", "").trim();
      const label = SERVICE_TITLES[raw];
      return `${label ? `${label} | ` : "Services | "}${base}`;
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
