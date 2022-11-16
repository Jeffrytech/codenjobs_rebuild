import { styled } from "baseui";
import { DESKTOP } from "../design/breakpoints";

const ProfileImage = styled("img", {
  display: "none",

  // [MOBILE]: {
  [DESKTOP]: {
    display: "flex",
    // alignItems: "center",

    // width: "1rem",
    // height: "1rem",
    width: "1.25rem",
    height: "1.25rem",

    marginRight: "0.25rem",
    // marginLeft: "-0.1rem",
    borderRadius: "50%;",
  },

  // [XS]: {
  //   display: "block",
    
  //   width: "1rem",
  //   // height: "1rem",

  //   marginRight: "0.25rem",
  //   marginLeft: "-0.1rem",
  //   borderRadius: "50%;",
  // },
});

export const ForHireProfileImage = styled("img", {
  display: "none",

  // [MOBILE]: {
  [DESKTOP]: {
    display: "flex",
    // alignItems: "center",

    // width: "1rem",
    // height: "1rem",
    width: "1.25rem",
    height: "1.25rem",

    marginRight: "0.25rem",
    // marginLeft: "-0.1rem",
    borderRadius: "50%;",
  },

  // [XS]: {
  //   display: "block",
    
  //   width: "1rem",
  //   // height: "1rem",

  //   marginRight: "0.25rem",
  //   marginLeft: "-0.1rem",
  //   borderRadius: "50%;",
  // },
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

export default ProfileImage;