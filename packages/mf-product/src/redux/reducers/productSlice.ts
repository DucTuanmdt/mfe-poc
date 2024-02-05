import { IFProduct, IFProductSearchCriteria } from "@/model/productModel";
import { DEFAULT_VALUES } from "@/utils/constants";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductState {
  request: IFProductSearchCriteria;
  productList: IFProduct[];
  totalProducts: number;
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  request: {
    page: 1,
    pageSize: DEFAULT_VALUES.PAGE_SIZE,
  },
  productList: [],
  // Temporarily hard-coded because the json-server library does not yet support this information
  totalProducts: 500,
  loading: false,
  error: null,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },

    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },

    setProductList: (state, action: PayloadAction<IFProduct[]>) => {
      // Reset loading and error states
      state.loading = false;
      state.error = null;
      state.productList = action.payload;
    },

    setRequest: (state, action: PayloadAction<IFProductSearchCriteria>) => {
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

    productActionStart: (state) => {
      state.loading = true;
      state.error = null;
    },

    productActionSuccess: (state) => {
      state.loading = false;
      state.error = null;
    },

    productActionFailed: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },

    searchProductsSuccess: (state, action: PayloadAction<IFProduct[]>) => {
      state.loading = false;
      state.error = null;
      state.productList = action.payload;
    },

    resetProductState: () => {
      return { ...initialState };
    },
  },
});

export const {
  setLoading,
  setError,
  setProductList,
  productActionStart,
  productActionSuccess,
  productActionFailed,
  searchProductsSuccess,
  setRequest,
  setRequestPage,
  setRequestPageSize,
} = productSlice.actions;

const productReducer = productSlice.reducer;
export default productReducer;
