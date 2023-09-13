import React from "react";

function ProductCard(props) {
  const { title, price, discountedPrice, description, imageUrl, reviews } =
    props;

  return (
    <div className="card">
      <img src={imageUrl} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">${discountedPrice}</p>
        <p className="card-text">${price}</p>
        <p className="reviews">{reviews}</p>
        <button href="#" className="btn btn-primary">
          View product
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
