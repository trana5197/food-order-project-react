import classes from "./Cart.module.css";

const Cart = (props) => {
  return (
    <div onClick={props.onClick} className={classes.cart}>
      <div className="material-symbols-outlined">shopping_cart</div>
      <div>Your Cart</div>
      <div className={classes.quantity}>
        <span>0</span>
      </div>
    </div>
  );
};

export default Cart;
