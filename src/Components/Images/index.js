import React from "react";

import { useStyles } from "./styles";
import { ImageList, ImageListItem, Typography } from "@material-ui/core";
import InfiniteScroll from "react-infinite-scroll-component";

const Images = ({ imagesList, setClicked }) => {
  const classes = useStyles();
  if (!imagesList.length) {
    return (
      <>
        <img
          src="/images/not-found.png"
          alt="not-found"
          className="not-found"
        />
        <Typography align="center">Nothing to show</Typography>
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
      <ImageList variant="quilted" cols={3}>
        {imagesList.map((image, idx) => (
          <ImageListItem key={idx}>
            <img
              src={`${image.link}?w=248&fit=crop&auto=format`}
              srcSet={`${image.link}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt="image_item"
              loading="lazy"
              onClick={() => setClicked(imagesList[idx])}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </InfiniteScroll>
  );
};

export default Images;
