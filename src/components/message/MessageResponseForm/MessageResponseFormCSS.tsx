import { styled } from "baseui";
import TextareaAutosize from 'react-textarea-autosize';
import { MOBILE } from "../../../design/breakpoints";

const BlockButton = styled("div", {
  fontSize: "0.75rem",
  fontWeight: "bold",
  opacity: "0.7",
  cursor: "pointer",

  marginRight: "0.5rem",

  ":hover": {
    textDecoration: "underline",
  }
});

const MessageRespondButton = styled("div", {
  fontSize: "0.75rem",
  fontWeight: "bold",
  opacity: "0.7",
  cursor: "pointer",

  marginRight: "0.5rem",
  
  ":hover": {
    textDecoration: "underline",
  }
});

const MessageRespondTextareaInputWrapper = styled("section", {
  display: "flex",
  marginTop: "0.5rem",
  padding: "0 0.5rem 0 0",
});

// const MessageRespondTextarea = styled("textarea", {
const MessageRespondTextarea = styled(TextareaAutosize, {
  width: "100%",
  // padding: "0.5rem",
  padding: "0.25rem 0.5rem",
  fontSize: "1.2rem",

  resize: "both",

  lineHeight: "1.5rem",
  [MOBILE]: {
    fontSize: "1rem",
    // "lineHeight": "1.75rem",
  }
});

const MessageRespondSendButton = styled("button", {
  marginTop: "0.5rem",
  marginRight: "0.5rem",
  
  background: "rgb(17, 160, 245)",
  color: "white",
  border: "none",
  padding: "0.5rem",
  borderRadius: "0.5rem",
  
  width: "6rem",
  cursor: "pointer",
  ":hover": {
    opactiy: 0.7,
    transition: "all 0.2s",
  }
});

const MessageRespondCancelButton = styled("button", {
  marginTop: "0.5rem",
  // marginRight: "0.5rem",
  
  background: "rgb(17, 160, 245)",
  color: "white",
  border: "none",
  padding: "0.5rem",
  borderRadius: "0.5rem",
  
  width: "6rem",
  cursor: "pointer",
  ":hover": {
    opactiy: 0.7,
    transition: "all 0.2s",
  }
});

// Extract this.
const CharactersLeftWrapper = styled("span", {
  opacity: 0.5,
  marginTop: "0.25rem",
  fontSize: "0.8rem",
});

export {
  BlockButton,
  MessageRespondButton,
  MessageRespondTextareaInputWrapper,
  MessageRespondTextarea,
  MessageRespondSendButton,
  MessageRespondCancelButton,

  CharactersLeftWrapper,
};