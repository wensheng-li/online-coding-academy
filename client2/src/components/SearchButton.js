// src/components/SearchButton.js
import React, { useState } from "react";

const SearchButton = ({ searchTerm, handleSearch, handleReset }) => {
  const [term, setTerm] = useState(searchTerm);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(term);
  };

  return (
    <form
      className="search-container"
      onSubmit={handleSubmit}
      style={{ textAlign: "center" }}
    >
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Search for student or course..."
      />
      <button type="submit" style={{ marginLeft: "10px" }}>
        Search
      </button>
      <button onClick={handleReset} disabled={!searchTerm}>
        Reset
      </button>
    </form>
  );
};

export default SearchButton;
