import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/navbar";

const RootLayout = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const noNavbarPaths = ["/", "/signup"];
  const shouldShowNavbar = !noNavbarPaths.includes(currentPath);

  return (
    <div className="layoutContainer">
      {shouldShowNavbar && <Navbar />}
      <main className="mainContent">
        <div className="content">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default RootLayout;
