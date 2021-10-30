import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useStyles } from "./styles";
import { Button, Grid } from '@mui/material';
import CustomModal from '../CustomModal';
import YouTube from 'react-youtube';
import CustomContainer from '../CustomContainer';
import { getDescriptionApi, getPlaylistApi } from '../../api';

const Home = () => {
    const classes = useStyles();
    const [keyword, setKeyword] = useState("");
    const [description, setDescription] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalVideoOpen, setIsModalVideoOpen] = useState(false);

    const handleTextChanged = (e) => {
        setKeyword(e.target.value);
    }

    const handleButtonClicked = async () => {
        const desc = await getDescriptionApi(keyword);
        console.log(desc);

        // also test the youtube api
        const youtubeData = await getPlaylistApi("PLAE36CEFE9200FDDD");
        console.log(youtubeData);
        youtubeData.items.map((video) => {
            console.log(video);
        })
    }

    const handleModalClicked = () => {
        setIsModalOpen(true);
    }

    const handleModalVideoClicked = () => {
        setIsModalVideoOpen(true);
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
                    <Typography className={classes.title}>
                        Enter a keyword
                    </Typography>
                </Grid>
                <Grid item>
                    <TextField label="ex: Photosynthesis" variant="outlined" onChange={handleTextChanged} />
                </Grid>
                <Grid item>
                    <Button onClick={handleButtonClicked}>Search</Button>
                </Grid>
                <Grid item>
                    <Button onClick={handleModalClicked}>Modal pdf</Button>
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
            </Grid >

            <CustomModal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
                {renderPDF("https://arxiv.org/pdf/2104.07079.pdf")}
            </CustomModal>
            <CustomModal isOpen={isModalVideoOpen} setIsOpen={setIsModalVideoOpen}>
                <YouTube videoId="VLy6j3j95Ac" opts={videoOptions} />
            </CustomModal>
        </>
    )
}

export default Home;