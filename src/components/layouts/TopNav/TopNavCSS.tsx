/* eslint-disable no-trailing-spaces */
import { styled } from "baseui";
import { MOBILE, XS } from "../../../design/breakpoints";
import { blue } from "../../../design/colors";

// Move this to another file.
const TopNavContainer = styled("ul", {
  display: "flex",
  flewFlow: "row",
  alignItems: "center",
  listStyle: "none",

  position: "fixed",
  left: 0,
  right: 0,
  top: 0,
  flex: 0,
  zIndex: 80,
  marginTop: 0,
  backgroundColor: "white",
  minHeight: "60px",
  // outline: "1px solid #edf2f7",
  outline: "1px solid #efefef",
  padding: "0 1rem",

  // [XS]: {
  //   // padding: "0 0.5rem",
  //   border: "none", 
  //   // backgroundColor: "transparent", // Should solve this issue later
  //   // display: "none",
  // }
});

const TopNavCryptoWallectConnectButtonWrapper = styled("button", ({ $showConnectWalletListSidebar }) => {
  return {
    marginLeft: "0.1rem",

    display: "flex",
    padding: "0.5rem",
    borderRadius: "0.5rem",
    border: "none",
    background: "none",

    color: $showConnectWalletListSidebar ? blue : "inherit",

    transition: "all 0.2s",
    cursor: "pointer",
    ":hover": {
      opacity: 0.7,
      background: "#efefef",
    },
  };
  // marginLeft: "0.25rem",

});

const TopNavCryptoWallectCloseButtonWrapper = styled("button", ({ $showConnectWalletListSidebar }) => {
  return {
    marginLeft: "0.1rem",

    display: "flex",
    padding: "0.5rem",
    borderRadius: "0.5rem",
    border: "none",
    background: "none",

    color: $showConnectWalletListSidebar ? blue : "inherit",

    transition: "all 0.2s",
    cursor: "pointer",
    ":hover": {
      opacity: 0.7,
      background: "#efefef",
    },
  };
  // marginLeft: "0.25rem",

});

const TopNavMenuButtonContainer = styled("div", {
  display: "none",
  marginRight: "0.25rem",

  [MOBILE]: {
    display: "flex",
  }
});

// const FindJob = styled("span", {
//   // color: "rgb(17, 160, 245)",
//   textDecoration: "none",
//   cursor: "pointer",
//   // padding: "6px 8px",
//   // boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.1)",
//   transition: "all 0.2s",
//   borderRadius: "8px",
//   // backgroundColor: "rgb(17, 160, 245)",

//   opacity: 0.7,
// });

const LogoCompanyTitleContainer = styled("li", {
  display: "flex",
  alignItems: "center",

  marginRight: "auto",

  transition: "all 0.2s",
  cursor: "pointer",
  // ":hover": {
  //   opacity: 0.7,
  // }
});

const CompanyTitle = styled("b", {
  marginLeft: "0.25rem",
  [MOBILE]: {
    display: "none",
  }
  // [XS]: {
  //   display: "none",
  // }
});

// .dropdown {
//   position: relative;
//   display: inline - block;
// }

// /* Dropdown Content (Hidden by Default) */
// .dropdown - content {
//   display: none;
//   position: absolute;
//   background - color: #f9f9f9;
//   min - width: 160px;
//   box - shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
//   z - index: 1;
// }

// /* Links inside the dropdown */
// .dropdown - content a {
//   color: black;
//   padding: 12px 16px;
//   text - decoration: none;
//   display: block;
// }

// const TopNavDropDownContainer = styled("div", {
//   position: "relative",
//   display: "inline-block",
// })

// const TopNavDropdownWrapper = styled("span", {
//   display: "flex",
//   alignItems: "center",

//   padding: "1rem",
//   // padding: "8px",
//   width: "100%",

//   transition: "all 0.2s",

//   cursor: "pointer",
//   ":hover": {
//     color: "rgb(37, 191, 161)",
//   }
// });

// const TopNavDropDownContainer = styled("div", {
//   display: "flex",
//   flexFlow: "column",

//   position: "fixed",
//   top: "60px",
//   right: 0,
//   background: "white",

//   border: "1px solid #efefef",

//   minWidth: "11rem",

//   marginRight: "15rem",

//   // Make full width dropdown later for mobile.
//   [MOBILE]: {
//     display: "none",
//   }
// });

// const TopNavDropdownWrapper = styled("a", {
//   display: "flex",
//   alignItems: "center",

//   padding: "1rem",
//   // padding: "8px",
//   width: "100%",

//   transition: "all 0.2s",

//   cursor: "pointer",
//   ":hover": {
//     color: "rgb(37, 191, 161)",
//   }
// });

// const TopNavDropdownLabel = styled("span", {
//   marginLeft: "0.5rem",
// });

const ForHire = styled("span", {
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
  marginRight: "0.5rem",

  // [MOBILE]: {
  //   // display: "none",
  //   marginRight: "0.5rem",
  // },
  [XS]: {
    display: "none",
  }
});

const Hiring = styled("span", {
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
  marginRight: "0.5rem",

  // [MOBILE]: {
  //   // display: "none",
  //   marginRight: "0.5rem",
  // },
  [XS]: {
    display: "none",
  }
});

const FindJob = styled("span", {
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
  marginRight: "0.5rem",

  [MOBILE]: {
    display: "none",
    // marginRight: "0.5rem",
  }
});

export {
  TopNavContainer,
  TopNavMenuButtonContainer,
  TopNavCryptoWallectConnectButtonWrapper,
  TopNavCryptoWallectCloseButtonWrapper,

  LogoCompanyTitleContainer,
  CompanyTitle,

  // TopNavDropDownContainer,
  // TopNavDropdownWrapper,
  // TopNavDropdownLabel,

  // CategoriesContainer,
  // Categories,
  // TopNavDropdownWrapper,

  ForHire,
  Hiring,
  FindJob
};