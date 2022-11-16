import React from "react";
import ReactPlaceholder from "react-placeholder";

import { BlogSearchListSkeletonCotainer } from "./BlogListCSS";

const BlogSearchListSkeleton = () => {
  return (
    <BlogSearchListSkeletonCotainer>
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
    </BlogSearchListSkeletonCotainer>
  );
};

export default BlogSearchListSkeleton;