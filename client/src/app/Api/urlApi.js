import axios from "axios";

export const changeUrl = async (urldata) => {
  const response = await axios({
    method: "post",
    url: ` http://localhost:3000/url`,
    data: { urldata },
    headers: {
      "Content-Type": "application/json",
    },
  });

  console.log("res", response);
};
