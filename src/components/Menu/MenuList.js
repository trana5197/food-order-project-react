import { useContext } from "react";

import MenuForm from "./MenuForm";

import CartContext from "../../store/cart-context";

import classes from "./MenuList.module.css";

const MenuList = (props) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.meal.id,
      name: props.meal.name,
      amount: amount,
      price: props.meal.price,
    });
  };

  return (
    <li className={`margin-left-md margin-bottom-sm ${classes.list}`}>
      <div className={classes.meal}>
        <p className={classes.name}>{props.meal.name}</p>
        <p className={classes.desc}>{props.meal.desc}</p>
        <p className={classes.price}>${props.meal.price}</p>
      </div>
      <div>
        <MenuForm id={props.id} onAddItem={addToCartHandler} />
      </div>
    </li>
  );
};

export default MenuList;
