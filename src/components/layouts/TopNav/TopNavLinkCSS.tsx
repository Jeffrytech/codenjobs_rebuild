import { styled, withStyle } from "baseui";
import { DESKTOP, MOBILE, XS } from "../../../design/breakpoints";

const TopNavLinkContainer = styled("div", {
  position: "relative",
  display: "inline-block",
});

const TopNavLinkButtonWrapper = styled("div", {
  display: "flex",
  marginRight: "0.5rem",

  [XS]: {
    display: "none",
  }
});

const TopNavLinkButton = styled("span", {
  display: "flex",
  alignItems: "center",
  
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

  [MOBILE]: {
    display: "none",
    // marginRight: "0.5rem",
  },

  // [MOBILE]: {
  //   // display: "none",
  //   marginRight: "0.5rem",
  // },
  // [XS]: {
  //   display: "none",
  // }
});

const TopNavLinkDocsButton = withStyle(TopNavLinkButton, () => {
  return {
    [DESKTOP]: {
      display: "none",
    }
  };
});


export {
  TopNavLinkContainer,
  
  TopNavLinkButtonWrapper,
  TopNavLinkButton,

  TopNavLinkDocsButton,
};