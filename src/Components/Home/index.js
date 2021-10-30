import React, { useState } from 'react'
import { useStyles } from "./styles";
import { Button, Grid } from '@mui/material';
import CustomModal from '../CustomModal';
import YouTube from 'react-youtube';
import CustomContainer from '../CustomContainer';
import { getArticlesApi, getDescriptionApi, getImagesApi, getPlaylistApi, getRelatedTopicsApi } from '../../api';
import RelatedTopics from '../RelatedTopics';
import { Typography } from '@material-ui/core';
import SearchBar from '../SearchBar'
import Articles from '../Articles';
import Images from '../Images';
import Image from '../Images/Image';

const Home = () => {
    const classes = useStyles();
    const [keyword, setKeyword] = useState("");
    const [description, setDescription] = useState('');
    const [relatedTopicsList, setRelatedTopicsList] = useState([]);
    const [articlesList, setArticlesList] = useState([]);
    const [imagesList, setImagesList] = useState([]);
    const [selectedArticle, setSelectedArticle] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [isModalArticleOpen, setIsModalArticleOpen] = useState(false);
    const [isModalVideoOpen, setIsModalVideoOpen] = useState(false);
    const [isModalImageOpen, setIsModalImageOpen] = useState(false);

    const handleButtonClicked = async () => {
        const desc = await getDescriptionApi(keyword);
        setDescription(desc);
        const relTopics = await getRelatedTopicsApi(keyword);
        setRelatedTopicsList(relTopics);
        const art = await getArticlesApi(keyword);
        setArticlesList(art);
        const images = await getImagesApi(keyword);
        setImagesList(images);

        // also test the youtube api
        const youtubeData = await getPlaylistApi("PLAE36CEFE9200FDDD");
        console.log(youtubeData);
        youtubeData.items.map((video) => {
            console.log(video);
        })
    }

    const handleModalVideoClicked = () => {
        setIsModalVideoOpen(true);
    }

    const handleTopicClicked = (topic) => {
        console.log(topic);
        setKeyword(topic);
        handleButtonClicked();
    }

    const handleArticleClicked = (article) => {
        setSelectedArticle(article)
        setIsModalArticleOpen(true);
    }

    const handleImageClicked = (image) => {
        console.log(image);
        setSelectedImage(image)
        setIsModalImageOpen(true);
        console.log(selectedImage);
    }

    const renderPDF = (url) => <object data={url} type="application/pdf" width="100%" height="100%" />

    const videoOptions = {
        height: '390',
        width: '640',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    const dummy_photosynthesis = "Photosynthesis is the process by which plants use sunlight, water, and carbon dioxide to create oxygen and energy in the form of sugar.";
    const dummy_ecosystem = "An ecosystem is a geographic area where plants, animals, and other organisms, as well as weather and landscape, work together to form a bubble of life. Ecosystems contain biotic or living, parts, as well as abiotic factors, or nonliving parts. ... Abiotic factors include rocks, temperature, and humidity.";
    const dummy_metabolism = "Metabolism is the process by which your body converts what you eat and drink into energy. ... Even when you're at rest, your body needs energy for all its \"hidden\" functions, such as breathing, circulating blood, adjusting hormone levels, and growing and repairing cells.";

    return (
        <>
            <Grid
                container
                className={classes.content}
                direction="column"
                alignItems="center"
                justifyContent="center"
                spacing="6"
            >
                <Grid item>
                    <SearchBar keyword={keyword} setKeyword={setKeyword} />
                </Grid>
                <Grid item>
                    <Button onClick={handleButtonClicked}>Search</Button>
                </Grid>

                <Grid item>
                    <Button onClick={handleModalVideoClicked}>Modal video</Button>
                </Grid>
                <Grid item>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <CustomContainer>
                                {dummy_photosynthesis}
                            </CustomContainer>
                        </Grid>
                        <Grid item xs={4}>
                            <CustomContainer>
                                {dummy_ecosystem}
                            </CustomContainer>
                        </Grid>
                        <Grid item xs={4}>
                            <CustomContainer>
                                {dummy_metabolism}
                            </CustomContainer>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <CustomContainer isHidden={!relatedTopicsList.length}>
                        <Typography>Related topics</Typography>
                        <RelatedTopics relatedTopicsList={relatedTopicsList} setClicked={handleTopicClicked} />
                    </CustomContainer>
                </Grid>
                <Grid item>
                    <CustomContainer isHidden={!articlesList.length}>
                        <Typography>Articles</Typography>
                        <Articles articlesList={articlesList} setClicked={handleArticleClicked} />
                    </CustomContainer>
                </Grid>
                <Grid item>
                    <CustomContainer isHidden={!imagesList.length}>
                        <Typography>Images</Typography>
                        <Images imagesList={imagesList} setClicked={handleImageClicked} />
                    </CustomContainer>
                </Grid>
            </Grid >

            <CustomModal isOpen={isModalArticleOpen} setIsOpen={setIsModalArticleOpen}>
                {selectedArticle && renderPDF(selectedArticle.url)}
            </CustomModal>
            <CustomModal isOpen={isModalVideoOpen} setIsOpen={setIsModalVideoOpen}>
                <YouTube videoId="VLy6j3j95Ac" opts={videoOptions} />
            </CustomModal>
            <CustomModal isOpen={isModalImageOpen} setIsOpen={setIsModalImageOpen} resizeAsChild>
                {selectedImage && <Image image={selectedImage} />}
            </CustomModal>
        </>
    )
}

export default Home;