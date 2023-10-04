import React, { useEffect, useState } from "react";
import ProductList from "../ProductList";
import { useParams } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);
  const { searchQuery } = useParams();

  useEffect(() => {
    fetch(`https://api.noroff.dev/api/v1/online-shop`)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(`Error fetching products:`, error));
  }, []);

  const filteredProducts = searchQuery
    ? products.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : products;

  return (
    <div className="container mt-3">
      <h1 className="text-center">Welcome to Our Online Store</h1>
      <div className="row">
        <div className="col">
          <ProductList products={filteredProducts} />
        </div>
      </div>
    </div>
  );
}

export default Home;
