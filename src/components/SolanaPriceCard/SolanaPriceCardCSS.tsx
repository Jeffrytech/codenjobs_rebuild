import { styled } from "baseui";
import { white, shadowBlue } from "../../design/colors";
import { boxShadow } from "../../design/common";

// const FTXLogoWrapper = styled("div", ({ $list }) => {

//     // alert($list);

//     return {
//         marginBottom: $list === undefined ? "2rem" : "1rem",
//         // marginBottom: "0.75rem",
//         padding: "0.5rem",
//         background: "white",
//         borderRadius: "0.5rem",
//         boxShadow: "rgb(0 0 0 / 10%) 0px 1px 1px 0px",

//         transition: "all 0.2s",
//         ":hover": {
//             opacity: 0.7,
//         },

//     }
// });

// const FTXLogo = styled("img", {
//     width: "100%",
// })

const SolanaPriceCardSection = styled("section", {


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

const SolanaPriceCardHeader = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  padding: "1rem",

  backgroundColor: shadowBlue,
  color: white,

  borderRadius: "0.5rem 0.5rem 0 0",
});

const SolanaPriceCardIntro = styled("h2", {
  margin: 0,
  // color: "#ff7676",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  width: "100%",
  // textAlign: "center",
  ":hover": {
    cursor: "pointer",
    opacity: "0.7",
    transition: "all 0.2s",
  }
});

const CurrentSolanaPrice = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  padding: "1rem",
  background: "#DFE0EF",

  borderRadius: "0 0 0.5rem 0.5rem",
  fontSize: "1.25rem",

  // color: solana,
});

export {
  SolanaPriceCardSection,
  SolanaPriceCardHeader,
  SolanaPriceCardIntro,

  CurrentSolanaPrice,
};