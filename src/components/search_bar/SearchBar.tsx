import React, { useState } from 'react';
import "./SearchBar.css";
import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div
      onClick={() => setIsSelected(true)}
      onBlur={() => setIsSelected(false)}
      className="search-bar-container"
    >
      {isSelected ? (
        <input type="text" className="search-bar" />
      ) : (
        <FaSearch className="search-icon" />
      )}
    </div>
  );
}
