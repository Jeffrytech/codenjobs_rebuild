import { styled } from "baseui";

const Logo = styled("img", {
  display: "flex",
  // width: "2rem",
  // width: "2.5rem",
  width: "2rem",

  transition: "all 0.2s",
  cursor: "pointer",
  ":hover": {
    opacity: 0.6
  }
});

export default Logo;