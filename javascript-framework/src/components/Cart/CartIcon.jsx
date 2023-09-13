import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function CartIcon() {
  const [cartCount, setCartCount] = useState(0);

  // Function to increment the cart count
  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div className="cart-icon">
      <button className="icon-button" onClick={addToCart}>
        <FontAwesomeIcon icon={faShoppingCart} />
      </button>
      {cartCount > 0 && <div className="cart-count">{cartCount}</div>}
    </div>
  );
}

export default CartIcon;
