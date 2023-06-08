import { createSlice } from "@reduxjs/toolkit";
import { notificationActions } from "./notification";
import axios from "axios";

const inititalCartItemState = {
  items: [],
};
const cartItemSlice = createSlice({
  name: "cartItems",
  initialState: inititalCartItemState,
  reducers: {
    addItem(state, action) {
      const existingItemIndex = state.items.findIndex(
        (prevItem) => prevItem.id === action.payload.id
      );
      const existingCartItem = state.items[existingItemIndex];
      let updatedItems;
      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
          totalPrice: existingCartItem.totalPrice + existingCartItem.price,
        };
        updatedItems = [...state.items];
        updatedItems[existingItemIndex] = updatedItem;
      } else {
        updatedItems = [...state.items, action.payload];
      }
      state.items = updatedItems;
      
    },
    removeItem(state, action) {
      const existingItemIndex = state.items.findIndex(
        (prevItem) => prevItem.id === action.payload
      );
      const existingCartItem = state.items[existingItemIndex];
      let updatedItems;
      if (existingCartItem.quantity === 1) {
        updatedItems = state.items.filter((item) => item.id !== action.payload);
      } else {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity - 1,
          totalPrice: existingCartItem.totalPrice - existingCartItem.price,
        };
        updatedItems = [...state.items];
        updatedItems[existingItemIndex] = updatedItem;
      }
      state.items = updatedItems;
      
    },
    finalData(state, action){
      state.items = action.payload;
    }
  },
});
export const sendData = (cartItems) =>{
  return async(dispatch) => {
      try {
          dispatch(notificationActions.sendingRequest());
  
          const response = await axios.put(
            "https://advance-redux-3c143-default-rtdb.firebaseio.com/cart.json",
            cartItems
          );
          if (response) {
            dispatch(notificationActions.successfulMessage());
          }
        } catch (error) {
          dispatch(notificationActions.errorMessage());
        }
  }
}
export const receiveData = () =>{
  return async(dispatch) => {
      try {
        
        const response = await axios.get(
            "https://advance-redux-3c143-default-rtdb.firebaseio.com/cart.json"
          );
          if (response) {
            console.log(response.data);
            dispatch(cartItemsActions.finalData(response.data));
            dispatch(notificationActions.retrieveData());
          }
        } catch (error) {
          dispatch(notificationActions.errorMessage());
        }
  }
}
export const cartItemsActions = cartItemSlice.actions;
export default cartItemSlice.reducer;
