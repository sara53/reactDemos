import { createSlice } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";

const initialState = {
  isFav: false,
};
const movieItemSlice = createSlice({
  name: "movieItem",
  initialState,
  reducers: {
    addToFav: (state, action) => {
      state.isFav = !state.isFav;
    },
  },
});

export const movieItemReducer = movieItemSlice.reducer;
export const movieItemActions = movieItemSlice.actions;
