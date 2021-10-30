import { Paper } from '@mui/material';
import React from 'react'
import { useStyles } from "./styles";

const CustomContainer = ({ isHidden, children }) => {
    const classes = useStyles();
    if (isHidden) {
        return <></>
    }
    return (
        <Paper className={classes.paper}>
            {children}
        </Paper>
    )
}

export default CustomContainer;