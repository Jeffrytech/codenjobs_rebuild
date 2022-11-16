import { styled } from "baseui";
import { MOBILE } from "../../../../design/breakpoints";
import { blue } from "../../../../design/colors";

const MessageWithResponsesWrapper = styled("section", ({
  // @ts-ignore
  $index
}) => {
  return {
    padding: "1rem",
    backgroundColor: ($index % 2) === 0 ? "white" : "#efefef",
  };
});

const MessageWithResponsesTitle = styled("div", {
  display: "flex",
  alignItems: "center",
  opacity: 0.7,

  fontWeight: 400,

  [MOBILE]: {
    flexFlow: "column",
    alignItems: "flex-start",
  }
});

const MessageConversant = styled("div", {
  padding: "2px 8px",
  // padding: "2px 8px",
  fontSize: "0.8rem",
  fontWeight: "bold",
  lineHeight: "18px",
  // fontWeight: "bold",
  borderRadius: "8px",
  marginRight: "0.5rem",

  color: "rgb(17, 160, 245)",
  backgroundColor: "white",
  // border: "2px solid black",
  border: "2px solid rgb(17, 160, 245)",

  cursor: "pointer",
  // ":hover": {
  //   transition: "all 0.2s",
  //   opacity: 0.7,
  // },

  [MOBILE]: {
    marginBottom: "0.5rem",
  }
});

const MessageSubject = styled("h1", {
  margin: 0,
  fontWeight: "bold",
  fontSize: "1rem",
  color: "black",
});

// const MessageWithResponseText = styled("div", {
const MessageWithResponseText = styled("p", {
  marginTop: "0.25rem",
  marginBottom: 0,
  wordBreak: "break-all",
  whiteSpace: "pre-line",
});

const MessageWithResponsesBody = styled("section", {
  marginTop: "1rem",
  // marginTop: "0.5rem",
  padding: "0.5rem 1rem",
  marginLeft: "0.25rem",
  // marginLeft: "1rem",
  borderLeft: "2px dashed rgb(55, 66, 82)",
});

const Username = styled("a", {
  color: "rgb(17, 160, 245)",
  textDecoration: "none",

  ":hover": {
    cursor: "pointer",
    textDecoration: "underline",
  }
});

const ExpandOrCollapseMessages = styled("div", {
  marginTop: "0.25rem",
});

const ExpandMessages = styled("span", {
  marginRight: "0.5rem",
  color: blue,
  fontSize: "0.85rem",

  ":hover": {
    opacity: 0.7,
    transition: "all 0.2s",
    cursor: "pointer",
  }
});

const CollapseMessages = styled("span", {
  marginRight: "0.5rem",
  color: blue,
  fontSize: "0.85rem",

  ":hover": {
    opacity: 0.7,
    transition: "all 0.2s",
    cursor: "pointer",
  }
});

const MessageWithResponsesListResponse = styled("span", {
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

export {
  MessageWithResponsesWrapper,
  MessageWithResponsesTitle,
  
  MessageConversant,
  MessageSubject,
  MessageWithResponseText,

  MessageWithResponsesBody,
  Username,

  ExpandOrCollapseMessages,
  ExpandMessages,
  CollapseMessages,

  MessageWithResponsesListResponse,
};