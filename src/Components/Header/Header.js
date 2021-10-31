import { Breadcrumbs, Button, Link, Typography } from "@material-ui/core";
import React from "react";
import styles from "./header.module.css";
import { FcSearch } from "react-icons/fc";
import { useHistory } from "react-router";

function Header({
  keyword,
  setKeyword,
  handleSearch,
  title,
  searchHistory,
  handleTopicClicked,
}) {
  // const classes = useStyles();
  const history = useHistory();

  const handleTextChanged = (e) => {
    setKeyword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  const handleLogoClicked = () => {
    history.go(0);
  };

  return (
    <>
      <div className={styles.header}>
        <img
          src="/images/image 10.png"
          alt="cloud9"
          className={styles.logo}
          onClick={handleLogoClicked}
        />


        {!title ? (
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

              <Button
                variant="contained"
                type="submit"
                disabled={keyword === ""}
              >
                Search
              </Button>
            </div>
          </form>
        ) : (
          <>
            <h1 align="center">{title}</h1>
          </>
        )}

        <Breadcrumbs aria-label="breadcrumb">
          {searchHistory?.slice(0, -1).map((search) => (
            <Typography
              className={styles.breadCrumb}
              key={search}
              underline="hover"
              onClick={(e) => handleTopicClicked(e.target.innerText)}
            >
              {search}
            </Typography>
          ))}
        </Breadcrumbs>
      </div>
    </>
  );
}

export default Header;
