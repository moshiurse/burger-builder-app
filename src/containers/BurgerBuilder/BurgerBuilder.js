import React, { Component } from "react";

import Burger from "../../components/Burger/Burger";

import Aux from "../../hoc/Aux";

class BurgerBuilder extends Component {
  render() {
    return (
      <Aux>
        <Burger />
        <div>builder</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
