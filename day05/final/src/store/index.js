import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./slices/counterSlice";
import { productReducer } from "./slices/productSlice";
import { moviesReducer } from "./slices/movieSlice";

export const myStore = configureStore({
  reducer: {
    counterSlice: counterReducer,
    productSlice: productReducer,
    moviesSlice: moviesReducer,
  },
});
