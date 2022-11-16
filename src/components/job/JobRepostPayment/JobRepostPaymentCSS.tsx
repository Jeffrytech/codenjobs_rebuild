import { styled } from "baseui";
import { MOBILE, XS } from "../../../design/breakpoints";
import { black, blue, red, solana } from "../../../design/colors";
import { boxShadow } from "../../../design/common";

// Move these to JobList and JobCard
const JobPostPreviewContainer = styled("div", {
  padding: "0px 2rem 4rem 2rem",
  
  [MOBILE]: {
    padding: "0 1rem 1rem 1rem"
  }
});

const JobPostPreviewWrapper = styled("div", {
  margin: "2rem auto 0",
  maxWidth: "18rem",

  [MOBILE]: {
    margin: "1rem auto 0"
  }
});

const JobPostPreviewSection = styled("section", {
  color: "#374252",
  boxShadow,
  flexShrink: 0,
  borderRadius: "0.5rem",
  marginBottom: "2rem",
  backgroundColor: "white",
  padding: "1.5rem",

  minHeight: 0,
});

const JobPreviewHeader = styled("div", {
  display: "flex",
  alignItems: "center",
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
  display: "block",
  width: "100%",
  textAlign: "center",
});

const WalletRequirement = styled("span", {
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

const JobRepostPaymentButton = styled("button", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  fontSize: "1rem",
  borderRadius: "0.5rem",
  border: "2px solid rgb(239, 239, 239)",
  padding: "0.8rem 4.5rem",
  color: "white",
  background: blue,
  // background: red,
  // background: solana,

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
  WalletRequirement,

  JobPostPreviewContainer,
  JobPostPreviewWrapper,
  JobPostPreviewSection,

  JobPreviewHeader,
  JobEditButtonWrapper,

  PreviewTypeRadioGroupWrapper,

  ContinueButtonWrapper,
  ContinueButton,

  FreePaymentButton,
  JobRepostPaymentButton,

  SolanaBuyButton,
};