import React from "react";
import { Container } from "@mui/material";
import ProductManagement from "./ProductManagement";
import UserManagement from "./UserManagement";

const Home: React.FC = () => {
  return (
    <Container >
      <ProductManagement />
      <UserManagement />
    </Container>
  );
};

export default Home;
