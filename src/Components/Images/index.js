import React from 'react';

import { useStyles } from "./styles";
import { ImageList, ImageListItem } from "@material-ui/core";

const Images = ({ imagesList, setClicked }) => {
    const classes = useStyles();
    return (
        <ImageList
            variant="quilted"
            cols={3}
        >
            {imagesList.map((image, idx) => (
                <ImageListItem key={idx}>
                    <img
                        src={`${image.url}?w=248&fit=crop&auto=format`}
                        srcSet={`${image.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt='image_item'
                        loading="lazy"
                        onClick={() => setClicked(imagesList[idx])}
                    />
                </ImageListItem>
            ))}
        </ImageList>
    )
};

export default Images;
