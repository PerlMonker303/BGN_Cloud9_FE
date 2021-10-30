import axios from "axios";

const axiosInstance = axios.create({ baseURL: "http://localhost:3001/" });
const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/playlistItems';

export const getDescriptionApi = (keyword) => {
  return "A description from axios";
  // todo
  // return axiosInstance.get(`description?keyword=${keyword}`)
  // .then(res => {
  //   return res;
  // });
};

export const getPlaylistApi = (playlistId) => {
  return axiosInstance.get(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=${playlistId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
    .then(res => {
      return res.data;
    })
}

export const getRelatedTopicsApi = (keyword) => {
  return ['Topic 1', 'Topic 2', 'Topic 3']
  // todo
  // return axiosInstance.get(`tbd?keyword=${keyword}`)
  // .then(res => {
  //   return res;
  // });
}

export const getArticlesApi = (keyword) => {
  const articles = [
    { title: 'What Is Photosynthesis? | Live Science', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam eget amet nunc urna ornare convallis mi netus...', url: 'https://arxiv.org/pdf/2104.07079.pdf' },
    { title: 'What Is Photosynthesis? | Live Science', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam eget amet nunc urna ornare convallis mi netus...', url: 'https://arxiv.org/pdf/2104.07079.pdf' },
    { title: 'What Is Photosynthesis? | Live Science', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam eget amet nunc urna ornare convallis mi netus...', url: 'https://arxiv.org/pdf/2104.07079.pdf' },
    { title: 'What Is Photosynthesis? | Live Science', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam eget amet nunc urna ornare convallis mi netus...', url: 'https://arxiv.org/pdf/2104.07079.pdf' },
  ];
  return articles;
  // todo
}