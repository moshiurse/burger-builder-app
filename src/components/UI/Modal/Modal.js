import React from "react";

import Aux from "../../../hoc/Aux";
import BackDrop from "../BackDrop/BackDrop";

import classes from "./Modal.css";
const Modal = props => {
  return (
    <Aux>
      <BackDrop show={props.show} clicked={props.modalClosed} />
      <div
        className={classes.Modal}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0"
        }}
      >
        {props.children}
      </div>
    </Aux>
  );
};
export default Modal;
