import { styled, withStyle } from "baseui";
import { MOBILE, XS, XXS, XXXS } from "../../../design/breakpoints";
// import { MOBILE, XS } from "../breakpoints";

const UserSettingsContainer = styled("div", {
  background: "white"
});

const UserSettingsWrapper = styled("div", {
  margin: "auto",
  maxWidth: "64rem",

  display: "flex",
  alignItems: "center",

  paddingTop: "0.5rem",
});

const UserSettings = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  minHeight: "60px",
  marginLeft: "1rem",
  marginRight: "auto",
});

// Button
// height: 2.5
// rem
//   ;
// justify - content: center;
// margin - right: 1
// rem
//   ;
// padding: 1
// rem
//   ;
// background: rgb(17, 160, 245);
// font - size: 0.75rem;

const UserSettingsText = styled("span", {
  marginLeft: "0.25rem",

  [XXS]: {
    display: "none",
  }
});

const SettingsNavContainer = withStyle(UserSettingsContainer, {});
const SettingsNavWrapper = withStyle(UserSettingsWrapper, {
  borderBottom: "1px solid rgb(237, 242, 247)",
});

const SettingsNavList = withStyle(UserSettings, {
  // marginLeft: "1rem",
  marginLeft: "1.5rem",

  display: "flex",
  flexWrap: "wrap",

  [MOBILE]: {
    flexFlow: "row",
    overflowX: "scroll",

    // display: "none",

    "::-webkit-scrollbar": {
      width: 0,
      height: 0,
    }
  }
});

const SettingsNavLink = styled("a", ({
  // @ts-ignore
  $activeLink
}) => {
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    // "-webkit-box-sizing": "border-box", /* Safari/Chrome, other WebKit */
    // "-moz-box-sizing": "border-box",    /* Firefox, other Gecko */
    // "boxSizing": "border-box",       /* Opera/IE 8+ */

    marginRight: "1rem",

    borderBottom: $activeLink ? "2px solid black" : "none",
    opacity: $activeLink ? "1" : "0.5",
    minHeight: "60px",

    transition: "all 0.2s",
    cursor: "pointer",

    ":hover": {
      opacity: 1,
    },

    [XS]: {
      fontSize: "1rem",
    }
  };
});

export {
  UserSettingsContainer,
  UserSettingsWrapper,
  UserSettings,
  UserSettingsText,

  SettingsNavContainer,
  SettingsNavWrapper,
  SettingsNavList,
  SettingsNavLink,
};