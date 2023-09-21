import React, { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { CartContext } from "../../components/Cart/cartContext";
import BaseButton from "../Buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import styles from "./Checkout.module.css";

function CheckoutPage() {
  const { cart } = useContext(CartContext);
  const totalPrice = cart.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);

  const discountPercentage = 10;
  const discount = (totalPrice * discountPercentage) / 100;

  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout-success");
  };

  const { removeFromCart, incrementQuantity, decrementQuantity } =
    useContext(CartContext);

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const handleIncrementQuantity = (productId) => {
    incrementQuantity(productId);
  };

  const handleDecrementQuantity = (productId) => {
    decrementQuantity(productId);
  };

  return (
    <div className={styles.CheckoutContainer}>
      <h1 className={styles.CheckoutHeader}>Checkout</h1>
      <div className={styles.CheckoutList}>
        {cart.map((product) => (
          <div key={product.id} className={styles.CheckoutItem}>
            <div className={styles.CheckoutProductInfo}>
              <img
                src={product.imageUrl}
                alt={product.title}
                className={styles.CheckoutProductImage}
              />
              <div className={styles.CheckoutProductDetails}>
                <h3 className={styles.CheckoutProductName}>{product.title}</h3>
                <p className={styles.CheckoutProductPrice}>
                  ${product.price.toFixed(2)}
                </p>
                {product.discountedPrice && (
                  <p className={styles.CheckoutProductPrice}>
                    Discount: -$
                    {((product.price * discountPercentage) / 100).toFixed(2)}
                  </p>
                )}
                {product.discountedPrice && (
                  <p className={styles.CheckoutDiscountedPrice}>
                    Price: ${product.discountedPrice.toFixed(2)}
                  </p>
                )}
                <div className={styles.CheckoutActions}>
                  <div className={styles.QuantityControl}>
                    <button
                      className={styles.QuantityButton}
                      onClick={() => handleDecrementQuantity(product.id)}
                    >
                      -
                    </button>
                    {product.quantity}
                    <button
                      className={styles.QuantityButton}
                      onClick={() => handleIncrementQuantity(product.id)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className={styles.CheckoutActionButton}
                    onClick={() => handleRemoveFromCart(product.id)}
                  >
                    <FontAwesomeIcon
                      icon={faTrash}
                      className={styles.TrashIcon}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className={styles.SubTotal}>Subtotal: ${totalPrice.toFixed(2)}</p>
      <p className={styles.CheckoutDiscount}>
        Discount ({discountPercentage}%): -${discount.toFixed(2)}
      </p>
      <p className={styles.CheckoutTotal}>
        Total: ${(totalPrice - discount).toFixed(2)}
      </p>
      <BaseButton onClick={handleCheckout}>Checkout</BaseButton>
      <p className={styles.ContinueShopping}>
        <Link to="/" className={styles.CheckoutLink}>
          Continue Shopping
        </Link>{" "}
      </p>
    </div>
  );
}

export default CheckoutPage;
