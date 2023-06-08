import { configureStore } from "@reduxjs/toolkit";
import CartShowReducer from "./cartShow";

const store = configureStore({
  reducer: { cartShow: CartShowReducer },
});

export default store;
