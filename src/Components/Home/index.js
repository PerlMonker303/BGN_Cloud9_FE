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
import { startsWithCapital, capitalizeFirstLetter } from '../../utils';


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
    const [articlesLoading, setArticlesLoading] = useState(false);
    const [imagesLoading, setImagesLoading] = useState(false);
    const [videosLoading, setVideosLoading] = useState(false);
    const [searchHistory, setSearchHistory] = useState([]);

    const handleSearch = async () => {
        isInitialPage && setIsInitialPage(false);
        resetStates();

        setArticlesLoading(true);
        setImagesLoading(true);
        setVideosLoading(true);

        let desc = await getDescriptionApi(keyword);
        if (desc.length === 0) {
            setDescription('');
        } else {
            if (desc.length === 1 && !startsWithCapital(desc[0].definition)) {
                desc[0] = { definition: capitalizeFirstLetter(desc[0].definition) };
            }
            setDescription(desc)
        }
        const relTopics = await getRelatedTopicsApi(keyword);
        setRelatedTopicsList(relTopics.map((value) => {
            return value.word
        }))
        const art = await getArticlesApi(keyword);
        setArticlesList(art);
        setArticlesLoading(false);
        const images = await getImagesApi(keyword);
        setImagesList(images);
        setImagesLoading(false);
        const videos = await getPlaylistApi(keyword);
        setVideosList(videos);
        setVideosLoading(false);

        setSearchHistory([...searchHistory, keyword])
    }

    const resetStates = () => {
        setDescription('');
        setRelatedTopicsList([]);
        setArticlesList([]);
        setImagesList([]);
        setVideosList([]);
    }

    const handleTopicClicked = (topic) => {
        resetStates();
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
        setArticlesLoading(true);
    }

    const handleImageClicked = (image) => {
        setSelectedImage(image)
        setIsModalImageOpen(true);
        setImagesLoading(true);
    }

    const handleVideoClicked = (video) => {
        setSelectedVideo(video);
        setIsModalVideoOpen(true);
        setIsVideoLoading(true);
    }

    const renderPDF = (url) => {
        if (url.startsWith('http') && !url.startsWith('https')) {
            url = url.replace('http', 'https')
        }
        return <object data={url} type="application/pdf" width="100%" height="100%" />
    }

    const videoOptions = {
        height: '490',
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
                        <Typography variant="h6">Description</Typography>
                        {description && description.map((desc, idx) => {
                            return (
                                <p key={idx} style={{ textOverflow: 'ellipsis' }}>
                                    {description.length > 1 ? `${idx + 1}. ${desc.definition}` : desc.definition}
                                </p>
                            )
                        })}

                    </CustomContainer>

                    <CustomContainer elevation={3} p={12} isHidden={!relatedTopicsList.length}>
                        <Typography variant="h6">Related topics</Typography>
                        <RelatedTopics relatedTopicsList={relatedTopicsList} setClicked={handleTopicClicked} />
                    </CustomContainer>

                    <CustomContainer isHidden={isInitialPage}>
                        <Typography variant="h6">Images</Typography>
                        <Images imagesList={imagesList} setClicked={handleImageClicked} loading={imagesLoading} />
                    </CustomContainer>
                </Grid>

                <Grid item xs={12} md={4}>

                    <CustomContainer isHidden={isInitialPage}>
                        <Typography variant="h6">Articles</Typography>
                        <Articles articlesList={articlesList} setClicked={handleArticleClicked} loading={articlesLoading} />
                    </CustomContainer>
                </Grid>

                <Grid item xs={12} md={4}>


                    <CustomContainer isHidden={isInitialPage}>
                        <Typography variant="h6" >Videos</Typography>
                        <Videos videosList={videosList} setClicked={handleVideoClicked} loading={videosLoading} />
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
                {selectedImage && <Image image={selectedImage} width={'550'} />}
            </CustomModal>
        </>
    )
}

export default Home;