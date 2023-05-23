import { useContext } from "react";

import CartContext from "../../store/cart-context";

import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <div onClick={props.onClick} className={classes.cart}>
      <div className="material-symbols-outlined">shopping_cart</div>
      <div>Your Cart</div>
      <div className={classes.quantity}>
        <span>{numberOfCartItems}</span>
      </div>
    </div>
  );
};

export default Cart;
