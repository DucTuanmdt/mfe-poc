import React from "react";
import { Routes, Route } from "react-router-dom";

import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

import theme from "./config/theme";
import PrimaryLayout from "./layout/PrimaryLayout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Pricing from "./pages/Pricing";
import drawerMenuList from "./config/drawerMenuList";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Routes>
        <Route path="/" element={<PrimaryLayout menuList={drawerMenuList} />}>
          <Route index element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
