import React from "react";
import ProductGrid from "../ProductGrid";
import useProductFetch from "../useProductFetch";

function ProductList() {
  const products = useProductFetch();

  return (
    <div>
      <ProductGrid products={products} />{" "}
    </div>
  );
}

export default ProductList;
