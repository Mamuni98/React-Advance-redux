import { createSlice } from "@reduxjs/toolkit";

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
    increaseAmount(state, action) {},
  },
});

export const cartItemsActions = cartItemSlice.actions;
export default cartItemSlice.reducer;
