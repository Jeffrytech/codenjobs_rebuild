import { styled } from "baseui";
import { MOBILE } from "../../../design/breakpoints";

// Rename TopNavDropdown to TopNavDropdown later?
const TopNavDropdownContainer = styled("div", {
  position: "relative",
  display: "inline-block",
});

const TopNavDropdownButtonWrapper = styled("div", {
  display: "flex",
  marginRight: "0.5rem",

  [MOBILE]: {
    display: "none",
  }
  // [XS]: {
  //   display: "none",
  // }
});

const TopNavDropdownButton = styled("span", {
  // color: "rgb(37, 191, 161)",
  color: "black",
  // boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.1)",
  transition: "all 0.2s",
  // border: "1px solid rgb(37, 191, 161)",
  // borderRadius: "8px",
  opacity: "0.7",

  cursor: "pointer",
  // ":hover": {
  //   opacity: 0.7
  // },
  marginRight: "0.25rem",

  // [MOBILE]: {
  //   // display: "none",
  //   marginRight: "0.5rem",
  // },
  // [XS]: {
  //   display: "none",
  // }
});

const TopNavDropdownContent = styled("div", {
  position: "absolute",
  minWidth: "10rem",
  backgroundColor: "white",
  display: "flex",
  flexFlow: "column",
  border: "2px solid #efefef",

  padding: "0.5rem",

  borderRadius: "0.1rem 0.1rem 0.5rem 0.5rem",

  marginTop: "21px",
  // boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",

  zIndex: 1,
});

const TopNavDropdownContentLinkWrapper = styled("span", {
  display: "flex",
  alignItems: "center",

  padding: "0.5rem",
  // padding: "1rem",
  // padding: "8px",
  width: "100%",

  transition: "all 0.2s",
  cursor: "pointer",
  // opacity: "0.7",
  
  opacity: "1",

  ":hover": {
    // opacity: "1",

    opacity: "0.7",
    color: "rgb(17, 160, 245)",
    // color: "rgb(37, 191, 161)",
  }
});

export {
  TopNavDropdownContainer,
  
  TopNavDropdownButtonWrapper,
  TopNavDropdownButton,

  TopNavDropdownContent,
  TopNavDropdownContentLinkWrapper,
};