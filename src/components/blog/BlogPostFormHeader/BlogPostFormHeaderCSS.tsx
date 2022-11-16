
import {
  makeStyles,
  // eslint-disable-next-line no-unused-vars
  Theme,
  createStyles,
  withStyles,
} from "@material-ui/core/styles";

import StepConnector from "@material-ui/core/StepConnector";
import { styled } from "baseui";
import { XS } from "../../../design/breakpoints";

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  completed: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  active: {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  },
  completed: {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
  },
});

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      // padding: 0,
    },
    button: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }),
);

const BlogPostFormHeaderContainer = styled("div", {
  margin: "0px auto",
  maxWidth: "1024px",
  padding: "2rem",

});

const BlogPostFormHeaderTitle = styled("h1", {
  fontSize: "2rem",
  textAlign: "center",

  [XS]: {
    fontSize: "1.5rem",
  }
});

export {
  ColorlibConnector,
  useColorlibStepIconStyles,
  useStyles,

  BlogPostFormHeaderContainer,
  BlogPostFormHeaderTitle,
};