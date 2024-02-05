import React, { Suspense, lazy } from "react";
import { Alert } from "@mui/material";

import ErrorBoundary from "../common/ErrorBoundary";
import Loader from "../common/Loader";

const UserAppMF = lazy(() => import("mfUser/UserApp"));

const fallbackMessage = (
  <Alert severity="warning">
    There was a problem, and the app may not function correctly. Please contact
    support for assistance.
  </Alert>
);

const UserApp: React.FC = () => {
  return (
    <ErrorBoundary fallback={fallbackMessage}>
      <Suspense fallback={<Loader type="linear" />}>
        <UserAppMF />
      </Suspense>
    </ErrorBoundary>
  );
};

export default UserApp;
