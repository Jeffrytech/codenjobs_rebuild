import { styled } from "baseui";
import { DESKTOP, XS } from "../design/breakpoints";
import { shadowBlue } from "../design/colors";
import { boxShadow } from "../design/common";

const PrimaryWrapper = styled("div", {
  boxShadow,
  color: shadowBlue,

  flexShrink: 0,
  borderRadius: "0.5rem",
  marginBottom: "2rem",
  backgroundColor: "white",

  width: "44rem",
  minHeight: 0,
  
  [DESKTOP]: {
    width: "100%",
  },

  [XS]: {
    // [DESKTOP]: {
    marginBottom: "1rem",
  }
  
  // [MOBILE]: {
  //   width: "100%",
  // }
});

export default PrimaryWrapper;