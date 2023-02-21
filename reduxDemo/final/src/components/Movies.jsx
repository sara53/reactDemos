import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../css/movies.css";
import MovieItem from "./Movie-Item";
import { getAllMovies } from "../store/slices/movies";
import { useNavigate } from "react-router-dom";
import NoMovies from "./NoMovies";
import { Spinner } from "react-bootstrap";

export default function Movies() {
  const { movies, isLoading } = useSelector((state) => state.moviesSlice);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getAllMovies());
  }, []);

  const addNewForm = () => {
    navigate("/newMovie");
  };
  const moviesList =
    movies.length == 0 ? (
      <NoMovies />
    ) : (
      movies.map((movie) => <MovieItem key={movie.id} movie={movie} />)
    );
  return (
    <div className="movies p-5 text-light">
      <div className="container">
        <div className="d-flex justify-content-end">
          <i
            className="bi bi-plus-square-fill addIcon"
            onClick={addNewForm}
          ></i>
        </div>
        <h1 className="text-center mb-5">
          <i className="bi bi-list-stars mx-2"></i>
          Movies List
          <i className="bi bi-list-stars mx-2"></i>
        </h1>
        {isLoading && (
          <Spinner animation="border" role="status">
            <span className="visually-hidden text-center">Loading...</span>
          </Spinner>
        )}
        {!isLoading && <div className="row">{moviesList}</div>}
      </div>
    </div>
  );
}
