import { styled } from "baseui";
import { XS } from "../../../design/breakpoints";
import { card } from "../../../design/common";

// import { MOBILE } from "../../breakpoints";

// 1. Container to give a background color
// 2. Primary (panel)
// 3. Secondary (panel)

// Think a better name for this?
const CompanyCard = styled("div", {
  ...card,

  padding: "2rem 1rem",

  // marginTop: "1rem",
  // marginTop: "2rem",

  [XS]: {
    marginTop: 0,

    marginBottom: "1rem",
  }
});

const CompanyLogo = styled("a", {
  transition: "all 0.2s",

  ":hover": {
    opacity: 0.8
  }
});

const CompanyName = styled("a", {
  display: "block",
  
  textAlign: "center",
  margin: "0 0 0.5rem 0",
  fontSize: "1.5rem",
  color: "black",
  textDecoration: "none",

  transition: "all 0.2s",
  ":hover": {
    // color: "rgb(17, 160, 245)",
    textDecoration: "underline",
    // opacity: 0.7,
  }
});

const CompanyDescription = styled("div", {
  marginTop: "0.5rem",

  lineHeight: "24px",

  wordBreak: "break-all",
});

// Extract it to links/
const JobLinkButton = styled("a", {
  width: "100%",
  display: "block",
  padding: "12px 32px 12px 32px",
  fontSize: "14px",
  textAlign: "center",
  transition: "all 0.2s",
  lineHeight: "16px",
  borderRadius: "8px",
  letterSpacing: "0.7px",
  textDecoration: "none",

  // Use theme instead?
  color: "#fff",
  backgroundColor: "rgb(17, 160, 245)",

  ":hover": {
    opacity: 0.7
  }
});

// Refer to this to update.
// https://baseweb.design/blog/responsive-web
// https://www.styletron.org/concepts#media-queries-and-pseudo-classes

// Reuse some of them.

export {
  CompanyCard,

  CompanyLogo,
  CompanyName,
  CompanyDescription,
  JobLinkButton
};