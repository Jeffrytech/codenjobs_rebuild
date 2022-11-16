import React from "react";
import ReactPlaceholder from "react-placeholder";

import { HiringSearchListSkeletonContainer } from "./HiringListCSS";

const HiringSearchListSkeleton = () => {
  return (
    <HiringSearchListSkeletonContainer>
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
    </HiringSearchListSkeletonContainer>
  );
};

export default HiringSearchListSkeleton;