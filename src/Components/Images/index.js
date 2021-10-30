import React from "react";

import { useStyles } from "./styles";
import { ImageList, ImageListItem, Typography } from "@material-ui/core";

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
  );
};

export default Images;
