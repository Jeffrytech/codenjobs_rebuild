import React from "react";

import Head from "next/head";

import {
  COMPANY_LOGO,
  COMPANY_NAME,
} from "../../config/environment";

import NFTProjectList from "../../components/NFT/ProjectList";
import { SolanaDevWalletConnection } from "../../crypto/SolanaWalletConnection";

import { LayoutContainer } from "../../components/layouts";
import { Layer } from "baseui/layer";

import Header from "../../components/layouts/Header";
import Sidebar from "../../components/layouts/Sidebar";
import TopNav from "../../components/layouts/TopNav";
import Metatags from "../../components/Metatags";

// Use Live Mint or Lannch pad instead?
// https://launchpad.solanart.io/
const NFTProjects = () => {
  // const meta_title = `Solana NFT project - ${COMPANY_NAME}`;
  const meta_title = `NFT projects - ${COMPANY_NAME}`;
  const meta_description = `You can find NFT projects from ${COMPANY_NAME} here`;

  return (
    <>
      {/* <Head>
        <title>{meta_title}</title>
        <meta property="og:title" content={meta_title} />
        <meta name="twitter:title" content={meta_title} />

        <meta name="description" content={meta_description} />
        <meta property="og:description" content={meta_description} />
        <meta name="twitter:description" content={meta_description} />

        <meta property="og:image" content={COMPANY_LOGO} />
        <meta name="twitter:image" content={COMPANY_LOGO} />
        <meta name="image" content={COMPANY_LOGO} />

        <meta name="twitter:card" content="summary_large_image" />

      </Head> */}
      <Metatags
        title={meta_title}
        description={meta_description}
      />

      <Layer>
        <LayoutContainer>
          <Header>
            <TopNav />
          </Header>

          <Sidebar />

          <SolanaDevWalletConnection solanaNetwork="dev" >
            <NFTProjectList />
          </SolanaDevWalletConnection>

        </LayoutContainer>
      </Layer>
    </>
  );
};

export default NFTProjects;
