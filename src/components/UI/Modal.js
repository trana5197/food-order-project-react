import { Fragment, useContext } from "react";
import ReactDOM from "react-dom";

import CartContext from "../../store/cart-context";

import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onCloseModal}></div>;
};

const Overlay = (props) => {
  const cartCtx = useContext(CartContext);

  const addItemHandler = (item) => {
    cartCtx.addItem(item);
  };

  const removeItemHandler = (mealId) => {
    cartCtx.removeItem(mealId);
  };

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
              <button
                className={classes.button}
                onClick={() => removeItemHandler(meal.id)}
              >
                &ndash;
              </button>
              <button
                className={classes.button}
                onClick={() =>
                  addItemHandler({
                    id: meal.id,
                    name: meal.name,
                    amount: 1,
                    price: meal.price,
                  })
                }
              >
                +
              </button>
            </div>
          </div>
        );
      })}
      <div>
        <div className={classes["total-amt"]}>
          <p>Total Amount</p>
          <p>${cartCtx.totalAmount.toFixed(2)}</p>
        </div>
        <div className={classes["modal-btns"]}>
          <button
            className={`${classes.button} ${classes.btn} `}
            onClick={props.onCloseModal}
          >
            Close
          </button>
          <button className={`${classes.button}  ${classes["btn-fill"]}`}>
            Order
          </button>
        </div>
      </div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onCloseModal={props.onCloseModal} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Overlay onCloseModal={props.onCloseModal} />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default Modal;
