import React from "react";

import { Routes, Route } from "react-router-dom";

import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

import theme from "./config/theme";
import PrimaryLayout from "./layout/PrimaryLayout";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import ProductManagement from "./pages/ProductManagement";
import UserManagement from "./pages/UserManagement";
import drawerMenuList from "./config/drawerMenuList";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Routes>
        <Route path="/" element={<PrimaryLayout menuList={drawerMenuList} />}>
          <Route index element={<Home />} />
          <Route path="/product" element={<ProductManagement />} />
          <Route path="/user" element={<UserManagement />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
