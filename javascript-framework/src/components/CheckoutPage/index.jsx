import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { CartContext } from "../../components/Cart/cartContext";
import BaseButton from "../Buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import styles from "./Checkout.module.css";
import AlertCheckout from "../Alert/AlertCheckout";

function CheckoutPage() {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

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

  let totalPrice = 0;
  let totalDiscount = 0;

  cart.forEach((product) => {
    const productPrice = product.discountedPrice || product.price;
    const productDiscount = product.price - productPrice;

    totalPrice += productPrice * product.quantity;
    totalDiscount += productDiscount * product.quantity;
  });

  const [showAlert, setShowAlert] = useState(false);
  const [checkoutInitiated, setCheckoutInitiated] = useState(false);

  const handleCheckout = () => {
    setCheckoutInitiated(true);
    setShowAlert(true);
  };

  const handleAlertOk = () => {
    if (checkoutInitiated) {
      navigate("/checkout-success");
    }
    setShowAlert(false);
    setCheckoutInitiated(false);
  };

  const handleAlertClose = () => {
    setShowAlert(false);
    setCheckoutInitiated(false);
  };

  return (
    <div className={styles.CheckoutContainer}>
      <h1 className={styles.CheckoutHeader}>Checkout</h1>
      {cart.length === 0 ? (
        <p className={styles.EmptyCartMessage}>
          There is nothing in your cart - check out{" "}
          <Link to="/" className={styles.aLink}>
            Products
          </Link>
        </p>
      ) : (
        <div>
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
                    <h3 className={styles.CheckoutProductName}>
                      {product.title}
                    </h3>
                    <p className={styles.CheckoutProductPrice}>
                      ${product.price.toFixed(2)}
                    </p>

                    {product.discountedPrice && (
                      <p className={styles.CheckoutDiscount}>
                        Discount: -$
                        {(
                          (product.price - product.discountedPrice) *
                          product.quantity
                        ).toFixed(2)}
                      </p>
                    )}
                    {product.discountedPrice && (
                      <p className={styles.CheckoutDiscountedPrice}>
                        Price: $
                        {(product.discountedPrice * product.quantity).toFixed(
                          2
                        )}
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
            Discount: -${totalDiscount.toFixed(2)}
          </p>
          <p className={styles.CheckoutTotal}>
            Total: ${(totalPrice - totalDiscount).toFixed(2)}
          </p>
          <BaseButton onClick={handleCheckout}>Checkout</BaseButton>
          {showAlert && (
            <AlertCheckout
              message="Proceed with checkout?"
              onOk={handleAlertOk}
              onClose={handleAlertClose}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default CheckoutPage;
