import { Box } from '@mui/system';
import React from 'react'
import { useStyles } from "./styles";

const Image = ({ image, width = '-1' }) => {
    const classes = useStyles();
    return (
        <Box className={classes.box}>
            <img src={image.link} alt='image_large' width={width === '-1' ? '300' : width} />
        </Box>
    )
}

export default Image;