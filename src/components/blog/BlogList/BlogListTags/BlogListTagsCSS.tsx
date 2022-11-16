import { styled } from "baseui";
import { MOBILE } from "../../../../design/breakpoints";

// Extract these?
const BlogListTagContainer = styled("div", {
  display: "flex",
  alignItems: "center",

  flexWrap: "wrap",

  marginTop: "0.5rem",
});

const BlogListTag = styled("div", {
  // marginTop: "0.25rem",
  marginRight: "0.25rem",
  marginBottom: "0.25rem",

  transition: "all 0.2s",
  cursor: "pointer",
  ":hover": {
    opacity: "0.7",
  },

  [MOBILE]: {
    marginRight: "0.5rem",
    marginBottom: "0.5rem",
  }
});

export {
  BlogListTagContainer,
  BlogListTag,
};