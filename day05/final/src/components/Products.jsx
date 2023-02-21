import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../store/slices/productSlice";

export default function Products() {
  const { products } = useSelector((store) => store.productSlice);

  const dispatch = useDispatch();
  const { deleteItem } = productActions;
  const deleteHandler = () => {
    dispatch(deleteItem(2));
  };
  return (
    <div className="bg-light p-5">
      <div className="container">
        <button className="btn btn-danger mb-4" onClick={deleteHandler}>
          Delete Product
        </button>
        {products.map((product) => {
          return (
            <div key={product.id} className="alert alert-success">
              <h1>{product.title}</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
                illum suscipit placeat deleniti praesentium, reiciendis culpa
                aspernatur voluptatum error animi numquam deserunt dolor quam
                repellat, maiores hic, quisquam optio est.
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
