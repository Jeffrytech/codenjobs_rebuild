import * as web3 from "@solana/web3.js";
import { PublicKey } from "@solana/web3.js";

import * as metadata from "./actions/metadata";

// See I can use this?
// import { CachedImageContent } from "./components/ArtContent";

// Test with this NFTs at mainnet
// https://solscan.io/token/9yBa4p8EXwnV1yC9ZBNuMsPBqWJzjER7sDgVVtS9ZQbB
// 9yBa4p8EXwnV1yC9ZBNuMsPBqWJzjER7sDgVVtS9ZQbB
// https://cdn.piggygang.com/imgs/fe3c71623274a9402814789db0809372.jpg

import axios from "axios";

// This is the program deployed at mainnet-beta
const TOKEN_METADATA_PROGRAM_ID = new web3.PublicKey(
  "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"
);

const connection = new web3.Connection(
  web3.clusterApiUrl("mainnet-beta"),
  // clusterApiUrl("devnet"),
  "confirmed"
);

async function getMetadataAccount(
  // tokenMint: web3.PublicKey
  nft: PublicKey
): Promise<PublicKey> {
  // [web3.PublicKey, Number]
  const [address, number] = await PublicKey.findProgramAddress(
    [
      Buffer.from("metadata"),
      TOKEN_METADATA_PROGRAM_ID.toBuffer(),
      nft.toBuffer(),
    ],
    TOKEN_METADATA_PROGRAM_ID
  );

  return address;
}

// Test some methods here.
// https://solana-labs.github.io/solana-web3.js/classes/Connection.htm
const findNFTImageFromPublicKey = async (solanaMainNFTPublicKey: string, solanaWalletPublicKey: string) => {
  // alert(publicKey);

  // Owner is CkdySAT5eCpToSn4bhPVdk9hYMR13GsVUZtaGfcB8kpK
  // How to verify that?
  const NFT = new web3.PublicKey(
    // mainnet-beta
    // "9yBa4p8EXwnV1yC9ZBNuMsPBqWJzjER7sDgVVtS9ZQbB",
    solanaMainNFTPublicKey
  );

  const nftMetadataAccount = await getMetadataAccount(NFT);
  // console.log("NFT Metadata Account: ", nftMetadataAccount);

  // Or get what owner holds and filter
  // getTokenAccountsByOwner

  // https://solana-labs.github.io/solana-web3.js/classes/Connection.html#getTokenAccountsByOwner
  // https://solana-labs.github.io/solana-web3.js/modules.html#TokenAccountsFilter
  const owner = new web3.PublicKey(
    solanaWalletPublicKey, // Real owner?
  );

  // This doesn't work
  // const tokenListHeldByOwner = await connection.getTokenAccountsByOwner(owner, { programId: TOKEN_METADATA_PROGRAM_ID } );

  // Show how many NFTs a user hold from metaplex from mainnet
  // updateAuthoritiy = "Pigv3gFWLWJL8QwrFBkdZLe1RYzNJTSJPGEUNVimJjh"; // You can verify the NFTs belong to your project with this
  // tokenProgramId = "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA";
  // Show how many token a wallet holds with this.

  // You can compare the list here.
  // https://explorer.solana.com/address/CkdySAT5eCpToSn4bhPVdk9hYMR13GsVUZtaGfcB8kpK/tokens
  // Use this to show NFTs hold by wallet later
  // const tokenListHeldByOwner = await connection.getTokenAccountsByOwner(owner, { programId: new web3.PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA") });
  // console.log("tokenListHeldByOwner");
  // console.log(tokenListHeldByOwner);

  // Show the owner holds the NFT or not
  // alert("isTokenHeldByOwner?");
  let isTokenHeldByUserWallet = await connection.getTokenAccountsByOwner(owner, { mint: NFT });
  // console.log("isTokenHeldByOwner");
  // console.log(isTokenHeldByOwner.value.length === 1);
  // console.log(istokenHeldByOwner);
  // I can test the owenrship with tokenHeldByOwner.value.length?

  // const tokenLargestAccounts = await connection.getTokenLargestAccounts(nftMetadataAccount);
  // console.log("tokenLargestAccounts");
  // console.log(tokenLargestAccounts);

  const accountInformation = await connection.getAccountInfo(nftMetadataAccount);
  // console.log("accountInformation");
  // console.log(accountInformation);

  // const editionMarker = metadata.decodeEditionMarker(accountInformation!.data);
  // console.log("editionMarker");
  // console.log(editionMarker);

  const meta = metadata.decodeMetadata(accountInformation!.data);
  // console.log("meta");
  // console.log(meta);

  // meta.updateAuthority;
  // You can verify the NFTs belong to a specifi project with
  // updateAuthority: 'Pigv3gFWLWJL8QwrFBkdZLe1RYzNJTSJPGEUNVimJjh'

  const payload = meta.data.uri;
  // console.log(`json is at ${payload}`);

  const response: any = await axios.get(payload);
  // console.log(`image is ${response.data.image}`)
  // Use this to see it belong to the NFTs list for allowed later?
  // const updateAuthoritiy = meta.updateAuthority;

  return { 
    isTokenHeldByUserWallet: isTokenHeldByUserWallet.value.length === 0 ? false : true,
    image: response.data.image,
    // allowed:
  };
};

export {
  findNFTImageFromPublicKey,
};

// export function App() {
//     const [path, setPath] = useState("");
//     const [uri, setUri] = useState("");
//     // const uri = "https://www.arweave.net/4M1LVsC5hOvbnz5c2O-GQy4aRzxtI3V2sa_3n9lWnDs?ext=png";

//     return <div
//         style={{
//             textAlign: "center",
//             display: "flex",
//             flexFlow: "column",
//             alignItems: "center",
//         }}
//     >
//         {/* <button id="metadata" type="button">Get metadata</button> */}
//         <div>
//             <input style={{
//                 marginRight: "0.5rem",
//             }} type="text" value={path} onChange={(e) => {
//                 e.preventDefault();

//                 setPath(e.target.value);
//             }} />
//             <button
//                 id="metadata" type="button"
//                 onClick={async () => {
//                     const image = await findNFTImageFromPublicKey(path);
//                     alert(image);
//                     setUri(image);
//                 }}
//             >
//                 Solana NFTs image
//             </button>
//         </div>

//         {/* <CachedImageContent /> */}
//         {/* <CachedImageContent
//             uri={uri}
//         // uri={"https://www.arweave.net/4M1LVsC5hOvbnz5c2O-GQy4aRzxtI3V2sa_3n9lWnDs?ext=png"}
//         // className={className}
//         // preview={false}
//         // style={style}
//         /> */}
//     </div >;
// }