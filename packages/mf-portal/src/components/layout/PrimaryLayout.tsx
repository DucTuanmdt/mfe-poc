import { Outlet } from "react-router-dom";
import Navbar from "../common/Navbar";

const navItems = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Dashboard",
    path: "/dashboard",
  },
  {
    label: "Management",
    path: "/management",
  },
];

function PrimaryLayout() {
  return (
    <>
      <Navbar items={navItems} />
      <Outlet />
    </>
  );
}

export default PrimaryLayout;
