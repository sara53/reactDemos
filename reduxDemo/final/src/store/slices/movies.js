import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let initialState = {
  isLoading: false,
  movies: [],
  movieCount: 0,
};

let baseURL = "http://localhost:3005/movies";

export const getAllMovies = createAsyncThunk(
  "movies/getAllMovies",
  async (args, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get(baseURL);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addMovie = createAsyncThunk(
  "movies/addMovie",
  async (movie, thunkAPI) => {
    let { rejectWithValue } = thunkAPI;
    try {
      let response = await axios.post(baseURL, movie);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    increase: (state, action) => {
      state.movieCount += 1;
    },
    decrease: (state, action) => {
      state.movieCount -= 1;
    },
  },
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
    },
    /**=============================================== */
    [addMovie.pending]: (state, action) => {},
    [addMovie.fulfilled]: (state, action) => {
      state.movies.push(action.payload);
    },
    [addMovie.rejected]: (state, action) => {},
  },
});

export const moviesReducer = moviesSlice.reducer;
export const moviesAcions = moviesSlice.actions;
