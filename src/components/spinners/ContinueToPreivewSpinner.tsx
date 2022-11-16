import {
  // styled,
  withStyle,
} from "baseui";
import { StyledSpinnerNext } from "baseui/spinner";
import { XXS } from "../../design/breakpoints";

// const UpdateImageSpinnerWrapper = styled("div", {
//   width: "7rem",
//   height: "7rem",

//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// });

const ContinueToPreivewSpinner = withStyle(StyledSpinnerNext, {
  // @ts-ignore
  width: "0.5rem",
  height: "0.5rem",

  marginRight: "0.5rem",

  // width: "7rem",
  // height: "7rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  
  borderTopColor: "white",
  // width: "100%",
  // height: "100%",
  [XXS]: {
    display: "none"
  }
});

export default ContinueToPreivewSpinner;