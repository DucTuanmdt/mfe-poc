import React from "react";
import { Outlet } from "react-router-dom";
import DrawerPortal from "@/components/remotes/DrawerPortal";

type Props = {
  menuList?: any[];
};

const PrimaryLayout: React.FC<Props> = ({ menuList }) => {
  return (
    <DrawerPortal menuList={menuList} defaultOpen>
      <Outlet />
    </DrawerPortal>
  );
};

export default PrimaryLayout;
