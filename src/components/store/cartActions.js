import { notificationActions } from "./notification";
import { cartItemsActions } from "./cartItem";
import axios from "axios";

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