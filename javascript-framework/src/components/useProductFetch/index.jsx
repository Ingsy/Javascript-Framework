import { useState, useEffect } from "react";

function useProductFetch() {
  const [products, setProducts] = useState([]);

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

  return products;
}

export default useProductFetch;
