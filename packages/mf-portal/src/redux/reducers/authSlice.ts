import { AuthenticationInfo, IFLoginResponse, IFUser } from "@/model/userModel";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface AuthState {
  token: string;
  user: IFUser | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  token: "",
  user: null,
  loading: false,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },

    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },

    setAuthenticationInfo: (state, action: PayloadAction<AuthenticationInfo>) => {
      state.token = action.payload.token
      state.user = action.payload.user
    },

    authActionStart: (state) => {
      state.loading = true;
      state.error = null;
    },

    loginFailed: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;

      state.token = "";
      state.user = null;
    },

    loginSuccess: (state, action: PayloadAction<IFLoginResponse>) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      // Reset loading and error states
      state.loading = false;
      state.error = null;
    },

    logout: (state) => {
      state.token = "";
      state.user = null;
      // Reset loading and error states
      state.loading = false;
      state.error = null;
    },
  },
});

export const selectIsAuthenticated = (state: RootState) => state.auth.token && state.auth.user?.id;

export const {
  setAuthenticationInfo,
  setLoading,
  setError,
  authActionStart,
  loginFailed,
  loginSuccess,
  logout,
} = authSlice.actions;

const authReducer = authSlice.reducer;
export default authReducer;
