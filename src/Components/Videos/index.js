import React from 'react';

import { useStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";
import Video from './Video';

const Videos = ({ videosList, setClicked }) => {
    const classes = useStyles();
    if (!videosList.length) {
        return <Typography>Nothing to show</Typography>
    }
    return (<Box className={classes.box}>
        {videosList.map((video, idx) => (
            <Video key={idx} video={video} idx={idx} setClicked={() => setClicked(videosList[idx])} />
        ))}
    </Box>)
};

export default Videos;
