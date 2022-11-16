import React from "react";
import ReactPlaceholder from "react-placeholder";

import { JobSearchListSkeletonContainer } from "./JobListCSS";

const JobSearchListSkeleton = () => {
  return (
    <JobSearchListSkeletonContainer>
      {/* <CompanyLogoSkeletonSide /> */}
      <ReactPlaceholder type='textRow' ready={false} color='#efefef'>
        {/* @ts-ignore */}
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
    </JobSearchListSkeletonContainer>
  );
};

export default JobSearchListSkeleton;