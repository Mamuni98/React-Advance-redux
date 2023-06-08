import { configureStore } from "@reduxjs/toolkit";
import CartShowReducer from "./cartShow";
import CartItemsReducer from "./cartItem";

const store = configureStore({
  reducer: { 
    cartShow: CartShowReducer, 
    cartItems: CartItemsReducer
   },
});

export default store;
