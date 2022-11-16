/* eslint-disable no-trailing-spaces */
import React, { useState } from "react";
import Link from "next/link";

// import ReorderIcon from '@material-ui/icons/Reorder';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
// import LinearProgress from '@material-ui/core/LinearProgress';

import Logo from "../Logo";

import User from "../User";
import LoginPrompt from "../LoginPrompt";

import CenteredInPage from "../../CenteredInPage";
import PrimarySpinner from "../../spinners/PrimarySpinner";

import { useAuth } from "../../../contexts/auth";

import { CODE_SOLANA_TOKEN, COMPANY_NAME, SOLSCAN } from "../../../config/environment";


import {
  TopNavContainer,
  TopNavMenuButtonContainer,
  // FindJobButton,
  LogoCompanyTitleContainer,
  CompanyTitle,
  TopNavCryptoWallectConnectButtonWrapper,
} from "./TopNavCSS";
import Shadow from "../Shadow";
import ExternalLink from "../../ExternalLink";
import { useSidebar } from "../../../contexts/sidebar";
import { useShadow } from "../../../contexts/shadow";
import { Tooltip } from "@mui/material";
import ConnectWalletListSidebar from "../../../crypto/ConnectWalletListSidebar";
    
const TopNavRight = ({ 
  loading, 
  user, 
  logout,
}) => {
  if (user) {
    return (
      <>
        {/* <Shadow /> */}
        <User 
          user={user}
          logout={logout}
        />
      </>
    );
  } else if (!loading) {
    return (
      <>
        {/* <Shadow /> */}
        <LoginPrompt />
      </>
    );
  } else {
    return null;
  }
};

const TopNav = () => {
  const {
    // @ts-ignore
    user,
    // @ts-ignore
    logout,
    // @ts-ignore
    loading,
  } = useAuth();

  // console.log("user");
  // console.log(user);

  if (loading) {
    return (<>
      {/* <LinearProgress /> */}
      <CenteredInPage>
        <PrimarySpinner />
      </CenteredInPage>
    </>);
  }

  // @ts-ignore
  const { showSidebar, setShowSidebar } = useSidebar();
  // @ts-ignore
  // const { showShadow, setShowShadow } = useShadow();

  // const [showConnectWalletListSidebar, setShowConnectWalletListSidebar] = useState(false);
  // const [disableConnectWalletListButton, setDisableConnectWalletListButton] = useState(false);

  return (
    <>
      <nav>
        <Shadow />
        <TopNavContainer>
          {/* <Logo src="/static/logo.png" /> */}
          {/* <TopNavMenuButtonContainer>
          <ReorderIcon />
        </TopNavMenuButtonContainer> */}


          <LogoCompanyTitleContainer>
            {/* Make a sidebar for this instead */}

            <Logo
              src="/static/logo.png"
              onClick={() => {
                if (setShowSidebar === true) {
                  // return;

                  // setTimeout(() => {
                  //   setShowSidebar(false);
                  // }, 1000);
                } else {
                  setShowSidebar(true);
                }
                // setShowShadow(!showShadow);
              }}
            />

            {/* <ExternalLink href={`${SOLSCAN}/token/${CODE_SOLANA_TOKEN}`} >
              <Logo src="/static/logo.png" />
            </ExternalLink> */}

            {/* <div style={{
              fontSize: "2.75rem",
            }}>
              C
              <span style={{
                fontSize: "1.1rem",
                position: "absolute",
                left: "1.8rem",
                top: "1.25rem",
                fontWeight: "bold",
              }}>
                $
              </span>
            </div> */}

            <Link href={"/"}>
              <CompanyTitle>
                {COMPANY_NAME}
              </CompanyTitle>
            </Link>
          </LogoCompanyTitleContainer>

          <TopNavRight
            loading={loading}
            user={user}
            logout={logout}
          />

          {/* <Tooltip
            // title="Connect Your Crypto Wallets"
            title="Your Crypto Wallets"
            arrow
          >
            <TopNavCryptoWallectConnectButtonWrapper
              disabled={disableConnectWalletListButton}
              onClick={() => {
                if (showConnectWalletListSidebar === false) {
                  setShowConnectWalletListSidebar(true);
                }
              }}
            >
              <AccountBalanceWalletIcon />
            </TopNavCryptoWallectConnectButtonWrapper>
          </Tooltip> */}
          <ConnectWalletListSidebar 
            // showConnectWalletListSidebar={showConnectWalletListSidebar}
            // setShowConnectWalletListSidebar={setShowConnectWalletListSidebar}
            // setDisableConnectWalletListButton={setDisableConnectWalletListButton}
          />
        </TopNavContainer>
      </nav>

      {/* <ConnectWalletListSidebar 
        showConnectWalletListSidebar={showConnectWalletListSidebar}
        setShowConnectWalletListSidebar={setShowConnectWalletListSidebar}
        setDisableConnectWalletListButton={setDisableConnectWalletListButton}
      /> */}
    </>
    
  );
};

export default TopNav;