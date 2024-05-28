import { axios } from "axios";

export const createFetch = async () => {
  try {
    const response = await axios.get("https://api.unsplash.com/", {
      header: {
        "Accept-Version": "v1",
      },
    });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
  //   return response;
};
