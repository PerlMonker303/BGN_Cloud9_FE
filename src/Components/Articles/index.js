import React from "react";

import { useStyles } from "./styles";
import { Box, CircularProgress, Typography } from "@material-ui/core";
import Article from "./Article";
import InfiniteScroll from "react-infinite-scroll-component";

const Articles = ({ articlesList, setClicked, loading = false }) => {
  const classes = useStyles();
  const articlesAtATime = 10;
  const [articlesIndex, setArticlesIndex] = React.useState(0);
  const [currentArticles, setCurrentArticles] = React.useState([]);
  const fetchMoreData = () => {
    const concatenation = currentArticles.concat(
      articlesList.splice(articlesIndex, articlesAtATime)
    );
    setCurrentArticles(concatenation);
    const newArticlesIndex = articlesIndex + articlesAtATime;
    setArticlesIndex(newArticlesIndex);
  };

  React.useEffect(() => {
    if (!loading && articlesList.length) fetchMoreData();
    if (loading) {
      setCurrentArticles([]);
      setArticlesIndex(0);
    }
  }, [loading]);

  const renderLoader = () => {
    return (
      <Box className={classes.progressBox}>
        <CircularProgress className={classes.progress} />
      </Box>
    );
  };
  if (!articlesList.length) {
    return (
      <>
        {loading ? (
          renderLoader()
        ) : (
          <>
            <img
              src="/images/not-found.png"
              alt="not-found"
              className="not-found"
            />
          </>
        )}
      </>
    );
  }

  return (
    <InfiniteScroll
      dataLength={articlesIndex}
      next={fetchMoreData}
      hasMore={articlesIndex < articlesList.length}
      // loader={renderLoader()}
      height={700}
    >
      <Box
        style={{ height: "100%", paddingRight: "4px" }}
        className={classes.box}
      >
        {currentArticles.map((article, idx) => (
          <Article
            key={idx}
            article={article}
            idx={idx}
            setClicked={() => setClicked(currentArticles[idx])}
          />
        ))}
      </Box>
    </InfiniteScroll>
  );
};

export default Articles;
