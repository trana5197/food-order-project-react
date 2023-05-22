import classes from "./HeaderSummary.module.css";

const HeaderSummary = () => {
  return (
    <div className={classes.summary}>
      <h3 className="heading-secondary margin-bottom-md">
        Delicious Food, Delivered To You
      </h3>
      <div className={classes.paragraph}>
        <p>
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home
        </p>
        <p>
          All our meals are cooked with high-quality ingrdients, just-in-time
          and of course by experienced chefs!
        </p>
      </div>
    </div>
  );
};

export default HeaderSummary;
