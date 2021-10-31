import React from "react";

import { useStyles } from "./styles";
import { Box, CircularProgress, Typography } from "@material-ui/core";
import Video from "./Video";
import InfiniteScroll from "react-infinite-scroll-component";

const Videos = ({ videosList, setClicked, loading = false }) => {
  const classes = useStyles();
  const renderLoader = () => {
    return <Box className={classes.progressBox}>
      <CircularProgress className={classes.progress} />
    </Box>
  }
  if (!videosList.length) {
    return (
      <>
        {loading ? renderLoader() : <>
          <img
            src="/images/not-found.png"
            alt="not-found"
            className="not-found"
          />
          <Typography align="center">Nothing to show</Typography>
        </>}
      </>
    );
  }
  return (
    <InfiniteScroll
      dataLength={videosList.length}
      // next={this.fetchMoreData}
      // hasMore={this.state.hasMore}
      loader={<h4>Loading...</h4>}
      height={700}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      <Box className={classes.box}>
        {videosList.map((video, idx) => (
          <Video
            key={idx}
            video={video}
            idx={idx}
            setClicked={() => setClicked(videosList[idx])}
          />
        ))}
      </Box>
    </InfiniteScroll>
  );
};

export default Videos;
