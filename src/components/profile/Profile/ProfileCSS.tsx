import { styled } from "baseui";
import { XS, MOBILE, DESKTOP } from "../../../design/breakpoints";
import { card } from "../../../design/common";
// import { jobTypes } from "../../../typeDefinitions/job";

// 1. Container to give a background color
// 2. Primary (panel)
// 3. Secondary (panel)

// const card = {
//   color: "#374252",
//   // boxShadow: "0 2px 4px 0 rgba(0,0,0,.1)",
//   boxShadow: "0 2px 4px 0 rgba(0,0,0,.1)",
//   flexShrink: 0,
//   // borderRadius: "0.5px",
//   borderRadius: "0.5rem",
//   marginBottom: "2rem",
//   backgroundColor: "white",

//   [MOBILE]: {
//     marginBottom: "1rem",
//   }
// };

const ProfileUserSection = styled("section", {
  width: "48rem",

  [DESKTOP]: {
    width: "100%"
  }
});

// Think a better name for this?
const ProfileCard = styled("div", {
  ...card,

  // padding: "32px 16px",
  position: "relative", // To use setting button inside
});

const ProfileImage = styled("a", ({
  // @ts-ignore
  $isOwner
}) => {
  // cursor: "pointer",
  return {
    marginTop: "-1rem",
    cursor: $isOwner ? "pointer" : "inherit",

    background: "white",
    borderRadius: "50%",
    padding: "0.25rem",
  };
});

// This should be shown only after users login.
const SettingsWrapper = styled("a", {
  // position: "absolute",
  display: "flex",

  // top: "0.8rem",
  // right: "0.8rem",
  color: "white",
  // color: "rgb(17, 160, 245)",

  // transition: "all 0.2s",
  cursor: "pointer",
  // ":hover": {
  //   opacity: 0.7,
  // }

  marginRight: "0.25rem",
});

const ProfileName = styled("h1", {
  textAlign: "center",
  // margin: 0,
  fontSize: "1rem",

  margin: "0 0.25rem 0.25rem 0.25rem",
  // marginLeft: "0.25rem",
  // marginBottom: "0.25re"
  
  // transition: "all 0.2s",
  // ":hover": {
  //   cursor: "pointer",
  //   opacity: 0.7,
  //   color: "rgb(17, 160, 245)",
  // }
  wordBreak: "break-word",

  [XS]: {
    marginTop: "0.25rem",
  }
});

const UserName = styled("h2", {
  textAlign: "center",
  margin: 0,
  fontSize: "1rem",
  color: "black",

  opacity: 0.5,
});

const Bio = styled("div", {
  marginBottom: "0.5rem",
  // lineHeight: "18px",
  lineHeight: "1.25rem",

  wordBreak: "break-all",
});

const FollowButton = styled("a", ({
  // @ts-ignore
  $following
}) => {
  // alert($following);
  
  return {
    width: "100%",
    display: "block",
    padding: "0.5rem 1rem",
    fontSize: "1rem",
    textAlign: "center",
    lineHeight: "16px",
    borderRadius: "8px",
    letterSpacing: "0.7px",
    textDecoration: "none",

    marginRight: "0.5rem",

    // Use theme instead?
    color: $following ? "rgb(17, 160, 245)" : "#fff",
    backgroundColor: $following ? "white" : "rgb(17, 160, 245)",
    // border: $following ? "1px solid rgb(17, 160, 245)" : "none",
    border: "1px solid rgb(17, 160, 245)",

    transition: "all 0.2s",
    cursor: "pointer",
    ":hover": {
      opacity: 0.7
    }
  };
});

const FollowButtonText = styled("span", {
  marginLeft: "0.25rem",
});

// Extract it to links/
const MessageButton = styled("div", {
  width: "100%",
  display: "block",
  padding: "0.5rem 1rem",
  fontSize: "1rem",
  textAlign: "center",
  lineHeight: "16px",
  borderRadius: "8px",
  letterSpacing: "0.7px",
  textDecoration: "none",

  // Use theme instead?
  color: "#fff",
  backgroundColor: "rgb(17, 160, 245)",
  border: "1px solid rgb(17, 160, 245)",
  
  transition: "all 0.2s",
  cursor: "pointer",
  ":hover": {
    opacity: 0.7
  }
});

const MessageButtonText = styled("span", {
  marginLeft: "0.25rem",
});

// Refer to this to update.
// https://baseweb.design/blog/responsive-web
// https://www.styletron.org/concepts#media-queries-and-pseudo-classes

const ShowProfileDetailsButton = styled("div", {
  padding: "0.5rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  color: "rgb(17, 160, 245)",

  // transition: "all 0.2s",
  cursor: "pointer",
  // ":hover": {
  //   opacity: 0.7,
  // }
});

const ProfileDetailsContainer = styled("div", () => {
  return {
    // display: $showProfileDetails ? "flex" : "none",
    display: "flex",
    flexFlow: "column",
    // justifyContent: "space-between",
    // minHeight: "8rem",
    // marginTop: "1rem",
    marginTop: "0.5rem",
    marginLeft: "0.1rem",
  };
});

const ProfileDetailWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",

  marginBottom: "0.5rem",
});

const ProfileDetailLink = styled("a", {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",

  marginBottom: "0.5rem",
  
  color: "black",
  
  textDecoration: "none",
  transition: "all 0.2s",
  cursor: "pointer",
  ":hover": {
    opacity: 0.7,
    color: "rgb(17, 160, 245)",
  }
});

const ProfileFollowersLink = styled("a", {
  display: "flex",

  fontSize: "0.85rem",
  opacity: "0.7",
  marginTop: "0.1rem",

  marginBottom: "0.5rem",

  color: "black",

  textDecoration: "none",
  transition: "all 0.2s",
  cursor: "pointer",
  ":hover": {
    opacity: 0.7,
    color: "rgb(17, 160, 245)",
  }
});

// const ProfileJobDetailsGroupContainer = styled("div", ({ $jobTypes }) => {
const ProfileJobDetailsGroupContainer = styled("div", ({ $selected }) => {
  // alert(jobTypes[0] === null)
  // alert(jobTypes === null);
  
  return {
    display: "flex",

    flexWrap: "wrap",

    marginTop: $selected === false ? "0.5rem" : "1rem",
    // marginTop: "1rem",
    marginLeft: "-0.1rem",
    // marginLeft: "-0.05rem",

    [MOBILE]: {
      flexFlow: "column",
    }
  };
});

const ProfileJobDetailsLabel = styled("label", {
  display: "flex",
  alignItems: "center",
  marginBottom: "0.25rem",
  // marginBottom: "0.5rem",
});

const ProfileJobDetailsLabelText = styled("span", {
  marginLeft: "0.1rem",
  marginRight: "0.25rem"
});

export {
  ProfileUserSection,
  
  ProfileCard,

  SettingsWrapper,
  
  ProfileImage,
  ProfileName,
  UserName,
  Bio,

  FollowButton,
  FollowButtonText,

  MessageButton,
  MessageButtonText,

  ShowProfileDetailsButton,
  ProfileDetailsContainer,

  ProfileDetailWrapper,
  ProfileDetailLink,

  ProfileFollowersLink,

  // settings/job

  ProfileJobDetailsGroupContainer,
  ProfileJobDetailsLabel,
  ProfileJobDetailsLabelText,
};

