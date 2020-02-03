import React from "react";

import Aux from "../../../hoc/Aux";

const OrderSummery = props => {
  const ingredientSumery = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "uppercase" }}>{igKey}</span> :
        {props.ingredients[igKey]}
      </li>
    );
  });

  return (
    <Aux>
      <h3>Order Summery</h3>
      <p>The burger ingredients are: </p>
      <ul>{ingredientSumery}</ul>
      <p>Checkout?</p>
    </Aux>
  );
};
export default OrderSummery;
