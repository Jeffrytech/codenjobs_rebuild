import { styled } from "baseui";
import { DESKTOP, MOBILE, XS } from "../../../design/breakpoints";
import { black, blue, shadowBlue, solana } from "../../../design/colors";
import { boxShadow, card, hover } from "../../../design/common";

// const NFTLabel = styled("label", {
const SolanaNFT = styled("li", ({ $isOneNFT }) => {
  return {
    // display: "block",

    // ...card,

    boxShadow,
    color: shadowBlue,

    flexShrink: 0,
    borderRadius: "0.5rem",
    marginBottom: "2rem",
    backgroundColor: "white",

    // flexBasis: $isOneNFT ? "100%" :"16rem",
    flexBasis: $isOneNFT ? "50%" :"12rem",
    // flexBasis: $isOneNFT ? "100%" :"12rem",

    padding: "1rem",

    display: "flex",
    // flexFlow: "row",
    flexFlow: "column",
    flexWrap: "wrap",

    margin: "1rem",

    // TODO
    // Use modal instead to show NFT details?
    height: "14.5rem",
    maxHeight: "14.5rem",

    [DESKTOP]: {
      flexBasis: "50% 50%",
      // marginRight: "1rem",
    },

    [MOBILE]: {
      flexBasis: "100%",
      // marginRight: "1rem",
    }
  };
});

const SolanaNFTImage = styled("img", {
  display: "flex",

  width: "100%",
  maxWidth: "100%",
  // width: "16rem",
  // maxWidth: "16rem",
  // maxHeight: "16rem",
  // heigth: "16rem",
  // maxHeight: "12rem",
  // heigth: "12rem",

  // TODO
  // The NFTs images height should be equal
  heigth: "8rem",
  maxHeight: "8rem",

  marginBottom: 0,
  paddingBottom: 0,

  objectFit: "fill",

  cursor: "pointer",
  transition: "all 0.2s",
  ":hover": {
    opacity: 0.7,
  },

  // [XS]: {
  //   heigth: "8rem",
  //   maxHeight: "8rem",
  // }
});

const SolanaNFTDetails = styled("div", {
  display: "flex",
  flexFlow: "column",
  // padding: "1rem 0.5rem",
  padding: "0.5rem 0.5rem 0 0",
});

const SolanaNFTName = styled("span", {
  fontWeight: "bold",
  marginBottom: "0.25rem",
  fontSize: "1.1rem",
  wordBreak: "break-all",
});

const SolanaNFTProject = styled("span", {
  opacity: "0.5",
  fontSize: "1rem",
  marginBottom: "0.25rem",
});

const SolanaNFTLink = styled("div", {
  display: "flex",
  alignItems: "center",
  color: solana,

  cursor: "pointer",
  transition: "all 0.2s",
  ":hover": {
    opacity: 0.7,
  },
});

export {
  SolanaNFT,
  SolanaNFTImage,
  SolanaNFTDetails,
  SolanaNFTName,
  SolanaNFTProject,
  SolanaNFTLink,
};