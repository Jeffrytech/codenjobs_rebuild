import { styled } from "baseui";

const ProfileSkillsWrapper = styled("div", {
  display: "flex",
  flexWrap: "wrap",

  marginTop: "0.25rem",
});

const ProfileSkill = styled("div", {
  marginRight: "0.25rem",
  marginBottom: "0.25rem",

  // [MOBILE]: {
  //   marginRight: "0.25rem",
  //   marginBottom: "0.5rem",
  // }
});

export {
  ProfileSkillsWrapper,
  ProfileSkill,
};