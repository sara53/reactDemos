import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: 1,
      title: "Product 1",
    },
    {
      id: 2,
      title: "Product 2",
    },
    {
      id: 3,
      title: "Product 3",
    },
    {
      id: 4,
      title: "Product 4",
    },
  ],
};
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    deleteItem: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id != action.payload
      );
    },
  },
});

export const productReducer = productSlice.reducer;
export const productActions = productSlice.actions;
