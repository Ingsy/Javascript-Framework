import React, { useEffect } from "react";
import styles from "./Alert.module.css";

const CustomAlert = ({ message, onClose, productTitle }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, [onClose]);

  return (
    <div className={styles.customAlert}>
      <div>
        {productTitle && <p className={styles.productTitle}>{productTitle}</p>}
        <p className={styles.message}>{message}</p>
      </div>
    </div>
  );
};

export default CustomAlert;
