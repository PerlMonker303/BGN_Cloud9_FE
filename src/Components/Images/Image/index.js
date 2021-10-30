import { Box } from '@mui/system';
import React from 'react'
import { useStyles } from "./styles";

const Image = ({ image }) => {
    const classes = useStyles();
    return (
        <Box className={classes.box}>
            <img src={image.url} alt='image_large' />
        </Box>
    )
}

export default Image;