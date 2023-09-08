import React from 'react';
import Layout from '../Layout';
import ProductList from '../ProductList'; // Import your product data array
import ProductDetails from '../ProductDetails';

function Home() {
  return (
    <div>
      <Layout />
      <div className="container mt-5">
        <h1>Welcome to Our Online Store</h1>
        {ProductList.map((product) => (
          <ProductDetails key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;