import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Search.module.css";
import { useNavigate } from "react-router-dom";

function Search({ products, onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  console.log("Received onSearch prop:", onSearch);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    const filteredSuggestions = products.filter((product) => {
      const lowerCaseQuery = query.toLowerCase();
      return (
        product.title.toLowerCase().includes(lowerCaseQuery) ||
        product.tags.some((tag) =>
          tag.toLowerCase().includes(lowerCaseQuery)
        ) ||
        product.id.toString().includes(query) ||
        product.price.toString().includes(query)
      );
    });

    setSuggestions(filteredSuggestions);
  };

  const handleSuggestionClick = (product) => {
    const productDetailUrl = `/products/${product.id}`;
    navigate(productDetailUrl);
  };

  return (
    <div className="container mt-3">
      <form className="input-group">
        <input
          type="text"
          className={styles.SearchInput}
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <div>
          <button
            type="submit"
            className={styles.SearchBtn}
            onClick={(e) => {
              e.preventDefault();
              onSearch(searchQuery);
            }}
          >
            Search
          </button>
        </div>
      </form>
      {suggestions.length > 0 && (
        <ul className="list-group mt-2">
          {suggestions.map((product) => (
            <li
              key={product.id}
              className="list-group-item"
              onClick={() => handleSuggestionClick(product)}
              style={{ cursor: "pointer" }}
            >
              {product.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

Search.propTypes = {
  products: PropTypes.array.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default Search;
