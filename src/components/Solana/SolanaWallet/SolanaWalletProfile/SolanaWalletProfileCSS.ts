import { styled } from "baseui";
import { XS } from "../../../../design/breakpoints";
import { blue, solana, white } from "../../../../design/colors";
import { hover } from "../../../../design/common";

const SolanaWalletProfileContainer = styled("div", {
  background: white,
  width: "100%",
  padding: "1rem",
  display: "flex",
  flexFlow: "row",

  [XS]: {
    flexFlow: "column",
  }
});

// const SolanaWalletProfileImage = styled("img", {
//     width: "6rem",
//     borderRadius: "50%",
// });

const SolanaWalletProfileImageWrapper = styled("div", {
  marginLeft: "1rem",
  // [XS]: {
  //   marginLeft: "1rem",
  // }

  [XS]: {
    display: "none",
  }
});

const SolanaWalletProfileDetails = styled("div", {
  display: "flex",
  flexFlow: "column",
  marginLeft: "1rem",
});

const SolanaWalletShortend = styled("h1", {
  color: solana,
  margin: "0.5rem 0 1rem 0",
  fontSize: "1.25rem",

  ":hover": hover,

  [XS]: {
    marginTop: "0",
  }
});

const SolanaBalance = styled("span", {
  display: "flex",
  alignItems: "center",

  fontSize: "1rem",
  marginBottom: "0.25rem"
});

const CodeBalance = styled("span", {
  display: "flex",
  alignItems: "center",

  fontSize: "1rem",
});

const ExploreCollectionsRedirectButton = styled("button", {
  width: "100%",
  padding: "0.5rem",

  background: blue,
  color: white,
  border: "none",
  borderRadius: "0.5rem",

  ":hover": hover,
});

export {
  SolanaWalletProfileContainer,

  SolanaWalletProfileImageWrapper,
    
  // SolanaWalletProfileImage,
  SolanaWalletProfileDetails,
  SolanaWalletShortend,
  SolanaBalance,
  CodeBalance,

  ExploreCollectionsRedirectButton,
};