import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { sendData } from "./components/store/cartActions";
import { receiveData } from "./components/store/cartActions";
import Notification from "./components/UI/Notification";

let initial = true;
function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.cartShow.show);
  const cartItems = useSelector((state) => state.cartItems.items);
  const changed = useSelector((state) => state.cartItems.changed);
  useEffect(() => {
    dispatch(receiveData());
  }, [dispatch]);

  useEffect(() => {
    if (initial) {
      initial = false;
      return;
    }
    if (changed) {
      dispatch(sendData(cartItems));
    }
  }, [cartItems, dispatch, changed]);

  return (
    <>
      {cartItems.length > 0 && <Notification />}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
