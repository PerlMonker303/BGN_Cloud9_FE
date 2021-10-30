import { Box } from '@mui/system';
import React from 'react'
import RelatedTopic from './RelatedTopic';
import { useStyles } from "./styles";

const RelatedTopics = ({ relatedTopicsList, setClicked }) => {
    const classes = useStyles();
    console.log(relatedTopicsList);
    return (<Box className={classes.box}>
        {relatedTopicsList.map((topic, idx) => (
            <RelatedTopic key={idx} topic={topic} idx={idx} setClicked={() => setClicked(relatedTopicsList[idx])} />
        ))}
    </Box>)

}

export default RelatedTopics;