import React, { useEffect, useState } from "react";
import useStyle from "./styles.js";
import RightSidebar from "../rightSidebar/RightSidebar";
import Divider from "@material-ui/core/Divider";
import LeftSidebar from "../leftSidebar/LeftSidebar";
import { toast } from "react-toastify";
import { getProfileRequest } from "../../api/api_auth.js";
import { useHistory } from "react-router-dom";
import { CircularProgress, Typography } from "@material-ui/core";
import ReactLoading from 'react-loading';

const Layout = (props) => {
  const classes = useStyle();
  const history = useHistory();


  const [wait, setWait] = useState(true);

  // baraye inke agar user  pak shode bod va LOGIN monde bod biofte biron
  useEffect(() => {
    getProfileRequest((isOk, data) => {
      if (!isOk) {
        //yani agar user LOGIN nabod in shart ro anjam bede
        toast.error(data);
        localStorage.clear();
        return history.push("/login");
      }
      // va agar LOGIN bod in shart haro anjam bede
      localStorage.setItem("name", data.name);
      localStorage.setItem("iamge", data.image);
      localStorage.setItem("username", data.username);
      localStorage.setItem("x-auth-token", data["x-auth-token"]);
      setWait(false);
    });
  }, []);

  if (wait) {
    // yani ta vaqti kame LOAD nashode chizi neshon nade
    return (
      <div className={classes.circularParent}>
        
        <ReactLoading type={"spinningBubbles"} color={"#1da1f2"} width={"100px"} height={"100px"}/>
        {/* <CircularProgress  /> */}
       <Typography style={{marginTop:"0.9rem"}}>لطفا شکیبا باشید</Typography>
        {/* <Typography style={{marginTop:"0.9rem"}}>{t("wait")}</Typography> */}
      
      </div>
    );
  } else
    return (
      <div className={classes.root}>
        <RightSidebar />
        <Divider orientation={"vertical"} className={classes.Divider} />
        <div className={classes.content}>{props.children}</div>
        <Divider orientation={"vertical"} className={classes.Divider} />

        <LeftSidebar />
      </div>
    );
};

export default Layout;
