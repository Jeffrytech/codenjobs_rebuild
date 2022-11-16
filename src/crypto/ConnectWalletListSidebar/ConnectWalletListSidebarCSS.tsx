import { styled } from "baseui";
import { animated } from "react-spring";
import { DESKTOP } from "../../design/breakpoints";
import { shadowBlue } from "../../design/colors";
import { boxShadow, hover } from "../../design/common";

const ConnectWalletListSidebarContainer = styled(
  animated.nav,
  (
    {
      // $showConnectWalletList
    }
  ) => {
    return {
      top: "3.75rem",
      bottom: 0,

      position: "fixed",
      background: "white",
      zIndex: 5,
      width: "27rem",
      maxWidth: "100%",

      bordeLeft: "1px solid rgba(0, 0, 0, 0.2)",

      boxShadow,

      overflowY: "scroll",
      // visibility: "visible",
      opacity: "1",
      display: "flex",
      flexFlow: "column",

      color: "#374252",
    };
  }
);

const ConnectWalletListSidebarHeader = styled(
  "div",
  (
    {
      // $showConnectWalletList
    }
  ) => {
    return {
      // outline: "1px solid blue",
      display: "flex",
      alignItems: "center",
      // padding: "1.25rem 1rem",
      padding: "1.25rem",
      // padding: "1.5rem",

      borderBottom: "1px solid #efefef",

      [DESKTOP]: {
        "display": "none",
      }
    };
  }
);

const ConnectWalletListSidebarResponses = styled("h2", {
  display: "flex",

  fontSize: "1.25rem",
  fontWeight: "normal",
  margin: 0,

  // ":hover": hover,
});

// const ConnectWalletListSidebarClose = styled("div", {
//   display: "flex",
//   marginLeft: "auto",
//   marginRight: "0.5rem",

//   ":hover": hover,
// });

const WalletPageLinkWrapper = styled("div", {
  display: "flex",
  marginLeft: "auto",

  ":hover": hover,
});

const CryptoWalletListContainer = styled("ul", {
  padding: "0 1rem 0 1rem",
  margin: 0,
  listStyle: "none",
});

const CryptoWalletListWrapper = styled("li", {
  display: "flex",
  alignItems: "center",

  padding: "1rem",

  boxShadow,
  color: shadowBlue,

  flexShrink: 0,
  borderRadius: "0.5rem 0.5rem 0 0",
  // marginBottom: ($isLastFile) ? "0" : "1rem",
  backgroundColor: "white",

  border: `1px solid #efefef`,
});

const MetamaskConnectButtonWrapper = styled("div", {
  display: "flex",
  alignItems: "center",

  ":hover": hover,
});

export {
  ConnectWalletListSidebarContainer,
  ConnectWalletListSidebarHeader, 
  ConnectWalletListSidebarResponses,
  WalletPageLinkWrapper,

  CryptoWalletListContainer,
  CryptoWalletListWrapper,

  MetamaskConnectButtonWrapper,
};