import React from "react";
import useStyle from "../style.js";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import {
  setTweetText,
  useTweetDispatch,
  likeTweet,
  useTweetState,
} from "../../../../context/TweetContext.js";
import { likeTweetRequest } from "../../../../api/api_tweet.js";
import { toast } from "react-toastify";

const Tweet = ({ data }) => {
  const tweetDispatch = useTweetDispatch();

  const renderTweet = (text) => {
    return {
      //regEXP
      __html: text.replace(
        // /#\S+/g   # yani harchi ke # dare / S yani ye kalame bedone fasele / S+ yani hadaqal 1 harf dashte bashe / g ham yani globall yani to koll
        /#\S+/g,
        " <a href='/tags/$&' style='color: cornflowerblue'>$&</a>" //$&  yani kalameii ke to qesmate avale replace peyda karde hamono biar
      ),
    };
  };

  const getImage = () => {
    if (data.user.image) return data.user.image;
    else return "/images/user-profiles2.png";
  };
  
  const handleLike = () => {
    //  likeTweetRequest(data , callBack)
    likeTweetRequest(data._id, (isOk, data) => {
      if (!isOk) return toast.error(data);
      likeTweet(tweetDispatch, data._id);
    });
    // likeTweet(tweetDispatch, data._id);
  };
  
  const retweetClick = () => {
    setTweetText(tweetDispatch, data.text);
  };


  const classes = useStyle();
  return (
    <div className={classes.TweetItem}>
      <Grid container alignItems={"center"} style={{ flex: 1 }}>
        <img src={getImage()} className={classes.profileImg} />
        <Typography className={classes.TweetItemName}>
          {data.user.name}
        </Typography>
        <Typography className={classes.TweetItemId}>{data.user.id}</Typography>
      </Grid>
      <Grid item container>
        {/* <Typography className={classes.TweetItemText} component={"p"}>
          {renderTweet(data.text)}
        </Typography> */}
        <Typography
          dangerouslySetInnerHTML={renderTweet(data.text)}
          className={classes.TweetItemText}
          component={"p"}
        />
        {/* // when data.imagePath is valiable show the <div> */}
        {data.image && (
          <div>
            <div
              style={{ backgroundImage: `url(${data.image})` }}
              className={classes.backgroundImage}
            ></div>
          </div>
        )}
      </Grid>

      <Grid
        container
        direction={"row-reverse"}
        style={{ marginTop: 15 }}
        alignItems={"center"}
      >
        <IconButton className={classes.newTweetImgBtn} onClick={retweetClick}>
          <img src="/images/retweet.png" className={classes.newTweetImg} />
        </IconButton>

        <IconButton className={classes.newTweetImgBtn} onClick={handleLike}>
          <FavoriteIcon className={classes.FavoriteIcon} />
        </IconButton>
        <Typography className={classes.likeCount}>{data.likes}</Typography>
      </Grid>
    </div>
  );
};

export default Tweet;
