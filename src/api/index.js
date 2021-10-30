import axios from "axios";

const axiosInstance = axios.create({ baseURL: "http://localhost:3001/" });
const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/playlistItems';

export const getDescriptionApi = (keyword) => {
  return "A description from axios";
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