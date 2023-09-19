import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import styles from "./Cart.module.css";
import { CartContext } from "./cartContext";

function CartIcon() {
  const { cartCount } = useContext(CartContext);

  return (
    <div className={styles["cart-container"]}>
      <Link to="/checkout" className={styles["cart-link"]}>
        <div className={styles["icon-count-container"]}>
          <button className={styles["icon-button"]}>
            <FontAwesomeIcon icon={faShoppingCart} />
          </button>
          {cartCount > 0 && (
            <div className={styles["cart-count"]}>{cartCount}</div>
          )}
        </div>
      </Link>
    </div>
  );
}

export default CartIcon;
