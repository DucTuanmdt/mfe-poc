import { Outlet } from "react-router-dom";
import NavbarPortal from "../components/remotes/NavbarPortal";

const navItems = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "User",
    path: "/user",
  },
  {
    label: "Management",
    path: "/management",
  },
];

function PrimaryLayout() {
  return (
    <>
      <NavbarPortal items={navItems} />
      <Outlet />
    </>
  );
}

export default PrimaryLayout;
