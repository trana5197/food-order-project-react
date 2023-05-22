import MenuList from "./MenuList";

import Card from "../UI/Card";

const Menu = ({ meals }) => {
  return (
    <Card>
      <ul>
        {meals.map((meal) => {
          return <MenuList meal={meal} key={meal.id} />;
        })}
      </ul>
    </Card>
  );
};

export default Menu;
