import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Alert } from "@mui/material";

import { store } from "@/redux/store";

import App from "./App";
import ErrorBoundary from "./components/common/ErrorBoundary";

const rootElement = document.getElementById("__portal-root") as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

const fallbackUI = (
  <Alert severity="error">
    There was a problem, and the app may not function correctly. Please contact
    support for assistance.
  </Alert>
);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <ErrorBoundary fallback={fallbackUI}>
        <App />
      </ErrorBoundary>
    </Provider>
  </BrowserRouter>
);
