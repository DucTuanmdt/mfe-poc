import { createAsyncThunk } from "@reduxjs/toolkit";

import { IFLoginCredential } from "@/model/userModel";
import { authService } from "@/services";
import {
  authActionStart,
  loginFailed,
  loginSuccess,
} from "../reducers/authSlice";
import { setAuthenticationToStorage } from "@/utils/authUtils";

export const login = createAsyncThunk(
  "auth/login",
  async (credential: IFLoginCredential, { dispatch }) => {
    try {
      dispatch(authActionStart());

      const result = await authService.login(credential);
      if (result.success) {
        setAuthenticationToStorage(result.token, result.user);

        dispatch(loginSuccess(result));
      } else {
        throw new Error(result.message);
      }
    } catch (error: unknown) {
      let errorMessage = "Some errors occurred!!!";

      if (error instanceof Error) {
        errorMessage = error.message;
      }

      dispatch(loginFailed(errorMessage));
    }
  }
);
