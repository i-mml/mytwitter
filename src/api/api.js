import Axios from "axios";

// Axios.create({
// baseURL: "",
// });

export const getAxiosInstance = () => {
  return Axios.create({
    baseURL: "http://localhost:3000",
    headers: {
      //bayad bashe vali chon dakhel JSON-SERVER chizi be name headers nadarim alaki yechi mizarim

      API_KEY: "alaki",
    },
  });
};

export const getAxiosInstanceJsonServer = () => {
  return Axios.create({
    baseURL: "https://twitterapi.liara.run",
    headers: {
      //bayad bashe vali chon dakhel JSON-SERVER chizi be name headers nadarim alaki yechi mizarim

      API_KEY: "alakii",
    },
  });
};

export const getAxiosInstanceAuth = () => {
  return Axios.create({
    baseURL: "https://twitterapi.liara.run/api/",
    headers: {
      //bayad bashe vali chon dakhel JSON-SERVER chizi be name headers nadarim alaki yechi mizarim

     // API_KEY: "alaki",
    },
  });
};

export const getAxiosInstanceApi = () => {
  return Axios.create({
    baseURL: "https://twitterapi.liara.run/api/",
    headers: {
      //bayad bashe vali chon dakhel JSON-SERVER chizi be name headers nadarim alaki yechi mizarim
      "x-auth-token": localStorage.getItem("x-auth-token"),
    },
  });
};
