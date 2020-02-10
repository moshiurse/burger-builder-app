import React from "react";

import logo from "../../assets/images/burger-logo.png";
import classes from "./Logo.css";

const Logo = props => (
  <div className={classes.Logo} style={{ height: props.height }}>
    <img src={logo} alt="logo" />
  </div>
);
export default Logo;
