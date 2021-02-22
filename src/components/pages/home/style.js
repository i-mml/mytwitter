import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles((theme) => ({
  root: {
    //width: "57%",
    width: "100%",
    height: "100vh",
    backgroundColor: "#e6e6e6",
    overflowY: "auto",
  },

  Divider: {
    backgroundColor: "#7ebaFF !important",
    filter: "opacity(0.5)",
  },

  header: {
    padding: 16,
    backgroundColor: "white",
    display: "flex",
  },

  headerTitle: {
    fontSize: "1.1rem",
    fontWeight: "700",
    marginRight: "0.5rem",
  },

  newTweet: {
    padding: 16,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
  },

  profileImg: {
    width: "max-content",
    maxWidth: "40px",
    height: "40px",
    borderRadius: "30px",
  },

  input: {
    marginRight: "1rem",
    flex: 1,
    border: "none",
    // outline: "none",
    "&:focus": {
      outline: "unset",
    },
  },

  newTweetBtn: {
    color: "white !important",
    borderRadius: "1rem !important",
    minHeight: "30px !important",
    height: "30px !important",
    lineHeight: "1rem !important",
    minWidth: "5rem !important",
    fontFamily: "shabnam !important",
  },
  newTweetImg: {
    width: "20px",
    height: "20px",
  },

  newTweetImgBtn: {
    borderRadius: "50%",
    padding: "0.3rem !important",
    border: "0.5px solid #3337",
    marginLeft: "1rem",
  },

  TweetItem: {
    backgroundColor: "white",
    marginTop: "0.3rem",
    padding: 16,
    display: "flex",
    flexDirection: "column",
  },

  TweetItemName: {
    fontWeight: 600,
    marginRight: "1rem",
  },

  TweetItemId: {
    fontSize: 14,
    color: theme.palette.text.hint,
    marginRight: "0.5rem",
    paddingTop: "3px",
  },

  TweetItemText: {
    fontSize: "0.95rem",
    marginTop: "0.5rem ",
    marginRight: "3.4rem",
    marginLeft: "2rem",
  },

  FavoriteIcon: {
    width: "20px !important",
    height: "20px !important",
  },

  likeCount: {
    fontSize: " 0.9rem",
    color: "#777",
    marginLeft: "0.4rem",
  },

  backgroundImage: {
    width: "10rem",
    height: "10rem",
    marginTop: "1rem",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  },
}));

export default useStyle;
