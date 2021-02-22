import React, { useEffect, useRef, useState } from "react";
import Typography from "@material-ui/core/Typography";
import useStyle from "./styles.js";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import ButtonBase from "@material-ui/core/ButtonBase";
import { Link } from "react-router-dom";
import axios from "axios";
import { getTweeter } from "../../api/api_tweet.js";
import { Menu, MenuItem } from "@material-ui/core";
import { uploadUserPhoto } from "../../api/api_auth.js";
import { toast } from "react-toastify";
const LeftSidebar = () => {
  const classes = useStyle();

  const [twitter, setTwitter] = useState([]); //state

  const [anchorMenu, setAnchorMenu] = useState([]); //state

  const [imageFile, setImageFile] = useState();
  const [imagePath, setImagePath] = useState();

  const inputRef = useRef();

  // useEffect(()=>{
  //
  // },[]);

  useEffect(() => {
    // axios
    //   .get("http://localhost:3000/tweeter")
    //   .then((response) => {
    //     //promise
    //     const data = response.data; //our data
    //     setTwitter(data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    getTweeter((isOk, dataOrError) => {
      if (!isOk) return alert(dataOrError.message);
      else setTwitter(dataOrError);
    }); //call back
  }, []);

  const handleToggleMenu = (e) => {
    if (anchorMenu) setAnchorMenu(null);
    else {
      setAnchorMenu(e.currentTarget);
    }
  };

  const handleAvatarChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setImageFile(e.target.files[0]);
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      setImagePath(e.target.result);
    };
    reader.readAsDataURL(e.target.files[0]);

    const formData = new FormData();
    formData.append("image", e.target.files[0]);
    uploadUserPhoto(formData, (isOk, data) => {
      if (!isOk) return toast.error(data);
      toast.success("عکس شما با موفیقیت اپلود شد.");
      localStorage.setItem("image", data.imagePath);
    });
  };

  const clearStorage = () => {
    localStorage.clear();
    window.location.reload();
  };

  const getImage = () => {
    if (imagePath) return imagePath;

    if (
      localStorage.getItem("image") &&
      localStorage.getItem("image") !== "undefined"
    )
      return localStorage.getItem("image");
    return "images/user-profiles.png";
  };

  return (
    <div className={classes.root}>
      <Grid
        container
        direction={"row-reverse"}
        onClick={handleToggleMenu}
        style={{ cursor: "pointer" }}
      >
        <img src={getImage()} className={classes.profileImg} />
        <Grid
          item
          container
          direction={"column"}
          className={classes.profileTExt}
        >
          <Typography className={classes.profileName}>
            {localStorage.getItem("name")}
          </Typography>
          <Typography className={classes.profileId}>
            @{localStorage.getItem("username")}
          </Typography>
        </Grid>
        <input
          ref={inputRef}
          type={"file"}
          style={{ display: "none" }}
          onChange={handleAvatarChange}
        />

        {/* ---------------- twitters ---------------- */}
        <Grid
          item
          container
          direction={"column"}
          className={classes.twitterRoot}
        >
          <Typography className={classes.twitterTitle}>
            بهترین خبرنگاران
          </Typography>
          <Divider style={{ marginRight: -24, marginLeft: -24 }} />

          {/* {twitter.map((item) => (
            <Twitter name={item.name} id={item.id} img={item.img} />
          ))} */}

          {twitter.map((item, index) => {
            return (
              <Link to={`/user/${item._id}/${item.name}`}>
                <Twitter name={item.name} id={item.username} img={item.image} />
                {index !== twitter.length - 1 && (
                  <Divider style={{ marginRight: -24, marginLeft: -24 }} />
                )}
              </Link>
            );
          })}
        </Grid>
      </Grid>
      <Menu
        open={Boolean(anchorMenu)}
        onClose={() => setAnchorMenu(null)}
        anchorEl={anchorMenu} //anchoreEl baraye moshkhas kardan position va location Menu hast
      >
        <MenuItem
          style={{ fontFamily: "shabnam" }}
          onClick={() => {
            inputRef.current.click();
          }}
        >
          ویرایش عکس پروفایل
        </MenuItem>
        <MenuItem style={{ fontFamily: "shabnam" }} onClick={clearStorage}>
          خروج
        </MenuItem>
      </Menu>
    </div>
  );
};

export const Twitter = ({ name, id, img }) => {
  const classes = useStyle();

  const getImage = () => {
    if (img) return img;

    return "images/user-profiles2.png";
  };

  return (
    <ButtonBase style={{ width: "100%" }}>
      <Grid container direction={"row"} className={classes.twitterParent}>
        <img src={getImage()} className={classes.twitterProfileImg} />
        <Grid
          item
          container
          direction={"column"}
          className={classes.twitterNameParent}
        >
          <Typography className={classes.profileName}>{name}</Typography>
          <Typography className={classes.profileId}>{id}</Typography>
        </Grid>
      </Grid>
    </ButtonBase>
  );
};

export default LeftSidebar;
