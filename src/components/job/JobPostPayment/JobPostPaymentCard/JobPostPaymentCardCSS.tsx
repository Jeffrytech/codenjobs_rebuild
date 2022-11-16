
// import { styled } from '@mui/material/styles';
import { styled } from 'baseui';
import { black, shadowBlue, solana, white } from '../../../../design/colors';

// import { red, white,black } from "../../design/colors";

const CardWrapper = styled("div", {
  border: "1px solid #95959572",
  borderRadius: "0.5rem",
  // padding: "1rem 1rem 1.5rem 1rem",

  marginTop: "1rem",
  marginBottom: "2rem",

  backgroundColor: shadowBlue,

  "&:hover":{
    // backgroundColor: shadowBlue,
    color: white,
    "div": {

    }

  }
  
});

// const Top = styled("div")({
//   width: "100%",
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
// })

// const Mid = styled("div") ({
//   width: "100%",
//   marginTop: "1rem",
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "flex-start",
// })

const JobPostPaymentCardHeader = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  padding: "1rem",

  backgroundColor: shadowBlue,
  color: white,

  borderRadius: "0.5rem 0.5rem 0 0",
});

const JobPostPaymentCardIntro = styled("h2", {
  margin: 0,
  // color: "#ff7676",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  width: "100%",
  color: white,
  
  cursor: "pointer",
  ":hover": {
    opacity: 0.7,
    transition: "all 0.2s",
  }
  // textAlign: "center",
});

const JobPostPaymentDetails = styled("div", {
  // width: "100%",
  // marginTop: "1rem",
  padding: "1rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",

  borderTop: "2px solid #DFE0EF"
});



export {
  CardWrapper,
  JobPostPaymentCardHeader,
  JobPostPaymentCardIntro,
  JobPostPaymentDetails,
  // Top, 
  // Mid,

};