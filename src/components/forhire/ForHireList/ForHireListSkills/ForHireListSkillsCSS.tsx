import { styled } from "baseui";

// import { MOBILE, XS } from "../../../breakpoints";
// import { flex } from "../../flex";

const ForHireListSkillContainer = styled("div", {
  display: "flex",
  alignItems: "center",

  flexWrap: "wrap",

  marginTop: "0.25rem",
});

const ForHireListSkill = styled("div", {
  marginTop: "0.25rem",
  marginRight: "0.25rem",
  // marginBottom: "0.5rem",

  transition: "all 0.2s",
  cursor: "pointer",
  ":hover": {
    opacity: "0.7",
  }
});

export {
  ForHireListSkillContainer,
  ForHireListSkill,
};