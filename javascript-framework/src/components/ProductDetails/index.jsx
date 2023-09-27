import React, { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import BaseButton from "../Buttons";
import { CartContext } from "../Cart/cartContext";
import styles from "./Card.module.css";
import { Collapse, Button } from "react-bootstrap";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showReviews, setShowReviews] = useState(false);

  const toggleReviews = () => {
    setShowReviews(!showReviews);
  };

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
              className={styles.AddToCart}
              type="button"
              onClick={handleAddToCart}
            >
              Add to Cart
            </BaseButton>
            {product.reviews && product.reviews.length > 0 ? (
              <div className={styles.ReviewsSection}>
                <Button
                  variant="link"
                  onClick={toggleReviews}
                  className={styles.ToggleReviewsBtn}
                >
                  {showReviews ? "Reviews" : "Show Reviews"}
                </Button>

                <Collapse in={showReviews}>
                  <ul className={`${styles.ReviewsList}`}>
                    {product.reviews.map((review) => (
                      <li key={review.id} className={styles.ReviewsListItem}>
                        <strong>{review.username}</strong>
                        <br />
                        Rating:
                        <span className={styles.ReviewsRating}>
                          {review.rating}
                        </span>
                        <br />
                        {review.description}
                      </li>
                    ))}
                    <hr />
                  </ul>
                </Collapse>
              </div>
            ) : (
              <p className={styles.NoReviews}>No reviews yet</p>
            )}
          </div>
        </div>
      </div>
      <p className="text-center">
        <Link to="/" className={styles.checkoutLink}>
          Continue Shopping
        </Link>{" "}
      </p>
    </div>
  );
}

export default ProductDetails;
