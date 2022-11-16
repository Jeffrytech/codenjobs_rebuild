import { styled } from "baseui";
import { MOBILE, XS } from "../../../design/breakpoints";
import { boxShadow } from "../../../design/common";

const BlogPostTagsContainer = styled("div", {
  display: "flex",
  flexFlow: "row",
  // ...fullWidthPercent,

  padding: "2rem 2rem 2rem 2rem",
  borderTop: "1px solid #efefef",

  [MOBILE]: {
    // padding: "1rem 2rem"
    padding: "1.5rem 1.5rem 1.5rem 1.5rem"
  },
});

const BlogPostTagsWrapper = styled("ul", {
  display: "flex",
  flexWrap: "wrap",

  listStyle: "none",
  margin: "1rem 0 0 0",
  //   marginTop: "1rem",
  // marginBottom: "0.5rem",
  padding: 0,
});

// const CompanyWebsite = styled("a", {
//   color: "black",
//   textDecoration: "none",

//   ":hover": {
//     textDecoration: "underline",
//   }
// });

const BlogPostTag = styled("li", ({ $isPreview }) => {
  return {
    marginRight: "0.5rem",
    marginBottom: "0.5rem",

    transition: $isPreview ? "inherit" : "all 0.2s",
    // This doesn't work here.
    // cursor: $isPreview ? "inherit" : "pointer !important",

    ":hover": {
      opacity: $isPreview ? "inherit" : "0.7",
    }
  };
});

// Refer to this to update.
// https://baseweb.design/blog/responsive-web
// https://www.styletron.org/concepts#media-queries-and-pseudo-classes

export {
  BlogPostTagsContainer,
  BlogPostTagsWrapper,
  BlogPostTag,
};