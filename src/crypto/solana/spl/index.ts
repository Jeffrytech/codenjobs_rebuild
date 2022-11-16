// const { PublicKey, Connection, clusterApiUrl } = require("@solana/web3.js");

import anchor from "@project-serum/anchor";
import { PublicKey, Keypair, Transaction, SystemProgram } from "@solana/web3.js";
import axios from "axios";

import {
  // Token, 
  TOKEN_PROGRAM_ID,
  // MintLayout, 
  AccountLayout,
  // Token,
  getMinimumBalanceForRentExemptAccount,
  createInitializeAccountInstruction,
  // createInitializeMintInstruction,
  // createInitializeAccountInstruction,
  // createMintToInstruction,
} from "@solana/spl-token";

import { 
  // CODENJOBS_OWNER_SOLANA_WALLET, 
  CODE_SOLANA_TOKEN, SOLANA_NETWORK, 
  // REACT_ENV 
} from "../../../config/environment";


const findCodeTokenBalance = async (solanaWalletPublicKey) => {
  // $curl https://api.devnet.solana.com -X POST -H "Content-Type: application/json" -d '
  // {
  //     "jsonrpc": "2.0",
  //     "id": 1,
  //     "method": "getTokenAccountsByOwner",
  //     "params": [
  //     "G7hzYwm48yQg4BuH5AYtq6rrAMAGKZGpAv5wGYuPocvi",
  //     {
  //         "mint": "Eza7pY7mHmCTTQVUjeiq4JZyubVe2ei7ArHr8egfVwmJ"
  //     },
  //     {
  //         "encoding": "jsonParsed"
  //     }
  //     ]
  // }
  // '

  // alert(process.env.NEXT_PUBLIC_REACT_ENV); // "dev"
  // https://docs.solana.com/developing/clients/jsonrpc-api#example-50
  // const solanaConnection = 'https://api.mainnet-beta.solana.com' // prod
  // Don't use this because we can't control this
  // const solanaConnection = NODE_ENV === "development" ? 'https://api.devnet.solana.com' : ""

  let solanaConnection;
  if (SOLANA_NETWORK === "main") {
    solanaConnection = 'https://api.mainnet-beta.solana.com';
  } else if (SOLANA_NETWORK === "test") {
    // endpoint = useMemo(() => clusterApiUrl(WalletAdapterNetwork.Testnet), []);
  } else if (SOLANA_NETWORK === "dev") {
    solanaConnection = 'https://api.devnet.solana.com';
  } else if (SOLANA_NETWORK === "local") {
    solanaConnection = "http://localhost:8899"; // Is this part valid?
  }

  // solanaConnection = 'https://api.mainnet-beta.solana.com';
  // alert(solanaConnection);
    
  const payload = {
    jsonrpc: '2.0',
    id: 1,
    method: 'getTokenAccountsByOwner',
    "params": [
      // Type conversion
      new String(solanaWalletPublicKey),
      // "G7hzYwm48yQg4BuH5AYtq6rrAMAGKZGpAv5wGYuPocvi",
      {
        "mint": CODE_SOLANA_TOKEN,
        // "mint": "Eza7pY7mHmCTTQVUjeiq4JZyubVe2ei7ArHr8egfVwmJ"
      },
      {
        "encoding": "jsonParsed"
      }
    ]
  };

  // @ts-ignore
  const { data } = await axios.post(solanaConnection, payload);
  // console.log("data");
  // console.log(data);

  // @ts-ignore
  if (data?.result.value.length === 0) {
    return 0; // Own nothing
  } else {
    // @ts-ignore
    const balances = data?.result?.value.map(wallet => {
      return wallet.account?.data?.parsed?.info?.tokenAmount?.uiAmount;
    });
    // console.log("balances");
    // console.log(balances);

    // Remove balances used for job posts and others?

    const totalBalance = balances.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
    return totalBalance;
  }
};

const findSPLTokenBalance = async (solanaNetwork, solanaWalletPublicKey, mintPublicKey) => {

  const payload = {
    jsonrpc: '2.0',
    id: 1,
    method: 'getTokenAccountsByOwner',
    "params": [
      // Type conversion
      new String(solanaWalletPublicKey),
      // "G7hzYwm48yQg4BuH5AYtq6rrAMAGKZGpAv5wGYuPocvi",
      {
        "mint": mintPublicKey
        // "mint": "Eza7pY7mHmCTTQVUjeiq4JZyubVe2ei7ArHr8egfVwmJ"
      },
      {
        "encoding": "jsonParsed"
      }
    ]
  };

  // @ts-ignore
  const { data } = await axios.post(solanaNetwork, payload);
  // console.log("data");
  // console.log(data);

  // @ts-ignore
  if (data?.result.value.length === 0) {
    return 0; // Own nothing
  } else {
    // @ts-ignore
    const balances = data?.result?.value.map(wallet => {
      return wallet.account?.data?.parsed?.info?.tokenAmount?.uiAmount;
    });
    // console.log("balances");
    // console.log(balances);

    // Remove balances used for job posts and others?

    const totalBalance = balances.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
    return totalBalance;
  }
};

// Organize and rename it if this works
const createSplTokenAccount = async (program, mintPublicKey) => {
  const sender_token = Keypair.generate();
  
  // Need @solana/buffer-layout if this part shows error
  // https://github.com/solana-labs/solana-program-library/issues/2683
  let create_sender_token_tx = new Transaction().add(
    // create token account
    SystemProgram.createAccount({
      fromPubkey: program.provider.wallet.publicKey,
      newAccountPubkey: sender_token.publicKey,
      space: AccountLayout.span,
      // TODO
      // Find where it is
      // lamports: await getMinimumBalanceForRentExemptAccount(program.provider.connection),
      lamports: await getMinimumBalanceForRentExemptAccount(program.provider.connection),
      // lamports: await Token.getMinBalanceRentForExemptAccount(program.provider.connection),
      programId: TOKEN_PROGRAM_ID,
    }),
    // // init mint account
    // TODO
    // Find where it is
    createInitializeAccountInstruction(
    // Token.createInitAccountInstruction(
      sender_token.publicKey, // token account
      mintPublicKey, // mint
      program.provider.wallet.publicKey, // owner of token account
      TOKEN_PROGRAM_ID, // always TOKEN_PROGRAM_ID
    )
  );

  // create_sender_token_tx.feePayer = program.provider.wallet.publicKey;
  // let blockhashObj = await program.provider.connection.getRecentBlockhash();
  // console.log("blockhashObj", blockhashObj); // blockHash, feeCalculator;
  // // create_sender_token_tx.recentBlockhash = await blockhashObj.blockhash;
  // create_sender_token_tx.recentBlockhash = blockhashObj.blockhash;

  // if (create_sender_token_tx) {
  //   console.log("create_sender_token_tx worked successfully");
  // }

  // let signed = await program.provider.signTransaction(create_sender_token_tx);
  // let signature = await program.connection.sendRawTransaction(signed.serialize());

  // const confirmed = await program.connection.confirmTransaction(signature);
  // console.log("Confirmed:", confirmed);

  // console.log("SIGNATURE: ", signature);

  try {
    // Server or CLI use this?
    // Or version update?
    // https://github.com/project-serum/anchor/blob/3ceba021/ts/src/provider.ts
    await program.provider.send(create_sender_token_tx, [sender_token]);

    return sender_token;
  } catch (error) {
    console.log("Solana provider send create_sender_token_tx error");
    console.error(error);
  }

};

// This doesn't work for the browser?
// // Refer to the frontend code?
// const createSplTokenAccount = async (program, mintPublicKey) => {
//   const sender_token = Keypair.generate();

//   let create_sender_token_tx = new Transaction().add(
//     // create token account
//     SystemProgram.createAccount({
//       fromPubkey: program.provider.wallet.publicKey,
//       newAccountPubkey: sender_token.publicKey,
//       space: AccountLayout.span,
//       lamports: await getMinimumBalanceForRentExemptAccount(program.provider.connection),
//       programId: TOKEN_PROGRAM_ID,
//     }),
//     // init mint account
//     createInitializeAccountInstruction(
//       sender_token.publicKey, // token account
//       mintPublicKey, // mint
//       program.provider.wallet.publicKey, // owner of token account
//       TOKEN_PROGRAM_ID, // always TOKEN_PROGRAM_ID
//     )
//   );

//   try {
//     // Server or CLI use this?
//     // Or version update?
//     // https://github.com/project-serum/anchor/blob/3ceba021/ts/src/provider.ts
//     await program.provider.send(create_sender_token_tx, [sender_token]);

//     // Web?
//     // await program.provider.wallet.sendTransaction(create_sender_token_tx, [sender_token]);
//     return sender_token;
//   } catch (error) {
//     console.log("Solana provider send create_sender_token_tx error");
//     console.error(error);
//   }
// }

const CODE_SOLANA_TOKEN_PUBLIC_KEY = new PublicKey(CODE_SOLANA_TOKEN);

// const createSplTokenAccount = async (program, mint) => {
//   const sender_token = anchor.web3.Keypair.generate();
//   let create_sender_token_tx = new Transaction().add(
//     // create token account
//     SystemProgram.createAccount({
//       fromPubkey: program.provider.wallet.publicKey,
//       newAccountPubkey: sender_token.publicKey,
//       space: AccountLayout.span,
//       lamports: await getMinimumBalanceForRentExemptAccount(program.provider.connection),
//       programId: TOKEN_PROGRAM_ID,
//     }),
//     // init mint account
//     createInitializeAccountInstruction(
//       sender_token.publicKey, // token account
//       mint.publicKey, // mint
//       program.provider.wallet.publicKey, // owner of token account
//       TOKEN_PROGRAM_ID, // always TOKEN_PROGRAM_ID
//     )
//   );

//   await program.provider.send(create_sender_token_tx, [sender_token]);

//   return sender_token;
// }

export {
  findCodeTokenBalance,
  findSPLTokenBalance,

  createSplTokenAccount,
  CODE_SOLANA_TOKEN_PUBLIC_KEY,
};