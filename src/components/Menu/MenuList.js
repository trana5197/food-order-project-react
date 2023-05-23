import { useContext } from "react";

import MenuForm from "./MenuForm";

import CartContext from "../../store/cart-context";

import classes from "./MenuList.module.css";

const MenuList = ({ meal }) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addToCartHandler({
      id: meal.id,
      name: meal.name,
      amount: amount,
      price: meal.price,
    });
  };

  return (
    <li className={`margin-left-md margin-bottom-sm ${classes.list}`}>
      <div className={classes.meal}>
        <p className={classes.name}>{meal.name}</p>
        <p className={classes.desc}>{meal.desc}</p>
        <p className={classes.price}>${meal.price}</p>
      </div>
      <div>
        <MenuForm id={meal.id} onAddItem={addToCartHandler} />
      </div>
    </li>
  );
};

export default MenuList;
