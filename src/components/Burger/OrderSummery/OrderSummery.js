import React, { Component } from "react";

import Aux from "../../../hoc/Aux";
import Button from "../../UI/Button/Button";

class OrderSummery extends Component {
  render() {
    const ingredientSumery = Object.keys(this.props.ingredients).map(igKey => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: "uppercase" }}>{igKey}</span> :
          {this.props.ingredients[igKey]}
        </li>
      );
    });

    return (
      <Aux>
        <h3>Order Summery</h3>
        <p>The burger ingredients are: </p>
        <ul>{ingredientSumery}</ul>
        <p>
          <strong>Total Price: {this.props.price.toFixed(2)}</strong>
        </p>
        <p>Checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>
          CONTINUE
        </Button>
      </Aux>
    );
  }
}

export default OrderSummery;
