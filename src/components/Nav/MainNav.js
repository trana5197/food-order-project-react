import { useState } from "react";
import Cart from "./Cart";

import classes from "./MainNav.module.css";
import Modal from "../UI/Modal";

const MainNav = () => {
  const [displayCart, setDisplayCart] = useState(false);

  const displayCartHandler = () => {
    setDisplayCart(true);
  };

  return (
    <section className={classes.nav}>
      <div>
        <h3 className="heading-tertiary">ReactMeals</h3>
      </div>

      <Cart onClick={displayCartHandler} />
      {displayCart && <Modal />}
    </section>
  );
};

export default MainNav;
