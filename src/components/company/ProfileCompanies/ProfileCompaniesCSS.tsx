import { styled } from "baseui";
import { XS, MOBILE, DESKTOP } from "../../../design/breakpoints";
import { white } from "../../../design/colors";
import { hover } from "../../../design/common";


const CompanyListForOwnerHeader = styled("div", () => {
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    fontSize: "1rem",
    fontWeight: "bold",
    lineHeight: "1.25rem",
    letterSpacing: "0.7px",

    fontFamily: "Roboto, Helvetica, sans-serif",

    padding: "1rem 0.5rem 1rem 2rem",
    textAlign: "left",

    backgroundColor: white,

    border: "1px solid #efefef",
    borderRadius: "0.5rem 0.5rem 0 0",

    [DESKTOP]: {
      textAlign: "center"
    },
    [XS]: {
      padding: "1rem 0 1rem 1.25rem",
    }
  };
});

const CompanyHeader = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  fontWeight: 400,
  // lineHeight: "24px",

  [XS]: {
    // flexFlow: "column-reverse",
    // flexFlow: "column",
    // alignItems: "flex-start",
  },
});

const CompanyName = styled("a", {
  // fontSize: "20px",
  fontSize: "1.5rem",
  fontWeight: 700,
  lineHeight: "2rem",

  color: "black",
  textDecoration: "none",

  marginTop: "0.25rem",

  ":hover": hover,
  
  [XS]: {
    fontSize: "1.2rem",
    lineHeight: "1.5rem",
    // marginTop: "0.25rem",
    // marginBottom: "0.25rem",
  }
});

const CompanyLocationContainer = styled("div", {
  // marginTop: "8px",

  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",

  marginLeft: "-0.1rem",

  padding: "0.25rem 0",

  fontSize: "1rem",
  lineHeight: "1.5rem",

});

const CompanyFeature = styled("a", {
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",

  fontSize: "1rem",
  // fontSize: "1.25rem",
  lineHeight: "21px",

  marginLeft: "1px",
  padding: "1px 0",

  // "border-radius": "8px",

  [MOBILE]: {
    fontSize: "1rem",
    marginTop: "0.25rem",
    marginBottom: "0.25rem",
    lineHeight: "18px"
  },

});

const CompanyDescription = styled("div", {
  wordBreak: "break-all",
  lineHeight: "1.5rem",
  marginTop: "0.25rem",
  // opacity: "0.8",
});

const CompanyStatusContainer = styled("div", ({ $jobUsed }) => {
  return {
    display: "flex",
    alignItems: "center",

    transition: "all 0.2s",
    cursor: $jobUsed ? "pointer" : "inherit",

    ":hover": {
      opacity: $jobUsed ? 0.7 : 1,
    }
  };
});

const CompanyListState = styled("span", {
  [MOBILE]: {
    display: "none",
  }
});

export {
  CompanyListForOwnerHeader,

  CompanyHeader,
  CompanyName,
  CompanyLocationContainer,
  CompanyFeature,

  CompanyDescription,

  CompanyStatusContainer,
  CompanyListState,
};