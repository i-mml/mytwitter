import React, { useEffect, useState } from "react";
import useStyle from "./style.js";
import Header from "../../headerF/header.js";
import NewTweet from "./components/newTweet.js";
import TweetList from "./components/TweetList.js";
import Divider from "@material-ui/core/Divider";
import HomeIcon from "@material-ui/icons/Home";
import axios from "axios";
import { getAllTweets } from "../../../api/api_tweet.js";
import Search from "./components/search.js";
import {
  useTweetState,
  useTweetDispatch,
  setTweetList  
} from "../../../context/TweetContext.js";
// import { useTranslation } from "react-i18next";

const Home = () => {
  const classes = useStyle();
    
  // const [tweets, setTweets] = useState([]); //state
  const { tweetList: tweets } = useTweetState();
  const tweetDispatch = useTweetDispatch();

  useEffect(() => {
    // axios.get("http://localhost:3000/tweets")
    //   .then((response) => {   //promise
    //     const data = response.data; //DATAmon
    //     setTweets(data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // ###*** ina raftan payin ***####
    // getAllTweets((isOk, dataOrError) => {
    //   if (!isOk) return alert(dataOrError.message);
    //   else setTweets(dataOrError);
    // }); //call back
    updateTweets();
  }, []);

  const updateTweets = () => {
    getAllTweets((isOk, dataOrError) => {
      if (!isOk) return alert(dataOrError.message);
      else setTweetList(tweetDispatch, dataOrError);
    }); //call back
  };

  return (
    <div className={classes.root}>
  <Header headTitle={"خانه"} headIcon={<HomeIcon />} /> 
      <Divider />
      <NewTweet updateTweets={updateTweets} />
      <TweetList data={tweets} />
    </div>
  );
};

export default Home;
