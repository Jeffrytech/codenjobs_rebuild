// Use this because font becomes different from the main layout files.

/* eslint-disable no-trailing-spaces */
import React, { useEffect } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import { scrollToTop } from "../../browser/scroll";

import Header from "./Header";
import Logo from "./Logo";

import {
  TopNavContainer,
  LogoCompanyTitleContainer,

} from "./TopNav/TopNavCSS";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import SolanaImage from "../../crypto/SolanaImage";
import SolanaWallet from "../../crypto/SolanaWalletConnection";

const LoginTopNav = ({
  children,
}) => {
  useEffect(() => {
    scrollToTop();
  });

  return (
    <SolanaWallet>
      <Header>
        <nav>
          <TopNavContainer>
            <Link href={"/"}>
              <LogoCompanyTitleContainer>
                <Logo src="/static/logo.png" />
              </LogoCompanyTitleContainer>
            </Link>

            <WalletMultiButton
              startIcon={<SolanaImage />}
            />
          </TopNavContainer>
        </nav>
      </Header>

      <main>{children}</main>
    </SolanaWallet>
  );
};

export default LoginTopNav;