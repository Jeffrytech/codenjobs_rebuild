import {
  // styled,
  withStyle,
} from "baseui";
import { StyledSpinnerNext } from "baseui/spinner";

// const UpdateImageSpinnerWrapper = styled("div", {
//   width: "7rem",
//   height: "7rem",

//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// });

const FollowSpinner = withStyle(StyledSpinnerNext, {
  // @ts-ignore
  width: "0.015rem",
  height: "0.015rem",

  marginRight: "0.5rem",

  // width: "7rem",
  // height: "7rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  
  borderTopColor: "white",
  // width: "100%",
  // height: "100%",
  // [XXS]: {
  //   display: "none"
  // }
});

export default FollowSpinner;