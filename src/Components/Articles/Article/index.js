import { Link, Typography } from "@material-ui/core";
import { Box } from "@mui/system";
import React from "react";
import { useStyles } from "./styles";

const Article = ({ article, idx, setClicked }) => {
  const classes = useStyles();
  const handleOnClick = () => {
    setClicked(idx);
  };
  return (
    <Box className={classes.box}>
      <Link className={classes.title} onClick={handleOnClick}>
        {article.title}
      </Link>
      <Typography className={`${classes.description} text-ellipsis`}>
        {article.description}
      </Typography>
      {/* This line is meant to be removed */}
      <Typography className={`${classes.description} text-ellipsis`}>
        Just some sample text to showcase the ellipsis. Just some sample text to
        showcase the ellipsis. Just some sample text to showcase the ellipsis.
        Just some sample text to showcase the ellipsis.
      </Typography>
    </Box>
  );
};

export default Article;
