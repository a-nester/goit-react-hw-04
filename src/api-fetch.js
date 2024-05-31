import axios from "axios";
const BASE_URL = "https://api.unsplash.com/search/photos";
export const createFetch = async (topic, page) => {
  const response = await axios.get(BASE_URL, {
    params: {
      client_id: "DGBjysr0h1RikZj98OV23AQkRWTDZs5M74r2kwonZrU",
      query: `${topic}`,
      page,
      per_page: 12,
    },
  });

  return response.data;
};
