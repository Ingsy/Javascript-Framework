import React, { useState } from "react";

function Search({ products, onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Filter products based on the query and set suggestions
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
    setSearchQuery("");
    setSuggestions([]);
    onSearch(product);
  };

  return (
    <div className="container mt-3">
      <form className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <div className="input-group-append">
          <button
            type="submit"
            className="btn btn-primary"
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

export default Search;
