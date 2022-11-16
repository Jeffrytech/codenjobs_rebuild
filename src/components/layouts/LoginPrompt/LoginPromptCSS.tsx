/* eslint-disable no-trailing-spaces */
import { styled, withStyle } from "baseui";

import { 
  MOBILE, 
  // XS 
} from "../../../design/breakpoints";
import { boxShadow } from "../../../design/common";
import CentralizeChildren from "../../CentralizeChildren";

const LoginPromptContainer = styled("li", {
  width: "100%",
  maxWidth: "100%",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",

  textDecoration: "none",
  minWidth: "25rem",

  transition: "all 0.2s",
  // marginLeft: "1rem",
  // marginRight: "1rem",
  // marginRight: "1.25rem",
  
  [MOBILE]: {
    minWidth: "inherit",
  }
});

// const LoginPromptContainer = styled("li", {
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "space-evenly",

//   textDecoration: "none",
//   minWidth: "15rem",

//   transition: "all 0.2s",
//   // marginLeft: "1rem",
//   // marginRight: "1rem",
//   [MOBILE]: {
//     minWidth: "inherit",
//   }
// });

// const ForHire = styled("span", {
//   // color: "rgb(37, 191, 161)",
//   color: "black",
//   // boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.1)",
//   transition: "all 0.2s",
//   // border: "1px solid rgb(37, 191, 161)",
//   // borderRadius: "8px",
//   opacity: "0.7",

//   cursor: "pointer",
//   // ":hover": {
//   //   opacity: 0.7
//   // },
//   marginRight: "0.25rem",

//   [MOBILE]: {
//     // display: "none",
//     marginRight: "0.5rem",
//   },
//   [XS]: {
//     display: "none",
//   }
// });

// const Hiring = styled("span", {
//   // color: "rgb(37, 191, 161)",
//   color: "black",
//   // boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.1)",
//   transition: "all 0.2s",
//   // border: "1px solid rgb(37, 191, 161)",
//   // borderRadius: "8px",
//   opacity: "0.7",

//   cursor: "pointer",
//   // ":hover": {
//   //   opacity: 0.7
//   // },
//   marginRight: "0.25rem",

//   [MOBILE]: {
//     // display: "none",
//     marginRight: "0.5rem",
//   },
//   [XS]: {
//     display: "none",
//   }
// });

// const FindJob = styled("span", {
//   // color: "rgb(37, 191, 161)",
//   color: "black",
//   // boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.1)",
//   transition: "all 0.2s",
//   // border: "1px solid rgb(37, 191, 161)",
//   // borderRadius: "8px",
//   opacity: "0.7",

//   cursor: "pointer",
//   // ":hover": {
//   //   opacity: 0.7
//   // },
//   marginRight: "0.25rem",

//   [MOBILE]: {
//     // display: "none",
//     marginRight: "0.5rem",
//   }
// });

// const PostJob = styled("span", {
//   // color: "rgb(37, 191, 161)",
//   color: "black",
//   // boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.1)",
//   transition: "all 0.2s",
//   // border: "1px solid rgb(37, 191, 161)",
//   // borderRadius: "8px",
//   opacity: "0.7",

//   cursor: "pointer",
//   // ":hover": {
//   //   opacity: 0.7
//   // },
//   marginRight: "0.25rem",

//   [MOBILE]: {
//     // display: "none",
//     marginRight: "0.5rem",
//   }
// });

const SignInButton = styled("span", {
  color: "rgb(37, 191, 161)",
  padding: "5px 7px",
  boxShadow,
  transition: "all 0.2s",
  border: "1px solid rgb(37, 191, 161)",
  borderRadius: "0.5rem",

  marginRight: "0.5rem",

  cursor: "pointer",
  ":hover": {
    opacity: 0.7
  },

  [MOBILE]: {
    display: "none",
  }
});

const SignUpButton = styled("span", {
  color: "white",
  padding: "6px 8px",
  boxShadow,
  transition: "all 0.2s",
  borderRadius: "0.5rem",
  backgroundColor: "rgb(37, 191, 161)",

  marginRight: "0.5rem",

  cursor: "pointer",
  ":hover": {
    opacity: 0.7
  },

  [MOBILE]: {
    display: "none",
  }
});

const EmptyUserContainer = withStyle(CentralizeChildren, {
  // @ts-ignore
  padding: "2px",
  borderRadius: "0.5rem",

  transition: "all 0.2s",
  cursor: "pointer",
  ":hover": {
    opacity: 0.7,
    color: "rgb(37, 191, 161)",
    // border: "1px solid black",
  }
});

const LoginPromptDropDownContainer = styled("div", {
  display: "flex",
  flexFlow: "column",

  position: "fixed",
  top: "60px",
  right: 0,
  background: "white",

  padding: "0.5rem",
  
  border: "1px solid #efefef",
  // border: "2px solid #121212",
  borderRadius: "0 0 0.5rem 0.5rem",

  minWidth: "15rem",

  marginRight: "1.25rem",

  zIndex: 2,

  // Make full width dropdown later for mobile.
  [MOBILE]: {
    marginRight: "0",
    width: "100%", // This doesn't work for this?
    padding: "0rem",
  }
});

const LoginPromptDropdownWrapper = styled("a", {
  display: "flex",
  alignItems: "center",

  // padding: "1rem",
  padding: "0.5rem",
  // padding: "8px",
  width: "100%",

  transition: "all 0.2s",

  cursor: "pointer",

  opacity: "0.7",
  ":hover": {
    opacity: "1",
    // color: "rgb(37, 191, 161)",
  },

  [MOBILE]: {
    padding: "1rem",
  }
});

const LoginPromptDropdownLabel = styled("span", {
  marginLeft: "0.5rem",
});

export {
  // ForHire,
  // Hiring,
  // FindJob,
  // PostJob,
  
  SignInButton,
  SignUpButton,

  LoginPromptContainer,
  EmptyUserContainer,
  LoginPromptDropDownContainer,
  LoginPromptDropdownWrapper,
  LoginPromptDropdownLabel,
};