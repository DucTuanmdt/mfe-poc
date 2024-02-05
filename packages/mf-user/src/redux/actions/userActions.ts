import { createAsyncThunk } from "@reduxjs/toolkit";

import { RootState } from "../store";
import {
  userActionFailed,
  userActionStart,
  searchUsersSuccess,
} from "../reducers/userSlice";
import { userService } from "@/services";

export const searchPayShapTransactions = createAsyncThunk(
  "payshap/searchPayShapTransactions",
  async (_: void, { dispatch, getState }) => {
    try {
      dispatch(userActionStart());

      const { user: state } = getState() as RootState;
      const searchRequestCriteria = state.request;

      const result = await userService.searchUsers({
        ...searchRequestCriteria,
      });

      dispatch(searchUsersSuccess(result));
    } catch (error: unknown) {
      let errorMessage = "Some errors occurred!!!";

      if (error instanceof Error) {
        errorMessage = error.message;
      }

      dispatch(userActionFailed(errorMessage));
    }
  }
);
