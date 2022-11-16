import React, { useEffect, useRef, useState } from "react";
// import { useSpring } from "react-spring";

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';

// import PersonIcon from '@material-ui/icons/Accou';
import CloseIcon from "@material-ui/icons/Close";

import { Tooltip } from "@material-ui/core";

import LinkIcon from "@material-ui/icons/Link";

// import {toast, ToastContainer} from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

import { 
  ConnectWalletListSidebarContainer,
  ConnectWalletListSidebarHeader,
  ConnectWalletListSidebarResponses,
  CryptoWalletListContainer,
  CryptoWalletListWrapper,
  MetamaskConnectButtonWrapper,
  WalletPageLinkWrapper,
} from "./ConnectWalletListSidebarCSS";
import { useAuth } from "../../contexts/auth";
import { useSpring } from "react-spring";
import { blue, shadowBlue } from "../../design/colors";
import { boxShadow } from "../../design/common";
// import { useMountEffect, useOnOutsideClick } from "../../useOutsideClick";
import { TopNavCryptoWallectCloseButtonWrapper, TopNavCryptoWallectConnectButtonWrapper } from "../../components/layouts/TopNav/TopNavCSS";
// import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { useWallet as useSolanaWallet } from "@solana/wallet-adapter-react";

import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { shortenAddress } from "../utils";
import Link from "next/link";
import { useMetamaskWallet } from "../../contexts/MetamaskWalletProvider";

const ConnectWalletListSidebar = ({ 
  // showConnectWalletListSidebar,
  // setShowConnectWalletListSidebar,
  // setDisableConnectWalletListButton,
}) => {
  // @ts-ignore
  const { metamaskWallet, setMetamaskWallet, connectMetamaskWallet, disconnectMetamaskWallet, } = useMetamaskWallet();

  // console.log("metamaskWallet.provider");
  // console.log(metamaskWallet.provider);

  // @ts-ignore
  const userSolanaWallet = useSolanaWallet();
  // console.log("userSolanaWallet");
  // console.log(userSolanaWallet);

  const { 
    publicKey: userPublicKey, connected, wallet, 
    // connecting, connect, select, disconnect 
  } = userSolanaWallet;

  let solanaWalletConnectButtonText;
  if (connected) {
    solanaWalletConnectButtonText = shortenAddress(userPublicKey.toString());
  } else {
    solanaWalletConnectButtonText = "Connect";
  }

  if (!wallet) {
    solanaWalletConnectButtonText = "Select Wallet";
  }

  const {
    // @ts-ignore
    user,
    // isOwner,
  } = useAuth();

  const [showConnectWalletListSidebar, setShowConnectWalletListSidebar] = useState(false);
  // const [disableOnOutsideClick, setDisableOnOutsideClick] = useState(false);
  
  const sidebar = useSpring({
    from: { right: "-27rem" },
    right: showConnectWalletListSidebar ? "0" : "-27rem",
  });

  return (
    <>
      {/* <Tooltip
        title="Your Crypto Wallets"
        arrow
      > */}
      {!showConnectWalletListSidebar ? <TopNavCryptoWallectConnectButtonWrapper
        // id="TopNavCryptoWallectConnectButtonWrapper"
        $showConnectWalletListSidebar={showConnectWalletListSidebar}

        onClick={() => {
          // if (showConnectWalletListSidebar === false) {
          setShowConnectWalletListSidebar(true);
          // } else {
          //   setShowConnectWalletListSidebar(false);
          // }
        }}
      >
        <AccountBalanceWalletIcon />
      </TopNavCryptoWallectConnectButtonWrapper> : <TopNavCryptoWallectCloseButtonWrapper
        onClick={() => {
          setShowConnectWalletListSidebar(false);
        }}
      >
        <CloseIcon />
        
      </TopNavCryptoWallectCloseButtonWrapper>}
      {/* </Tooltip>  */}

      <ConnectWalletListSidebarContainer
        id='file-list-sidebar'
        style={sidebar}
      >
        <ConnectWalletListSidebarHeader>
          <ConnectWalletListSidebarResponses>
            <AccountCircleIcon />
            <span
              style={{
                marginLeft: "0.25rem"
              }}
            >
              Your Crypto Wallets
            </span>
          </ConnectWalletListSidebarResponses>
        </ConnectWalletListSidebarHeader>

        <div
          style={{
            padding: "1.25rem 1rem 1rem 1.25rem",
            lineHeight: "1.5rem",
          }}
        >
          If you do not have a <Tooltip style={{ fontSize: "2rem", }} arrow placement="bottom-start" title={<span style={{ fontSize: "0.85rem", lineHeight: "1rem" }}>A crypto wallet is an application or hardware device that helps you to use blockchains.</span>} ><span style={{ color: blue, fontWeight: "bold" }} >wallet</span></Tooltip>, please install one first.
        </div>

        <CryptoWalletListContainer>
          <CryptoWalletListWrapper 
            onClick={async () => {
              if (metamaskWallet === null) {
                await connectMetamaskWallet();
              } else {
                disconnectMetamaskWallet();
              }
            }}
          >
            <MetamaskConnectButtonWrapper>
              <img
                src="/static/metamask.png"
                style={{
                  width: "1.5rem",
                  height: "1.5rem",
                  marginLeft: "-0.15rem",
                  marginRight: metamaskWallet === null ? "0.5rem" : "0.6rem",
                }}
                alt="metamask"
              />
              <span
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                  // marginLeft: "0.1rem",
                }}
              >
                {/* { metamaskWallet === null ? "Metamask" : `${shortenAddress(metamaskWallet.account)} (${metamaskWallet.blockchainName})` } */}
                {metamaskWallet === null ? "Metamask" : `${shortenAddress(metamaskWallet.account)}`}
              </span>
            </MetamaskConnectButtonWrapper>

          </CryptoWalletListWrapper>
          <CryptoWalletListWrapper
            style={{
              borderRadius: "0 0 0.5rem 0.5rem",
            }}
          >
            <WalletMultiButton 
              startIcon={undefined}
              className="solana-wallet-connect-button"
            >
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img
                  src="/static/logos/solana.png"
                  style={{
                    width: "1.25rem",
                    height: "1.25rem",
                    // marginRight: connected ? "0.5rem" : "0.6rem",
                    marginRight: "0.6rem",
                  }}
                />
                <span>
                  {solanaWalletConnectButtonText}
                </span>
              </div>
            </WalletMultiButton>

            {connected && <WalletPageLinkWrapper>
              <Link
                href="/solana/wallet"
              >
                <LinkIcon
                  style={{
                    fontSize: "1.25rem",
                  }}
                />
              </Link>
            </WalletPageLinkWrapper>}             
          </CryptoWalletListWrapper>
        </CryptoWalletListContainer>
      </ConnectWalletListSidebarContainer>

      {/* <ToastContainer /> */}
    </>
  );
};

// const { innerBorderRef } = useOnOutsideClick(() => {
//   setShowConnectWalletListSidebar(false);
// });

// const connectWalletListButtonRef = useRef();
// const connectWalletListSidebarRef = useRef();

// useEffect(() => {
//   window.onclick = (event) => {
//     console.log("event.target.contains(connectWalletListButtonRef.current)");
//     console.log(event.target.contains(connectWalletListButtonRef.current));
//     console.log("event.target.contains(connectWalletListSidebarRef.current)");
//     console.log(event.target.contains(connectWalletListSidebarRef.current));

//     console.log("event.target === connectWalletListButtonRef.current");
//     console.log(event.target === connectWalletListButtonRef.current);
//     console.log("event.target === connectWalletListSidebarRef.current");
//     console.log(event.target === connectWalletListSidebarRef.current);

//     if (
//       // Button click
//       event.target.contains(connectWalletListButtonRef.current) === true
//       && event.target.contains(connectWalletListSidebarRef.current) === false
//       && event.target === connectWalletListButtonRef.current === true
//       && event.target === connectWalletListSidebarRef.current === false
//     ) {
//       if (showConnectWalletListSidebar === true) {
//         setShowConnectWalletListSidebar(false);
//       } else {
//         setShowConnectWalletListSidebar(true);
//       }
//       return;
//     }

//     if (
//       // Button click
//       event.target.contains(connectWalletListButtonRef.current) === true
//       && event.target.contains(connectWalletListSidebarRef.current) === false
//       && event.target === connectWalletListButtonRef.current === true
//       && event.target === connectWalletListSidebarRef.current === false
//     ) {
//       setShowConnectWalletListSidebar(true);
//       return;
//     }

//     // if (
//     //   // Inside the sidebar click
//     //   event.target.contains(connectWalletListButtonRef.current) === false
//     //   && event.target.contains(connectWalletListSidebarRef.current) === false
//     //   && event.target === connectWalletListButtonRef.current === false
//     //   && event.target === connectWalletListSidebarRef.current === false
//     // ) {
//     //   setShowConnectWalletListSidebar(true);
//     // }
    

//     // if (
//     //   event.target.contains(connectWalletListButtonRef.current)
//     //   && event.target === connectWalletListButtonRef.current
//     //   // && event.target.contains(innerBorderRef.current)
//     // ) {
//     //   if (showConnectWalletListSidebar === true) {
//     //     setShowConnectWalletListSidebar(false);
//     //   } else {
//     //     setShowConnectWalletListSidebar(true);
//     //   }
//     // }
//   }
// }, []);


export default ConnectWalletListSidebar;