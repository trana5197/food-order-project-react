import Cart from "./Cart";

import classes from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <section className={classes.header}>
      <div>
        <h1 className="heading-tertiary">ReactMeals</h1>
      </div>
      <Cart />
    </section>
  );
};

export default MainHeader;
