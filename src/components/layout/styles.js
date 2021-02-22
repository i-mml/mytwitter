import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles({
  root: {
    display: "flex",
    height: "100vh",
    width: "100%",
    overflow: "hidden",
    margin: "0",
  },

  Divider: {
    height: "100%",
    width: "1px !important",
    backgroundColor: "#7ebaFF !important",
    filter: "opacity(0.5)",
  },

  content: {
    flex: 1,
    width: "57%",
  },

  circularParent:{
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
    position:"absolute",
    top:0,
    left:0,
    width:"100%",
    height:"100vh",
  }
});

export default useStyle;
