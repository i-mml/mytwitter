import React, { useEffect, useState } from "react";
import useStyle from "../home/style.js";
import Header from "../../headerF/header.js";
import TweetList from "../home/components/TweetList.js";
import Divider from "@material-ui/core/Divider";
import Axios from "axios";
import {
  getAllTweets,
  getTweetsByHashTagRequest,
} from "../../../api/api_tweet.js";
import { toast } from "react-toastify";
import { setTweetList, useTweetDispatch ,useTweetState } from "../../../context/TweetContext.js";
import { useLocation } from "react-router-dom";

const TweetsByHashTags = (props) => {
  const classes = useStyle();

  // const [tweets, setTweets] = useState([]); //state
  const { tweetList } = useTweetState();
  const tweetDispatch = useTweetDispatch();
  const location = useLocation();

  useEffect(() => {
    getTweetsByHashTagRequest(
      props.match.params.hashtag,
      (isOk, dataOrError) => {
        if (!isOk) return toast.alert(dataOrError.message);
        else setTweetList(tweetDispatch, dataOrError);
      }
    );
  }, [location]);

  return (
    <div className={classes.root}>
      <Header
        headTitle={props.match.params.hashtag}
        headIcon={
          <img
            src={"/images/hashtag5.png"}
            style={{ width: "25px", height: "25px" }}
          />
        }
      />
      <Divider />
      <TweetList data={tweetList} />
    </div>
  );
};

export default TweetsByHashTags;
