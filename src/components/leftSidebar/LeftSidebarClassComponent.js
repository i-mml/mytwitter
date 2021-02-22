import { Divider, Grid, Link, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import React, { Component } from "react";
import { getTweeter } from "../../api/api_tweet";
import { Twitter } from "./LeftSidebar";
import useStyle from "./styles.js";

const style = {
  root: {
    backgroundColor: "white",
    height: "100vh",
    width: "25%",
    padding: "1.5rem 2.2rem",
  },

  profileImg: {
    width: "max-content",
    maxWidth: "60px",
    height: "60px",
    borderRadius: "30px",
  },

  profileTExt: {
    width: "max-content",
    marginLeft: "0.5rem",
    marginTop: "0.1rem",
    direction: "ltr",
  },

  profileName: {
    flex: "1",
    fontSize: "1.1rem !important",
  },

  profileId: {
    fontSize: "0.9rem",
    flex: "1",
    color: "#333",
  },

  twitterNameParent: {
    width: "max-content",
    marginRight: "0.5rem",
    marginTop: "0.1rem",
  },

  twitterRoot: {
    marginTop: "3rem",
    borderRadius: "2.5rem",
    backgroundColor: "#f5f8fa",
    padding: "11px 24px",
  },

  twitterProfileImg: {
    width: "max-content",
    height: "50px",
    maxWidth: "50px",
    maxHeight: "50px",
    borderRadius: "30px",
  },

  twitterTitle: {
    fontSize: "1.2rem",
    fontWeight: "600",
    marginBottom: "11px",
  },

  twitterParent: {
    padding: "10px 0",
  },
};

class LeftSidebarClassComponent extends Component {
  state = {
    twitter: [],
  };

  componentDidMount() {
    getTweeter((isOk, dataOrError) => {
      if (!isOk) return alert(dataOrError.message);
      else this.setState({ twitter: dataOrError });
    }); //call back
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container direction={"row-reverse"}>
          <img src={"/images/profile.jpg"} className={classes.profileImg} />
          <Grid
            item
            container
            direction={"column"}
            className={classes.profileTExt}
          >
            <Typography className={classes.profileName}>هلیا ساجد </Typography>
            <Typography className={classes.profileId}>@heliasajed</Typography>
          </Grid>

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

            {this.state.twitter.map((item, index) => {
              return (
                <Link to={`/user/${item.name}`}>
                  <Twitter name={item.name} id={item.id} img={item.img} />
                  {index !== this.state.twitter.length - 1 && (
                    <Divider style={{ marginRight: -24, marginLeft: -24 }} />
                  )}
                </Link>
              );
            })}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(style)(LeftSidebarClassComponent);
