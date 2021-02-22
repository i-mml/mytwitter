import React from "react";
import useStyle from "../style.js";
import Tweet from "./Tweet.js";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import ButtonBase from "@material-ui/core/ButtonBase";

const TweetList = ({ data }) => {
  const classes = useStyle();
  return (
    <div className={classes.TweetList}>
      {data.map((tweet) => (
        <Tweet data={tweet} />
      ))}
    </div>
  );
};

export default TweetList;
