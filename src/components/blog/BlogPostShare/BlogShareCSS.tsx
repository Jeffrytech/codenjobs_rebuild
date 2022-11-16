import { styled } from "baseui";
import { XS } from "../../../design/breakpoints";
import { card } from "../../../design/common";

const BlogShareCard = styled("div", {
  ...card,
  
  // [MOBILE]: {
  //   marginBottom: "1rem",
  // }
});

const BlogShareContainer = styled("div", {
  padding: "0.5rem",
});

const BlogShareWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
});

const BlogShareText = styled("span", {
  marginLeft: "0.25rem",

  [XS]: {
    display: "none",
  }
});

const SocialShareWrapper = styled("section", {
  display: "flex",
  marginLeft: "auto",
});

const BlogCommentText = styled("span", {
  [XS]: {
    display: "none",
  }
});

export {
  BlogShareCard,
  
  BlogShareContainer,
  BlogShareWrapper,
  BlogShareText,
  SocialShareWrapper,

  BlogCommentText,
};