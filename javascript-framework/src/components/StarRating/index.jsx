import React from "react";
import styles from "./star.module.css";

function StarRating({ rating }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(
        <span key={i} className={styles.starFilled}>
          &#9733;
        </span>
      );
    } else {
      stars.push(
        <span key={i} className={styles.starEmpty}>
          &#9733;
        </span>
      );
    }
  }

  return <div className={styles.starRating}>{stars}</div>;
}

export default StarRating;
