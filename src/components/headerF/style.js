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

  hashtagImg: {
    width: "25px",
    height: "25px",
    marginBottom: "0.5rem",
  },


}));

export default useStyle;
