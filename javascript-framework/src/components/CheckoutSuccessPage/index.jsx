import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./cartContext";

const CheckoutSuccess = () => {
  const { clearCart } = useContext(CartContext);

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="checkout-success">
      <h1>Thank you for your order!</h1>
      <p>Your order has been successfully processed.</p>
      <li className="nav-item">
        <Link to="/Homepage">Return to the Store</Link>
      </li>
    </div>
  );
};

export default CheckoutSuccess;
