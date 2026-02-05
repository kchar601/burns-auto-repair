import { Outlet } from "react-router-dom";
import AppNav from "../../components/AppNav/AppNav";
import AppFooter from "../../components/AppFooter/AppFooter";
import { useScrollManager } from "./../../hooks/useScrollManager";

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
