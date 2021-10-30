import axios from "axios";

const axiosInstance = axios.create({ baseURL: "https://bgncloud9bk.herokuapp.com/" });
const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/playlistItems';

export const getDescriptionApi = (keyword) => {
  // // todo
  //return [{ description: "Photosynthesis is the process by which plants use sunlight, water, and carbon dioxide to create oxygen and energy in the form of sugar." }];
  return axiosInstance.get(`paragraphs/${keyword}`)
    .then(res => {
      return res.data;
    });


};

export const getPlaylistApi = async (keyword) => {
  // todo: request playlist url from the backend

  let playlistId = await axiosInstance.get(`videos/${keyword}`)
    .then(res => {
      return res.data;
    });
  if (!playlistId.length)
    return [];
  playlistId = playlistId[0].link;
  //const playlistId = "PLAE36CEFE9200FDDD";
  return axiosInstance.get(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=${playlistId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
    .then(res => {
      return res.data.items;
    })
}

export const getRelatedTopicsApi = (keyword) => {
  return ['Photosynthesis', 'Topic 2', 'Topic 3']
  // todo
  // return axiosInstance.get(`tbd?keyword=${keyword}`)
  // .then(res => {
  //   return res;
  // });
}

export const getArticlesApi = (keyword) => {
  const articles = [
    { title: 'What Is Photosynthesis? | Live Science', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam eget amet nunc urna ornare convallis mi netus...', link: 'https://arxiv.org/pdf/2104.07079.pdf' },
    { title: 'What Is Photosynthesis? | Live Science', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam eget amet nunc urna ornare convallis mi netus...', link: 'https://arxiv.org/pdf/2104.07079.pdf' },
    { title: 'What Is Photosynthesis? | Live Science', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam eget amet nunc urna ornare convallis mi netus...', link: 'https://arxiv.org/pdf/2104.07079.pdf' },
    { title: 'What Is Photosynthesis? | Live Science', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam eget amet nunc urna ornare convallis mi netus...', link: 'https://arxiv.org/pdf/2104.07079.pdf' },
    { title: 'What Is Photosynthesis? | Live Science', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam eget amet nunc urna ornare convallis mi netus...', link: 'https://arxiv.org/pdf/2104.07079.pdf' },
    { title: 'What Is Photosynthesis? | Live Science', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam eget amet nunc urna ornare convallis mi netus...', link: 'https://arxiv.org/pdf/2104.07079.pdf' },
    { title: 'What Is Photosynthesis? | Live Science', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam eget amet nunc urna ornare convallis mi netus...', link: 'https://arxiv.org/pdf/2104.07079.pdf' },
    { title: 'What Is Photosynthesis? | Live Science', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam eget amet nunc urna ornare convallis mi netus...', link: 'https://arxiv.org/pdf/2104.07079.pdf' },
  ];
  //return articles;
  return axiosInstance.get(`articles/${keyword}`)
    .then(res => {
      return res.data;
    });
}

export const getImagesApi = (keyword) => {
  const images = [
    { link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Photosynthesis_en.svg/220px-Photosynthesis_en.svg.png' },
    { link: 'https://www.science-sparks.com/wp-content/uploads/2020/04/Photosynthesis-Diagram-1024x759.jpg' },
    { link: 'https://cdn.kastatic.org/googleusercontent/UjsfRK1x93NkUnspJDAovnpUXS0HmRcvBKZFTnBMogdljYiGV-twlFjxruOWflqxDAxUbUx2qYQoj8pfBUXY76izaA' },
    { link: 'https://cdn.kastatic.org/googleusercontent/UjsfRK1x93NkUnspJDAovnpUXS0HmRcvBKZFTnBMogdljYiGV-twlFjxruOWflqxDAxUbUx2qYQoj8pfBUXY76izaA' },
    { link: 'https://www.science-sparks.com/wp-content/uploads/2020/04/Photosynthesis-Diagram-1024x759.jpg' },
    { link: 'https://cdn.kastatic.org/googleusercontent/UjsfRK1x93NkUnspJDAovnpUXS0HmRcvBKZFTnBMogdljYiGV-twlFjxruOWflqxDAxUbUx2qYQoj8pfBUXY76izaA' },
    { link: 'https://cdn.kastatic.org/googleusercontent/UjsfRK1x93NkUnspJDAovnpUXS0HmRcvBKZFTnBMogdljYiGV-twlFjxruOWflqxDAxUbUx2qYQoj8pfBUXY76izaA' },
    { link: 'https://www.science-sparks.com/wp-content/uploads/2020/04/Photosynthesis-Diagram-1024x759.jpg' },
    { link: 'https://cdn.kastatic.org/googleusercontent/UjsfRK1x93NkUnspJDAovnpUXS0HmRcvBKZFTnBMogdljYiGV-twlFjxruOWflqxDAxUbUx2qYQoj8pfBUXY76izaA' },
  ];
  //return images;
  return axiosInstance.get(`images/${keyword}`)
    .then(res => {
      return res.data;
    });
}