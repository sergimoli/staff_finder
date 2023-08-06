import React, { useState } from "react";
import "./style.css";

function SearchBox({ onSearch, onClose, isSearching }) {
  const [searchTexta, setSearchText] = useState("");
  const handleSearchClick = () => {
    setSearchText("");
    onClose();
  };

  return (
    <div className="search-box">
      <h2 className="search-box-title">Buscador de personal</h2>
      <div className="search-box-buttons">
        <label>
          <input
            value={searchTexta}
            onChange={({ target: { value } }) => setSearchText(value)}
            className="search-box-input"
          />
        </label>
        {/* <button onClick={onSearch}>Buscar</button> */}
        <button
          onClick={() => onSearch(searchTexta)}
          disabled={!searchTexta.length}
        >
          Buscar
        </button>
        {isSearching && (
          <button onClick={handleSearchClick} disabled={!searchTexta.length}>
            Tancar
          </button>
        )}
      </div>
    </div>
  );
}

export default SearchBox;
