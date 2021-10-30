import React from 'react';

import { useStyles } from "./styles";
import { Input } from "@material-ui/core";

const SearchBar = ({ keyword, setKeyword }) => {
    const classes = useStyles();

    const handleTextChanged = (e) => {
        setKeyword(e.target.value);
    }

    return (
        <Input placeholder="Search for a keyword" onChange={handleTextChanged} />
    );
};

export default SearchBar;
