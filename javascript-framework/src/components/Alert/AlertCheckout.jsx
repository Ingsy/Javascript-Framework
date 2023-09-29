import React from "react";
import styles from "./Alert.module.css";

const AlertCheckout = ({ message, onClose, productTitle, onOk }) => {
  return (
    <div className={styles.customAlert}>
      <div>
        {productTitle && <p>{productTitle}</p>}
        <p>{message}</p>
      </div>
      <div>
        <button onClick={onClose}>Not yet</button>
        <button onClick={onOk}>OK</button>
      </div>
    </div>
  );
};

export default AlertCheckout;
