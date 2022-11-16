import { styled } from "baseui";
import { MOBILE, XS } from "../../design/breakpoints";

const CompanyContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  
  // margin: "0.5rem 0 0.5rem 0",
  margin: "0.25rem 0 0.25rem 0",

  [MOBILE]: {
    margin: "0rem 0 0.5rem 0",
  }

  // alignItems: "center",
  // justifyContent: "space-between",

  // fontWeight: 400,
  // lineHeight: "24px",

  // [XS]: {
  //   margin: "0.5rem 0 0 0",
  //   // flexFlow: "column",
  //   // alignItems: "flex-start",
  // }
});

export default CompanyContainer;