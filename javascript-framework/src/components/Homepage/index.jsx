import React from "react";
import ProductList from "../ProductList";

function Home({ filterProd }) {
  return (
    <div className="container mt-3">
      <h1 className="text-center">Welcome to Our Online Store</h1>
      <div className="row">
        <div className="col">
          <ProductList products={filterProd} />
        </div>
      </div>
    </div>
  );
}

export default Home;
