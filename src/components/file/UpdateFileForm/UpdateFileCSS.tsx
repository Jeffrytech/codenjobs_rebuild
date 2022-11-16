import { styled } from "baseui";

// Extract this
const FileImageWrapper = styled("figure", {
  // margin: "0.5rem 0 0 0",
  margin: "0 0 0 0",
  // margin: "1rem 0 0 0",
  // margin: "1rem 0 1rem 0",
  padding: "0",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

// Extract this
const FileImage = styled("img", {
  // height: "auto",
  height: "6rem",
  maxHeight: "6rem",

  width: "auto",
  maxWidth: "100%",
  borderRadius: "0.5rem",
});

export {
  FileImageWrapper,
  FileImage,
};