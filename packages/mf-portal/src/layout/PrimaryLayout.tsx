import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";

const navItems = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Product",
    path: "/product",
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
