import React from "react";

import { useStyles, searchStyle } from "./styles";
import { Input } from "@material-ui/core";
import styles from "./search.module.css";

const SearchBar = ({ keyword, setKeyword }) => {
  const classes = useStyles();

  const handleTextChanged = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <input
      type="search"
      className={styles.search}
      placeholder="Search for a keyword"
      onChange={handleTextChanged}
    />
  );
};

export default SearchBar;
