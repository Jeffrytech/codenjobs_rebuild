import { styled } from "baseui";
import { MOBILE } from "../design/breakpoints";

const BlackPreview = styled("div", {
  height: "100%",
  backgroundColor: "black",
  borderRadius: "0.25rem",

  minHeight: "16rem",

  [MOBILE]: {
    minHeight: "8rem",
  }
});

export default BlackPreview;
