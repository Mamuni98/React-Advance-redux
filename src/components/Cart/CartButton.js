import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartShowActions } from "../store/cartShow";
const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems.items);
  const showCartHandler = () => {
    dispatch(cartShowActions.cartShow());
  };
  const totalQuantity = cartItems.reduce((currNumber, item) => {
    return currNumber + Number(item.quantity);
  }, 0);
  return (
    <button className={classes.button} onClick={showCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
