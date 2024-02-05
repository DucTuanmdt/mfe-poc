import React, { useEffect } from "react";
import { Container } from "@mui/material";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { userActions } from "@/redux";
import UserTable from "@/components/user/UserTable";
import { useAppSelector } from "@/hooks/useAppSelector";

const Home: React.FC = () => {
  const { request } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userActions.searchPayShapTransactions());
  }, [dispatch, request]);
  return (
    <Container>
      <h1>User Management</h1>
      <UserTable />
    </Container>
  );
};

export default Home;
