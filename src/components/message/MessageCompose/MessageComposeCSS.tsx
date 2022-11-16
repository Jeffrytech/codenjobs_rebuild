import { styled } from "baseui";
import TextareaAutosize from 'react-textarea-autosize';

import { MOBILE } from "../../../design/breakpoints";

// Extract this?
const MessageContentContainer = styled("div", {
  margin: "2rem auto 0 auto",
  // margin: "1rem auto 0 auto",
  maxWidth: "48rem",
  // maxWidth: "1024px",
  backgroundColor: "white",

  padding: "0.5rem 1rem",

  [MOBILE]: {
    margin: "0 auto",
    // minHeight: "100%",
  }
});

const MessageFormTitle = styled("h1", {
  margin: "0.25rem 0 0 0",
  fontSize: "1.25rem",
  fontWeight: "normal",
});

const MessageForm = styled("form", {
  display: "flex",
  flexFlow: "column",
  maxWidth: "25rem",
});

const ToLabel = styled("label", {
  margin: "0.5rem 0 0.25rem 0"
});

const ToInput = styled("input", {
  // padding: "2px",
  padding: "0.25rem",

  [MOBILE]: {
    padding: "0.5rem",
  }
});

const SubjectLabel = styled("label", {
  margin: "0.25rem 0 0.25rem 0"
});

const SubjectInput = styled("input", {
  // padding: "2px",
  padding: "0.25rem",

  [MOBILE]: {
    padding: "0.5rem",
  }
});

const YourMessageLabel = styled("label", {
  // margin: "0.25rem 0 1rem 0"
  margin: "0.25rem 0 0 0"
});

// const MessageTextarea = styled("textarea", {
const MessageTextarea = styled(TextareaAutosize, {
  width: "100%",
  margin: "0",
  boxSizing: "border-box",
  // borderRadius: "0.5rem",
  // fontSize: "1.2rem",
  fontSize: "1.2rem",
  // padding: "0.5rem",
  padding: "0.25rem 0.5rem",
  backgroundColor: "#fff",
  // border: "2px solid #efefef",

  resize: "both",

  // lineHeight: "1.5rem",
  lineHeight: "1.5rem",
  [MOBILE]: {
    fontSize: "1rem",
    // lineHeight: "1.75rem",
  }
});

const MessageSubmitButtonWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  // marginLeft: "1rem",
  // marginRight: "2rem",
  marginTop: "1rem",
  // marginTop: "0.5rem",
  marginBottom: "0.5rem",

  [MOBILE]: {
    flexFlow: "column",
  }
});

const MessageSubmitButton = styled("button", {
  background: "rgb(37, 191, 161)",
  color: "white",
  padding: "0.5rem 2rem",
  border: "2px solid #efefef",
  borderRadius: "0.5rem",

  transition: "all 0.2s",

  // marginBottom: "0.5rem",

  cursor: "pointer",
  ":hover": {
    opacity: 0.7,
  },
  ":focus": {
    outline: "none",
  },

  [MOBILE]: {
    width: "100%",
    padding: "1rem 2rem",
    fontSize: "1.25rem",
  }
});

const MessageSentWrapper = styled("span", {
  marginLeft: "0.5rem",
  fontSize: "0.85rem",

  [MOBILE]: {
    marginLeft: 0,
    marginTop: "0.5rem",
  }
});

// const CharactersLeftWrapper = styled("span", {
const CharactersLeftWrapper = styled("div", {
  display: "flex",

  opacity: 0.5,
  // marginTop: "0.25rem",
  marginTop: "0.5rem",
  fontSize: "0.8rem",
});

const CodeOfConductWrapper = styled("span", {
  marginLeft: "auto",

  transition: "all 0.2s",
  ":hover": {
    opacity: 0.7,
  }
});

export {
  MessageContentContainer,

  MessageFormTitle,
  MessageForm,
  
  ToLabel,
  ToInput,

  SubjectLabel,
  SubjectInput,
  
  YourMessageLabel,

  MessageTextarea,
  MessageSubmitButtonWrapper,
  MessageSubmitButton,
  MessageSentWrapper,

  CharactersLeftWrapper,
  CodeOfConductWrapper,
};