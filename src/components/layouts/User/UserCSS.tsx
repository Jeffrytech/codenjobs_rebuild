/* eslint-disable no-trailing-spaces */
import { styled, withStyle } from "baseui";

import { 
  MOBILE, 
  // XS 
} from "../../../design/breakpoints";
import CentralizeChildren from "../../CentralizeChildren";

// const ForHire = styled("span", {
// // const FindJob = styled("span", {
//   textDecoration: "none",
//   marginRight: "0.5rem",

//   // border: "rgb(17, 160, 245) 2px solid",
//   border: "none",
//   // padding: "0.5rem 1rem",
//   borderRadius: "0.5rem",

//   // fontSize: "1rem",
//   // fontFamily: "roboto",

//   // color: "white",
//   // backgroundColor: "rgb(17, 160, 245)",
//   // color: "rgb(17, 160, 245)",
//   backgroundColor: "white",
//   opacity: 0.7,

//   cursor: "pointer",
//   transition: "all 0.2s",

//   // ":hover": {
//   //   opacity: 0.7,
//   // },

//   [XS]: {
//     display: "none",
//   }
// });

// const Hiring = styled("span", {
// // const FindJob = styled("span", {
//   textDecoration: "none",
//   marginRight: "0.5rem",

//   // border: "rgb(17, 160, 245) 2px solid",
//   border: "none",
//   // padding: "0.5rem 1rem",
//   borderRadius: "0.5rem",

//   // fontSize: "1rem",
//   // fontFamily: "roboto",

//   // color: "white",
//   // backgroundColor: "rgb(17, 160, 245)",
//   // color: "rgb(17, 160, 245)",
//   backgroundColor: "white",
//   opacity: 0.7,

//   cursor: "pointer",
//   transition: "all 0.2s",

//   // ":hover": {
//   //   opacity: 0.7,
//   // },

//   [XS]: {
//     display: "none",
//   }
// });

// const FindJob = styled("span", {
// // const FindJob = styled("span", {
//   textDecoration: "none",
//   marginRight: "0.5rem",

//   // border: "rgb(17, 160, 245) 2px solid",
//   border: "none",
//   // padding: "0.5rem 1rem",
//   borderRadius: "0.5rem",

//   // fontSize: "1rem",
//   // fontFamily: "roboto",

//   // color: "white",
//   // backgroundColor: "rgb(17, 160, 245)",
//   // color: "rgb(17, 160, 245)",
//   backgroundColor: "white",
//   opacity: 0.7,

//   cursor: "pointer",
//   transition: "all 0.2s",

//   // ":hover": {
//   //   opacity: 0.7,
//   // },

//   [XS]: {
//     display: "none",
//   }
// });

const UserFeaturesCotnainer = styled("li", {
  width: "100%",
  maxWidth: "100%",
  
  display: "flex",
  alignItems: "center",
});

const UserIconWrapper = styled("div", {
  display: "flex",
  padding: "0.5rem",
  borderRadius: "0.5rem",

  transition: "all 0.2s",
  cursor: "pointer",
  ":hover": {
    opacity: 0.7,
    background: "#efefef",
  },
});

// Extract this.
const UserContainer = withStyle(CentralizeChildren, {
  // @ts-ignore
  padding: "2px",
  borderRadius: "0.5rem",

  // display: "flex",

  transition: "all 0.2s",
  cursor: "pointer",
  border: "1px solid white",
  marginBottom: "2px",

  ":hover": {
    border: "1px solid #efefef",
  }
});

const UserDetails = styled("div", {
  display: "flex",
  flexFlow: "column",
  margin: "0 0.5rem",
  minWidth: "7rem",

  // @ts-ignore
  // display: "none",

  // [MOBILE]: {
  //   display: "none",
  // }
});

const Username = styled("span", {
  fontSize: "1rem",
});

const UserCredit = styled("span", {
  fontSize: "1rem",
  opacity: "0.5",
  // color: "rgb(37, 191, 161)",
});

const UserDropDownContainer = styled("section", {
  display: "flex",
  flexFlow: "column",

  position: "fixed",
  top: "60px",
  right: 0,
  background: "white",
  border: "2px solid #efefef",
  minWidth: "15rem",

  marginRight: "1.25rem",

  padding: "0.5rem",

  // boxShadow: "0px 0.5rem 1rem 0px rgba(0,0,0,0.2)",
  zIndex: 1,

  borderRadius: "0.1rem 0.1rem 0.5rem 0.5rem",

  // Make full width dropdown later.
  [MOBILE]: {
    marginRight: "0",

    width: "100%",

    padding: "0rem",

    // overflowY: "scroll",
    // height: "100%",
    // width: "100%",
  }
});

const UserDropdownProfile = styled("div", {
  display: "flex",
  alignItems: "center",

  padding: "0.5rem",
  // padding: "1rem 1rem 0.75rem 1rem",
  // padding: "1rem 1rem 0.25rem 1rem",
  // padding: "8px",
  width: "100%",

  // transition: "all 0.2s",

  // cursor: "pointer",
  // ":hover": {
  //   color: "rgb(37, 191, 161)",
  // }
  [MOBILE]: {
    padding: "1rem 1rem 0.5rem 1rem",
    // marginTop: "0.5rem",
    // marginLeft: "0.5rem",
  }
});

const UserDropdownWrapper = styled("span", {
  display: "flex",
  alignItems: "center",

  padding: "0.5rem",
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
    // padding: "0.5rem 1rem",
  }
});

const UserDropdownLabel = styled("span", {
  marginLeft: "0.5rem",
});

const NewBlogPostButton = styled("a", {
  // width: "100%",
  
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  padding: "0.5rem 1rem",
  fontSize: "1rem",
  textAlign: "center",
  lineHeight: "1rem",
  borderRadius: "0.5rem",
  letterSpacing: "0.7px",
  textDecoration: "none",

  // Use theme instead?
  color: "#fff",
  backgroundColor: "rgb(17, 160, 245)",
  border: "1px solid rgb(17, 160, 245)",

  transition: "all 0.2s",
  cursor: "pointer",
  ":hover": {
    opacity: 0.7
  }
});

const NewJobPostButton = styled("a", {
  // width: "100%",
  marginTop: "1rem",
  
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  padding: "0.5rem 1rem",
  fontSize: "1rem",
  textAlign: "center",
  lineHeight: "1rem",
  borderRadius: "0.5rem",
  letterSpacing: "0.7px",
  textDecoration: "none",

  // Use theme instead?
  color: "#fff",
  backgroundColor: "rgb(37, 191, 161)",
  border: "1px solid rgb(37, 191, 161)",
  // backgroundColor: "rgb(17, 160, 245)",
  // border: "1px solid rgb(17, 160, 245)",

  transition: "all 0.2s",
  cursor: "pointer",
  ":hover": {
    opacity: 0.7
  }
});

const UserMobileLinksContainer = styled("div", {
  display: "none",

  [MOBILE]: {
    display: "flex",
    flexFlow: "column",
  }
});

export {
  // ForHire,
  // Hiring,
  // FindJob,
  
  UserFeaturesCotnainer,
  UserIconWrapper,
  UserContainer,
  UserDetails,
  Username,
  UserCredit,
  UserDropDownContainer,
  UserDropdownWrapper,
  UserDropdownLabel,

  UserDropdownProfile,

  NewBlogPostButton,
  NewJobPostButton,

  UserMobileLinksContainer,
};