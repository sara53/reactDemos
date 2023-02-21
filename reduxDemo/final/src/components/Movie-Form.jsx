import React, { useState } from "react";
import "../css/movies.css";
import { useNavigate } from "react-router-dom";
import { addMovie } from "../store/slices/movies";
import { useDispatch } from "react-redux";
export default function MovieForm() {
  let [formValues, setFormValues] = useState({
    imgSrc:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/2e54344c7cc1675af721b4021222230f.jpe",
  });
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const addNewMovie = (e) => {
    e.preventDefault();

    dispatch(addMovie(formValues))
      .then((response) => {
        console.log("Response");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const operationHandler = (e) => {
    setFormValues({
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
