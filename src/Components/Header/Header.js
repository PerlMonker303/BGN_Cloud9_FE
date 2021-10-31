import { Button } from "@material-ui/core";
import React from "react";
import styles from "./header.module.css";
import { FcSearch } from "react-icons/fc";

function Header({ keyword, setKeyword, handleSearch, title }) {
  // const classes = useStyles();

  const handleTextChanged = (e) => {
    setKeyword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <>
    <div className={styles.header}>
      <img src="/images/image 10.png" alt="cloud9" className={styles.logo} />
    {
      !title ? (

      <form onSubmit={(e) => handleSubmit(e)}>
        <div className={styles.searchCover}>
          <div className={styles.searchContainer}>
            <FcSearch size="30px" />
            <input
              type="search"
              className={styles.search}
              placeholder="Search for a keyword"
              onChange={handleTextChanged}
              value={keyword}
            />
          </div>

          <Button variant="contained" type="submit" disabled={keyword === ''}>
            Search
          </Button>
        </div>
      </form>
      ) : (
        <>
          <h1 align="center">{title}</h1>
        </>
      )
    }
    </div>
    </>
  );
}

export default Header;
