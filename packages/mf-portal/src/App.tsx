import React from "react";

import { Routes, Route } from "react-router-dom";

import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

import theme from "./config/theme";
import PrimaryLayout from "./components/layout/PrimaryLayout";
import Home from "./components/page/Home";
import Dashboard from "./components/page/Dashboard";
import NotFound from "./components/page/NotFound";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Routes>
        <Route path="/" element={<PrimaryLayout />}>
          <Route index element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
