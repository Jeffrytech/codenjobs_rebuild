import { styled } from "baseui";
import { darkBlue, white } from "../../../design/colors";
import { hover } from "../../../design/common";

const JoinTheCommunitySection = styled("section", {
  height: "11rem",
  // background: "rgb(17, 160, 245)"
  background: darkBlue,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const JoinTheCommunityTitle = styled("h2", {
  color: white,
  fontWeight: "normal",
  marginTop: "0",
  fontSize: "2rem",
});

const JoinTheCommunityRegisterButton = styled("button", {
  color: darkBlue,
  backgroundColor: white,
  border: "none",
  borderRadius: "0.25rem",
  // padding: "0.5rem 1rem",
  padding: "0.75rem 1rem",
  marginRight: "1rem",

  ":hover": {
    cursor: "pointer"
  }
});

const JoinTheCommunityDocsButton = styled("button", {
  color: white,
  backgroundColor: darkBlue,
  // border: `1px solid ${white}`,
  outline: `1px solid ${white}`,
  border: "none",

  // outline: `1px solid ${white}`,
  borderRadius: "0.25rem",
  // padding: "0.5rem 0.5rem",
  // padding: "0.5rem 1rem 0.5rem 1rem",
  padding: "0.75rem 1rem 0.75rem 1rem",
  marginRight: "1rem",
  display: "flex",

  ":hover": {
    cursor: "pointer"
  }
});

export {
  JoinTheCommunitySection,
  JoinTheCommunityTitle,
  JoinTheCommunityRegisterButton,
  JoinTheCommunityDocsButton,
};