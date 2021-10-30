import React from 'react';

import { useStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";
import Article from './Article';

const Articles = ({ articlesList, setClicked }) => {
    const classes = useStyles();
    if (!articlesList.length) {
        return <Typography>Nothing to show</Typography>
    }
    return (<Box className={classes.box}>
        {articlesList.map((article, idx) => (
            <Article key={idx} article={article} idx={idx} setClicked={() => setClicked(articlesList[idx])} />
        ))}
    </Box>)
};

export default Articles;
