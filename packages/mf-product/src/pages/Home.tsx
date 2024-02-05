import React, { useEffect } from "react";
import { Container } from "@mui/material";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { productActions } from "@/redux";
import ProductTable from "@/components/product/ProductTable";
import { useAppSelector } from "@/hooks/useAppSelector";

const Home: React.FC = () => {
  const { request } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(productActions.searchProducts());
  }, [dispatch, request]);
  return (
    <Container>
      <h1>Product Management</h1>
      <ProductTable />
    </Container>
  );
};

export default Home;
