import React from "react";

import { useStyles } from "./styles";
import {
  CircularProgress,
  ImageList,
  ImageListItem,
  Typography,
} from "@material-ui/core";
import InfiniteScroll from "react-infinite-scroll-component";
import { Box } from "@mui/system";

const Images = ({ imagesList, setClicked, loading = false }) => {
  const classes = useStyles();
  const renderLoader = () => {
    return (
      <Box className={classes.progressBox}>
        <CircularProgress className={classes.progress} />
      </Box>
    );
  };
  if (!imagesList.length) {
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
      dataLength={imagesList.length}
      // next={this.fetchMoreData}
      // hasMore={this.state.hasMore}
      loader={<h4>Loading...</h4>}
      height={300}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      {/* <ImageList variant="masonry" cols={3}>
        {imagesList.map((image, idx) => (
          <ImageListItem key={idx}>
            <img
              src={`${image.thumbnail}?w=248&fit=crop&auto=format`}
              srcSet={`${image.thumbnail}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt="image_item"
              loading="lazy"
              onClick={() => setClicked(imagesList[idx])}
            />
          </ImageListItem>
        ))}
      </ImageList> */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "10px",
        }}
      >
        {imagesList.map((image, idx) => (
          <img
            key={idx}
            src={`${image.thumbnail}?w=248&fit=crop&auto=format`}
            srcSet={`${image.thumbnail}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt="image_item"
            loading="lazy"
            className="image-img"
            onClick={() => setClicked(imagesList[idx])}
          />
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default Images;
