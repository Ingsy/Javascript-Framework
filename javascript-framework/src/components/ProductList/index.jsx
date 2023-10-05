import React from "react";
import ProductGrid from "../ProductGrid";

function ProductList({ products }) {
  return (
    <div>
      <ProductGrid products={products} />{" "}
    </div>
  );
}

export default ProductList;
