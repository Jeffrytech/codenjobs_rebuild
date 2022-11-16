import { styled } from "baseui";
import { MOBILE } from "../../design/breakpoints";
import { blue } from "../../design/colors";
import { messageBoxShadow } from "../../design/common";

// Extract this?
const MessageContentContainer = styled("section", {
  // margin: "2rem auto 0 auto",
  margin: "2rem auto auto",

  // margin: "1rem auto 0 auto",
  maxWidth: "44rem",
  // maxWidth: "1024px",
  backgroundColor: "white",

  // padding: "0.5rem 1rem",
  boxShadow: messageBoxShadow,

  borderRadius: "0.5rem",

  [MOBILE]: {
    margin: "0 auto",
  }
});

// Remove this?
// Make this work with pagination and remove this later
const PaginationBottom = styled("div", {
  padding: "1rem",

  [MOBILE]: {
    display: "none",
  }
});

const NoMessage = styled("h1", {
  margin: 0,
  fontSize: "1rem",
  padding: "1rem",
  fontWeight: "normal",
});

// Extract this?
const MessageListWrapper = styled("div", {
  display: "flex",
  flexFlow: "column",
});

const MessageListCardContainer = styled("div", ({
  // @ts-ignore
  $index,
}) => {
  return {
    color: "#374252",
    // border: "1px solid #eee",
    display: "block",
    // padding: "0.5rem",
    position: "relative",
    // transition: "all 0.2s",
    textDecoration: "none",
    // backgroundColor: "white",

    // padding: "1rem",
    border: ($index % 2) === 0 ? "1px solid rgb(238, 238, 238)" : "none",
  };
});

const MessageFromContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  opacity: 0.7,

  fontWeight: 400,
});

const MessageFromWrapper = styled("div", {
  display: "flex",

  // [XS]: {
  //   flexFlow: "column",
  // }
});

const MessageFrom = styled("a", {
  color: "rgb(17, 160, 245)",

  ":hover": {
    cursor: "pointer",
    textDecoration: "underline",
  }
});

const MessageSubject = styled("h1", {
  fontSize: "1.5rem",
  fontWeight: 700,
  // margin: "1rem 0 0 0",
  // margin: "0.5rem 0 0.5rem 0",
  margin: "0.25rem 0 0 0",
  // lineHeight: "25px",
});

const ExcludeButtonWrapper = styled("span", {
  display: "flex",
  marginLeft: "auto",
  // marginRight: "0.5rem",

  color: "#ff1676",

  ":hover": {
    cursor: "pointer",
  }
});

const Permalink = styled("a", {
  fontSize: "0.75rem",
  opacity: 0.7,
  fontWeight: "bold",

  textDecoration: "none",
  color: "rgb(55, 66, 82)",

  marginRight: "0.5rem",

  cursor: "pointer",
  ":hover": {
    textDecoration: "underline",
  }
});

// Use with Link
const NewMessageLink = styled("span", {
  fontSize: "0.75rem",
  opacity: 0.7,
  fontWeight: "bold",

  textDecoration: "none",
  color: "rgb(55, 66, 82)",

  marginRight: "0.5rem",

  cursor: "pointer",
  ":hover": {
    textDecoration: "underline",
  }
});

const RefeshButtonContainer = styled("span", {
  marginLeft: "auto",
  marginRight: "0.5rem",

  cursor: "pointer",
  transition: "all 0.2s",
  ":hover": {
    opacity: 0.7,
    color: blue
  }
});

// const MessageText = styled("section", {
const MessageText = styled("p", {
  marginTop: "0.5rem",
  marginBottom: 0,
  wordBreak: "break-all",
  whiteSpace: "pre-line",
});

const MessageOptions = styled("section", {
  display: "flex",
  marginTop: "0.5rem",
  alignItems: "center",
});

export {
  MessageContentContainer,
  PaginationBottom,

  NoMessage,
  MessageListWrapper,

  MessageListCardContainer,

  MessageFromContainer,
  MessageFromWrapper,
  
  MessageFrom,
  MessageSubject,
  MessageText,

  MessageOptions,

  ExcludeButtonWrapper,

  Permalink,
  NewMessageLink,

  RefeshButtonContainer,
};