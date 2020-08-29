import React from "react";
import classes from "./modal.css";
import Backdrop from "../Backdrop/backdrop";

const Modal = (props) => {
  return (
    <React.Fragment>
        <Backdrop clicked={props.modalClosed}></Backdrop>
      <div className={classes.Modal}>{props.children}</div>
    </React.Fragment>
  );
};

export default Modal;
