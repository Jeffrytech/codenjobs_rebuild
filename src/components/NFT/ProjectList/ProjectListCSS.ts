import { styled } from "baseui";
import { DESKTOP, MOBILE, XS, XXS } from "../../../design/breakpoints";
import { black, blue, shadowBlue } from "../../../design/colors";
import { boxShadow, hover } from "../../../design/common";

const SolanaNFTListContainer = styled("section", {
  marginTop: "2rem",
  // margin: "2rem 2rem 0 2rem",
  width: "64rem",

  display: "flex",
  flexFlow: "column",

  // listStyle: "none",
  // padding: 0,
  // padding: "2rem",

  // [DESKTOP]: {
  //   width: "auto",
  // }

  [DESKTOP]: {
    width: "48rem",
  },

  [MOBILE]: {
    width: "28rem",
    // width: "25rem",
  },

  [XS]: {
    width: "21rem",
  },

  [XXS]: {
    width: "18rem",
  },
});

const SolanaNFTList = styled("div", {
  // ...card,
  boxShadow,
  color: shadowBlue,

  flexShrink: 0,
  borderRadius: "0.5rem",
  backgroundColor: "white",

  outline: "1px solid #efefef",

  // padding: "1rem 0rem 1rem 0rem",
  // padding: "1rem 1rem 1rem 1rem",

  padding: "1rem 0 1rem 0",

  width: "100%",

  display: "flex",
  alignItems: "center",
  flexFlow: "row",

  marginBottom: "2rem",
  // marginLeft: "-1rem",

  ":hover": hover,

  [MOBILE]: {
    // display: "none",
    flexFlow: "column",
  },

});

const SolanaNFTProject = styled("div", {
  display: "flex",
  alignItems: "center",
  minWidth: "10rem",
  width: "10rem",

  marginLeft: "1rem",

  // paddingLeft: "1rem",

  [MOBILE]: {
    width: "100%",
    justifyContent: "center",

    // marginLeft: "1.5rem",
    marginBottom: "1rem",
    // marginLeft: "0.25rem",
  },
});

const SolanaNFTProjectLogo = styled("img", {
  width: "2rem",
  height: "2rem",
  // marginRight: "0.25rem",
  marginRight: "0.5rem",

  borderRadius: "50%"
});

const SolanaNFTProjectName = styled("span", {
  fontWeight: "bold",
});

const SolanaNFTProjectState = styled("div", {
  width: "100%",
  display: "flex",
  flexFlow: "row",

  alignItems: "center",
  justifyContent: "space-around",

  // [MOBILE]: {
  //   justifyContent: "space-between",
  // }
});

const SolanaNFTProjectStateDetailWrapper = styled("div", {
  display: "flex",
  flexFlow: "column",
});

const SolanaNFTProjectStateLabel = styled("span", ({ $isStatus = false }) => {
  return {
    fontSize: "0.85rem",
    opacity: 0.6,

    marginBottom: "0.5rem",

    [MOBILE]: {
      display: $isStatus ? "none" : "inherit",
    },

    [XS]: {
      fontSize: "0.75rem",
    }
  };
});

const SolanaNFTProjectStateValue = styled("span", {
  fontWeight: "bold",
  fontSize: "1rem",

  [XS]: {
    fontSize: "0.85rem",
  }
});

const SolanaNFTProjectStatus = styled("span", ({ $status }) => {

  if ($status === "Live") {
    return {
      border: `1px solid ${blue}`,
      borderRadius: "0.5rem",
      // padding: "0.25rem 0.5rem",
      padding: "0 0.5rem",
      color: blue,

      [XS]: {
        display: "none",
      }
    };
  } else { // closed
    return {
      border: `1px solid ${black}`,
      borderRadius: "0.5rem",
      // padding: "0.25rem 0.5rem",
      padding: "0 0.5rem",
      color: black,

      [XS]: {
        display: "none",
      }
    };
  }


});

export {
  SolanaNFTListContainer,
  SolanaNFTList,

  SolanaNFTProject,
  SolanaNFTProjectLogo,
  SolanaNFTProjectName,

  SolanaNFTProjectState,
  SolanaNFTProjectStateDetailWrapper,
  SolanaNFTProjectStateLabel,
  SolanaNFTProjectStateValue,
  SolanaNFTProjectStatus,
};