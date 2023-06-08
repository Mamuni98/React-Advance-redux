import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
const Cart = (props) => {
  const cartItems = useSelector((state) => state.cartItems.items);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => {
          return (
            <CartItem
              key={item.id}
              item={{
                id: item.id,
                title: item.title,
                quantity: Number(item.quantity),
                price: Number(item.price),
                totalPrice: Number(item.totalPrice)
              }}
            />
          );
        })}
      </ul>
    </Card>
  );
};

export default Cart;
