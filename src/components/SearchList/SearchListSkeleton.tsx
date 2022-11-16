import React from "react";
import ReactPlaceholder from "react-placeholder";

import { SearchListSkeletonCotainer } from "./SearchListCSS";

const SearchListSkeleton = () => {
  return (
    <SearchListSkeletonCotainer>
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
      <ReactPlaceholder type='textRow' ready={false} color='#efefef'>
        <span />
      </ReactPlaceholder>
      <ReactPlaceholder type='textRow' ready={false} color='#efefef'>
        <span />
      </ReactPlaceholder>
    </SearchListSkeletonCotainer>
  );
};

export default SearchListSkeleton;