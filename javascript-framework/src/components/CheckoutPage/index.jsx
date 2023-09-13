import React from "react";
import { useNavigate } from "react-router-dom";

function CheckoutPage({ cart }) {
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
    <div className="container mt-5">
      <h1>Checkout</h1>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            {product.title} - ${product.price.toFixed(2)}
          </li>
        ))}
      </ul>
      <p>Total: ${totalPrice.toFixed(2)}</p>
      <button className="btn btn-primary" onClick={handleCheckout}>
        Checkout
      </button>
    </div>
  );
}

export default CheckoutPage;
