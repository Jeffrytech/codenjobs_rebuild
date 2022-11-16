import { styled } from "baseui";

const ProfileJobsOwnerButtonsContainer = styled("div", {
  display: "flex",
  padding: "0 0 1.5rem 1.5rem",
  
  // marginTop: "0.25rem",
});

const ProfileJobsOwnerEditButtonWrapper = styled("a", {
  display: "flex",
  alignItems: "center",

  color: "rgb(17, 160, 245)",
  marginRight: "0.5rem",

  transition: "all 0.2s",
  cursor: "pointer",
  ":hover": {
    opacity: 0.7,
  }
});

const ProfileJobsOwnerDeleteButtonWrapper = styled("a", {
  display: "flex",
  alignItems: "center",

  color: "#ff1676",

  transition: "all 0.2s",
  cursor: "pointer",
  ":hover": {
    opacity: 0.7,
  }
});

const ProfileJobsStatusButtonWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  marginLeft: "auto",

  transition: "all 0.2s",
  cursor: "pointer",
  ":hover": {
    opacity: 0.7,
  }
});

export {
  ProfileJobsOwnerButtonsContainer,
  ProfileJobsOwnerEditButtonWrapper,
  ProfileJobsOwnerDeleteButtonWrapper,

  ProfileJobsStatusButtonWrapper,
};