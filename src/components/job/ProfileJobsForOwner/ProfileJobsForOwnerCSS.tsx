import { styled } from "baseui";
import { DESKTOP, XS } from "../../../design/breakpoints";
import { solana, white } from "../../../design/colors";

const JobHeader = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  fontWeight: 400,
  lineHeight: "1.25rem",

  margin: "0.5rem 0 0.5rem 0"

  // [XS]: {
  //   // flexFlow: "column",
  //   // flexFlow: "column-reverse",
  //   // alignItems: "flex-start",
  // },
});

const JobListForOwnerHeader = styled("div", () => {
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
    // padding: "1rem 0rem 1rem 2rem",
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

const JobPostDetailWrapper = styled("div", {
  display: "flex",
  marginTop: "0.5rem",
  fontSize: "0.75rem",
});

const JobPostResubmit = styled("div", {
  display: "flex",
  marginTop: "0.5rem",
  // fontSize: "0.75rem",

  transition: "all 0.2s",
  cursor: "pointer",
  ":hover": {
    opacity: "0.7",
  }
});

const JobPostReview = styled("div", {
  display: "flex",
  marginTop: "0.5rem",
  // fontSize: "0.75rem",

  // transition: "all 0.2s",
  // cursor: "pointer",
  // ":hover": {
  //   opacity: "0.7",
  // }
});

// const CompanyName = styled("a", {
//   color: "black",
//   opacity: "0.7",
//   // textDecoration: "none",
  
//   transition: "all 0.2s",
//   cursor: "pointer",
//   ":hover": {
//     textDecoration: "underline",
//   }
// });

// const JobTitle = styled("div", {
//   // fontSize: "1.5rem",
//   fontSize: "1.25rem",
//   fontWeight: 700,
//   lineHeight: "25px",

//   marginTop: "0.25rem",

//   transition: "all 0.2s",
//   cursor: "pointer",
//   ":hover": {
//     opacity: 0.7,
//     // color: "rgb(17, 160, 245)",
//   },

//   // [XS]: {
//   //   fontSize: "1.25rem",
//   // }
// });

const SolanaJobPostPaymentTx = styled("div", {
  display: "flex",
  alignItems: "center",
  marginRight: "auto",
  lineHeight: "1.25rem",
  color: solana,
  opacity: "0.7",
  
  transition: "all 0.2s",
  ":hover": {
    cursor: "pointer",
    opacity: "1",
    // color: solana,
  }
  // display: "flex",
  // alignItems: "center",
  // justifyContent: "space-between",

  // fontWeight: 400,
  // lineHeight: "1.25rem",

  // margin: "0.5rem 0 0.5rem 0"

  // // [XS]: {
  // //   // flexFlow: "column",
  // //   // flexFlow: "column-reverse",
  // //   // alignItems: "flex-start",
  // // },
});

export {
  JobHeader,
  JobListForOwnerHeader,
  
  JobPostDetailWrapper,
  // CompanyName,

  JobPostResubmit,
  JobPostReview,

  // JobTitle,

  SolanaJobPostPaymentTx,
};