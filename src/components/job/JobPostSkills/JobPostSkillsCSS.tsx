import { styled } from "baseui";
import { MOBILE } from "../../../design/breakpoints";

const JobPostSkillContainer = styled("div", {
  display: "flex",
  flexFlow: "row",
  // ...fullWidthPercent,

  padding: "2rem 2.5rem",

  [MOBILE]: {
    // padding: "1rem 2rem"
    padding: "1.5rem"
  },
});

const JobPostSkillsWrapper = styled("ul", {
  display: "flex",
  flexWrap: "wrap",

  listStyle: "none",
  margin: "1rem 0 0 0",
  //   marginTop: "1rem",
  // marginBottom: "0.5rem",
  padding: 0,
});

const Skill = styled("li", ({ $isPreview }) => {
  return {
    marginRight: "0.5rem",
    marginBottom: "0.5rem",

    transition: $isPreview ? "inherit" : "all 0.2s",
    // This doesn't work here.
    // cursor: $isPreview ? "inherit" : "pointer !important",

    ":hover": {
      opacity: $isPreview ? "inherit" : "0.7",
    }
  };
});

export {
  JobPostSkillContainer,
  JobPostSkillsWrapper,
  Skill,
};

// Refer to this to update.
// https://baseweb.design/blog/responsive-web
// https://www.styletron.org/concepts#media-queries-and-pseudo-classes
