import React from "react";

import { useStyles } from "./styles";
import { Box, CircularProgress, Typography } from "@material-ui/core";
import Article from "./Article";
import InfiniteScroll from "react-infinite-scroll-component";

const Articles = ({ articlesList, setClicked, loading = false }) => {
  const classes = useStyles();
  const renderLoader = () => {
    return <Box className={classes.progressBox}>
      <CircularProgress className={classes.progress} />
    </Box>
  }
  if (!articlesList.length) {
    return (
      <>
        {loading ? renderLoader() :
          <><img
            src="/images/not-found.png"
            alt="not-found"
            className="not-found"
          />
            <Typography align="center">Nothing to show</Typography>
          </>
        }
      </>
    );
  }

  return (
    <InfiniteScroll
      dataLength={articlesList.length}
      // next={this.fetchMoreData}
      // hasMore={this.state.hasMore}
      loader={renderLoader()}
      height={700}
    >
      <Box style={{ height: "100%", paddingRight: "4px" }} className={classes.box}>
        {articlesList.map((article, idx) => (
          <Article
            key={idx}
            article={article}
            idx={idx}
            setClicked={() => setClicked(articlesList[idx])}
          />
        ))}
      </Box>
    </InfiniteScroll>
  );
};

export default Articles;
