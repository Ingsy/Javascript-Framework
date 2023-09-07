import React, { useState, useEffect } from 'react';
import ProductCard from './components/ProductCard'; 

function FetchApiCard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from your API endpoint
    fetch(' https://api.noroff.dev/api/v1/online-shop')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container">
      <div className="row">
        {products.map((product, index) => (
          <div className="col-md-4" key={index}>
            <ProductCard {...product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FetchApiCard;
