import { ConfirmOptions, Connection } from "@solana/web3.js";
import {
  // Provider,
  // Use this instead of Provider
  // https://project-serum.github.io/anchor/ts/classes/AnchorProvider.html
  // AnchorProvider,

  Provider,
} from '@project-serum/anchor';
import { SOLANA_NETWORK } from "../config/environment";
import { Wallet } from "@project-serum/anchor/dist/cjs/provider";

export const shortenAddress = (address: string, chars = 4): string => {
  if (address) {
    return `${address.slice(0, chars)}...${address.slice(-chars)}`;
  } else {
    return "";
  }
};

// https://docs.solana.com/cluster/rpc-endpoints
export const userProvider = (userSolanaWallet: Wallet) => {
  let endpoint;
  if (SOLANA_NETWORK === "main") {
    endpoint = "https://api.mainnet-beta.solana.com";
  } else if (SOLANA_NETWORK === "test") {
    endpoint = "https://api.testnet.solana.com";
  } else if (SOLANA_NETWORK === "dev") {
    endpoint = "https://api.devnet.solana.com";
  } else if (SOLANA_NETWORK === "local") {
    endpoint = "http://localhost:8899";
  }
  // const network = "http://127.0.0.1:8899";
  const opts = {
    // Using Connection with default commitment: `processed`, but method requires at least `confirmed`
    // preflightCommitment: "processed"
    preflightCommitment: "confirmed",
    commitment: "confirmed",
  };

  // @ts-ignore
  const connection = new Connection(endpoint, opts.preflightCommitment);

  // @ts-ignore
  const provider = new Provider(
    // const provider = new AnchorProvider(
    // @ts-ignore
    connection, userSolanaWallet, opts.preflightCommitment,
  );

  return provider;
};

export const devUserProvider = (userSolanaWallet: Wallet, solanaNetwork = "dev") => {
  let endpoint;
  if (solanaNetwork === "main") {
    endpoint = "https://api.mainnet-beta.solana.com";
  } else if (solanaNetwork === "test") {
    endpoint = "https://api.testnet.solana.com";
  } else if (solanaNetwork === "dev") {
    endpoint = "https://api.devnet.solana.com";
  } else if (solanaNetwork === "local") {
    endpoint = "http://localhost:8899";
  }
  // const network = "http://127.0.0.1:8899";
  const opts = {
    // Using Connection with default commitment: `processed`, but method requires at least `confirmed`
    // preflightCommitment: "processed"
    preflightCommitment: "confirmed",
    commitment: "confirmed",
  };

  // @ts-ignore
  const connection = new Connection(endpoint, opts.preflightCommitment);

  // @ts-ignore
  const provider = new Provider(
    // const provider = new AnchorProvider(
    // @ts-ignore
    connection, userSolanaWallet, opts.preflightCommitment,
  );

  return provider;
};
