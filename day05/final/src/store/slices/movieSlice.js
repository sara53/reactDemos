import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  movies: [],
  errors: null,
  isLoading: false,
};

const baseURL = "http://localhost:3005/movies";
// action --> dispatch --> useEffect []

/**
 * pending,
 * fullfiled,
 * rejected
 *
 */

export const getAllMovies = createAsyncThunk(
  "movies/getAllMovies",
  async (args, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get(baseURL);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addMovie = createAsyncThunk(
  "movies/addMovie",
  async (movie, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const resposne = await axios.post(baseURL, movie);
      return resposne.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

console.log("=============================================");
const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllMovies.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getAllMovies.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.movies = action.payload;
    },
    [getAllMovies.rejected]: (state, action) => {
      state.isLoading = false;
      state.errors = action.payload;
    },
    /**========================== */
    [addMovie.pending]: (state, action) => {},
    [addMovie.fulfilled]: (state, action) => {
      state.movies.push(action.payload);
    },
    [addMovie.rejected]: (state, action) => {
      state.errors = action.payload;
    },
  },
});

export const moviesReducer = movieSlice.reducer;
export const moviesActions = movieSlice.actions;
