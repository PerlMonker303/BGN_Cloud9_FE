import { Link, Typography } from '@material-ui/core';
import { Box } from '@mui/system';
import React from 'react'
import { useStyles } from "./styles";

const Video = ({ video, idx, setClicked }) => {
    const classes = useStyles();
    const handleOnClick = () => {
        setClicked(idx);
    }
    return (
        <Box className={classes.box}>
            <Link className={classes.title} onClick={handleOnClick}>{video.snippet.title}</Link>
            <Box className={classes.thumbnail}>
                <img src={video.snippet.thumbnails.standard.url} alt='thumbnail' width='350px' onClick={setClicked} />
            </Box>
        </Box>
    )
}

export default Video;