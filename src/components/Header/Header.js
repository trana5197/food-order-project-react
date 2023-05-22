import classes from "./Header.module.css";

import image from "./../../Images/meals.jpg";
import HeaderSummary from "./HeaderSummary";

const Header = () => {
  return (
    <section className={classes.header}>
      <div>
        <img src={image} alt="Variety of foods" className={classes.image} />
        <HeaderSummary />
      </div>
    </section>
  );
};

export default Header;
