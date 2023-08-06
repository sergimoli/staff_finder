import React from "react";
import "./style.css";

function SearchResultsItem({ name, email }) {
  return (
    <div className="list-results">
      <p>{name}</p>
      <p>{email}</p>
    </div>
  );
}

export default SearchResultsItem;
