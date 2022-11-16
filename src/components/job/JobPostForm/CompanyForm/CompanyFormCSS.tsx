import { 
  styled, 
} from "baseui";
import { XS } from "../../../../design/breakpoints";

const CompanyFormTextInput = styled("input", {
  width: "100%",
  marginTop: "1rem",
  boxSizing: "border-box",
  borderRadius: "0.5rem",
  fontSize: "1rem",
  padding: "0.5rem",
  backgroundColor: "#fff",
  border: "2px solid #efefef",

  [XS]: {
    // fontSize: "0.8rem",
  }
});

export {
  CompanyFormTextInput,
};