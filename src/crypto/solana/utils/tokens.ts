// TODO: replace this whole file with something more modern. This is all copied
//       from sollet.

import * as BufferLayout from "buffer-layout";
import { BN } from "@project-serum/anchor";
import {
  TOKEN_PROGRAM_ID,
  ASSOCIATED_TOKEN_PROGRAM_ID,
  // getAssociatedTokenAddress,
  Token,
  // Token,
  // AccountInfo as TokenAccount,
} from "@solana/spl-token";

import anchor from "@project-serum/anchor";
import { PublicKey, Connection, Keypair, Transaction, SystemProgram } from "@solana/web3.js";
import axios from "axios";

import {
// Token, 
// TOKEN_PROGRAM_ID,
// MintLayout, 
// AccountLayout,
// getMinimumBalanceForRentExemptAccount,
// createInitializeMintInstruction,
// createInitializeAccountInstruction,
// createMintToInstruction,
} from "@solana/spl-token";

import {
  // CODENJOBS_OWNER_SOLANA_WALLET, 
  CODE_SOLANA_TOKEN, SOLANA_NETWORK,
  // REACT_ENV 
} from "../../../config/environment";


// const findSplTokenBalance = async (solanaWalletPublicKey, splTokenPublicKey) => {
//   let solanaConnection;
//   if (SOLANA_NETWORK === "main") {
//     solanaConnection = 'https://api.mainnet-beta.solana.com';
//   } else if (SOLANA_NETWORK === "test") {
//     // endpoint = useMemo(() => clusterApiUrl(WalletAdapterNetwork.Testnet), []);
//   } else if (SOLANA_NETWORK === "dev") {
//     solanaConnection = 'https://api.devnet.solana.com';
//   } else if (SOLANA_NETWORK === "local") {
//     solanaConnection = "http://localhost:8899"
//   }

//   const payload = {
//     jsonrpc: '2.0',
//     id: 1,
//     method: 'getTokenAccountsByOwner',
//     "params": [
//       // Type conversion
//       new String(solanaWalletPublicKey),
//       {
//         "mint": splTokenPublicKey,
//       },
//       {
//         "encoding": "jsonParsed"
//       }
//     ]
//   }

//   // @ts-ignore
//   const { data } = await axios.post(solanaConnection, payload);
//   // console.log("data");
//   // console.log(data);

//   // @ts-ignore
//   if (data?.result.value.length === 0) {
//     return 0; // Own nothing
//   } else {
//     // @ts-ignore
//     const balances = data?.result?.value.map(wallet => {
//       return wallet.account?.data?.parsed?.info?.tokenAmount?.uiAmount;
//     })
//     // console.log("balances");
//     // console.log(balances);

//     // Remove balances used for job posts and others?

//     const totalBalance = balances.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
//     return totalBalance
//   }
// };

export async function getOwnedAssociatedTokenAccounts(
  connection: Connection,
  publicKey: PublicKey
) {
  let filters = getOwnedAccountsFilters(publicKey);

  // console.log("filters");
  // console.log(filters);

  // connection.getTokenAccountsByOwner

  let resp = await connection.getProgramAccounts(TOKEN_PROGRAM_ID, {
    commitment: connection.commitment,
    filters,
  });

  // console.log("resp");
  // console.log(resp);

  const accs = resp
    .map(({ pubkey, account: { data, executable, owner, lamports } }: any) => ({
      publicKey: new PublicKey(pubkey),
      accountInfo: {
        data,
        executable,
        owner: new PublicKey(owner),
        lamports,
      },
    }))
    .map(({ publicKey, accountInfo }: any) => {
      return { publicKey, account: parseTokenAccountData(accountInfo.data) };
    });

  // console.log("accs");
  // console.log(accs);

  let accounts = (
    await Promise.all(
      accs
        // @ts-ignore
        .map(async (ta) => {
          // const ata = await getAssociatedTokenAddress(
          const ata = await Token.getAssociatedTokenAddress(
            ASSOCIATED_TOKEN_PROGRAM_ID,
            TOKEN_PROGRAM_ID,
            ta.account.mint,
            publicKey
          );
          return [ta, ata];
        })
    )
  )
    .filter(([ta, ata]) => {
      // Eqaul and true
      // console.log(ta["publicKey"].toString());
      // console.log(ata.toString());
      // console.log(ta["publicKey"].toString() === ata.toString());

      return ta["publicKey"].toString() === ata.toString();
    });
    // .filter(([ta, ata]) => ta.publicKey.equals(ata))
    // .filter(([ta, ata]) => ta === ata)
    // .map(([ta]) => ta)

  // console.log("accounts before map");
  // console.log(accounts);

  // @ts-ignore
  accounts = accounts.map(([ta]) => ta);

  // console.log("accounts");
  // console.log(accounts);

  return accounts;
}

const ACCOUNT_LAYOUT = BufferLayout.struct([
  BufferLayout.blob(32, "mint"),
  BufferLayout.blob(32, "owner"),
  BufferLayout.nu64("amount"),
  BufferLayout.blob(93),
]);

// export function parseTokenAccountData(data: Buffer): TokenAccount {
export function parseTokenAccountData(data: Buffer): any {
  let { mint, owner, amount } = ACCOUNT_LAYOUT.decode(data);
  // console.log("amount");
  // console.log(amount);  

  return {
    mint: new PublicKey(mint),
    owner: new PublicKey(owner),
    // amount: new BN(amount),
    amount: new BN(1),
  };
}

function getOwnedAccountsFilters(publicKey: PublicKey) {
  return [
    {
      memcmp: {
        // @ts-ignore
        offset: ACCOUNT_LAYOUT.offsetOf("owner"),
        bytes: publicKey.toBase58(),
      },
    },
    {
      dataSize: ACCOUNT_LAYOUT.span,
    },
  ];
}
