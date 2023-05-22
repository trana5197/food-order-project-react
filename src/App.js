import { Fragment } from "react";

import MainNav from "./components/Nav/MainNav";
import Header from "./components/Header/Header";

const DUMMY_MENU = [
  {
    id: 1,
    name: "Sushi",
    desc: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: 2,
    name: "Schnitzel",
    desc: "A german speciality",
    price: 16.5,
  },
  {
    id: 3,
    name: "Barbecue Burger",
    desc: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: 4,
    name: "Green Bowl",
    desc: "Healthy... and green...",
    price: 18.99,
  },
  {
    id: 5,
    name: "Idli, Dose and mendu vada",
    desc: "An Indian speciality",
    price: 8.99,
  },
];

const App = () => {
  return (
    <Fragment>
      <MainNav />
      <Header />
    </Fragment>
  );
};

export default App;
