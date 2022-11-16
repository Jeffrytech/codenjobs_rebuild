import React, { useMemo } from "react";

// Solana Wallet
import dynamic from "next/dynamic";
import { ConnectionProvider } from "@solana/wallet-adapter-react";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { SOLANA_NETWORK } from "../config/environment";

import('@solana/wallet-adapter-react-ui/styles.css' as any);

// const network = process.env.REACT_APP_SOLANA_NETWORK as WalletAdapterNetwork;
// const SOLANA_NETWORK = WalletAdapterNetwork.Mainnet;
// const network = SOLANA_NETWORK;

export const clickSolanaWalletButton = () => {
  const solanaWalletButton = document.getElementsByClassName("wallet-adapter-button ")[0];
  // @ts-ignore
  solanaWalletButton.click();
};

const SolanaWalletProvider = dynamic(
  () => import("../contexts/SolanaWalletProvider"),
  {
    ssr: false,
  }
);

export function SolanaDevWalletConnection({ children, solanaNetwork = "dev" }) {
  let endpoint;
  if (solanaNetwork === "main") {
    endpoint = useMemo(() => clusterApiUrl(WalletAdapterNetwork.Mainnet), []);
  } else if (solanaNetwork === "test") {
    endpoint = useMemo(() => clusterApiUrl(WalletAdapterNetwork.Testnet), []);
  } else if (solanaNetwork === "dev") {
    endpoint = useMemo(() => clusterApiUrl(WalletAdapterNetwork.Devnet), []);
    // endpoint = useMemo(() => "https://metaplex.devnet.rpcpool.com/", []);
  } else if (solanaNetwork === "local") {
    endpoint = "http://localhost:8899"; // Is this part valid?
  }

  // alert(SOLANA_NETWORK);
  // alert(endpoint);

  return (
    <ConnectionProvider endpoint={endpoint} >
      <SolanaWalletProvider>
        {children}
      </SolanaWalletProvider>
    </ConnectionProvider>
  );
}

export default function SolanaWalletConnection({ children, solanaNetwork = "" }) {
  let endpoint;
  if (SOLANA_NETWORK === "main") {
    endpoint = useMemo(() => clusterApiUrl(WalletAdapterNetwork.Mainnet), []);
  } else if (SOLANA_NETWORK === "test") {
    endpoint = useMemo(() => clusterApiUrl(WalletAdapterNetwork.Testnet), []);
  } else if (SOLANA_NETWORK === "dev") {
    endpoint = useMemo(() => clusterApiUrl(WalletAdapterNetwork.Devnet), []);
  } else if (SOLANA_NETWORK === "local") {
    endpoint = "http://localhost:8899"; // Is this part valid?
  }

  // alert(SOLANA_NETWORK);
  // alert(endpoint);
  
  return (
    <ConnectionProvider endpoint={endpoint} >
      <SolanaWalletProvider>
        {children}
      </SolanaWalletProvider>
    </ConnectionProvider>
  );
}