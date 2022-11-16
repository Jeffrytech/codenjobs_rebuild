import { styled } from "baseui";
import React from "react";
import ReactPlaceholder from "react-placeholder";

const ProfileFileListSkeletonCotainer = styled("div", {
  color: "#374252",
  border: "1px solid #eee",
  display: "block",
  padding: "2rem",
  position: "relative",
  textDecoration: "none",
  backgroundColor: "white",

  height: "12rem",
  maxHeight: "12rem",

  flexBasis: "12rem",
  margin: "1rem",

  borderRadius: "0.5rem",
});

const ProfileFileListSkeleton = () => {
  return (
    <ProfileFileListSkeletonCotainer>
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
      <ReactPlaceholder type='textRow' ready={false} color='#efefef'>
        <span />
      </ReactPlaceholder>
      <ReactPlaceholder type='textRow' ready={false} color='#efefef'>
        <span />
      </ReactPlaceholder>
    </ProfileFileListSkeletonCotainer>
  );
};

export default ProfileFileListSkeleton;