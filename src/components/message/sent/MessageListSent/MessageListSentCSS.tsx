import { styled } from "baseui";
import { MOBILE, XS } from "../../../../design/breakpoints";
import { boxShadow } from "../../../../design/common";

// Extract this?
const MessageContentContainer = styled("div", {
  margin: "2rem auto 0 auto",
  // margin: "1rem auto 0 auto",
  maxWidth: "768px",
  // maxWidth: "1024px",
  backgroundColor: "white",

  // padding: "0.5rem 1rem",
  boxShadow,

  [MOBILE]: {
    margin: "0 auto",
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

const MessageListCardContainer = styled("div", {
  color: "#374252",
  // border: "1px solid #eee",
  display: "block",
  // padding: "0.5rem",
  position: "relative",
  // transition: "all 0.2s",
  textDecoration: "none",
  // backgroundColor: "white",

  // padding: "1rem",
  border: "1px solid rgb(238, 238, 238)",

  // cursor: "pointer",
  // ":hover": {
  //     opacity: "0.8",
  // }
});

const MessageSentToContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  opacity: 0.7,

  fontWeight: 400,

  // [XS]: {
  // display: "none",
  // flexFlow: "column",
  // }
});

const MessageSentToWrapper = styled("div", {
  display: "flex",

  // [XS]: {
  //   flexFlow: "column",
  // }
});

const MessageSentToUser = styled("a", {
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
  [XS]: {
    fontSize: "1.2rem",
  }
});

export {
  MessageContentContainer,

  NoMessage,
  MessageListWrapper,

  MessageListCardContainer,

  MessageSentToContainer,
  MessageSentToWrapper,
  
  MessageSentToUser,
  MessageSubject,
};