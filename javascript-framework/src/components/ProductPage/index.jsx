import React, { useState, useEffect, useCallback } from "react";
import ProductList from "../ProductList";
import Search from "../Search";
import useProductFetch from "../useProductFetch";

function Products() {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const products = useProductFetch();

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

      {searchQuery ? (
        <ProductList products={filteredProducts} />
      ) : (
        <ProductList products={products} />
      )}
    </div>
  );
}

export default Products;
