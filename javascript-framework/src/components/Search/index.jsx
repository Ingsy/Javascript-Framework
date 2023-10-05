import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./Search.module.css";

function Search({ products, onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

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
    onSearch(filteredSuggestions);
  };

  useEffect(() => {
    return () => {
      setSearchQuery("");
    };
  }, []);

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
    </div>
  );
}

Search.propTypes = {
  products: PropTypes.array.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default Search;
