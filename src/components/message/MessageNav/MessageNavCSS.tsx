import { styled } from "baseui";

const MessageNavContainer = styled("nav", {
  background: "rgb(55, 66, 82)",
});

// Should handle mobile responsive design when there are equal or more than 4 links.
const MessageNavListWrapper = styled("ul", {
  margin: "auto",

  display: "flex",
  flexWrap: "wrap",
  justifyContent: "flex-start",
  alignItems: "center",

  maxWidth: "64rem",

  minHeight: "4rem",
  listStyle: "none",

  padding: 0,
});

const MessageNavLinkWrapper = styled("li", ({
  // @ts-ignore
  $activeLink
}) => {
  return {
    height: "4rem",
    lineHeight: "4rem",
    // borderBottom: $activeLink ? "2px solid black" : "none",
    padding: "0 0.5rem",
    // color: "#efefef",
    marginLeft: "1rem",
    marginRight: "1rem",

    opacity: $activeLink ? 1 : 0.7,

    transition: "all 0.2s",
    cursor: "pointer",
    // ":hover": {
    //   opacity: 1,
    // }
  };
});

const MessageNavLink = styled("a", {
  color: "#efefef",
  textDecoration: "none",

  // transition: "all 0.2s",
  // cursor: "pointer",
});

export {
  MessageNavContainer,
  MessageNavListWrapper,
  MessageNavLinkWrapper,
  MessageNavLink,
};