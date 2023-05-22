import Button from "../UI/Button";
import Input from "../UI/Input";

import classes from "./MenuForm.module.css";

const MenuForm = (props) => {
  return (
    <form className={classes.form}>
      <Input
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
    </form>
  );
};

export default MenuForm;
