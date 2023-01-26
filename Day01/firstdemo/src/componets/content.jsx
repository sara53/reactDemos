import React, { Component } from "react";
import "../css/content.css";
import coffeImage from "../assets/images/1.jpg";
export class Content extends Component {
  render() {
    return (
      <div className="content">
        <h2>Welcome From ITI</h2>
        <p className="header">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          deserunt officiis iure accusantium, nostrum possimus labore quod modi
          ducimus, neque eveniet magnam! Cumque fugit natus reprehenderit
          repudiandae, temporibus quidem vero?
        </p>

        <img src={coffeImage} alt="coffeImage" />
        <img src="2.jpg" alt="coffeImage" />
        <img
          src="https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Flower.jpg"
        />
        <button>Show more</button>
      </div>
    );
  }
}
