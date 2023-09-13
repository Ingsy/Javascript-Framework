import React, { useEffect, useState } from "react";
import ProductDetails from "../ProductDetails";

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
        {products.map((product) => (
          <div className="col-lg-4 col-md-6 col-sm-12" key={product.id}>
            <ProductDetails product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
