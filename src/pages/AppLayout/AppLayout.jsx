import { Outlet } from "react-router-dom";
import AppNav from "../../components/AppNav/AppNav";
import AppFooter from "../../components/AppFooter/AppFooter";
import { useScrollManager } from "./../../hooks/useScrollManager";

const SERVICE_TAB_SLUGS = [
  "brakes-tires",
  "steering-suspension",
  "ac-heating",
  "check-engine-diagnostics",
  "electrical-systems",
];

function AppLayout({ theme }) {
  useScrollManager({
    offset: 96,
    tabsAnchorId: "services-tabs",
    tabSlugs: SERVICE_TAB_SLUGS,
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
