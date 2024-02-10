import axios from "axios";

export const changeUrl = async (urldata) => {
  const response = await axios({
    method: "post",
    url: `https://urlshortner-hm79.onrender.com/url`,
    data: { urldata },
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data.id;
};
