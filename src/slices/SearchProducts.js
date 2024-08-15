import { createSlice } from "@reduxjs/toolkit";
import axios from "../utils/axios";

const initialState = {
  product: {},
  products: {},
  loading: false,
  searchError: {},
};

const slice = createSlice({
  name: "search",
  initialState,
  reducers: {
    getProducts(state, action) {
      const products = action.payload;
      state.products = products;
      state.searchError = {};
    },
    getProduct(state, action) {
      const product = action.payload;
      state.product = product;
      state.searchError = {};
    },

    changeLoading(state, action) {
      const loading = action.payload;
      state.loading = loading;
    },
    handleErrors(state, action) {
      const searchError = action.payload;
      state.searchError = searchError;
    },
  },
});

export const reducer = slice.reducer;

export const getProducts = (value) => async (dispatch) => {
  dispatch(slice.actions.changeLoading(true));
  try {
    const response = await axios.post("/api/products/find/filter", value);

    console.log("products slice ", response.data);
    dispatch(slice.actions.getProducts(response.data));
    dispatch(slice.actions.changeLoading(false));
  } catch (err) {
    console.log("error slice ", err);
    const response = {
      message: "get products error ",
    };

    dispatch(slice.actions.handleErrors(response));
    dispatch(slice.actions.changeLoading(false));
  }
};

export const getUser = (user) => async (dispatch) => {
  dispatch(slice.actions.changeLoading(true));
  try {
    const response = await axios.get(`/api/user/${user}`);
    dispatch(slice.actions.getUser(response.data));
    dispatch(slice.actions.changeLoading(false));
  } catch (err) {
    const response = {
      message: "No fue posible encontrar el usuario, refresca la página",
    };

    dispatch(slice.actions.handleErrors(response));
    dispatch(slice.actions.changeLoading(false));
  }
};

export default slice;
