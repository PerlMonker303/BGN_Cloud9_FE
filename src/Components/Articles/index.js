import React from 'react';

import { useStyles } from "./styles";
import { Box } from "@material-ui/core";
import Article from './Article';

const Articles = ({ articlesList, setClicked }) => {
    const classes = useStyles();
    return (<Box className={classes.box}>
        {articlesList.map((article, idx) => (
            <Article key={idx} article={article} idx={idx} setClicked={() => setClicked(articlesList[idx])} />
        ))}
    </Box>)
};

export default Articles;
