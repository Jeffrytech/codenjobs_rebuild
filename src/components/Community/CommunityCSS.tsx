import { styled } from "baseui";
import { XS } from "../../design/breakpoints";
import { shadowBlue } from "../../design/colors";
import { boxShadow } from "../../design/common";

const CommunityCard = styled("div", ({ $list }) => {
  return {
    boxShadow,
    color: shadowBlue,

    flexShrink: 0,
    borderRadius: "0.5rem",
    marginBottom: $list === undefined ? "2rem" : "1rem",
    backgroundColor: "white",

    [XS]: {
      marginBottom: "1rem",
    }
  };
});

const CommunityTitle = styled("h5", {
  fontSize: "1.25rem",
  margin: "0 0 1rem 0",
  padding: "1rem",
  textAlign: "center",
  
  borderBottom: "1px solid #efefef",
  
  // transition: "all 0.2s",
  // ":hover": {
  //   color: "rgb(17, 160, 245)",
  //   opacity: 0.7,
  // }
});
  
const CommunityDescription = styled("p", {
  // margin: "0rem 1rem 1rem 1rem",
  margin: "0 0 1rem 0",
  // lineHeight: "1.25rem",
  lineHeight: "1.5rem",
  wordBreak: "break-all",
  opacity: "0.8",
});

const CommunityListContainer = styled("ul", {
  listStyle: "none",
  margin: 0,
  padding: "0 1rem 0.5rem 1rem",
});

const CommunityList = styled("li", {
  display: "flex",
  alignItems: "center",

  marginBottom: "1rem",
  transition: "all 0.2s",
  ":hover": {
    cursor: "pointer",
    opacity: "0.7",
  }
});

const CommunityLink = styled("a", {
  display: "flex",

  fontSize: "0.85rem",
  opacity: "0.7",
  marginTop: "0.1rem",

  marginBottom: "0.5rem",

  color: "black",

  // textDecoration: "none",
  transition: "all 0.2s",
  cursor: "pointer",
  ":hover": {
    opacity: 0.7,
    // textDecoration: "underline",
    color: "rgb(17, 160, 245)",
  }
});

const CommunityButtonsWrapper = styled("div", {
  marginBottom: "1.5rem",
});

// const CommunityNewBlogPostButton = styled("a", {
const CommunityNewBlogPostButton = styled("div", {
  // width: "100%",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  padding: "0.5rem 1rem",
  fontSize: "1rem",
  textAlign: "center",
  lineHeight: "1rem",
  borderRadius: "0.5rem",
  letterSpacing: "0.7px",
  textDecoration: "none",

  // Use theme instead?
  color: "#fff",
  backgroundColor: "rgb(17, 160, 245)",
  border: "1px solid rgb(17, 160, 245)",

  transition: "all 0.2s",
  cursor: "pointer",
  ":hover": {
    opacity: 0.7
  }
});

// const CommunityNewJobPostButton = styled("a", {
const CommunityNewJobPostButton = styled("div", {
  // width: "100%",
  marginTop: "1rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  padding: "0.5rem 1rem",
  fontSize: "1rem",
  textAlign: "center",
  lineHeight: "1rem",
  borderRadius: "0.5rem",
  letterSpacing: "0.7px",
  textDecoration: "none",

  // Use theme instead?
  color: "#fff",
  backgroundColor: "rgb(37, 191, 161)",
  border: "1px solid rgb(37, 191, 161)",
  // backgroundColor: "rgb(17, 160, 245)",
  // border: "1px solid rgb(17, 160, 245)",

  transition: "all 0.2s",
  cursor: "pointer",
  ":hover": {
    opacity: 0.7
  }
});

export {
  CommunityCard, // Extract this?

  CommunityTitle,
  CommunityDescription,
  
  CommunityListContainer,
  CommunityList,

  CommunityLink,

  CommunityButtonsWrapper,
  CommunityNewBlogPostButton,
  CommunityNewJobPostButton,
};