import React, { Suspense, lazy } from "react";
import { Alert } from "@mui/material";
import ErrorBoundary from "../common/ErrorBoundary";
import Loader from "../common/Loader";
const ProductAppMF = lazy(() => import("mfProduct/ProductApp"));

const fallbackNavbar = (
  <Alert severity="warning">
    There was a problem, and the app may not function correctly. Please contact
    support for assistance.
  </Alert>
);

const ProductApp: React.FC = () => {
  return (
    <ErrorBoundary fallback={fallbackNavbar}>
      <Suspense fallback={<Loader type="linear" />}>
        <ProductAppMF />
      </Suspense>
    </ErrorBoundary>
  );
};

export default ProductApp;
