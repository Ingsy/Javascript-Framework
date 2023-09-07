import React from 'react';

function ProductCard(props) {
  const { title, price, description, imageUrl } = props;

  return (
    <div className="card">
      <img src={imageUrl} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">${price}</p>
        <button href="#" className="btn btn-primary">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
