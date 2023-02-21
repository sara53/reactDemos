import { configureStore } from "@reduxjs/toolkit";
import { moviesReducer } from "./slices/movies";
import { movieItemReducer } from "./slices/moviesItem";

export const store = configureStore({
  reducer: {
    moviesSlice: moviesReducer,
    movieItemSlice: movieItemReducer,
  },
});
