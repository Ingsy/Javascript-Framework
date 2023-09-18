import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import BaseButton from "../Buttons";
import { CartContext } from "../Cart/cartContext";
import styles from "./Card.module.css";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch(`https://api.noroff.dev/api/v1/online-shop/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!product) {
    return <p>Product not found.</p>;
  }

  const productPrice = product.price || 0;
  const discount = product.discountedPrice
    ? productPrice - product.discountedPrice
    : 0;

  const handleAddToCart = () => {
    addToCart(product);
    alert("This Item was added to your cart");
  };

  return (
    <div className="container">
      <h2 className="mt-3 text-center">{product.title}</h2>
      <div className="d-flex justify-content-center">
        <div className={styles.card}>
          <div className="card-body">
            <div className={styles.discount}>
              {product.discountedPrice &&
                productPrice > product.discountedPrice && (
                  <span className="ml-2">Save ${discount.toFixed(2)}</span>
                )}
            </div>
            <img
              src={product.imageUrl}
              alt={product.title}
              className={styles.cardImgTop}
            />

            <div className="d-flex justify-content-between mx-4 my-4">
              <div>
                <span className={styles.PriceBig}>
                  {product.discountedPrice
                    ? `$${product.discountedPrice.toFixed(2)}`
                    : ""}
                </span>
              </div>
              <div>
                <span className={`ml-2 ${styles.OriginalPrice}`}>
                  {product.discountedPrice
                    ? `$${productPrice.toFixed(2)}`
                    : `Price: $${productPrice.toFixed(2)}`}
                </span>
              </div>
            </div>
            <p className={styles.Description}>{product.description}</p>
            <BaseButton
              className="btn-secondary mx-4"
              type="button"
              onClick={handleAddToCart}
            >
              Add to Cart
            </BaseButton>
            {product.reviews && product.reviews.length > 0 ? (
              <div className={styles.ReviewsSection}>
                <h3 className="mx-4">Reviews:</h3>
                <ul className={`${styles.ReviewsList}`}>
                  {product.reviews.map((review) => (
                    <li key={review.id} className={styles.ReviewsListItem}>
                      <strong>{review.username}</strong>
                      <br />
                      Rating: {review.rating}
                      <br />
                      {review.description}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <p className="m-4">No reviews yet</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
