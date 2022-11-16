import { styled } from "baseui";
import { hover } from "../../../../design/common";
import { DESKTOP, MOBILE, XS } from "../../../../design/breakpoints";

const ProfileUserFileListCardContainer = styled("div", {
  color: "#374252",
  border: "1px solid #eee",
  display: "block",
  padding: "2rem",
  position: "relative",
  textDecoration: "none",
  backgroundColor: "white",

  height: "12rem",
  maxHeight: "12rem",

  flexBasis: "12rem",
  margin: "1rem",

  borderRadius: "0.5rem",

  [DESKTOP]: {
    // flexBasis: "50% 50%",
    // flexBasis: "8rem",
    // flexBasis: "1 1",
    // flexBasis: "1 1",
  },

  // [MOBILE]: {
  //   flexBasis: "50%",
  // },

  // [XS]: {
  //   flexBasis: "100%",
  // }

  // [XS]: {
  //   flexBasis: "100%",
  // }

});

const FileHeader = styled("div", {
  display: "flex",
  alignItems: "flex-start",
  flexFlow: "column",
  fontWeight: 400,
});

const FileWrapper = styled("div", {
  marginTop: "0.5rem",
  width: "100%",

  display: "flex",
  // minHeight: "6rem",
  // alignItems: "center",
  // justifyContent: "center",
});

const FileImage = styled("img", {
  // width: "100%",
  maxWidth: "100%",
  // height: "8rem",
  height: "6rem",
  maxHeight: "6rem",
  // maxHeight: "16rem",

  ":hover": hover,

  [DESKTOP]: {
    // width: "auto",
    maxWidth: "100%",
    // heigth: "16rem",
    // maxHeight: "16rem",
    // height: "16rem",
  }
});

export {
  // ProfileListCardContainer,
  ProfileUserFileListCardContainer,
  
  FileHeader,
  FileWrapper,
  FileImage,
};