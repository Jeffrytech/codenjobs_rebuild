import React from "react";

import { LayoutContainer } from "../../components/layouts";

import {
  COMPANY_NAME,
} from "../../config/environment";
import Mint from "../../components/NFT/Solana/Mint";
import { SolanaDevWalletConnection } from "../../crypto/SolanaWalletConnection";
import { Layer } from "baseui/layer";
import Header from "../../components/layouts/Header";
import Sidebar from "../../components/layouts/Sidebar";
import TopNav from "../../components/layouts/TopNav";
import Metatags from "../../components/Metatags";

const SolanaNFTmintPage = ({
  nftProjectId,
}) => {
  // const meta_title = `Solana NFT mint - ${COMPANY_NAME}`;
  const meta_title = `Mint Solana NFTs - ${COMPANY_NAME}`;
  const meta_description = `You can mint Solana NFTs from ${COMPANY_NAME} here`;

  return (
    <>
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

          {/* TODO */}
          {/* Use mainnet-beta at the production */}
          <SolanaDevWalletConnection solanaNetwork="dev" >
            <Mint
              nftProjectId={nftProjectId}
            />
          </SolanaDevWalletConnection>

        </LayoutContainer>
      </Layer>  
    </>
  );
};

// http://localhost:3000/nft/mint?&nftProjectId=a50f2348-0597-4ce6-a8d7-a03a9ff628f5
export async function getServerSideProps({
  query
}) {
  const {
    nftProjectId,
  } = query;

  return {
    props: {
      nftProjectId: nftProjectId || null,
    }
  };
}

export default SolanaNFTmintPage;
