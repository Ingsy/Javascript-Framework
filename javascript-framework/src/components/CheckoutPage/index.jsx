import React, { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { CartContext } from "../../components/Cart/cartContext";
import styles from "./Checkout.module.css";
import BaseButton from "../Buttons";

function CheckoutPage() {
  const { cart } = useContext(CartContext); // Access cart data from CartContext
  const totalPrice = cart.reduce((total, product) => {
    return total + product.price;
  }, 0);

  const navigate = useNavigate();

  const handleCheckout = () => {
    // Perform any necessary actions before checkout
    // For example, submit the order to the server

    // After successful checkout, navigate to the success page
    navigate("/checkout-success");
  };

  return (
    <div className="container mt-5 text-center">
      <h1>Checkout</h1>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            {product.title} - ${product.price.toFixed(2)}
          </li>
        ))}
      </ul>
      <p>Total: ${totalPrice.toFixed(2)}</p>
      <BaseButton className={styles.CheckoutBtn} onClick={handleCheckout}>
        Checkout
      </BaseButton>
      <p>
        <Link to="/" className={styles.CheckoutLink}>
          Continue Shopping
        </Link>{" "}
        {/* Add the "Continue Shopping" link */}
      </p>
    </div>
  );
}

export default CheckoutPage;
