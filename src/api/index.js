import axios from "axios";

const axiosInstance = axios.create({ baseURL: "http://localhost:5000/" });
const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/playlistItems';

export const getDescriptionApi = (keyword) => {
  // // todo
  return [{ description: "Photosynthesis is the process by which plants use sunlight, water, and carbon dioxide to create oxygen and energy in the form of sugar." }];
  return axiosInstance.get(`paragraphs/${keyword}`)
    .then(res => {
      //return res.data;
    });


};

export const getPlaylistApi = (keyword) => {
  // todo: request playlist url from the backend
  const playlistId = "PLAE36CEFE9200FDDD";
  return axiosInstance.get(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=${playlistId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
    .then(res => {
      return res.data.items;
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

export const getImagesApi = (keyword) => {
  const images = [
    { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Photosynthesis_en.svg/220px-Photosynthesis_en.svg.png' },
    { url: 'https://www.science-sparks.com/wp-content/uploads/2020/04/Photosynthesis-Diagram-1024x759.jpg' },
    { url: 'https://cdn.kastatic.org/googleusercontent/UjsfRK1x93NkUnspJDAovnpUXS0HmRcvBKZFTnBMogdljYiGV-twlFjxruOWflqxDAxUbUx2qYQoj8pfBUXY76izaA' },
    { url: 'https://cdn.kastatic.org/googleusercontent/UjsfRK1x93NkUnspJDAovnpUXS0HmRcvBKZFTnBMogdljYiGV-twlFjxruOWflqxDAxUbUx2qYQoj8pfBUXY76izaA' },
    { url: 'https://www.science-sparks.com/wp-content/uploads/2020/04/Photosynthesis-Diagram-1024x759.jpg' },
    { url: 'https://cdn.kastatic.org/googleusercontent/UjsfRK1x93NkUnspJDAovnpUXS0HmRcvBKZFTnBMogdljYiGV-twlFjxruOWflqxDAxUbUx2qYQoj8pfBUXY76izaA' },
    { url: 'https://cdn.kastatic.org/googleusercontent/UjsfRK1x93NkUnspJDAovnpUXS0HmRcvBKZFTnBMogdljYiGV-twlFjxruOWflqxDAxUbUx2qYQoj8pfBUXY76izaA' },
    { url: 'https://www.science-sparks.com/wp-content/uploads/2020/04/Photosynthesis-Diagram-1024x759.jpg' },
    { url: 'https://cdn.kastatic.org/googleusercontent/UjsfRK1x93NkUnspJDAovnpUXS0HmRcvBKZFTnBMogdljYiGV-twlFjxruOWflqxDAxUbUx2qYQoj8pfBUXY76izaA' },
  ];
  return images;
}