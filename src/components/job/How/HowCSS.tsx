import { styled } from "baseui";
import { MOBILE, XS } from "../../../design/breakpoints";

const HowToApplyContainer = styled("div", {
  padding: "2rem 2.5rem",
  // borderTop: "1px solid #eee",

  borderBottom: "1px solid #eee",

  [MOBILE]: {
    // padding: "1rem 2rem"
    padding: "1.5rem"
  }
});

const HowToApply = styled("a", {
  fontSize: "25px",
  fontWeight: "bold",
  margin: "0 0 0.5rem 0",

  color: "rgb(17, 160, 245)",
  textDecoration: "none",
  transition: "all 0.2s",
  display: "block",
  
  ":hover": {
    opacity: 0.8
  },

  [XS]: {
    fontSize: "1.25rem",
  },
  // marginBottom: "8px",
});

const CompanyWebsite = styled("a", {
  color: "black",
  textDecoration: "none",

  ":hover": {
    textDecoration: "underline",
  }
});

export {
  HowToApplyContainer,
  HowToApply,
  
  CompanyWebsite,
};