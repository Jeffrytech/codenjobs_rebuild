import { styled } from "baseui";
import { MOBILE } from "../../../design/breakpoints";

const ProfileNavContainer = styled("nav", {
  background: "white",
  
  borderBottom: "1px solid rgb(237, 242, 247)",
});

// Should handle mobile responsive design when there are equal or more than 4 links.
const ProfileNavListWrapper = styled("ul", {
  margin: "auto",

  display: "flex",
  flexWrap: "wrap",
  justifyContent: "flex-start",
  alignItems: "center",

  maxWidth: "64rem",

  minHeight: "3.75rem",
  listStyle: "none",

  padding: 0,

  [MOBILE]: {
    flexFlow: "row",
    overflowX: "scroll",

    "::-webkit-scrollbar": {
      width: 0,
      height: 0,
    }
  }
});

const ProfileNavLinkWrapper = styled("li", ({
  // @ts-ignore
  $activeLink
}) => {
  return {
    height: "3.75rem",
    lineHeight: "3.75rem",
    borderBottom: $activeLink ? "2px solid black" : "none",
    padding: "0 0.5rem",
    color: "black",
    marginLeft: "2rem",
    marginRight: "1rem",

    opacity: $activeLink ? 1 : 0.5,

    transition: "all 0.2s",
    cursor: "pointer",
    ":hover": {
      opacity: 1,
    },

    [MOBILE]: {
      marginLeft: "1rem",
    }
  };
});

const ProfileNavLink = styled("a", {
  color: "black",
  textDecoration: "none",

  transition: "all 0.2s",
  cursor: "pointer",
});

export {
  ProfileNavContainer,
  ProfileNavListWrapper,
  ProfileNavLinkWrapper,
  ProfileNavLink,
};