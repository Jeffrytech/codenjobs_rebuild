import { styled } from "baseui";
import { XS } from "../../design/breakpoints";
import { white, shadowBlue, black } from "../../design/colors";
import { boxShadow } from "../../design/common";

const CodePriceCardSection = styled("section", ({ $isJobPostPayment, $list = false }) => {

  const defaultMarginBottom = $list ? "1rem" : "2rem";

  return {
    boxShadow,
    flexShrink: 0,
    borderRadius: "0.5rem",
    // marginBottom: "2rem",
    marginBottom: defaultMarginBottom,

    background: white,
    // color: "#374252",
    // padding: "1.5rem",

    minHeight: 0,

    minWidth: "18rem",

    [XS]: {
      // marginBottom: $isJobPostPayment === true ? "inherit" : "1rem",
      // marginBottom: $isJobPostPayment === true ? "2rem" : "1rem",
      marginBottom: $isJobPostPayment === true ? defaultMarginBottom : "1rem",
    }
  };

});

const CodePriceCardHeader = styled("div", ({ $isJobPostPayment }) => {
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    padding: "1rem",

    backgroundColor: $isJobPostPayment === true ? shadowBlue : white,
    color: $isJobPostPayment === true ? white : black,
    borderBottom: $isJobPostPayment === true ? "inherit" : "1px solid rgb(239, 239, 239)",

    borderRadius: "0.5rem 0.5rem 0 0",
  };
});

const CodePriceCardIntro = styled("h2", {
  margin: 0,
  // color: "#ff7676",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  width: "100%",

  ":hover": {
    cursor: "pointer",
    opacity: "0.7",
    transition: "all 0.2s",
  }
  // textAlign: "center",
});

const CurrentCodePrice = styled("div", ({ $isJobPostPayment }) => {
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    padding: "1rem",
    backgroundColor: $isJobPostPayment === true ? "#DFE0EF" : white,
    // color: $isJobPostPayment === true ? black : green,
    // color: $isJobPostPayment === true ? black : solana,

    borderRadius: "0 0 0.5rem 0.5rem",
    fontSize: "1.25rem",

    ":hover": {
      cursor: "pointer",
      opacity: "0.7",
      transition: "all 0.2s",
    }
  };
});

export {
  CodePriceCardSection,
  CodePriceCardHeader,
  CodePriceCardIntro,

  CurrentCodePrice,
};