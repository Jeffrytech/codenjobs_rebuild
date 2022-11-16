import { styled } from "baseui";
import { DESKTOP, MOBILE, XS } from "../../../design/breakpoints";
import { white } from "../../../design/colors";

const BlogPostHeader = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  fontWeight: 400,
  lineHeight: "24px",

  [XS]: {
    flexFlow: "column-reverse",
    // flexFlow: "column",
    alignItems: "flex-start",
  },
});

const BlogPostCover = styled("img", {
  width: "100%",
  maxHeight: "8rem",

  borderRadius: "0.5rem",

  transition: "all 0.2s",
  cursor: "pointer",
  ":hover": {
    opacity: "0.7",
  },

  // Make it similar to BlogPostList
  [MOBILE]: {
    height: "5rem",
    // marginBottom: "0.5rem",
  }
});

const BlogListState = styled("span", {
  [MOBILE]: {
    display: "none",
  }
});

const BlogPostListForNotOwnerHeader = styled("div", () => {
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    fontSize: "1rem",
    fontWeight: "bold",
    lineHeight: "1.25rem",
    letterSpacing: "0.7px",

    fontFamily: "Roboto, Helvetica, sans-serif",

    padding: "1rem 0.5rem 1rem 2.25rem",
    textAlign: "left",

    backgroundColor: white,

    border: "1px solid #efefef",
    borderRadius: "0.5rem 0.5rem 0 0",

    [DESKTOP]: {
      // padding: "16px 20px 16px 20px",
      // padding: $isFollow ? "1rem 0 1rem 1.5rem" : "1rem 0 1rem 1.5rem",
      // padding: "1rem 0 1rem 1.25rem",
      // padding: "1rem 0 1rem 1.5rem",
      textAlign: "center"
    },
    [XS]: {
      padding: "1rem 0 1rem 1.25rem",
    }
  };
});

export {
  BlogPostHeader,

  BlogPostCover,

  BlogListState,

  BlogPostListForNotOwnerHeader,
};