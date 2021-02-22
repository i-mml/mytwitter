import Axios from "axios";
import {
  getAxiosInstance,
  getAxiosInstanceApi,
  getAxiosInstanceAuth,
  getAxiosInstanceJsonServer,
} from "./api.js";

export const loginApi = (user, callback) => {
  //   axios
  //     .get("http://localhost:3000/tweets")

  getAxiosInstanceAuth()
    .post("login", user)
    .then((response) => {
      //promise
      const data = response.data; //DATAmon
      callback(true, data);
    })
    .catch((error) => {
      console.log(error);
      callback(false, error.response.data.message);
    });
};


export const registerApi = (user, callback) => {
  //   axios
  //     .get("http://localhost:3000/tweets")

  getAxiosInstanceAuth()
    .post("register", user)
    .then((response) => {
      //promise
      const data = response.data; //DATAmon
      callback(true, data);
    })
    .catch((error) => {
      console.log(error);
      callback(false, error.response.data.message);
    });
};

export const uploadUserPhoto = (photo, callback) => {
  //   axios
  //     .get("http://localhost:3000/tweets")

  getAxiosInstanceApi()
    .post("uploadUserPhoto", photo)
    .then((response) => {
      //promise
      const data = response.data; //DATAmon
      callback(true, data);
    })
    .catch((error) => {
      console.log(error);
      callback(false, error.response.data.message);
    });
};


export const getProfileRequest = ( callback) => {
  getAxiosInstanceApi()
    .get("getProfile")
    .then((response) => {
      //promise
      const data = response.data; //DATAmon
      callback(true, data);
    })
    .catch((error) => {
      console.log(error);
      callback(false, error.response.data.message);
    });
};