import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { notificationActions } from "./components/store/notification";
import { useEffect } from "react";
import axios from "axios";
import Notification from "./components/UI/Notification";
let initial = true;
function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.cartShow.show);
  const cartItems = useSelector((state) => state.cartItems.items);
  useEffect(() => {
    const sendCartData = async () => {
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
    };
    if (initial) {
      initial = false;
      return;
    }
    sendCartData();
  }, [cartItems, dispatch]);
  return (
    <>
      {cartItems.length>0 && <Notification />}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
