import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import BaseButton from "../Buttons";
import { CartContext } from "../Cart/cartContext";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state
  const { addToCart } = useContext(CartContext); // Access addToCart function from CartContext

  useEffect(() => {
    // Fetch product data using the product ID from the URL
    fetch(`https://api.noroff.dev/api/v1/online-shop/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setLoading(false); // Set loading to false when data is received
      })
      .catch((error) => {
        setError(error); // Set error state if there's an error
        setLoading(false); // Set loading to false in case of error
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
      <h2 className="mt-3">{product.title}</h2>
      <div className="card mt-3">
        <div className="card-body">
          {product.discountedPrice ? (
            <div>
              <img src={product.imageUrl} alt={product.title} />
              <p className="card-text">
                <span className="ml-2">
                  ${product.discountedPrice.toFixed(2)}
                </span>
              </p>
              <p className="card-text text-success">
                Save ${discount.toFixed(2)}
              </p>
            </div>
          ) : (
            <p className="card-text">${productPrice.toFixed(2)}</p>
          )}
          <p className="card-text">Description: {product.description}</p>
          <BaseButton
            className="btn-secondary"
            type="button"
            onClick={handleAddToCart}
          >
            Add to Cart
          </BaseButton>
          {product.reviews && product.reviews.length > 0 ? (
            <div>
              <h3>Reviews:</h3>
              <ul>
                {product.reviews.map((review) => (
                  <li key={review.id}>
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
            <p>No reviews yet</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
