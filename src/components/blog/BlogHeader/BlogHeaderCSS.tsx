import { styled } from "baseui";
import { MOBILE, XS } from "../../../design/breakpoints";
import { hover } from "../../../design/common";

// 1. Container to give a background color
// 2. Primary (panel)
// 3. Secondary (panel)

// const card = {
//   color: "#374252",
//   boxShadow: "0 2px 4px 0 rgba(0,0,0,.1)",
//   flexShrink: 0,
//   borderRadius: "8px",
//   backgroundColor: "white",

//   border: "1px solid #efefef",
// };

const BlogHeaderContainer = styled("div", ({ $isOwner }) => {
  return {
    // padding: "2rem 2.5rem",
    padding: "2rem 2rem 1.5rem 2rem",
    position: "relative",

    borderBottom: $isOwner ? "1px solid #efefef" : "none",
  
    [MOBILE]: {
      // padding: "1rem 2rem"
      padding: "1.5rem"
    }
  };
});

const BlogStatusWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  marginLeft: "-0.15rem",
  marginBottom: "0.5rem",

  // cursor: "pointer",
  // transition: "all 0.2s",
  // ":hover": {
  //   opacity: 0.7,
  // },

});

const PostedBy = styled("div", {
  display: "flex",

  opacity: 0.7,
  fontSize: "1rem",
  // marginBottom: "8px",

  [XS]: {
    flexFlow: "column",
    // fontSize: "0.8rem",
  },
});

const UsernameWrapper = styled("div", {
  // [XS]: {
  //   marginBottom: "0.5rem",
  // },
});

const BlogPostTime = styled("span", {
  [XS]: {
    marginTop: "0.25rem",
  }
});

const BlogTitle = styled("h1", {
  fontSize: "2rem",
  fontWeight: 800,
  lineHeight: "2.5rem",

  // margin: "0.25rem 0 0.25rem 0",
  margin: "0.5rem 0 0.5rem 0",

  [XS]: {
    fontSize: "1.5rem",
    lineHeight: "inherit",
  },
});

const BlogCategory = styled("span", {
  fontSize: "0.75rem",
  padding: "0.25rem",
  background: "#efefef",

  display: "inline-block",
  marginTop: "0.5rem",
  // color: blue,
  // color: "white",
  borderRadius: "0.25rem",

  transition: "all 0.2s",
  cursor: "pointer",
  ":hover": {
    opacity: "0.7",
    // color: "rgb(17, 160, 245)"
  },

  // [XS]: {
  //   marginTop: "0.25rem",
  //   fontSize: "1.2rem",
  // }
});


// Refer to this to update.
// https://baseweb.design/blog/responsive-web
// https://www.styletron.org/concepts#media-queries-and-pseudo-classes

const BlogShareWrapper = styled("div", {
  display: "flex",
  marginRight: "0.25rem",

  ":hover": hover,
});


export {
  BlogHeaderContainer,

  BlogStatusWrapper,

  PostedBy,
  BlogTitle,

  UsernameWrapper,
  BlogPostTime,

  BlogCategory,

  BlogShareWrapper
};