import { styled } from "baseui";
import { MOBILE, XS, XXS } from "../../../../../design/breakpoints";
import { shadowBlue, white, blue } from "../../../../../design/colors";
import { boxShadow } from "../../../../../design/common";

const SolanaCandyMachineMintDetailsContainer = styled("div", ({ $walletConnected }) => {
  return {
    boxShadow: $walletConnected ? boxShadow : "none",
    color: shadowBlue,

    flexShrink: 0,
    borderRadius: "0.5rem",
    backgroundColor: $walletConnected ? white : "none",

    // padding: "1rem",
    outline: $walletConnected ? "1px solid #efefef" : "none",

    width: "25rem",

    display: "flex",
    flexFlow: "column",

    margin: $walletConnected ? "0 1rem 2rem 1rem" : "-1rem 0 2rem 0",

    [MOBILE]: {
      width: "28rem",
    },

    [XS]: {
      width: "21rem",
    },

    [XXS]: {
      width: "18rem",
    },
  };
});

const RedirectToSolanaNFTWallet = styled("span", {
  display: "flex",
  marginTop: "0.5rem",
  opacity: 0.7,

  ":hover": {
    cursor: "pointer",
    transition: "all 0.2s",
    color: blue
  }
});

const MintButtonContainer = styled("div", {
  
  // margin: "1rem",
  width: "calc(100% - 2rem)",
  margin: "1rem 0 1rem 0"
});

export {
  SolanaCandyMachineMintDetailsContainer,

  RedirectToSolanaNFTWallet,

  MintButtonContainer,

};