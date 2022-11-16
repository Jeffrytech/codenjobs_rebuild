import { styled } from "baseui";
import { XS } from "../../../design/breakpoints";

// Move these to JobList and JobCard
const BlogPostPreviewContainer = styled("article", {
  padding: "2rem 2rem 4rem 2rem",
  // [MOBILE]: {
  //   padding: "0px 16px 64px 16px"
  // }
  background: "url(/static/tokens.png)",
  backgroundSize: "contain",
  minHeight: "100vh",

  [XS]: {
    padding: 0,
  }
});

const BlogPostPreviewWrapper = styled("div", {
  // margin: "2rem auto 0",
  margin: "0 auto",
  // maxWidth: "1024px"
  maxWidth: "48rem",

  // [XS]: {
  //   margin: "0 auto 0",
  // }
});

const BlogPostPreviewSection = styled("section", {
  color: "#374252",
  boxShadow: "0 2px 4px 0 rgba(0,0,0,.1)",
  flexShrink: 0,
  borderRadius: "8px",
  // marginBottom: "32px",
  backgroundColor: "white",
  padding: "1.5rem",

  minHeight: 0,

  [XS]: {
    padding: "0 1.5rem 1.5rem 1.5rem",
  }
});

const BlogPreviewHeader = styled("div", {
  display: "flex",
  alignItems: "center",

  [XS]: {
    flexFlow: "column",
    alignItems: "flex-start",
  }
});

const BlogEditButtonWrapper = styled("div", {
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

  marginTop: "1.5rem",
  // marginRight: "1rem",
  // marginLeft: "1rem",
  // marginTop: "1rem",
});

const ContinueButton = styled("button", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  
  // background: "rgb(37, 191, 161)",
  background: "rgb(17, 160, 245)",
  width: "100%",
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

  [XS]: {
    // fontSize: "0.8rem",
    // padding: "0.5rem",
  }
});

// Delete unused ones later.
export {
  PreviewIntro,

  BlogPostPreviewContainer,
  BlogPostPreviewWrapper,
  BlogPostPreviewSection,

  BlogPreviewHeader,
  BlogEditButtonWrapper,

  PreviewTypeRadioGroupWrapper,

  ContinueButtonWrapper,
  ContinueButton,
};