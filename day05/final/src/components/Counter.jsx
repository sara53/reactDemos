import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store/slices/counterSlice";
export default function Counter() {
  console.log("==========================================");
  const { count } = useSelector((store) => store.counterSlice);
  let dispatch = useDispatch();
  console.log("==========================================");
  const { increase, decrease, rest } = counterActions;
  const increaseHandler = () => {
    dispatch(increase(1));
  };
  const decreaseHandler = () => {
    dispatch(decrease());
  };
  const restHandler = () => {
    dispatch(rest());
  };
  console.log("==========================================");

  return (
    <div className="alert alert-info p-5">
      <h2 className="text-center">Counter Component</h2>
      <div className="container">
        <p>Count : {count}</p>

        <button className="btn btn-success mx-3" onClick={increaseHandler}>
          +
        </button>
        <button className="btn btn-danger mx-3" onClick={decreaseHandler}>
          -
        </button>
        <button className="btn btn-dark mx-3" onClick={restHandler}>
          reset
        </button>
      </div>
    </div>
  );
}
