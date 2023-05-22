import Cart from "./Cart";

import classes from "./MainNav.module.css";

const MainHeader = () => {
  return (
    <section className={classes.header}>
      <div>
        <h3 className="heading-tertiary">ReactMeals</h3>
      </div>
      <Cart />
    </section>
  );
};

export default MainHeader;
