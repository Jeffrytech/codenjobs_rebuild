import { styled } from "baseui";
import { DESKTOP } from "../design/breakpoints";

// Think a better name for this?
const JobPostSecondaryWrapper = styled("div", {
  width: "18rem",
  overflow: "hidden",

  [DESKTOP]: {
    width: "100%",
  }

  // [DESKTOP]: {
  //   display: "none",
  //   // minWidth: "100%"
  //   // width: "100%"
  // }
  // [MOBILE]: {
  //   // minWidth: "100%"
  //   width: "100%"
  // }
});

export default JobPostSecondaryWrapper;