import { useRef, useState } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";

import classes from "./MenuForm.module.css";

const MenuForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountRef = useRef("");

  const addItemToCart = () => {
    const enteredAmount = +amountRef.current.value;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmount < 1 ||
      enteredAmount > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddItem(+enteredAmount);

    amountRef.current.value = "";
  };

  return (
    <form className={classes.form} onSubmit={addItemToCart}>
      <Input
        ref={amountRef}
        label="Amount"
        input={{
          id: `amount_${props.id}`,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <Button type="submit">+ Add</Button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MenuForm;
