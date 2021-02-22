import React from "react";
import Grid from "@material-ui/core/Grid";
import useStyle from "./style.js";

const P404 = () => {
  const classes = useStyle();
  return ( 
    <div className={classes.root}>
      <Grid container direction={"column"} alignItems={"center"}>
        <img src={"/images/404-4.jpg"} className={classes.img404} />
        <div className={classes.txt404}>
          ممکن است صفحه ای که به دنبال آن میگردید حذف شده باشد و یا آدرس آن را
          به درستی وارد نکرده باشید
        </div>
      </Grid>
    </div>
  );
};

export default P404;
