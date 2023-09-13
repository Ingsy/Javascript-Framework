import React from "react";
import styles from "./Buttons.module.css";

function BaseButton({ className, type, onClick, children }) {
  const buttonClass = `${styles.BaseButton} ${className}`;

  return (
    <button className={`btn ${buttonClass}`} type={type} onClick={onClick}>
      {children}
    </button>
  );
}

export default BaseButton;
