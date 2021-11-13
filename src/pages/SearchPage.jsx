import React from "react";
import Header from "../components/Header";
import SearchComponents from "../components/SearchComponents";

const SearchPage = () => {
  return (
    <>
      <div className="App">
        <Header title="Devfinder" />
        <SearchComponents />
      </div>
    </>
  );
};

export default SearchPage;
