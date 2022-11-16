import {
  makeStyles,
  // eslint-disable-next-line no-unused-vars
  Theme,
  createStyles,
} from "@material-ui/core/styles";

import { styled } from "baseui";

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

    transition: "all 0.2s",
    "&:hover": {
      cursor: "pointer",
      opacity: 0.7,
    }
  },
  active: {
    background: "rgb(17, 160, 245)",
  },
  // completed: {
  //   backgroundImage:
  //     "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
  // },
  completed: {
    background: "rgb(17, 160, 245)",
  },
});

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
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

const JobPostConfirmationHeaderContainer = styled("div", {
  margin: "0px auto",
  maxWidth: "64rem",
  padding: "2rem",
  
  minHeight: "100vh",
});

const JobPostConfirmationHeaderTitle = styled("h1", {
  fontSize: "2rem",
  textAlign: "center",
});

export {
  // ColorlibConnector,
  useColorlibStepIconStyles,
  useStyles,

  JobPostConfirmationHeaderContainer,
  JobPostConfirmationHeaderTitle,
};