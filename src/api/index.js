import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://bgncloud9bk.herokuapp.com/"
});
const YOUTUBE_PLAYLIST_ITEMS_API =
  "https://www.googleapis.com/youtube/v3/playlistItems";

export const getDescriptionApi = async (keyword) => {
  //return [{ description: "Photosynthesis is the process by which plants use sunlight, water, and carbon dioxide to create oxygen and energy in the form of sugar." }];
  let relatedWords = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
  );
  let data = await relatedWords.json();
  if (!data.length) {
    return []
  }
  const result = data[0].meanings[0].definitions.slice(0, 3);
  return result;
  // return axiosInstance.get(`paragraphs/${keyword}`).then((res) => {
  //   return res.data;
  // });
};

export const getVideosApi = async (keyword) => {
  // return axiosInstance.get(`videos/${keyword}`).then((res) => {
  //   return res.data;
  // });

  return [];
};

export const getRelatedTopicsApi = async (keyword) => {
  // return ["Photosynthesis", "Topic 2", "Topic 3"];
  // return axiosInstance.get(`tbd?keyword=${keyword}`)
  // .then(res => {
  //   return res;
  // });

  let relatedWords = await fetch(
    `https://api.datamuse.com/words?rel_trg=${keyword}&max=8`
  );
  let data = await relatedWords.json();
  return data;

  // .then((res) => res.json())
  // .then((data) =>
  //   data.map(function (value) {
  //     return console.log(value.word);
  //   })
  // );
};

export const getArticlesApi = (keyword) => {
  return axiosInstance.get(`articles/${keyword}`).then((res) => {
    return res.data;
  });
};

export const getImagesApi = (keyword) => {
  const apiKey = 'AIzaSyDi5NqKuvZaFw2TPyhPGDGZC6o59Mp99Gc';
  const cx = 'dd7b9ed7ab5bbcd14';

  // data comes as [{link, thumbnail}]
  return axiosInstance.get(`images/${keyword}`).then((res) => {
    return res.data;
  });
};
