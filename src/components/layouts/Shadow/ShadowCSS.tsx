import { styled } from "baseui";

import { MOBILE } from "../../../design/breakpoints";

const ShadowContainer = styled("div", {
  // position: "absolute",
  position: "fixed",
  top: "60px",
  left: 0,
  right: 0,
  height: "100vh",
    
  zIndex: 2,
  // background: "#121212",
  background: "rgba(0, 0, 0, 0.1)",
  // background: "rgba(0, 0, 0, 0.5)",
  // opacity: "0.7",

  cursor: "pointer",

  // display: "none",
  display: "flex",

  [MOBILE]: {
    display: "inherit",
  }
});

export default ShadowContainer;