import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./ProductGrid.module.css";

function ProductGrid({ products }) {
  return (
    <div className="row mx-auto">
      {products.map((product) => (
        <div
          className="d-flex justify-content-center col-lg-4 col-md-6 col-sm-12"
          key={product.id}
        >
          <div className={styles.card}>
            <img
              src={product.imageUrl}
              alt={product.title}
              className={styles.cardImgTop}
            />
            <div className="card-body">
              <h5 className={styles.cardTitle}>{product.title}</h5>
              <p className={styles.cardPrice}>${product.price.toFixed(2)}</p>
              <Link
                to={`/product/${product.id}`}
                className={styles.ViewDetails}
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

ProductGrid.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductGrid;
