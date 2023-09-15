import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    // Update cart count whenever the cart changes
    const count = cart.reduce((acc, item) => acc + item.quantity, 0);
    setCartCount(count);
  }, [cart]);

  const addToCart = (product) => {
    // Check if the product already exists in the cart
    const existingProductIndex = cart.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      // If the product already exists, update its quantity
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1;

      setCart(updatedCart);
    } else {
      // If the product doesn't exist, add it to the cart
      setCart([...cart, { ...product, quantity: 1 }]);
    }

    // Increment cart count
    setCartCount(cartCount + 1);
  };

  const removeFromCart = (productId) => {
    // Remove a product from the cart
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);

    // Update cart count after removing an item
    const count = updatedCart.reduce((acc, item) => acc + item.quantity, 0);
    setCartCount(count);
  };

  const clearCart = () => {
    // Clear the cart by setting it to an empty array
    setCart([]);

    // Reset cart count to 0
    setCartCount(0);
  };

  // Calculate the total price of items in the cart
  const total = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  return (
    <CartContext.Provider
      value={{ cart, cartCount, addToCart, removeFromCart, clearCart, total }}
    >
      {children}
    </CartContext.Provider>
  );
};
