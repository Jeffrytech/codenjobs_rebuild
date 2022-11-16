import { styled, withStyle } from "baseui";

const JobRePostConfirmationContainer = styled("section", {
  // padding: "2rem 2rem 4rem 2rem",
  // [MOBILE]: {
  //   padding: "0px 16px 64px 16px"
  // }

  // background: "url(/static/list_search.png)", // background: url(/static/background.png);
  background: "url(/static/tokens.png)", // background: url(/static/background.png);
  backgroundSize: "contain", // background-size: contain;
  minHeight: "100vh",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  width: "100%",
  margin: 0,
  padding: 0,

  // [XS]: {
  //   padding: 0,
  // }
});

const JobRePostConfirmationButton = styled("button", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  // background: "rgb(37, 191, 161)",
  background: "rgb(17, 160, 245)",
  
  minWidth: "12rem",
  marginTop: "1rem",

  color: "white",
  padding: "0.8rem 1.8rem",
  border: "2px solid #efefef",
  borderRadius: "0.5rem",
  fontSize: "1rem",

  transition: "all 0.2s",
  cursor: "pointer",
  ":hover": {
    opacity: 0.7,
  },
  ":focus": {
    outline: "none",
  },

  // [XS]: {
  //   // padding: "0.8rem",
  //   // fontSize: "1rem",
  // }
});

export {
  JobRePostConfirmationContainer,
  JobRePostConfirmationButton,
};