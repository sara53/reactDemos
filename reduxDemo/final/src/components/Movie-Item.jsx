import React, { useState } from "react";
import "../css/movies.css";
import { moviesAcions } from "../store/slices/movies";

import { useDispatch } from "react-redux";
export default function MovieItem({ movie }) {
  const [isFav, setIsFav] = useState(false);
  const dispatch = useDispatch();
  let { increase, decrease } = moviesAcions;

  const addToFavHandler = () => {
    if (isFav) {
      dispatch(decrease());
    } else {
      dispatch(increase());
    }
    setIsFav(!isFav);
  };
  return (
    <div className="col-sm-6 col-md-4 col-lg-3">
      <div className="alert alert-light movieCard">
        <h4 className="text-center mb-3">{movie?.title}</h4>
        <img className="w-100 rounded" src={movie?.imgSrc} alt="" />
        <p className="lead mt-2 fw-bold">
          Director :<strong className="text-danger"> {movie?.director}</strong>
        </p>
        <p className="lead mt-2 fw-bold">
          Producser :<strong className="text-danger"> {movie?.producer}</strong>
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          inventore similique temporibus non et voluptatibus excepturi quis unde
          numquam quia, quisquam, exercitationem, quo eum tenetur alias minima
          facilis asperiores. Debitis!
        </p>
        <h2 className="text-center">
          <i
            className={`bi bi-suit-heart-fill ${isFav ? "heartIcon" : null}`}
            onClick={addToFavHandler}
          ></i>
        </h2>
      </div>
    </div>
  );
}
