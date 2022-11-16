import React from "react";
import ReactPlaceholder from "react-placeholder";

import { styled } from "baseui";
import { MOBILE } from "../../design/breakpoints";

// Extract this?
const BlogSkeletonContainer = styled("div", {
  color: "#374252",
  border: "1px solid #eee",
  display: "block",
  // padding: "32px 40px 32px 40px",
  padding: "2rem",
  position: "relative",
  // transition: "all 0.2s",
  textDecoration: "none",
  backgroundColor: "white",

  // cursor: "pointer",
  // ":hover": {
  //     opacity: "0.8",
  // }
  [MOBILE]: {
    padding: "1rem",
  }
});

const BlogSkeleton = () => {
  return (
    <BlogSkeletonContainer>
      <ReactPlaceholder type='textRow' ready={false} color='#efefef'>
        <span />
      </ReactPlaceholder>
      <ReactPlaceholder type='textRow' ready={false} color='#efefef'>
        <span />
      </ReactPlaceholder>
      <ReactPlaceholder type='textRow' ready={false} color='#efefef'>
        <span />
      </ReactPlaceholder>
      <ReactPlaceholder type='textRow' ready={false} color='#efefef'>
        <span />
      </ReactPlaceholder>
      <ReactPlaceholder type='textRow' ready={false} color='#efefef'>
        <span />
      </ReactPlaceholder>
    </BlogSkeletonContainer>
  );
};

export default BlogSkeleton;