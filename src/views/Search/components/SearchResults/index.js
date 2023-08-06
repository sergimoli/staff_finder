import React from "react";
import "./style.css";
import SearchResultsItem from "./SearchResultsItem";

function SearchResults({ results, isSearching }) {
  return (
    <div className="list">
      {!results.length && isSearching && <p>no hi ha resultats a mostrar!</p>}
      {results?.map((value) => {
        return <SearchResultsItem key={value.id} {...value} />;
        /* <div key={index} className="list-results">
            <p>{item.name}</p>
            <p>{item.email}</p>
          </div> */
      })}
    </div>
  );
}

export default SearchResults;
