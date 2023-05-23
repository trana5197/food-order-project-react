import { useReducer } from "react";
import CartContext from "./cart-context";

const initCart = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.payload.amount * action.payload.price;

    const itemIndex = state.items.findIndex(
      (item) => item.id === action.payload.id
    );

    const item = state.items[itemIndex];
    let updatedItems;

    if (item) {
      const updatedItem = {
        ...item,
        amount: item.amount + action.payload.amount,
      };

      updatedItems = [...state.items];
      updatedItems[itemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.payload);
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  } else if (action.type === "REMOVE") {
    const itemIndex = state.items.findIndex(
      (item) => item.id === action.payload
    );

    const item = state.items[itemIndex];
    const updatedTotalAmount = state.totalAmount - item.price;

    let updatedItems;

    if (item.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.payload);
    } else {
      const updatedItem = {
        ...item,
        amount: item.amount - 1,
      };

      updatedItems = [...state.items];
      updatedItems[itemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return initCart;
};

const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, initCart);

  const addItemToCart = (item) => {
    dispatchCart({ type: "ADD", payload: item });
  };

  const removeItemFromCart = (id) => {
    dispatchCart({ type: "REMOVE", payload: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
