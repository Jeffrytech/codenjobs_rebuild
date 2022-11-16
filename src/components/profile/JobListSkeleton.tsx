import React from "react";
import ReactPlaceholder from "react-placeholder";

import { styled } from "baseui";
import { MOBILE } from "../../design/breakpoints";

// Extract this?
// JobSkeleton?
const JobListSkeletonCotainer = styled("div", {
  color: "#374252",
  border: "1px solid #eee",
  display: "block",
  padding: "2rem",
  // padding: "0.5rem",
  position: "relative",
  // transition: "all 0.2s",
  textDecoration: "none",
  backgroundColor: "white",

  // cursor: "pointer",
  // ":hover": {
  //     opacity: "0.8",
  // }
  [MOBILE]: {
    padding: "1.25rem",
  }
});

const JobListSkeleton = () => {
  return (
    <JobListSkeletonCotainer>
      {/* <CompanyLogoSkeletonSide /> */}
      <ReactPlaceholder type='textRow' ready={false} color='#efefef'>
        <span />
      </ReactPlaceholder>
      <ReactPlaceholder type='textRow' ready={false} color='#efefef'>
        <span />
      </ReactPlaceholder>
      <ReactPlaceholder type='textRow' ready={false} color='#efefef'>
        <span />
      </ReactPlaceholder>
      {/* <ReactPlaceholder type='textRow' ready={false} color='#efefef'>
        <span />
      </ReactPlaceholder> */}
      {/* <ReactPlaceholder type='textRow' ready={false} color='#efefef'>
        <span />
      </ReactPlaceholder> */}
    </JobListSkeletonCotainer>
  );
};

export default JobListSkeleton;