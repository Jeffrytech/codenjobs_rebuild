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

// Or make SubmitSpinner instead and use it for this and ContinueToPreviewSpinner?
const SearchListSpinner = withStyle(StyledSpinnerNext, {
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
});

export default SearchListSpinner;