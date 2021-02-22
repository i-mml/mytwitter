import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
    height: "100vh",
    width: "18%",
    padding: "1.5rem 1rem",
  },

  twittterLogo: {
    width: "39px",
    height: "32px",
  },

  logoType: {
    fontSize: "1.4rem !important",
    fontWeight: "600 !important",
    marginRight: "0.8rem",
    color: theme.palette.primary.main,
    display: "inline-block",
    verticalAlign: "top",
  },

  hashtagTitle: {
    fontSize: "1.2rem !important",
    fontWeight: "600 !important",
    marginTop: "2.1rem",
    marginBottom: "0.7rem",
  },

  hashtagImg: {
    width: "25px",
    height: "25px",
    marginBottom: "0.5rem",
  },

  hashtagText: {
    color: "black !important",
    fontSize: "1rem",
    marginRight: "0.6rem",
    marginBottom: "0.75rem",
    lineHeight: "1.2rem !important",

  },

  hashTagParent: {
    marginTop: "0.2rem !important",
    marginBottom: "0.5rem !important",
    padding: "0.15rem !important",
    width: "100%",
  },
}));
export default useStyle;
