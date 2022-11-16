import { styled } from "baseui";
import { DESKTOP, MOBILE } from "../design/breakpoints";

const PrimaryContainer = styled("article", {
  maxWidth: "100%",

  [DESKTOP]: {
    width: "100%",
  }
  // [MOBILE]: {
  //   width: "100%",
  // }
});

export default PrimaryContainer;