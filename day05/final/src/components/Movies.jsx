import React, { useEffect } from "react";
import "../css/movies.css";
import MovieItem from "./Movie-Item";
import { useDispatch, useSelector } from "react-redux";
import NoMovie from "./NoMovie";

import { getAllMovies } from "../store/slices/movieSlice";
import { useNavigate } from "react-router-dom";

export default function Movies() {
  const { movies, isLoading } = useSelector((store) => store.moviesSlice);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getAllMovies());
  }, []);

  const goToAddMovie = () => {
    navigate("/newMovie");
  };
  const moviesList =
    movies.length == 0 ? (
      <NoMovie />
    ) : (
      movies.map((movie) => {
        return <MovieItem movie={movie} key={movie.id} />;
      })
    );

  return (
    <div className="movies text-light p-5">
      <h1 className="text-center mb-5">
        <i className="bi bi-list-stars "></i>
        Movies List
        <i className="bi bi-list-stars"></i>
      </h1>
      <div className="container">
        <div className="d-flex justify-content-end">
          <i
            className="bi bi-plus-square-fill addIcon"
            onClick={goToAddMovie}
          ></i>
        </div>
        {!isLoading && <div className="row">{moviesList}</div>}
        {isLoading && (
          <div className="alert alert-success">
            <p className="text-center">Loading .....</p>
          </div>
        )}
      </div>
    </div>
  );
}
