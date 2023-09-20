import React, { useState, useEffect, useCallback } from "react";
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

  console.log("Products state:", products);

  const handleSearchChange = useCallback(
    (query) => {
      setSearchQuery(query);
      if (products && products.length > 0) {
        const filtered = products.filter((product) =>
          product.title.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredProducts(filtered);
      }
    },
    [products]
  );

  useEffect(() => {
    console.log("onSearch prop in Products:", typeof handleSearchChange);
  }, [handleSearchChange]);

  if (typeof handleSearchChange !== "function") {
    console.error("onSearch is not a function:", handleSearchChange);
    return null;
  }

  return (
    <div>
      <h1>Products</h1>
      {products.length > 0 ? (
        <Search products={products} onSearch={handleSearchChange} />
      ) : (
        <p>Loading products...</p>
      )}
      <ProductList products={searchQuery ? filteredProducts : products} />
    </div>
  );
}

export default Products;
