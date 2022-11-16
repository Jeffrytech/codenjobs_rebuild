import { styled } from "baseui";

const TextWrapper = styled("span", {
  cursor: "pointer",
  ":hover": {
    textDecoration: "underline"
  }
});

export default TextWrapper;