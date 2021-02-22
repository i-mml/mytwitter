import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles((theme) => ({
  container: {
    fontFamily: "shabnam !important",
    backgroundColor: "white",
    width: "30rem",
    margin: "10rem auto",
    display: "flex",
    flexDirection: "column",
  },

  headerText: {
    margin: "1rem",
    alignSelf: "center",
  },

  tab: {
    flex: 1,
    fontFamily: "shabnam !important",
  },
  tabBtn: {
    fontFamily: "shabnam !important",
    color: "white",
  },
  containerInput: {
    padding: "1rem 0.8rem",
    display: "flex",
    flexDirection: "column",
  },
}));
export default useStyle;
