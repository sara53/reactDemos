import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";

export default class ProductItem extends Component {
  constructor(props) {
    super();
  }
  state = {
    count: 0,
  };
  cardTitle = "Coffe 1";

  clickHandler = () => {
    console.log("Cicked");
    this.setState({
      count: (this.state.count += 1),
    });
  };
  componentDidMount() {}
  componentDidUpdate() {}
  componentWillUnmount() {}
  render() {
    let { product } = this.props;
    return (
      <Card className="col-sm-6 col-md-3">
        <Card.Img variant="top" src={product.imgSrc} />
        <h2>count is :{this.state.count}</h2>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
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
