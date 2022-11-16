import { StyledSpinnerNext } from "baseui/spinner";
import { withStyle } from "baseui";
import { green } from "../../design/colors";

const PrimarySpinner = withStyle(StyledSpinnerNext, {
  borderTopColor: green,
});

export default PrimarySpinner;