import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../components/Cart/cartContext"; // Import the CartContext

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
