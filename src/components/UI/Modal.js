import { Fragment, useContext } from "react";
import ReactDOM from "react-dom";

import CartContext from "../../store/cart-context";

import classes from "./Modal.module.css";

const Backdrop = () => {
  return <div className={classes.backdrop}></div>;
};

const Overlay = () => {
  const cartCtx = useContext(CartContext);

  return (
    <div className={classes.modal}>
      {cartCtx.items.map((meal) => {
        return (
          <div className={`${classes.meal} border-bottom`} key={meal.id}>
            <div className={classes.item}>
              <p className={classes.name}>{meal.name}</p>
              <div className={classes["price-amt"]}>
                <p>${meal.price}</p>
                <p className={classes.amt}>x{meal.amount}</p>
              </div>
            </div>
            <div className={classes.buttons}>
              <button className={classes.button}>&ndash;</button>
              <button className={classes.button}>+</button>
            </div>
          </div>
        );
      })}
      <div>
        <div className={classes["total-amt"]}>
          <p>Total Amount</p>
          <p>${cartCtx.totalAmount}</p>
        </div>
        <div className={classes["modal-btns"]}>
          <button className={`${classes.button} ${classes.btn} `}>Close</button>
          <button className={`${classes.button}  ${classes["btn-fill"]}`}>
            Order
          </button>
        </div>
      </div>
    </div>
  );
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
