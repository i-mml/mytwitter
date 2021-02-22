import React, { useEffect, useState } from "react";
import Typography from "@material-ui/core/Typography";
import useStyle from "./styles.js";
import Grid from "@material-ui/core/Grid";
import ButtonBase from "@material-ui/core/ButtonBase";
import { Link } from "react-router-dom";
import axios from "axios";
import { getHashtags } from "../../api/api_tweet.js";
import { setHashTagList, useTweetDispatch, useTweetState } from "../../context/TweetContext.js";

const RightSidebar = () => {
  const classes = useStyle();

  //const [hashtags, setHashtags] = useState([]); //state
  const {hashTags}=useTweetState();
  const tweetDispatch = useTweetDispatch();


  useEffect(() => {
    getHashtags((isOk, dataOrError) => {
      if (!isOk) return alert(dataOrError.message);
      else setHashTagList(tweetDispatch,dataOrError);
    }); //call back
  }, []);

  return (
    <div className={classes.root}>
      <Grid container direction={"row"} alignItems={"center"}>
        <Link to={"/"}>
          <Grid item>
            <a href="#">
              {" "}
              <img
                src={"/images/twitter_PNG9.png"}
                className={classes.twittterLogo}
              />
            </a>
            <Typography className={classes.logoType}>توییتر فارسی</Typography>
          </Grid>
          <Grid>
            <Typography className={classes.hashtagTitle}>
              داغ ترین هشتگ ها
            </Typography>
          </Grid>
        </Link>

        {/* ---------------- hashtags ------------ */}
        <Grid container direction={"column"} alignItems={"center"}>
          {hashTags.map((item) => (
            <ButtonBase className={classes.hashTagParent}>
              <Link to={"/hashtags/" + item.text} style={{ width: "100%" }}>
                <Grid item container alignItems={"center"}>
                  <img
                    src={"/images/hashtag5.png"}
                    className={classes.hashtagImg}
                  />
                  <Typography className={classes.hashtagText}>
                    {item.text}
                  </Typography>
                </Grid>
              </Link>
            </ButtonBase>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default RightSidebar;
