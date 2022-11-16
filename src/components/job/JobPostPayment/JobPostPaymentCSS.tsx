import { styled } from "baseui";
import { XS } from "../../../design/breakpoints";
import { black, shadowBlue, solana, white } from "../../../design/colors";
import { boxShadow } from "../../../design/common";

// Move these to JobList and JobCard
const JobPostPaymentContainer = styled("section", {
  padding: "2rem 2rem 4rem 2rem",
  // [MOBILE]: {
  //   padding: "0px 16px 64px 16px"
  // }
  // background: "url(/static/list_search.png)", // background: url(/static/background.png);
  background: "url(/static/tokens.png)", // background: url(/static/background.png);
  backgroundSize: "contain", // background-size: contain;
  minHeight: "100vh",

  [XS]: {
    padding: "1rem 0 1rem 0",
  }
});

const JobPostPaymentWrapper = styled("div", {
  // margin: "2rem auto 0",
  margin: "0 auto",
  maxWidth: "18rem",
});

const JobPostPaymentSection = styled("section", {


  boxShadow,
  flexShrink: 0,
  borderRadius: "0.5rem",
  marginBottom: "2rem",
  background: white,
  // color: "#374252",
  // padding: "1.5rem",

  minHeight: 0,

  minWidth: "18rem",

  
});

const JobPostPaymentHeader = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  padding: "1rem",

  backgroundColor: shadowBlue,
  color: white,

  borderRadius: "0.5rem 0.5rem 0 0",
});

const JobEditButtonWrapper = styled("div", {
  marginLeft: "auto",
  marginRight: "0.5rem",
  display: "flex",

  color: "rgb(17, 160, 245)",

  transition: "all 0.2s",
  cursor: "pointer",
  // ":hover": {
  //   oapcity: 0.7,
  // }
});

const PaymentIntro = styled("h2", {
  margin: 0,
  // color: "#ff7676",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  width: "100%",
  // textAlign: "center",
});

const TotalPrice = styled("span", {
  width: "100%",
  display: "block",
  textAlign: "center",
  margin: "1rem 0",
  // margin: "0.5rem 0",
  fontSize: "1rem",
  opacity: 0.7,
});

const PreviewTypeRadioGroupWrapper = styled("div", {
  marginTop: "0.5rem",
  marginBottom: "1rem",
});

const ContinueButtonWrapper = styled("div", {
  display: "flex",
  alignItems: "center",

  marginTop: "1.5rem",
});

const ContinueButton = styled("button", {
  // background: "rgb(37, 191, 161)",
  background: "rgb(17, 160, 245)",
  width: "100%",
  color: "white",
  padding: "0.8rem 1.8rem",
  border: "2px solid #efefef",
  borderRadius: "0.5rem",
  fontSize: "1rem",

  transition: "all 0.2s",
  cursor: "pointer",
  ":hover": {
    opacity: 0.7,
  },
  ":focus": {
    outline: "none",
  },
});

// Use this button for test
const FreePaymentButton = styled("button", {
  fontSize: "1rem",
  borderRadius: "0.5rem",
  border: "2px solid rgb(239, 239, 239)",
  padding: "0.8rem 4.5rem",
  color: "white",
  background: "rgb(17, 160, 245)",

  transition: "all 0.2s",
  cursor: "pointer",
  ":hover": {
    opacity: 0.7,
  },
  ":focus": {
    outline: "none",
  },
  [XS]: {
    padding: "0.75rem 2rem",
  }
});

const JobPostSolanaPaymentButton = styled("button", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  fontSize: "1rem",
  borderRadius: "0.5rem",
  border: "2px solid rgb(239, 239, 239)",
  // padding: "0.8rem 4.5rem",
  // padding: "0.8rem 1rem",
  padding: "1rem 2.5rem",

  color: "white",
  background: solana,

  width: "100%",

  // marginBottom: "0.5rem",

  transition: "all 0.2s",
  cursor: "pointer",
  ":hover": {
    opacity: 0.7,
  },
  ":focus": {
    outline: "none",
  },
  [XS]: {
    padding: "0.75rem 2rem",
  }
});

const JobPostCODEPaymentButton = styled("button", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  marginBottom: "0.5rem",

  fontSize: "1rem",
  borderRadius: "0.5rem",
  border: "2px solid rgb(239, 239, 239)",
  // padding: "0.8rem 4.5rem",
  // padding: "0.8rem 1rem",
  padding: "1rem",

  color: "white",
  background: black,
  // background: blue,
  // background: green,
  // background: solana,

  width: "100%",

  transition: "all 0.2s",
  cursor: "pointer",
  ":hover": {
    opacity: 0.7,
  },
  ":focus": {
    outline: "none",
  },
  [XS]: {
    padding: "0.75rem 2rem",
  }
});

const CodeBuyButton = styled("button", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  // background: "rgb(37, 191, 161)",
  // background: blue,
  background: black, // Use this temporarily
  width: "100%",

  color: "white",
  // color: solana,
  marginTop: "1rem",

  padding: "0.8rem 1.8rem",
  border: "2px solid #efefef",
  borderRadius: "0.5rem",
  fontSize: "1rem",

  transition: "all 0.2s",
  cursor: "pointer",
  ":hover": {
    opacity: 0.7,
  },
  ":focus": {
    outline: "none",
  },

  [XS]: {
    // fontSize: "0.8rem",
    // padding: "0.5rem",
  }
});


const SolanaBuyButton = styled("button", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  // background: "rgb(37, 191, 161)",
  // background: blue,
  background: solana, // Use this temporarily
  width: "100%",

  color: "white",
  // color: solana,
  marginTop: "1rem",

  padding: "0.8rem 1.8rem",
  border: "2px solid #efefef",
  borderRadius: "0.5rem",
  fontSize: "1rem",

  transition: "all 0.2s",
  cursor: "pointer",
  ":hover": {
    opacity: 0.7,
  },
  ":focus": {
    outline: "none",
  },

  [XS]: {
    // fontSize: "0.8rem",
    // padding: "0.5rem",
  }
});

// Delete unused ones later.
export {
  PaymentIntro,
  TotalPrice,

  JobPostPaymentContainer,

  JobPostPaymentWrapper,
  JobPostPaymentSection,

  JobPostPaymentHeader,
  JobEditButtonWrapper,

  PreviewTypeRadioGroupWrapper,

  ContinueButtonWrapper,
  ContinueButton,

  FreePaymentButton,

  JobPostSolanaPaymentButton,
  JobPostCODEPaymentButton,

  CodeBuyButton,
  SolanaBuyButton,
};