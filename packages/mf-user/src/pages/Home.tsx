import React, { useEffect } from "react";
import { Container } from "@mui/material";

import { userActions } from "@/redux";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import UserTable from "@/components/user/UserTable";

const Home: React.FC = () => {
  const { request } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userActions.searchUsers());
  }, [dispatch, request]);

  return (
    <Container>
      <h1>User Management</h1>
      <UserTable />
    </Container>
  );
};

export default Home;
