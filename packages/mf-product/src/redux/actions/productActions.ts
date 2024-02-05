import { createAsyncThunk } from "@reduxjs/toolkit";

import { RootState } from "../store";
import {
  productActionFailed,
  productActionStart,
  searchProductsSuccess,
} from "../reducers/productSlice";
import { productService } from "@/services";

export const searchPayShapTransactions = createAsyncThunk(
  "payshap/searchPayShapTransactions",
  async (_: void, { dispatch, getState }) => {
    try {
      dispatch(productActionStart());

      const { product: state } = getState() as RootState;
      const searchRequestCriteria = state.request;

      const result = await productService.searchProducts({
        ...searchRequestCriteria,
      });

      dispatch(searchProductsSuccess(result));
    } catch (error: unknown) {
      let errorMessage = "Some errors occurred!!!";

      if (error instanceof Error) {
        errorMessage = error.message;
      }

      dispatch(productActionFailed(errorMessage));
    }
  }
);
