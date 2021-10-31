import React from "react";

import { useStyles } from "./styles";
import { Box, CircularProgress } from "@material-ui/core";
import Video from "./Video";
import InfiniteScroll from "react-infinite-scroll-component";

const Videos = ({ videosList, setClicked, loading = false }) => {
  const classes = useStyles();
  const videosAtATime = 3;
  const [videosIndex, setVideosIndex] = React.useState(0);
  const [currentVideos, setCurrentVideos] = React.useState([]);
  const fetchMoreData = () => {
    const videosListSliced = videosList.slice(videosIndex, videosIndex + videosAtATime);
    const concatenation = [...currentVideos, ...videosListSliced];
    setCurrentVideos(concatenation);
    const newArticlesIndex = videosIndex + videosAtATime;
    setVideosIndex(newArticlesIndex);
  };

  React.useEffect(() => {
    if (!loading && videosList.length) fetchMoreData();
    if (loading) {
      setVideosIndex(0);
      setCurrentVideos([]);
    }
  }, [loading]);

  const renderLoader = () => {
    return (
      <Box className={classes.progressBox}>
        <CircularProgress className={classes.progress} />
      </Box>
    );
  };
  if (!videosList.length) {
    return (
      <>
        {loading ? (
          renderLoader()
        ) : (
          <>
            <img
              src="/images/not-found.png"
              alt="not-found"
              className="not-found"
            />
          </>
        )}
      </>
    );
  }
  return (
    <InfiniteScroll
      dataLength={currentVideos.length}
      next={fetchMoreData}
      hasMore={videosIndex < videosList.length}
      height={700}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      <Box className={classes.box}>
        {currentVideos.map((video, idx) => (
          <Video
            key={idx}
            video={video}
            idx={idx}
            setClicked={() => setClicked(videosList[idx])}
          />
        ))}
      </Box>
    </InfiniteScroll>
  );
};

export default Videos;
