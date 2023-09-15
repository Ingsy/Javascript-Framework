import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./ProductList.module.css";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const productsPerPage = 20;

  useEffect(() => {
    // Fetch products only when the page changes
    fetch(
      `https://api.noroff.dev/api/v1/online-shop?page=${page}&items=${productsPerPage}`
    )
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [page]);

  return (
    <div className="row">
      {products.map((product) => (
        <div className="col-lg-4 col-md-6 col-sm-12" key={product.id}>
          <div className={styles.card}>
            <img
              src={product.imageUrl}
              alt={product.title}
              className={styles.cardImgTop}
            />
            <div className="card-body">
              <h5 className={styles.cardTitle}>{product.title}</h5>
              <p className={styles.cardPrice}>${product.price.toFixed(2)}</p>
              <Link
                to={`/product/${product.id}`}
                className={"btn btn-primary mx-3"}
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      ))}
      <div className="pagination">
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Previous
        </button>
        <span>Page {page}</span>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </div>
  );
}

export default ProductList;
