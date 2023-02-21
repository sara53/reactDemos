import React, { useState } from "react";
import "../css/movies.css";
import { useNavigate } from "react-router-dom";
import { addMovie } from "../store/slices/movieSlice";
import { useDispatch } from "react-redux";

export default function MovieForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formValues, setFormValue] = useState({
    title: "",
    director: "",
    producer: "",
    imgSrc:
      "https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/06/Hunter-x-Hunter-1.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5",
  });
  const addNewMovie = (e) => {
    e.preventDefault();
    dispatch(addMovie(formValues))
      .then(() => {
        navigate("/movies");
      })
      .catch((error) => {});
  };

  const operationHandler = (e) => {
    setFormValue({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="formAdd p-4">
      <div className="container">
        <h2 className="text-center my-3 text-light">New Movie</h2>
        <div className="row ">
          <form onChange={operationHandler}>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Movie Title"
              name="title"
            />
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter Dirctor Name"
              name="director"
            />
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter Producer Name"
              name="producer"
            />
            <button
              onClick={addNewMovie}
              className="mt-4 btn btn-outline-light"
            >
              Add New Movie
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
