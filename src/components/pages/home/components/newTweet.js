import React from "react";
import Typography from "@material-ui/core/Typography";
import useStyle from "../style.js";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import ButtonBase from "@material-ui/core/ButtonBase";
import HomeIcon from "@material-ui/icons/Home";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import classnames from "classnames";
import axios from "axios";
import { Input } from "@material-ui/core";
import { newTweetRequest } from "../../../../api/api_tweet.js";
import { toast } from "react-toastify";
import {
  useTweetDispatch,
  useTweetState,
  updateHashTagList,
} from "../../../../context/TweetContext.js";
import { setTweetText as setTweet } from "../../../../context/TweetContext.js";

const NewTweet = ({ updateTweets }) => {
  const classes = useStyle();
  const inputFile = React.useRef();

  const { tweetText: tweet } = useTweetState();
  const tweetDispatch = useTweetDispatch();
  

  //const [tweet, setTweet] = React.useState();
  const [imageFile, setImageFile] = React.useState();
  const [imagePath, setImagePath] = React.useState();

  {
    /*chon be jaye div az input estefade kardim */
  }
  // React.useEffect(() => {
  //   input.current.addEventListener(
  //     "input",
  //     function (e) {
  //       console.log("input event fired", e.target.innerText);
  //     },
  //     false
  //   );
  // }, []);

  const newTweetClick = () => {
    // const tweetText = input.current.innerText;
    const tweetText = tweet;
    if (!tweetText) return;

    // const data = {
    // id: Math.floor(Math.random() * 1000), // in baraye sintax khode json servere

    // sender: {
    //   name: "هلیا ساجدی",
    //   id: "heliasajedi@",
    //   img: "/images/profile.jpg",
    // },
    // text: tweetText,
    // likes: 458,
    //};

    // ########### ersal DATA be server ###########

    // axios
    //   .post("http://localhost:3000/Tweets", data) //promise <AxiosResponse<T>>
    //   .then((res) => {
    //     alert("با موفقیت توییت شد");
    //   })
    //   .catch((error) => {
    //     alert("توییت شما ارسال نشد");
    //   });

    const formData = new FormData();
    formData.append("text", tweetText); // "text" ro az backend proje gere
    if (imageFile) formData.append("image", imageFile);

    // newTweetRequest(data, (isOk, dataOrError) => {
    newTweetRequest(formData, (isOk, dataOrError) => {
      if (!isOk) return toast.error(dataOrError.message);
      else setTweet(tweetDispatch,dataOrError);
      toast.success("توییت شما ارسال شد");
      updateTweets();
      setTweet(tweetDispatch, "");
      setImagePath(); // yani undefined kon ke vaqti tweet ersal shoda neshon nade
      setImageFile(); // yani undefined kon ke vaqti tweet ersal shoda neshon nade

      if (tweetText.includes("#"))
        //yani agar # dasht in kar ro anjam bede
        updateHashTagList(tweetDispatch);
    }); //call back
    // input.current.innerText = "";
  };

  const getImage = () => {
    if (
      localStorage.getItem("image") &&
      localStorage.getItem("iamge") !== "undefined"
    )
      return localStorage.getItem("image");
    return "images/user-profiles.png";
  };

  const onChangeImg = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setImageFile(e.target.files[0]);

      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePath(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
      toast.success("عکس با موفیقیت انتخاب شد");
    }
  };

  const selectImg = () => {
    inputFile.current.click();
  };

  return (
    <div className={classes.newTweet}>
      <Grid container>
        <img src={getImage()} className={classes.profileImg} />

        {/* <textarea
          placeholder={"توییت کن ..."}
          className={classes.input}
        ></textarea> */}

        {/*baraye tabdilesh be input*/}
        {/* <div
          contentEditable
          data-placeholder={"توییت کن ..."}
          className={classnames(classes.input, "editable")}
          ref={input}
        ></div> */}
        <input
          placeholder={"توییت کن ..."}
          className={classnames(classes.input, "editable")}
          value={tweet}
          onChange={(e) => setTweet(tweetDispatch, e.target.value)}
        />
        <input
          type={"file"}
          style={{ display: "none" }}
          ref={inputFile}
          onChange={onChangeImg}
        />
      </Grid>

      {/* // when imagePath is valiable show the <div> */}
      {imagePath && (
        <div>
          <div
            style={{ backgroundImage: `url(${imagePath})` }}
            className={classes.backgroundImage}
          ></div>
        </div>
      )}

      <Grid container direction={"row-reverse"} style={{ marginTop: 15 }}>
        <Button
          variant={"contained"}
          color={"primary"}
          className={classes.newTweetBtn}
          onClick={newTweetClick}
        >
          توییت
        </Button>
        <IconButton className={classes.newTweetImgBtn} onClick={selectImg}>
          <img src="/images/gallery3.jpg" className={classes.newTweetImg} />
        </IconButton>
      </Grid>
    </div>
  );
};

export default NewTweet;
