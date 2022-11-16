import { styled, withStyle } from "baseui";
import { MOBILE } from "../../../../../design/breakpoints";

const JobDetailsGroupTitle = styled("div", {
  marginBottom: "0.5rem",
});

const JobDetailsGroupContainer = styled("div", {
  display: "flex",

  marginLeft: "-0.1rem",

  [MOBILE]: {
    flexFlow: "column",
  }
});

const JobDetailsLabel = styled("label", {
  display: "flex",
  alignItems: "center",
  marginBottom: "0.1rem",
});

const JobDetailsLabelText = styled("span", {
  marginLeft: "0.1rem",
  marginRight: "0.25rem",
});

export {
  JobDetailsGroupTitle,
  JobDetailsGroupContainer,
  JobDetailsLabel,
  JobDetailsLabelText,
};