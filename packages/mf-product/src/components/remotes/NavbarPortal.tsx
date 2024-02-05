import React, { Suspense, lazy } from "react";
import Loader from "../common/Loader";
import ErrorBoundary from "../common/ErrorBoundary";
import { Alert } from "@mui/material";

const Navbar = lazy(() => import("mfPortal/Navbar"));

type NavbarPortalProps = {
  items?: any[];
};

const fallbackNavbar = (
  <Alert severity="warning">
    There was a problem, and the app may not function correctly. Please contact
    support for assistance.
  </Alert>
);

const NavbarPortal: React.FC<NavbarPortalProps> = ({ items = [] }) => {
  return (
    <ErrorBoundary fallback={fallbackNavbar}>
      <Suspense fallback={<Loader type="linear" />}>
        <Navbar items={items} />
      </Suspense>
    </ErrorBoundary>
  );
};

export default NavbarPortal;
