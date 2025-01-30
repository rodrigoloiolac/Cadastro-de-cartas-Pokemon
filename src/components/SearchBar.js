import React from "react";

const SearchBar = ({ setFilter }) => {
  return (
    <input
      type="text"
      placeholder="Buscar por nome"
      onChange={(e) => setFilter(e.target.value.toLowerCase())}
    />
  );
};

export default SearchBar;
