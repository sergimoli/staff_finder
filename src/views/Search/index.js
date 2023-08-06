import React, { useEffect, useState } from "react";
import SearchBox from "./components/SearchBox";
import "./style.css";
// import data from "../../data/users.json";
import SearchResults from "./components/SearchResults";
import axios from "axios";

function Search() {
  const [isAtTop, setIsAtTop] = useState(false);
  const handleCloseSearch = () => {
    setIsAtTop(false);
    setResults([]);
  };

  const [data, setData] = useState([]);

  // useEffect(() => {
  //   const getUsers = async () => {
  //     fetch("https://jsonplaceholder.typicode.com/users")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         // console.log(data);
  //         setData(data);
  //       });
  //   };
  //   getUsers();
  // }, []); //serà cridat quan es monti el component.

  // useEffect(() => {
  //   const getUsers = async () => {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/users"
  //     );
  //     const data = await response.json();
  //     setData(data);
  //   };
  //   getUsers();
  // }, []); //serà cridat quan es monti el component.

  useEffect(() => {
    const getUsers = async () => {
      try {
        //el setData hauria de ser setData(data.data) pero faig el destructuring amb {data}
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setData(data);
      } catch (err) {
        console.error(err);
      }
    };
    getUsers();
  }, []); //serà cridat quan es monti el component.

  // const [userData, setUserData] = useState(data);
  const [results, setResults] = useState([]);
  const handleSearchClick = (searchText) => {
    setIsAtTop(true);
    if (data?.length) {
      const searchTextMinus = searchText.toLowerCase();
      //validar si te longitud que entri... si itero algo que no existeix va a fallar l'interfas.
      const filteredData = data.filter((value) => {
        return (
          value.name.toLowerCase().includes(searchTextMinus) ||
          value.phone.toLowerCase().includes(searchTextMinus) ||
          value.email.toLowerCase().includes(searchTextMinus) ||
          value.username.toLowerCase().includes(searchTextMinus)
        );
      });
      // console.log(filteredData);
      setResults(filteredData);
      console.log(results);
      // console.log(teto);
    }
  };
  // const handleSearchClick = () => {
  //   // alert("search");
  //   setIsAtTop(!isAtTop);
  // };
  // const handleCloseClick = () => {
  //   // alert("close");
  //   setIsAtTop(!isAtTop);
  // };
  // console.log(userData);
  return (
    <div className={`search ${isAtTop ? "search--top" : "search--center"}`}>
      <SearchBox
        // onSearch={handleCloseOpenSearch}
        onSearch={handleSearchClick}
        onClose={handleCloseSearch}
        isSearching={isAtTop}
      />
      <SearchResults results={results} isSearching={isAtTop} />
    </div>
  );
}

export default Search;
