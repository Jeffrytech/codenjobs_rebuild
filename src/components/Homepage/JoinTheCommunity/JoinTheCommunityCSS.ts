import { styled } from "baseui";
import { darkBlue, white } from "../../../design/colors";
import { hover } from "../../../design/common";

const JoinTheCommunitySection = styled("section", {
  minHeight: "11rem",
  // background: "rgb(17, 160, 245)"
  background: darkBlue,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  paddingBlock: "70px",
});

const JoinTheCommunityTitle = styled("h2", {
  color: white,
  fontWeight: "bold",
  marginTop: "0",
  fontSize: "2rem",
  padding: "20px",
});

const JoinTheCommunityRegisterButton = styled("button", {
  color: darkBlue,
  backgroundColor: white,
  border: "none",
  borderRadius: "6px",
  // padding: "0.5rem 1rem",
  padding: "16px 24px",
  marginRight: "1rem",
  fontWeight: "500",
  height: "45px",

  ":hover": {
    cursor: "pointer",
  },
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
  padding: "16px 24px",
  fontWeight: "500",
  height: "45px",

  ":hover": {
    cursor: "pointer",
  },
});

export {
  JoinTheCommunitySection,
  JoinTheCommunityTitle,
  JoinTheCommunityRegisterButton,
  JoinTheCommunityDocsButton,
};
