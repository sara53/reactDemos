import React, { Component } from "react";
import ProductItem from "./productItem";

import { productList } from "../models/productList";
export default class Products extends Component {
  pClassName = "text-danger";
  render() {
    return (
      <div className="bg-light p-5">
        <div className="container">
          <h2 className={`text-center mb-4 ${this.pClassName}`}>
            Our Products
          </h2>
          <div className="row g-3">
            {productList.map((product, index) => {
              return <ProductItem product={product} key={product.id} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}
