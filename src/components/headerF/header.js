import React from "react";
import Typography from "@material-ui/core/Typography";
import useStyle from "./style.js";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import ButtonBase from "@material-ui/core/ButtonBase";
import HomeIcon from "@material-ui/icons/Home";

const Header = ({headTitle , headIcon}) => {
  const classes = useStyle();
  return (
    <div className={classes.header}>
    {headIcon}
      <Typography className={classes.headerTitle}>{headTitle}</Typography>
    </div>
  );
};

export default Header;
