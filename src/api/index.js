import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://bgncloud9bk.herokuapp.com/"
});

export const getDescriptionApi = async (keyword) => {
  let relatedWords = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
  );
  let data = await relatedWords.json();
  if (!data.length) {
    return []
  }
  const result = data[0].meanings[0].definitions.slice(0, 3);
  return result;
};

export const getVideosApi = async (keyword) => {
  return axiosInstance.get(`videos/${keyword}`).then((res) => {
    return res.data;
  });
  // return [];
};

export const getRelatedTopicsApi = async (keyword) => {
  let relatedWords = await fetch(
    `https://api.datamuse.com/words?rel_trg=${keyword}&max=8`
  );
  let data = await relatedWords.json();
  return data;
};

export const getArticlesApi = (keyword) => {
  return axiosInstance.get(`articles/${keyword}`).then((res) => {
    return res.data;
  });
};

export const getImagesApi = (keyword) => {
  // data comes as [{link, thumbnail}]
  return axiosInstance.get(`images/${keyword}`).then((res) => {
    return res.data;
  });
  // return [];
};
