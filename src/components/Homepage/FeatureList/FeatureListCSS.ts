import { styled } from "baseui";
import { DESKTOP, MOBILE } from "../../../design/breakpoints";
import { black, darkBlue, white, whiteGrey } from "../../../design/colors";
import { disabled, hover } from "../../../design/common";

const FeatureListSection = styled("section", {
  // height: "44rem",
  paddingBottom: "3.75rem",

  // background: whiteGrey,
  background: "#F3F0EB",

  display: "flex",
  flexFlow: "column",

  [MOBILE]: {
    paddingBottom: 0,
  },
});

const FeatureListTitle = styled("h2", {
  color: black,
  fontWeight: "600",

  marginTop: "3.75rem",
  marginBottom: "3.75rem",
  // marginTop: "2rem",
  // marginBottom: "2rem",

  fontSize: "2rem",
  textAlign: "center",
  width: "100%",

  [MOBILE]: {
    marginTop: "2rem",
    marginBottom: "2rem",
    fontSize: "28px",
  },
});

const FeatureListNav = styled("nav", {
  display: "flex",
  flexFlow: "column",
  alignItems: "center",

  height: "100%",
  margin: "0 auto",
  // maxWidth: "66rem",
  // width: "66rem",
  maxWidth: "66rem",
  width: "66rem",

  [DESKTOP]: {
    width: "100%",
    maxWidth: "100%",
  },
});

const FeatureListNavLinkListContainer = styled("ul", ({ $first }) => {
  if ($first) {
    return {
      display: "flex",
      margin: "0 1rem",
      padding: "0 0 2rem 0",
      // padding: "0 0 3.75rem 0",

      listStyle: "none",

      borderBottom: "1px solid  rgba(87, 87, 87, 0.15)",

      [MOBILE]: {
        flexFlow: "column",
        borderBottom: "none",

        padding: 0,
        margin: 0,
      },
    };
  } else {
    return {
      display: "flex",
      margin: "0 1rem",
      padding: "2rem 0 0 0",
      // padding: "3.75rem 0 0 0",

      listStyle: "none",

      [MOBILE]: {
        flexFlow: "column",
        padding: 0,
        margin: 0,
      },
    };
  }
});

const FeatureListNavLinkListContainerSplit = styled("div", {
  border: "5px solid red",
  margin: "1rem 1rem",
  width: "100%",
});

const FeatureListNavLinkList = styled("li", ({ $second }) => {
  if ($second) {
    return {
      borderLeft: "1px solid rgba(87, 87, 87, 0.15)",
      borderRight: "1px solid rgba(87, 87, 87, 0.15)",

      flexBasis: "100%",
      padding: "0 2rem",

      [MOBILE]: {
        marginBottom: "2rem",
        border: "none",
      },
    };
  } else {
    return {
      flexBasis: "100%",
      padding: "0 2rem",

      [MOBILE]: {
        marginBottom: "2rem",
      },
    };
  }
});

const FeatureListNavLinkListImage = styled("img", {
  width: "100%",
});

const FeatureListNavLinkListTitle = styled("h3", {
  fontWeight: "normal",
  textAlign: "center",
});

const FeatureListNavLinkListDescription = styled("figcaption", {
  opacity: 0.5,
  textAlign: "center",
  lineHeight: "1.5rem",
});

const FeatureListNavLinkListButtonWrapper = styled("div", {
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "1rem 0 1rem 0",
});

const FeatureListNavLinkListButton = styled("button", {
  padding: "0.75rem 1rem",
  borderRadius: "0.25rem",
  border: "none",
  color: "#575757",
  backgroundColor: "rgba(87, 87, 87, 0.1)",

  display: "flex",
  height: "40px",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "14px",
  gap: "8px",

  ":disabled": {
    cursor: "not-allowed",
  },
  // ":hover": hover
  ":hover": {
    backgroundColor: darkBlue,
    cursor: "pointer",
    color: white,
  },
});

export {
  FeatureListSection,
  FeatureListTitle,
  FeatureListNav,
  FeatureListNavLinkListContainer,
  FeatureListNavLinkListContainerSplit,
  FeatureListNavLinkList,
  FeatureListNavLinkListImage,
  FeatureListNavLinkListTitle,
  FeatureListNavLinkListDescription,
  FeatureListNavLinkListButtonWrapper,
  FeatureListNavLinkListButton,
};
