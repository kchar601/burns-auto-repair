import { Outlet } from "react-router-dom";
import AppNav from "./../components/AppNav";
import AppFooter from "./../components/AppFooter";

function AppLayout({ theme }) {
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
