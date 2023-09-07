import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const clearCart = () => {
    // Clear the cart by setting it to an empty array
    setCart([]);
  };

  // Other cart-related functions (add to cart, remove from cart, etc.)

  return (
    <CartContext.Provider value={{ cart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};