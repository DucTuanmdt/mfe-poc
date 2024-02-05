import React, { Suspense, lazy } from "react";
import Loader from "../common/Loader";
import ErrorBoundary from "../common/ErrorBoundary";
import { Alert } from "@mui/material";

const AppDrawer = lazy(() => import("mfPortal/AppDrawer"));

type DrawerPortalProps = {
  menuList?: any[];
  children?: React.ReactNode;
  [key: string]: any
};

const FallbackAppDrawer = ({ children }: { children: React.ReactNode }) => (
  <>
    <Alert severity="warning">
      There was a problem, and the app may not function correctly. Please
      contact support for assistance.
    </Alert>
    {children}
  </>
);

const DrawerPortal: React.FC<DrawerPortalProps> = ({
  menuList = [],
  children,
  ...rest
}) => {
  return (
    <ErrorBoundary fallback={<FallbackAppDrawer>{children}</FallbackAppDrawer>}>
      <Suspense fallback={<Loader type="linear" />}>
        <AppDrawer menuList={menuList} {...rest}>{children}</AppDrawer>
      </Suspense>
    </ErrorBoundary>
  );
};

export default DrawerPortal;
