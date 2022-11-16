import { styled } from "baseui";

// Below the input
const ErrorMessageWrapper = styled("span", {
  display: "flex",

  margin: "0.5rem 0 1rem 0.25rem",
  fontSize: "0.8rem",
  color: "#ff1676",
});

// Above the input
const DropdownErrorMessageWrapper = styled("span", {
  display: "flex",

  // margin: "0.5rem 0 1rem 0.25rem",
  margin: "0.75rem 0 1rem 0rem",
  fontSize: "0.8rem",
  color: "#ff1676",
});

const ConnectErrorMessageWrapper = styled("span", {
  display: "flex",

  margin: "0 0 1rem 0.1rem",
  fontSize: "0.8rem",
  color: "#ff1676",
});

export {
  ErrorMessageWrapper,
  DropdownErrorMessageWrapper,

  ConnectErrorMessageWrapper,
};