import { styled } from "baseui";
// import { hover } from "../../design/common";

const UserProfileCardContainer = styled("div", {
  display: "flex",
  minWidth: "12.5rem",
  maxWidth: "15rem",
  flexFlow: "column",

  padding: "0.25rem",
});

const UserProfileCardDetailWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  marginTop: "0.25rem",
});

const UsernameWrapper = styled("span", {
  cursor: "pointer",
  color: "rgb(55, 66, 82)",
  textDecoration: "none",

  marginRight: "0.25rem",

  ":hover": {
    textDecoration: "underline"
  }
});

const ProfileImage = styled("div", {
  cursor: "pointer",
  transition: "all 0.2s",
  ":hover": {
    opacity: 0.7,
  }
});

const FollowersWrapper = styled("span", {
  display: "flex",
  alignItems: "center",
  marginTop: "0.25rem",
  marginRight: "0.25rem",
  marginBottom: "0.25rem",

  color: "rgb(55, 66, 82)",
  textDecoration: "none",
  
  transition: "all 0.2s",
  cursor: "pointer",
  ":hover": {
    color: "rgb(17, 160, 245)",
    opacity: 0.7,
  }
});

const FollowersText = styled("span", {
  marginLeft: "0.25rem",
  fontFamily: "Roboto",
  fontSize: "0.8rem",
});

const JobPostsWrapper = styled("span", {
  display: "flex",
  alignItems: "center",
  marginTop: "0.25rem",
  marginRight: "0.25rem",
  marginBottom: "0.25rem",

  color: "rgb(55, 66, 82)",
  textDecoration: "none",
  
  // marginLeft: "0.25rem",
  
  transition: "all 0.2s",
  cursor: "pointer",
  ":hover": {
    color: "rgb(17, 160, 245)",
    opacity: 0.7,
  }
});

const JobPostsText = styled("span", {
  marginLeft: "0.25rem",
  fontFamily: "Roboto",
  fontSize: "0.8rem",
});

export {
  UserProfileCardContainer,

  ProfileImage,
  UsernameWrapper,
  UserProfileCardDetailWrapper,

  FollowersWrapper,
  FollowersText,

  JobPostsWrapper,
  JobPostsText,
};