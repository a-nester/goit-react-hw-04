import axios from "axios";
axios.defaults.baseURL =
  "https://api.unsplash.com/photos/?client_id=DGBjysr0h1RikZj98OV23AQkRWTDZs5M74r2kwonZrU";
export const createFetch = async (topic) => {
  console.log(topic);
  const response = await axios.get();
  return response.data;
};

// `search?query=${topic}`;
// `/search/photos?query=${topic}`
