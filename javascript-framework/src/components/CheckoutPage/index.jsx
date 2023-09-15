import React, { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { CartContext } from "../../components/Cart/cartContext";
import styles from "./Checkout.module.css";
import BaseButton from "../Buttons";

function CheckoutPage() {
  const { cart } = useContext(CartContext);
  const totalPrice = cart.reduce((total, product) => {
    return total + product.price;
  }, 0);

  const discountPercentage = 10;
  const discount = (totalPrice * discountPercentage) / 100;

  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout-success");
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
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className={styles.CheckoutTotal}>Subtotal: ${totalPrice.toFixed(2)}</p>
      <p className={styles.CheckoutDiscount}>
        Discount ({discountPercentage}%): -${discount.toFixed(2)}
      </p>
      <p className={styles.CheckoutTotalAfterDiscount}>
        Total: ${(totalPrice - discount).toFixed(2)}
      </p>
      <BaseButton className={styles.CheckoutBtn} onClick={handleCheckout}>
        Checkout
      </BaseButton>
      <p className={styles.ContinueShopping}>
        <Link to="/" className={styles.CheckoutLink}>
          Continue Shopping
        </Link>{" "}
      </p>
    </div>
  );
}

export default CheckoutPage;
