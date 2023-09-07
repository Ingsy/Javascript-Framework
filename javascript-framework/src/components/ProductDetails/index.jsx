import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product data using the product ID from the URL
    fetch(`https://api.noroff.dev/api/v1/online-shop/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error('Error fetching product data:', error));
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  const discount = product.discountedPrice ? product.price - product.discountedPrice : 0;

  return (
    <div className='container'>
      <h2 className='mt-3'>{product.title}</h2>
       <div className='card mt-3'>
       <div className="card-body">
          {product.discountedPrice ? (
            <div>
              <p className="card-text">
                <del>${product.price.toFixed(2)}</del>
                <span className="ml-2">${product.discountedPrice.toFixed(2)}</span>
              </p>
              <p className="card-text text-success">
                Save ${discount.toFixed(2)}
              </p>
            </div>
          ) : (
            <p className="card-text">${product.price.toFixed(2)}</p>
          )}
      {product.description}
      <img src={product.img} alt="" />
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
