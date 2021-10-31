import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://bgncloud9bk.herokuapp.com/",
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

export const getPlaylistApi = async (keyword) => {
  let playlistId = await axiosInstance.get(`videos/${keyword}`).then((res) => {
    return res.data;
  });
  if (!playlistId.length) return [];
  playlistId = playlistId[0].link;
  return axiosInstance
    .get(
      `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=${playlistId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
    )
    .then((res) => {
      return res.data.items;
    });
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
  const articles = [
    {
      title: "What Is Photosynthesis? | Live Science",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam eget amet nunc urna ornare convallis mi netus...",
      link: "https://arxiv.org/pdf/2104.07079.pdf",
    },
    {
      title: "What Is Photosynthesis? | Live Science",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam eget amet nunc urna ornare convallis mi netus...",
      link: "https://arxiv.org/pdf/2104.07079.pdf",
    },
    {
      title: "What Is Photosynthesis? | Live Science",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam eget amet nunc urna ornare convallis mi netus...",
      link: "https://arxiv.org/pdf/2104.07079.pdf",
    },
    {
      title: "What Is Photosynthesis? | Live Science",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam eget amet nunc urna ornare convallis mi netus...",
      link: "https://arxiv.org/pdf/2104.07079.pdf",
    },
    {
      title: "What Is Photosynthesis? | Live Science",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam eget amet nunc urna ornare convallis mi netus...",
      link: "https://arxiv.org/pdf/2104.07079.pdf",
    },
    {
      title: "What Is Photosynthesis? | Live Science",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam eget amet nunc urna ornare convallis mi netus...",
      link: "https://arxiv.org/pdf/2104.07079.pdf",
    },
    {
      title: "What Is Photosynthesis? | Live Science",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam eget amet nunc urna ornare convallis mi netus...",
      link: "https://arxiv.org/pdf/2104.07079.pdf",
    },
    {
      title: "What Is Photosynthesis? | Live Science",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam eget amet nunc urna ornare convallis mi netus...",
      link: "https://arxiv.org/pdf/2104.07079.pdf",
    },
  ];
  //return articles;
  return axiosInstance.get(`articles/${keyword}`).then((res) => {
    return res.data;
  });
};

export const getImagesApi = (keyword) => {
  const images = [
    {
      link: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Photosynthesis_en.svg/220px-Photosynthesis_en.svg.png",
    },
    {
      link: "https://www.science-sparks.com/wp-content/uploads/2020/04/Photosynthesis-Diagram-1024x759.jpg",
    },
    {
      link: "https://cdn.kastatic.org/googleusercontent/UjsfRK1x93NkUnspJDAovnpUXS0HmRcvBKZFTnBMogdljYiGV-twlFjxruOWflqxDAxUbUx2qYQoj8pfBUXY76izaA",
    },
    {
      link: "https://cdn.kastatic.org/googleusercontent/UjsfRK1x93NkUnspJDAovnpUXS0HmRcvBKZFTnBMogdljYiGV-twlFjxruOWflqxDAxUbUx2qYQoj8pfBUXY76izaA",
    },
    {
      link: "https://www.science-sparks.com/wp-content/uploads/2020/04/Photosynthesis-Diagram-1024x759.jpg",
    },
    {
      link: "https://cdn.kastatic.org/googleusercontent/UjsfRK1x93NkUnspJDAovnpUXS0HmRcvBKZFTnBMogdljYiGV-twlFjxruOWflqxDAxUbUx2qYQoj8pfBUXY76izaA",
    },
    {
      link: "https://cdn.kastatic.org/googleusercontent/UjsfRK1x93NkUnspJDAovnpUXS0HmRcvBKZFTnBMogdljYiGV-twlFjxruOWflqxDAxUbUx2qYQoj8pfBUXY76izaA",
    },
    {
      link: "https://www.science-sparks.com/wp-content/uploads/2020/04/Photosynthesis-Diagram-1024x759.jpg",
    },
    {
      link: "https://cdn.kastatic.org/googleusercontent/UjsfRK1x93NkUnspJDAovnpUXS0HmRcvBKZFTnBMogdljYiGV-twlFjxruOWflqxDAxUbUx2qYQoj8pfBUXY76izaA",
    },
  ];
  //return images;
  return axiosInstance.get(`images/${keyword}`).then((res) => {
    return res.data;
  });
};
