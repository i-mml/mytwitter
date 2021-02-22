import React, { useEffect, useState } from "react";
import useStyle from "../home/style.js";
import Header from "../../headerF/header.js";
import TweetList from "../home/components/TweetList.js";
import Divider from "@material-ui/core/Divider";
import PersonIcon from "@material-ui/icons/Person";
import Axios from "axios";
import { getAllTweets , getTweetsByUserRequest } from "../../../api/api_tweet.js";
import { useTweetState } from "../../../context/TweetContext.js";
import { useLocation } from "react-router-dom";
import { Typography } from "@material-ui/core";


const TweetsByUser = (props) => {
  const classes = useStyle();
  const location = useLocation();

  // const { tweetList: tweets } = useTweetState();
  // const tweetDispatch = useTweetDispatch();
  const [tweets, setTweets] = useState([]); //state
  useEffect(() => {
    // Axios.get("http://localhost:3000/tweets")
    //   .then((response) => {
    //     //promise
    //     const data = response.data; //DATAmon
    //     setTweets(data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    getTweetsByUserRequest(props.match.params.id,(isOk, dataOrError) => {
      if (!isOk) return alert(dataOrError.message);
      else setTweets(dataOrError);
    });
  }, [location]);

  return (
    <div className={classes.root}>
      <Header headTitle={props.match.params.name} headIcon={<PersonIcon />} />
      <Divider />
      {tweets.length===0 &&
        <Typography>هیچ توییتی توسط این کاربر ثبت نشده است</Typography>
      }
      <TweetList data={tweets} />
    </div>
  );
};

export default TweetsByUser;
