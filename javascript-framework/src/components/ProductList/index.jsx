import React from 'react';

import { Link } from 'react-router-dom';

function ProductList({ products }) {
  return (
    <div>
      <h2>Welcome to Our online store</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
