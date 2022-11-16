import React, { useEffect } from "react";

import Head from "next/head";

import Layout from "../../components/layouts";

import {
  COMPANY_LOGO,
  COMPANY_NAME,
} from "../../config/environment";

import SolanaWallet from "../../components/Solana/SolanaWallet";
import { SolanaDevWalletConnection } from "../../crypto/SolanaWalletConnection";
import Metatags from "../../components/Metatags";

const SolanaWalletPage = ({
  mint,
}) => {
  const meta_title = `Solana Wallet - ${COMPANY_NAME}`;
  const meta_description = `You can see your Solana blockchain wallet details here`;

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

      <Layout>
        {/* Use this to see devnet NFTs wallet */}
        <SolanaDevWalletConnection solanaNetwork="dev" >
          <SolanaWallet 
            mint={mint}
          />
        </SolanaDevWalletConnection>

        {/* Use this for the production */}
        {/* <SolanaWallet
          mint={mint}
        /> */}
      </Layout>
    </>
  );
};

export async function getServerSideProps({
  query
}) {
  const {
    mint,
  } = query;

  return {
    props: {
      mint: mint || null,
    }
  };
}

export default SolanaWalletPage;
