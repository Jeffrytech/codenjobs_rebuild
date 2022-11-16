import { styled } from "baseui";
import { DESKTOP } from "../design/breakpoints";
import { boxShadow } from "../design/common";

const ProfileImageSide = styled("img", {
  // display: "flex",
  // alignItems: "center",
  // justifyContent: "center",

  top: "calc(50% - 20px)",
  left: "-20px",
  width: "40px",
  height: "40px",
  position: "absolute",
  boxShadow,
  borderRadius: "40px",
  backgroundColor: "#fff",

  transition: "all 0.2s",
  cursor: "pointer",
  ":hover": {
    opacity: 0.7,
  },

  // [MOBILE]: {
  [DESKTOP]: {
    display: "none",
    // top: "calc(50% - 25px)",
    // left: "-15px",
    // width: "25px",
    // height: "25px"
  }
});

// const ProfileImageSide = styled("div", {
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",

//   top: "calc(50% - 20px)",
//   left: "-20px",
//   width: "40px",
//   height: "40px",
//   position: "absolute",
//   boxShadow: "0 2px 4px 0 rgba(0,0,0,.1)",
//   borderRadius: "40px",
//   backgroundColor: "#fff",

//   transition: "all 0.2s",
//   cursor: "pointer",
//   ":hover": {
//     opacity: 0.7,
//   },
//   [MOBILE]: {
//     // top: "calc(50% - 25px)",
//     left: "-15px",
//     width: "25px",
//     height: "25px"
//   }
// });

export default ProfileImageSide;