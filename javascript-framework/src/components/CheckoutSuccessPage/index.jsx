import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Cart/cartContext";
import styles from "./CheckoutSuccess.module.css";

const CheckoutSuccess = () => {
  const { clearCart } = useContext(CartContext);

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className={styles.checkoutContainer}>
      <h1 className={styles.checkoutTitle}>Thank you for your order!</h1>
      <p className={styles.checkoutMessage}>
        Your order has been successfully processed.
      </p>
      <Link to="/" className={styles.checkoutLink}>
        Return to the Store
      </Link>
    </div>
  );
};

export default CheckoutSuccess;
