import { styled } from "baseui";
import { XS } from "../../design/breakpoints";

const PostedByContainer = styled("div", {
  display: "flex",

  opacity: 0.7,
  fontSize: "1rem",
  // marginBottom: "8px",

  marginTop: "0.25rem",
  marginBottom: "0.25rem",

  [XS]: {
    flexFlow: "column",
    // fontSize: "0.8rem",
  },
});

const UsernameWrapper = styled("div", {
  // [XS]: {
  //   marginBottom: "0.5rem",
  // },
});

const PostTime = styled("span", {
  // [XS]: {
  //   marginTop: "0.25rem",
  // }
});

export {
  PostedByContainer,
  UsernameWrapper,
  PostTime,
};