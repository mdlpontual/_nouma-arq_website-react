import ScrollToTop from "./ScrollToTop";
import { Outlet, useLocation } from "react-router-dom";

function Layout() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <Outlet key={location.pathname} />
    </>
  );
};

export default Layout;
