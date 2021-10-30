import { Button } from "@material-ui/core";
import React from "react";
import styles from "./header.module.css";

function Header({ keyword, setKeyword, handleButtonClicked }) {
  // const classes = useStyles();

  const handleTextChanged = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <div className={styles.header}>
      <img src="/images/logo.jpg" alt="cloud9" className={styles.logo} />

      <div className={styles.searchCover}>
        <div className={styles.searchContainer}>
          <img src="/images/search-icon.svg" alt="" />
          <input
            type="search"
            className={styles.search}
            placeholder="Search for a keyword"
            onChange={handleTextChanged}
          />
        </div>

        <Button onClick={handleButtonClicked}>Search</Button>
      </div>
    </div>
  );
}

export default Header;
