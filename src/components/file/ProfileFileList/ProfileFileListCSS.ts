import { styled } from "baseui";

const FileNoSearchListHeader = styled("div", () => {
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    fontSize: "1rem",
    fontWeight: "bold",
    lineHeight: "1.25rem",
    letterSpacing: "0.7px",

    fontFamily: "Roboto, Helvetica, sans-serif",

    // padding: "1rem",
    padding: "0.75rem",
    textAlign: "left",

    // backgroundColor: white,

    // border: "1px solid #efefef",
    // borderRadius: "0.5rem",

    marginTop: "1rem 0 1rem 0",

    width: "100%",
  };
});

export {
  FileNoSearchListHeader
};