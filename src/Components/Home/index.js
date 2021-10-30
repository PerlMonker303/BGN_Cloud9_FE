import React, { useState } from 'react'
import { useStyles } from "./styles";
import { Grid } from '@mui/material';
import CustomModal from '../CustomModal';
import YouTube from 'react-youtube';
import CustomContainer from '../CustomContainer';
import { getArticlesApi, getDescriptionApi, getImagesApi, getPlaylistApi, getRelatedTopicsApi } from '../../api';
import RelatedTopics from '../RelatedTopics';
import { Typography } from '@material-ui/core';
import Articles from '../Articles';
import Images from '../Images';
import Image from '../Images/Image';
import Header from '../Header/Header';
import Videos from '../Videos';


const Home = () => {
    const classes = useStyles();
    const [keyword, setKeyword] = useState("");
    const [description, setDescription] = useState('');
    const [relatedTopicsList, setRelatedTopicsList] = useState([]);
    const [articlesList, setArticlesList] = useState([]);
    const [imagesList, setImagesList] = useState([]);
    const [videosList, setVideosList] = useState([]);
    const [selectedArticle, setSelectedArticle] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [selectedTopic, setSelectedTopic] = useState('');
    const [isModalArticleOpen, setIsModalArticleOpen] = useState(false);
    const [isModalVideoOpen, setIsModalVideoOpen] = useState(false);
    const [isModalImageOpen, setIsModalImageOpen] = useState(false);
    const [isVideoLoading, setIsVideoLoading] = useState(false);
    const [isInitialPage, setIsInitialPage] = useState(true);

    const handleSearch = async () => {
        setIsInitialPage(false);
        const desc = await getDescriptionApi(keyword);
        desc.length ? setDescription(desc[0].description) : setDescription('');
        const relTopics = await getRelatedTopicsApi(keyword);
        setRelatedTopicsList(relTopics);
        const art = await getArticlesApi(keyword);
        setArticlesList(art);
        const images = await getImagesApi(keyword);
        setImagesList(images);
        const videos = await getPlaylistApi(keyword);
        setVideosList(videos);
    }

    const handleTopicClicked = (topic) => {
        setKeyword(topic);
        setSelectedTopic(topic);
    }

    React.useEffect(() => {
        if (keyword) {
            handleSearch();
        }
    }, [selectedTopic])

    const handleArticleClicked = (article) => {
        setSelectedArticle(article)
        setIsModalArticleOpen(true);
    }

    const handleImageClicked = (image) => {
        setSelectedImage(image)
        setIsModalImageOpen(true);
    }

    const handleVideoClicked = (video) => {
        setSelectedVideo(video);
        setIsModalVideoOpen(true);
        setIsVideoLoading(true);
    }

    const renderPDF = (url) => <object data={url} type="application/pdf" width="100%" height="100%" />

    const videoOptions = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 1,
        },
    };

    return (
        <>
            <Header
                keyword={keyword}
                setKeyword={setKeyword}
                handleSearch={handleSearch}
            />
            <Grid
                container
                className={classes.content}
                p={2}
                // direction="column"
                // alignItems="center"
                // justifyContent="center"
                spacing="12"
            >

                <Grid item xs={12} md={4}>
                    <CustomContainer className={classes.paper} isHidden={!description}>
                        <Typography>Description</Typography>
                        {description}
                    </CustomContainer>

                    <CustomContainer elevation={3} p={12} isHidden={!relatedTopicsList.length}>
                        <Typography>Related topics</Typography>
                        <RelatedTopics relatedTopicsList={relatedTopicsList} setClicked={handleTopicClicked} />
                    </CustomContainer>

                    <CustomContainer isHidden={isInitialPage}>
                        <Typography>Images</Typography>
                        <Images imagesList={imagesList} setClicked={handleImageClicked} />
                    </CustomContainer>
                </Grid>

                <Grid item xs={12} md={4}>

                    <CustomContainer isHidden={isInitialPage}>
                        <Typography>Articles</Typography>
                        <Articles articlesList={articlesList} setClicked={handleArticleClicked} />
                    </CustomContainer>
                </Grid>

                <Grid item xs={12} md={4}>


                    <CustomContainer isHidden={isInitialPage}>
                        <Typography>Videos</Typography>
                        <Videos videosList={videosList} setClicked={handleVideoClicked} />
                    </CustomContainer>
                </Grid>

            </Grid>

            <CustomModal isOpen={isModalArticleOpen} setIsOpen={setIsModalArticleOpen}>
                {selectedArticle && renderPDF(selectedArticle.link)}
            </CustomModal>
            <CustomModal isOpen={isModalVideoOpen} setIsOpen={setIsModalVideoOpen} isLoading={isVideoLoading} resizeAsChild>
                {selectedVideo && <YouTube videoId={selectedVideo.snippet.resourceId.videoId} opts={videoOptions} onReady={() => setIsVideoLoading(false)} />}
            </CustomModal>
            <CustomModal isOpen={isModalImageOpen} setIsOpen={setIsModalImageOpen} resizeAsChild>
                {selectedImage && <Image image={selectedImage} />}
            </CustomModal>
        </>
    )
}

export default Home;