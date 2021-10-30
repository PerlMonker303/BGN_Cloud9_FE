import { Link, Typography } from '@material-ui/core';
import React from 'react'
import { useStyles } from "./styles";

const RelatedTopic = ({ topic, idx, color, setClicked }) => {
    const classes = useStyles();
    const handleOnClick = () => {
        setClicked(idx);
    }
    return (
        <Link className={classes.topic} onClick={handleOnClick}>{topic}</Link>
    )
}

export default RelatedTopic;