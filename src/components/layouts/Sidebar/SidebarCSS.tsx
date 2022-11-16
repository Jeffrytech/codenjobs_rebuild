/* eslint-disable no-trailing-spaces */
import { styled } from "baseui";

import {
  MOBILE,
  // XS 
} from "../../../design/breakpoints";

const SidebarListCotnainer = styled("li", {
  display: "flex",
  alignItems: "center",
});

const SidebarDropdownContainer = styled("section", {
  display: "flex",
  flexFlow: "column",

  position: "fixed",
  top: "3.75rem",
  left: 0,
  background: "white",
  border: "2px solid #efefef",
  minWidth: "15rem",

  marginRight: "1.25rem",

  padding: "0.5rem",

  // boxShadow: "0px 0.5rem 1rem 0px rgba(0,0,0,0.2)",
  zIndex: 10000,

  borderRadius: "0.1rem 0.1rem 0.5rem 0.5rem",

  // Make full width dropdown later.
  [MOBILE]: {
    marginRight: "0",

    width: "100%",

    padding: "0rem",
    // height: "100%",
    // width: "100%",
  }
});

const SidebarDropdownWrapper = styled("span", {
  display: "flex",
  alignItems: "center",

  padding: "0.5rem",
  marginLeft: "0.5rem",
  // padding: "8px",
  width: "100%",

  transition: "all 0.2s",

  opacity: "0.7",

  cursor: "pointer",
  ":hover": {
    opacity: "1",
    // opacity:
    // color: "rgb(37, 191, 161)",
  },
  [MOBILE]: {
    padding: "1rem 1rem",
    marginLeft: 0,
    // padding: "0.5rem 1rem",
  }
});

const SidebarDropdownLabel = styled("span", {
  marginLeft: "0.5rem",
});

const SidebarMobileLinksContainer = styled("div", {
  display: "none",

  [MOBILE]: {
    display: "flex",
    flexFlow: "column",
  }
});

export {
  SidebarListCotnainer,
  SidebarDropdownContainer,
  
  SidebarDropdownWrapper,
  SidebarDropdownLabel,

  SidebarMobileLinksContainer,
};