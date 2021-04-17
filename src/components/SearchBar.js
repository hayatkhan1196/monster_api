import React from "react";
import "./SearcBar.css";
function SearchBar({ searchOnchange }) {
  return (
    <div>
      <input
        className="search-bar"
        placeholder=" Enter the Monster Names"
        type="search"
        onChange={searchOnchange}
      />
    </div>
  );
}
export default SearchBar;
