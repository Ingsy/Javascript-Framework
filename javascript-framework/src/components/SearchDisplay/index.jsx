import React from "react";
import PropTypes from "prop-types";
import ProductGrid from "./ProductGrid";


function SearchDisplay({ searchResults }) {
return (
    <div>
      <h2>Search Results</h2>
      <ProductGrid products={searchResults} />
    </div>
  );
}

SearchDisplay.propTypes = {
  searchResults: PropTypes.array.isRequired,
};

export default SearchDisplay;