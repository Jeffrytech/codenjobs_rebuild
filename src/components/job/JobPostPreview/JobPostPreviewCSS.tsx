import { styled } from "baseui";
import { XS } from "../../../design/breakpoints";
import { black, blue, solana } from "../../../design/colors";
import { boxShadow } from "../../../design/common";

// Move these to JobList and JobCard
const JobPostPreviewContainer = styled("section", {
  padding: "2rem 2rem 4rem 2rem",
  // [MOBILE]: {
  //   padding: "0px 16px 64px 16px"
  // }
  background: "url(/static/tokens.png)", // background: url(/static/background.png);
  backgroundSize: "contain", // background-size: contain;
  minHeight: "100vh",

  [XS]: {
    padding: 0,
  }
});

const JobPostPreviewWrapper = styled("div", {
  // margin: "2rem auto 0",
  margin: "0 auto",
  maxWidth: "48rem",

  // [XS]: {
  //   margin: "0 auto 0",
  // }
});

const JobPostPreviewSection = styled("section", {
  color: "#374252",
  boxShadow,
  flexShrink: 0,
  borderRadius: "0.5rem",
  // marginBottom: "32px",
  backgroundColor: "white",
  padding: "1.5rem",

  minHeight: 0,

  [XS]: {
    padding: "1.5rem 1.5rem 1.5rem 1.5rem",
    // padding: "0 1.5rem 1.5rem 1.5rem",
  }
});

const JobPreviewHeader = styled("div", {
  display: "flex",
  alignItems: "center",

  [XS]: {
    flexFlow: "column",
    alignItems: "flex-start",
  }
});

const JobEditButtonWrapper = styled("div", {
  marginLeft: "auto",
  marginRight: "0.5rem",
  display: "flex",

  color: "rgb(17, 160, 245)",

  transition: "all 0.2s",
  cursor: "pointer",
  // ":hover": {
  //   oapcity: 0.7,
  // }
  [XS]: {
    marginTop: "1rem",
    marginLeft: "inherit",
  },
});

const PreviewIntro = styled("h2", {
  margin: 0,
  color: "#ff7676",
});

const PreviewTypeRadioGroupWrapper = styled("div", {
  marginTop: "0.5rem",
  marginBottom: "1rem",
});

const ContinueButtonWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  // justifyContent: "flex-end",

  marginTop: "1rem",
  // marginRight: "1rem",
  // marginLeft: "1rem",
  // marginTop: "1rem",
});

const CodeContinueButton = styled("button", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  // background: "rgb(37, 191, 161)",
  // background: blue,
  background: black, // Use this temporarily
  width: "100%",

  color: "white",
  // color: solana,

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

  [XS]: {
    // fontSize: "0.8rem",
    // padding: "0.5rem",
  }
});

const SolanaContinueButton = styled("button", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  // background: "rgb(37, 191, 161)",
  // background: blue,
  background: solana, // Use this temporarily
  width: "100%",

  color: "white",
  // color: solana,

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

  [XS]: {
    // fontSize: "0.8rem",
    // padding: "0.5rem",
  }
});

// Delete unused ones later.
export {
  PreviewIntro,

  JobPostPreviewContainer,
  JobPostPreviewWrapper,
  JobPostPreviewSection,

  JobPreviewHeader,
  JobEditButtonWrapper,

  PreviewTypeRadioGroupWrapper,

  ContinueButtonWrapper,
  
  CodeContinueButton,
  SolanaContinueButton,
};