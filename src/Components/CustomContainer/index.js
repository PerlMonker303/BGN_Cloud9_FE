import { Paper } from '@mui/material';
import React from 'react'
import { useStyles } from "./styles";

const CustomContainer = ({ children }) => {
    const classes = useStyles();
    
    return (
        <Paper className={classes.paper}>
            {children}
        </Paper>
    )
}

export default CustomContainer;