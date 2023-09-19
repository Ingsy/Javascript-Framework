import React, { useState, useEffect } from "react";
import ProductList from "../ProductList";
import Search from "../Search";

function Products() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("https://api.noroff.dev/api/v1/online-shop")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const handleSearchChange = (query) => {
    setSearchQuery(query);

    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div>
      <h1>Products</h1>
      <Search onSearch={handleSearchChange} />
      <ProductList products={searchQuery ? filteredProducts : products} />
    </div>
  );
}

export default Products;
