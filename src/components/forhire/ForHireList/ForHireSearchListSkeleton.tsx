import React from "react";
import ReactPlaceholder from "react-placeholder";

import { ForHireSearchListSkeletonContainer } from "./ForHireListCSS";

const ForHireSearchListSkeleton = () => {
  return (
    <ForHireSearchListSkeletonContainer>
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
    </ForHireSearchListSkeletonContainer>
  );
};

export default ForHireSearchListSkeleton;