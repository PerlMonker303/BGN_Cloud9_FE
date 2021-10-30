import React from 'react';

import { useStyles } from "./styles";
import { Box } from "@material-ui/core";
import Video from './Video';

const Videos = ({ videosList, setClicked }) => {
    const classes = useStyles();
    return (<Box className={classes.box}>
        {videosList.map((video, idx) => (
            <Video key={idx} video={video} idx={idx} setClicked={() => setClicked(videosList[idx])} />
        ))}
    </Box>)
};

export default Videos;
