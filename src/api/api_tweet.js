import Axios from "axios";
import {
  getAxiosInstance,
  getAxiosInstanceApi,
  getAxiosInstanceJsonServer,
} from "./api.js";

export const getAllTweets = (callback) => {
  //   axios
  //     .get("http://localhost:3000/tweets")

  getAxiosInstanceApi()
    // .get("/tweets")
    .post("getAllTweet")
    .then((response) => {
      //promise
      const data = response.data; //DATAmon
      callback(true, data);
    })
    .catch((error) => {
      console.log(error); ///
      callback(false, error);
    });
};
export const getTweetsByHashTagRequest = (hashTag , callback) => {

  getAxiosInstanceApi()
    // .get("/tweets")
    .post("getAllTweet" , {hashTag})
    .then((response) => {
      //promise
      const data = response.data; //DATAmon
      callback(true, data);
    })
    .catch((error) => {
      console.log(error); ///
      callback(false, error);
    });
};

export const getTweetsByUserRequest = (user , callback) => {

  getAxiosInstanceApi()
    // .get("/tweets")
    .post("getAllTweet" , {user})
    .then((response) => {
      //promise
      const data = response.data; //DATAmon
      callback(true, data);
    })
    .catch((error) => {
      console.log(error); ///
      callback(false, error);
    });
};

export const getHashtags = (callback) => {
  getAxiosInstanceApi()
    .get("getAllHashtags")
    .then((response) => {
      //promise
      const data = response.data; //DATAmon
      callback(true, data);
    })
    .catch((error) => {
      console.log(error);
      callback(false, error);
    });
};

export const getTweeter = (callback) => {
  getAxiosInstanceApi()
    .get("/getAllUser")
    .then((response) => {
      //promise
      const data = response.data; //DATAmon
      callback(true, data);
    })
    .catch((error) => {
      console.log(error);
      callback(false, error);
    });
};

export const newTweetRequest = (data, callback) => {
  getAxiosInstanceApi()
    .post("newTweet", data) //promise <AxiosResponse<T>>
    // .then((res) => {
    //   callback(true);
    // })
    // .catch((error) => {
    //   callback(false);
    // });
    .then((response) => {
      //promise
      const data = response.data; //DATAmon
      callback(true, data);
    })
    .catch((error) => {
      console.log(error); ///
      callback(false, error);
    });
};

export const likeTweetRequest = (id, callback) => {
  getAxiosInstanceApi()
    .get("likeTweet/"+id) 
    .then((response) => {
      const data = response.data; //DATAmon
      callback(true, data);
    })
    .catch((error) => {
      console.log(error); ///
      callback(false, error);
    });
};

