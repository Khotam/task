import React from "react";
import classes from "./Search.module.css";
import SearchIcon from "@material-ui/icons/Search";

const Search = () => {
  return (
    <div className={classes.searchBar}>
      <input
        type="search"
        placeholder="Search"
        className={classes.searchInput}
      />
      <SearchIcon className={classes.searchIcon} />
    </div>
  );
};

export default Search;
