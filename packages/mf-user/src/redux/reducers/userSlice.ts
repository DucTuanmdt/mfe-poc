import { IFUser, IFUserSearchCriteria } from "@/model/userModel";
import { DEFAULT_VALUES } from "@/utils/constants";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  request: IFUserSearchCriteria;
  userList: IFUser[];
  total: number;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  request: {
    page: 1,
    pageSize: DEFAULT_VALUES.PAGE_SIZE,
  },
  userList: [],
  // Temporarily hard-coded because the json-server library does not yet support this information
  total: 500,
  loading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },

    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },

    setUserList: (state, action: PayloadAction<IFUser[]>) => {
      // Reset loading and error states
      state.loading = false;
      state.error = null;
      state.userList = action.payload;
    },

    setRequest: (state, action: PayloadAction<IFUserSearchCriteria>) => {
      state.request = action.payload;
    },

    setRequestPage: (state, action: PayloadAction<number>) => {
      state.request.page = action.payload;
    },

    setRequestPageSize: (state, action: PayloadAction<number>) => {
      state.request.pageSize = action.payload;
      // reset page index
      state.request.page = 1;
    },

    userActionStart: (state) => {
      state.loading = true;
      state.error = null;
    },

    userActionSuccess: (state) => {
      state.loading = false;
      state.error = null;
    },

    userActionFailed: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },

    searchUsersSuccess: (state, action: PayloadAction<IFUser[]>) => {
      state.loading = false;
      state.error = null;
      state.userList = action.payload;
    },

    resetUserState: () => {
      return { ...initialState };
    },
  },
});

export const {
  setLoading,
  setError,
  setUserList,
  userActionStart,
  userActionSuccess,
  userActionFailed,
  searchUsersSuccess,
  setRequest,
  setRequestPage,
  setRequestPageSize,
  resetUserState,
} = userSlice.actions;

const userReducer = userSlice.reducer;
export default userReducer;
