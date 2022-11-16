import { styled } from "baseui";

const InboxNavContainer = styled("nav", {
  background: "rgb(55, 66, 82)",
});

// Should handle mobile responsive design when there are equal or more than 4 links.
const InboxNavListWrapper = styled("ul", {
  margin: "auto",

  display: "flex",
  flexWrap: "wrap",
  justifyContent: "flex-start",
  alignItems: "center",

  maxWidth: "64rem",

  minHeight: "2.5rem",
  listStyle: "none",

  // padding: 0,
  // padding: "0.75rem",
  padding: "0.5rem",
});

const InboxNavLinkWrapper = styled("li", ({
  // @ts-ignore
  $activeLink
}) => {
  return {
    height: "2rem",
    lineHeight: "2rem",
    borderBottom: $activeLink ? "2px solid rgb(37, 191, 161)" : "none",
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

const InboxNavLink = styled("a", {
  color: "#efefef",
  textDecoration: "none",

  // transition: "all 0.2s",
  // cursor: "pointer",
});

export {
  InboxNavContainer,
  InboxNavListWrapper,
  InboxNavLinkWrapper,
  InboxNavLink,
};