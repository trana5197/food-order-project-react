import { Fragment } from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

const Backdrop = () => {
  return <div className={classes.backdrop}></div>;
};

const Overlay = () => {
  return <div className={classes.modal}></div>;
};

const Modal = () => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Overlay />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default Modal;
