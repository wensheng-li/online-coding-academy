// src/components/Search.js
import React from "react";
import "../App.css";

const Search = ({ searchTerm, handleSearch }) => {
  return (
    <input
      className="search-input"
      type="text"
      placeholder="Search by students' name or course..."
      value={searchTerm}
      onChange={(e) => handleSearch(e.target.value)}
    />
  );
};

export default Search;
