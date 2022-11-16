import { makeStyles } from "@material-ui/core/styles";
import { XS } from "../../../design/breakpoints";
import { boxShadow } from "../../../design/common";

const useStyles = makeStyles((theme) => ({
  paper: {
    // marginTop: "-60px",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "21rem",
    backgroundColor: "white",
    padding: "1rem 2rem",

    borderRadius: "0.5rem",
    boxShadow,

    // height: "100vh",
  },
  avatar: {
    // marginTop: theme.spacing(10),
    // marginBottom: theme.spacing(1),
    backgroundColor: "rgb(37, 191, 161)",
    fontSize: "2rem",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    minWidth: "18rem",

    [XS]: {
      minWidth: "16rem",
      width: "16rem",
    },
  },
  submit: {
    backgroundColor: "rgb(17, 160, 245)",
    margin: "1rem 0 1rem 0"
  },
}));

export {
  useStyles,
};