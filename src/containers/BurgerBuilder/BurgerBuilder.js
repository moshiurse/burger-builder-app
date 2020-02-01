import React, { Component } from "react";

import Burger from "../../components/Burger/Burger";

import Aux from "../../hoc/Aux";

class BurgerBuilder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ingredients: {
        salad: 1,
        meat: 2,
        bacon: 2,
        cheese: 2
      }
    };
  }

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <div>builder</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
