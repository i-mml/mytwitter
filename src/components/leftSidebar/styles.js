import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles((theme) => ({
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
    color: theme.palette.text.hint,
  },

  twitterNameParent: {
    width: "max-content",
    marginRight: "0.5rem",
    marginTop: "0.1rem",
    alignItems:"flex-start",
    
  },

  twitterRoot: {
    marginTop: "2.1rem",
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
}));
export default useStyle;
