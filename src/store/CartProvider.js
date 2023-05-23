import { useReducer } from "react";
import CartContext from "./cart-context";

const initCart = {
  items: [
    {
      id: "m1",
      name: "Sushi",
      amount: 1,
      price: 20.99,
    },
  ],
  totalAmount: 100,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updateAmount =
      state.totalAmount + action.payload.price * action.payload.amount;

    const cartItemIndex = state.items.findIndex(
      (item) => item.id === action.payload.id
    );

    const existingCartItem = state.items[cartItemIndex];

    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.payload.amount,
      };
      updatedItems = [...state.items];
      updatedItems[cartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.cancat(action.items);
    }

    return {
      items: updatedItems,
      totalAmount: updateAmount,
    };
  } else if (action.type === "REMOVE") {
    const cartItemIndex = state.items.findIndex(
      (item) => item.id === action.payload.id
    );

    const existingItem = state.items[cartItemIndex];

    const updatedAmount = state.totalAmount - existingItem.price;

    let updatedItems;

    if (existingItem.amount === 1) {
      updatedItems = state.items.filter(
        (item) => item.id !== action.payload.id
      );
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[cartItemIndex] = updatedItem;
    }
    return { items: updatedItems, totalAmount: updatedAmount };
  }

  return initCart;
};

const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, initCart);

  const addToCartHandler = (item) => {
    dispatchCart({ type: "ADD", payload: item });
  };

  const removeFromCartHandler = (id) => {
    dispatchCart({ type: "REMOVE", payload: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addToCartHandler,
    removeItem: removeFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
