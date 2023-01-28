import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";

export default class ProductItem extends Component {
  cardTitle = "Coffe 1";

  clickHandler = () => {
    console.log("Btn Clicked");
    console.log(this.cardTitle);
  };
  render() {
    return (
      <Card className="col-sm-6 col-md-3">
        <Card.Img
          variant="top"
          src="https://images.pexels.com/photos/4109850/pexels-photo-4109850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <Card.Body>
          <Card.Title>{this.cardTitle}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="warning" onClick={this.clickHandler}>
            Buy Now !
          </Button>
        </Card.Body>
      </Card>
    );
  }
}
