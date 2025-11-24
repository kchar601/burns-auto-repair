import AppNav from "./../components/AppNav";

function AppLayout({ theme }) {
  return (
    <div>
      <AppNav theme={theme} />
      <p>App</p>
    </div>
  );
}

export default AppLayout;
