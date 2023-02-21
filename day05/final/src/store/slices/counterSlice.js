import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

let initialState = {
  count: 0,
};
const counterSlice = createSlice({
  name: "myCounter",
  initialState,
  reducers: {
    increase: (state, action) => {
      console.log(action);
      state.count = state.count + action.payload;
    },
    decrease: (state, action) => {
      state.count = state.count - 1;
    },
    rest: (state, action) => {
      state.count = 0;
    },
  },
});

export const counterReducer = counterSlice.reducer;
export const counterActions = counterSlice.actions;
