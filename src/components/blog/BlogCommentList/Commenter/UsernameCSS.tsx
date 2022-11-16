import { styled } from "baseui";
import { XS } from "../../../../design/breakpoints";

const UsernameWrapper = styled("span", ({
  // @ts-ignore
  $color,
  // @ts-ignore
  $opacity,
}) => {
  return {
    cursor: "pointer",
    color: $color || "rgb(55, 66, 82)",
    textDecoration: "none",

    // marginLeft: "0.25rem",
    marginLeft: "0.5rem",
    marginRight: "0.25rem",
    wordBreak: "break-word",

    opacity: $opacity || "inherit",

    ":hover": {
      textDecoration: "underline"
    },

    [XS]: {
      marginTop: "0.5rem",
      marginBottom: "0.5rem",
    }
  };
});

export {
  UsernameWrapper,
};