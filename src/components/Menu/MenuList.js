import MenuForm from "./MenuForm";

import classes from "./MenuList.module.css";

const MenuList = ({ meal }) => {
  return (
    <li className={`margin-left-md margin-bottom-sm ${classes.list}`}>
      <div className={classes.meal}>
        <p className={classes.name}>{meal.name}</p>
        <p className={classes.desc}>{meal.desc}</p>
        <p className={classes.price}>${meal.price}</p>
      </div>
      <div>
        <MenuForm id={meal.id} />
      </div>
    </li>
  );
};

export default MenuList;
