import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles((theme) => ({
  img404: {
    margin: "2rem auto",
    width: "80%",
    height: "70%",
  },
  txt404: {
    fontSize: "1rem",
    fontWeight: "700 !important",
    color: theme.palette.primary.main,
    margin: "2rem",
  },
}));
export default useStyle;
