import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  name: string;
  email: string;
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
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

    login: (state, action: PayloadAction<User>) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      // Reset loading and error states
      state.loading = false;
      state.error = null;
    },

    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      // Reset loading and error states
      state.loading = false;
      state.error = null;
    },
  },
});

export const { login, logout, setLoading, setError } = authSlice.actions;

const authReducer = authSlice.reducer;
export default authReducer;
