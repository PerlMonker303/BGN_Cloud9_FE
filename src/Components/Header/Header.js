import { Button } from "@material-ui/core";
import React from "react";
import styles from "./header.module.css";
import { FcSearch } from "react-icons/fc";

function Header({ keyword, setKeyword, handleButtonClicked }) {
  // const classes = useStyles();

  const handleTextChanged = (e) => {
    setKeyword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleButtonClicked();
  };

  return (
    <div className={styles.header}>
      <img src="/images/image 10.png" alt="cloud9" className={styles.logo} />
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className={styles.searchCover}>
          <div className={styles.searchContainer}>
            <FcSearch size="30px" />
            <input
              type="search"
              className={styles.search}
              placeholder="Search for a keyword"
              onChange={handleTextChanged}
            />
          </div>

          <Button variant="contained" type="submit">
            Search
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Header;
