import React from "react";
import { styled } from "baseui";
import { DESKTOP, MOBILE, XS } from "../../design/breakpoints";

const BlogCoverWrapper = styled("div", {
  // maxHeight: window.screen.width > 480 ? "16rem" : "8rem",
  borderRadius: "0.5rem 0.5rem 0 0",
  borderTop: "1px solid #efefef",
  borderRight: "1px solid #efefef",
  borderLeft: "1px solid #efefef",

  // width: "16rem",
  // maxWidth: "16rem",
  width: "100%",

  [DESKTOP]: {
    borderRadius: "0",
  },

  // [MOBILE]: {
  //   width: "12rem",
  //   maxWidth: "12rem",
  // },

  // [XS]: {
  //   width: "8rem",
  //   maxWidth: "8rem",
  // }
});

const BlogCoverImage = styled("img", {
  // width: "16rem",
  // maxWidth: "16rem",

  objectFit: "fill",
  width: "100%",
  // height: "100%",
  maxHeight: "16rem",
  height: "16rem",
  borderRadius: "0.5rem 0.5rem 0 0",

  [DESKTOP]: {
    borderRadius: "0",
  },

  [MOBILE]: {
    heigth: "12rem",
    maxHeight: "12rem",
  },

  [XS]: {
    // width: "8rem",
    // maxWidth: "8rem",
    maxHeight: "8rem",
    height: "8rem",
  }
});

// Extract CSS later with BlogCoverCSS later?
const BlogCover = ({
  cover,
}) => {
  if (cover) {
    return (<BlogCoverWrapper>
      <BlogCoverImage
        src={cover}
      />
    </BlogCoverWrapper>);
  } else {
    return null;
  }
};

export default BlogCover;