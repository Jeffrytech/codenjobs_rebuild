import React, { useEffect, useState } from "react";
import * as anchor from "@project-serum/anchor";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";

import { 
  SolanaNFTContainer, 
  SolanaNFTCover, 
  SolanaNFTCoverLink, 
  SolanaNFTDescription, 
  SolanaNFTDetails, 
  // SolanaNFTExternalLink, 
  SolanaNFTLogo, 
  SolanaNFTName, 
  SolanaNFTStart, 
  SolanaNFTStartText
} from "./SolanaNFTCSS";

import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import MintCandyMachineNFT from "./CandyMachine/MintCandyMachineNFT";
import { DEFAULT_TIMEOUT } from "./CandyMachine/connection";
import { unixTimestampToJavaScriptDate } from "../../../time";
import { getCandyMachineState } from "./CandyMachine/candyMachine";
import { findNftProjectById } from "../../../api/nftProject";
import { devUserProvider, userProvider } from "../../../crypto/utils";

// const getCandyMachineId = (): anchor.web3.PublicKey | undefined => {
//   try {
//     return new anchor.web3.PublicKey(process.env.NEXT_PUBLIC_REACT_APP_CANDY_MACHINE_ID!);
//   } catch (e) {
//     console.log("Failed to construct CandyMachineId", e);
//     return undefined;
//   }
// };

let error: string | undefined = undefined;

if (process.env.NEXT_PUBLIC_REACT_APP_SOLANA_NETWORK === undefined) {
  error =
    "Your NEXT_PUBLIC_REACT_APP_SOLANA_NETWORK value in the .env file doesn't look right! The options are devnet and mainnet-beta!";
} else if (process.env.NEXT_PUBLIC_REACT_APP_SOLANA_RPC_HOST === undefined) {
  error =
    "Your NEXT_PUBLIC_REACT_APP_SOLANA_RPC_HOST value in the .env file doesn't look right! Make sure you enter it in as a plain-text url (i.e., https://metaplex.devnet.rpcpool.com/)";
}

const network = (process.env.NEXT_PUBLIC_REACT_APP_SOLANA_NETWORK ??
  "devnet") as WalletAdapterNetwork;
const rpcHost =
  process.env.REACT_APP_SOLANA_RPC_HOST ?? anchor.web3.clusterApiUrl("devnet");
// const connection = new anchor.web3.Connection(rpcHost);

const Mint = ({
  nftProjectId,
}) => {
  const { connection } = useConnection();
  const { wallet } = useWallet();
  // const provider = userProvider(wallet);
  const provider = devUserProvider(wallet);
  
  const [currentNftProject, setCurrentNftProject] = useState(null);

  const findNftProject = async (nftProjectId: string) => {
    try {
      // const { data, error } = await findNftProjectById(CURRENT_NFT_PROJECT_ID);
      const { data, error } = await findNftProjectById(nftProjectId);

      if (error) {
        console.log("findNftProjectById error");
        console.error(error);

        return;
      }

      // console.log("data");
      // console.log(data);

      if (data) {
        if (data.blockchain === "Solana") {
          const candyMachineId = data.program_id;
          // console.log("candyMachineId");
          // console.log(candyMachineId);

          // alert(candyMachineId);

          const candyMachineState = await getCandyMachineState(provider, candyMachineId, connection);

          // console.log("candyMachineState");
          // console.log(candyMachineState);

          setCurrentNftProject({
            ...data,
            candyMachineId: new anchor.web3.PublicKey(candyMachineId),
            candyMachineState: candyMachineState.state,
          });
        }
        
      } else {
        console.log("Something went wrong");
      }
    } catch (error) {
      console.log("findNftProject catch error");
      console.error(error);
    }
  };

  useEffect(() => {
    findNftProject(nftProjectId);
  }, []);

  if (currentNftProject === null) {
    // TODO
    // Show skeletons or spinner instead?
    return null;
  }

  const {
    name,
    description,
    logo,
    cover,

    // program_id,
    blockchain,

    website,

    gif,

    candyMachineId,
    candyMachineState
  } = currentNftProject;

  // console.log("candyMachineState");
  // console.log(candyMachineState);

  return (
    <SolanaNFTContainer>
      <SolanaNFTDetails>
        <SolanaNFTCoverLink
          href={website}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <SolanaNFTCover 
              src={cover}
            />

            <SolanaNFTStart>
              {/* TODO use start date from state */}
              {/* Oct 10 2022, 18:00 UTC - Full details here */}
              {unixTimestampToJavaScriptDate(candyMachineState.goLiveDate).toLocaleString()} <SolanaNFTStartText>- Full details here</SolanaNFTStartText>
            </SolanaNFTStart>
          </div>
        </SolanaNFTCoverLink>

        <div 
          style={{
            padding: "0.5rem",
          }}
        >
          <SolanaNFTName>
            <SolanaNFTLogo src={logo} alt={name} /> {name}
          </SolanaNFTName>
          <SolanaNFTDescription>
            {description}
          </SolanaNFTDescription>
        </div>
      </SolanaNFTDetails>

      {/* TODO */}
      {/* auto connect */}

      {candyMachineId && <MintCandyMachineNFT
        candyMachineId={candyMachineId}
        // connection={connection}
        txTimeout={DEFAULT_TIMEOUT}
        rpcHost={rpcHost}
        network={network}
        error={error}

        gif={gif}
      />}

    </SolanaNFTContainer>
  );
};

export default Mint;

