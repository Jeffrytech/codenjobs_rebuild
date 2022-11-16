import { styled } from "baseui";
import { makeStyles } from "@material-ui/core";

import { DESKTOP, MOBILE, XS } from "../../../design/breakpoints";
import { blue, darkBlue, white } from "../../../design/colors";
import { boxShadow, hover } from "../../../design/common";

const useStyles = makeStyles((theme) => ({
  root: {
    // padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    margin: "0 auto",

    border: "1px solid #efefef",
    boxShadow,

    width: "100%",
  },
  input: {
    // marginLeft: theme.spacing(1),
    flex: 1,
    fontFamily: '"Satoshi", sans-serif',

    width: "100%",
    marginRight: "0.5rem",

    // margin: "0 1rem 0 0",
    // padding: "0.5rem",
  },
  searchButton: {
    padding: 10,
  },
  setButton: {
    padding: 10,
  },
  clearButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

const MainSection = styled("section", {
  display: "flex",
  height: "35rem",
  backgroundColor: white,
  // overflowY: "hidden",

  [DESKTOP]: {
    flexFlow: "column",
    height: "auto",
  },
});

const MainContainer = styled("div", {
  display: "flex",
  flexBasis: "100%",
  // padding: "3.75rem 12.75rem 0 12.75rem",
  // padding: "3.75rem 6rem 0 6rem",
  padding: "3.75rem 2rem 0 10rem",
  // padding: "3.75rem 4rem 0 8rem",

  width: "100%",
  // maxWidth: "47rem",

  [DESKTOP]: {
    padding: "0.875rem 1rem 1rem 1.25rem",
    maxWidth: "100%",
  },
});

const MainCompanyName = styled("h2", {
  color: darkBlue,
  marginBottom: "1rem",
  fontSize: "1.5rem",
  marginTop: "40px",
  fontWeight: "normal",
  [MOBILE]: {
    fontSize: ".9rem",
    marginBottom: "10px",
  },
});

const MainCompanyDescription = styled("h1", {
  marginTop: "0",
  fontSize: "2.5rem",
  color: "#272927",
  marginBottom: "20px",
  fontWeight: 600,

  [MOBILE]: {
    fontSize: "2rem",
  },
});

const MainJobSearchForm = styled("form", {
  width: "100%",
  maxWidth: "100%",
  marginRight: "0.5rem",

  [DESKTOP]: {
    paddingRight: "1rem",
    // paddingLeft: "1rem",
  },
  [MOBILE]: {
    paddingRight: "0",
    marginRight: "0",
  },
});

const MainFormInputContainer = styled("div", {
  display: "flex",
  alignItems: "center",

  [DESKTOP]: {
    flexFlow: "column",
  },
});

const MainFormInputWrapper = styled("div", {
  display: "flex",
  flexBasis: "100%",

  padding: "2px 4px",

  alignItems: "center",
  margin: "0 1rem 0 auto",

  border: "1px solid #efefef",
  boxShadow: "0px 1px 3px 0px rgba(0,0,0,0.12)",

  borderRadius: "0.5rem",

  // width: "18rem",
  // maxWidth: "18rem",

  // marginRight: "1rem",

  [DESKTOP]: {
    // width: "calc(100% - 1rem)",
    // maxWidth: "calc(100% - 1rem)",
    width: "calc(100% - 2rem)",
    maxWidth: "calc(100% - 2rem)",

    margin: "0 1rem 1rem 0",
  },
});

const MainFormInputButton = styled("button", {
  backgroundColor: darkBlue,
  border: "none",
  minWidth: "48px",
  borderRadius: "0.5rem",
  height: "48px",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  ":hover": hover,

  [DESKTOP]: {
    display: "none",
  },
});

const MainJobSearchListContainer = styled("ul", {
  display: "flex",
  listStyle: "none",
  margin: "2rem 0 0 0.5rem",
  padding: 0,

  [DESKTOP]: {
    margin: "0.5rem 0 0 0.5rem",
  },
});

const MainJobSearchList = styled("li", ({ $last }) => {
  if ($last) {
    return {
      display: "none",
    };
  }

  return {
    opacity: 0.5,
  };
});

const MainJobSearchListLink = styled("span", {
  ":hover": {
    cursor: "pointer",
    color: blue,
    transition: "all 0.2s",
    // color: darkBlue,
  },
});

const MainDesktopImage = styled("img", {
  height: "100%",
  maxHeight: "100%",
  // marginTop: "-3.75rem",
  marginTop: "-2.5rem",
  marginRight: "1.75rem",
  width: "80%",

  [DESKTOP]: {
    display: "none",
  },
});

const MainMobileImage = styled("img", {
  display: "none",

  [DESKTOP]: {
    display: "flex",
    height: "100%",
    maxHeight: "100%",
    marginLeft: "0.5rem",
    // marginRight: "1rem",
    marginBottom: "2rem",

    width: "calc(100% - 4rem)",
    // marginBottom: "1rem",
  },

  [MOBILE]: {
    marginLeft: "1.5rem",

    width: "calc(100% - 4rem)",
  },
});

export {
  useStyles,
  MainSection,
  MainContainer,
  MainCompanyName,
  MainCompanyDescription,
  MainJobSearchForm,
  MainFormInputContainer,
  MainFormInputWrapper,
  MainFormInputButton,
  MainJobSearchListContainer,
  MainJobSearchList,
  MainJobSearchListLink,
  MainDesktopImage,
  MainMobileImage,
};
