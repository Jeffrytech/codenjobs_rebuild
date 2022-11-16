import { styled } from "baseui";
import { MOBILE, XS } from "../../../../../../design/breakpoints";
import { white, blue, black, green, red, grey } from "../../../../../../design/colors";

const SolanaWalletHeader = styled("h2", {
  margin: "0",
  padding: "1.5rem 0.8rem",
  fontSize: "1.25rem",
  // fontWeight: "normal",

  // [MOBILE]: {
  //   marginTop: "4rem",
  // }
});


const BuyButtonWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  // marginLeft: "1rem",
  marginRight: "2rem",
  marginTop: "1rem",

  marginBottom: "1.5rem",
});

const BuyButton = styled("button", {
  display: "flex",

  background: blue,
  color: white,
  padding: "0.5rem 2rem",
  border: "2px solid #efefef",
  borderRadius: "0.5rem",

  transition: "all 0.2s",
  cursor: "pointer",
  ":hover": {
    opacity: 0.7,
  },
  ":focus": {
    outline: "none",
  },
});

const MarketButtonWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  // marginLeft: "1rem",
  marginRight: "1rem",
  marginTop: "1rem",

  marginBottom: "1.5rem",
});

const MarketButton = styled("button", {
  display: "flex",

  padding: "0.5rem 2rem",
  // border: "2px solid #efefef",
  borderRadius: "0.5rem",
  
  border: `2px solid ${black}`,
  background: white,
  color: black,

  transition: "all 0.2s",
  cursor: "pointer",
  ":hover": {
    opacity: 0.7,
  },
  ":focus": {
    outline: "none",
  },
});

const SolanaWalletDetailWrapper = styled("div", {
  display: "flex",
  flexFlow: "row",
  margin: "0 1rem 1.5rem 1rem",

  [XS]: {
    flexFlow: "column",
  }

});

const SolanaWalletRemoveButtonWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  // marginLeft: "1rem",
  marginRight: "2rem",
  marginTop: "1rem",

  marginBottom: "1.5rem",
});

const SolanaWalletUpdateButton = styled("button", {
  display: "flex",

  background: green,
  color: white,
  padding: "0.5rem 2rem",
  border: "2px solid #efefef",
  borderRadius: "0.5rem",

  marginRight: "0.5rem",

  transition: "all 0.2s",
  cursor: "pointer",
  ":hover": {
    opacity: 0.7,
  },
  ":focus": {
    outline: "none",
  },
});

const SolanaWalletRemoveButton = styled("button", {
  display: "flex",

  background: grey,
  color: white,
  padding: "0.5rem 2rem",
  border: "2px solid #efefef",
  borderRadius: "0.5rem",

  transition: "all 0.2s",
  cursor: "pointer",
  ":hover": {
    opacity: 0.7,
  },
  ":focus": {
    outline: "none",
  },
});

export {
  SolanaWalletHeader,
  SolanaWalletDetailWrapper,
  
  MarketButtonWrapper,
  MarketButton,
  
  BuyButtonWrapper,
  BuyButton,


  SolanaWalletRemoveButtonWrapper,
  SolanaWalletUpdateButton,
  SolanaWalletRemoveButton,
};