import { styled, withStyle } from "baseui";
import { StyledSpinnerNext } from "baseui/spinner";

// const UpdateImageSpinnerWrapper = styled("div", {
//   width: "7rem",
//   height: "7rem",

//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// });

const UpdateImageSpinner = withStyle(StyledSpinnerNext, {
  width: "6.5rem",
  height: "6.5rem",

  // width: "7rem",
  // height: "7rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  
  borderTopColor: "rgb(17, 160, 245)",
  // width: "100%",
  // height: "100%",
});

export {
  // UpdateImageSpinnerWrapper,
  UpdateImageSpinner
};