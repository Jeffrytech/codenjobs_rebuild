// import React from "react";

// import { styled, withStyle } from "baseui";
import { styled } from "baseui";
import { DESKTOP, MOBILE } from "../../design/breakpoints";
// import { Avatar } from "baseui/avatar";

const CompanyLogo = styled("img", {
  display: "none",

  // [MOBILE]: {
  [DESKTOP]: {
    display: "block",

    // width: "2.5rem",
    // height: "2.5rem",
    width: "1.25rem",
    height: "1.25rem",

    marginRight: "0.5rem",
    // marginRight: "0.5rem",
    // marginLeft: "-0.1rem",
    borderRadius: "50%;",
  },
});

// Use this for blog post at mboile
// const CompanyLogo = styled("img", {
//   display: "none",

//   [MOBILE]: {
//     display: "none",
//   },

//   [XS]: {
//     display: "inherit",
//     width: "100%",
//     maxHeight: "8rem",

//     marginTop: "0.5rem",
//     marginBottom: "0.5rem",
//   },
// });

export default CompanyLogo;