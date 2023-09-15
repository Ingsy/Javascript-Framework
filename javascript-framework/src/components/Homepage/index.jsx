import React, { useEffect, useState } from "react";
import ProductList from "../ProductList";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://api.noroff.dev/api/v1/online-shop`)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(`Error fetching products:`, error));
  }, []);

  return (
    <div className="container mt-5">
      <h1>Welcome to Our Online Store</h1>
      <div className="row">
        <div className="col">
          <ProductList products={products} />
        </div>
      </div>
    </div>
  );
}

export default Home;
