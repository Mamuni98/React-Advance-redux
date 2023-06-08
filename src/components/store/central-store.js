import { configureStore } from "@reduxjs/toolkit";
import CartShowReducer from "./cartShow";
import CartItemsReducer from "./cartItem";
import NotificationReducer from "./notification";
const store = configureStore({
  reducer: {
    cartShow: CartShowReducer,
    cartItems: CartItemsReducer,
    notification: NotificationReducer,
  },
});

export default store;
