import React from "react";
import { Outlet } from "react-router-dom";

import AppDrawer from "@/components/common/AppDrawer";
import { IFDrawerMenuItem } from "@/model/commonModel";

type Props = {
  menuList: IFDrawerMenuItem[];
};

const PrimaryLayout: React.FC<Props> = ({ menuList }) => {
  return (
    <AppDrawer menuList={menuList}>
      <Outlet />
    </AppDrawer>
  );
};

export default PrimaryLayout;
