import React, { useEffect } from "react";

import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";

import drawerMenuList from "./config/drawerMenuList";
import theme from "./config/theme";
import { useAppDispatch } from "./hooks/useAppDispatch";
import PrimaryLayout from "./layout/PrimaryLayout";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ProductManagement from "./pages/ProductManagement";
import SignIn from "./pages/SignIn";
import UserManagement from "./pages/UserManagement";
import { setAuthenticationInfo } from "./redux/reducers/authSlice";
import { getAuthenticationInfo } from "./utils/authUtils";

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    if (currentPath.includes("sign-in")) {
      return;
    }

    const { isAuthenticated, token, user } = getAuthenticationInfo();
    if (isAuthenticated && user) {
      dispatch(
        setAuthenticationInfo({
          token,
          user,
        })
      );
    } else {
      navigate("/sign-in");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
