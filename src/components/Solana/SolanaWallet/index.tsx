import React, { useEffect, useState } from "react";
import axios from "axios";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useRouter } from "next/router";
import { Tooltip } from "@material-ui/core";

import { PublicKey } from "@solana/web3.js";
import { Metaplex } from "@metaplex-foundation/js";

// import NFT from "./NFT";
import { 
  SolanaNFTWalletContainer, SolanaNFTWalletListContainer 
} from "./SolanaWalletCSS";

// import { findNftProjectList } from "../../../api/nftProject";
import { userProvider } from "../../../crypto/utils";
// import { getCandyMachineState } from "../../CandyMachine/candyMachine";
// import { clickSolanaWalletButton } from "../../../crypto/SolanaWallet";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
// import SolanaImage from "../../SolanaImage";
import CenteredInPage from "../../CenteredInPage";
import PrimarySpinner from "../../spinners/PrimarySpinner";

import {  
  SolanaNFT,
  SolanaNFTImage,
  SolanaNFTDetails,
  SolanaNFTName,
  SolanaNFTProject,
  SolanaNFTLink,
} from "./SolanaWalletNFTCSS";

import { SOLSCAN } from "../../../config/environment";
import ExternalLink from "../../ExternalLink";
import SolanaWalletProfile from "./SolanaWalletProfile";
import Link from "next/link";
import SolanaImage from "../../../crypto/SolanaImage";
import { clickSolanaWalletButton } from "../../../crypto/SolanaWalletConnection";

// TODO
// Read Solana NFTs from nft_projects from the server only
// http://localhost:3000/nft/wallet?&mint=ByZNdkhRyWxKxw6isKEqgQt7T4EAarMy6Qbz25JVrS8T
const Wallet = ({
  mint
}) => {
  const router = useRouter();
  
  // Edit SOLANA_NETWORK
  const { connection } = useConnection();
  const { wallet, connected, publicKey } = useWallet();
  const provider = userProvider(wallet);

  // console.log("connection");
  // console.log(connection);

  const metaplex = new Metaplex(connection);
  const [userSolanaNftList, setUserSolanaNftList] = useState(null);

  // TODO
  // include this from web/
  // const [snackbarOpen, setSnackbarOpen] = useState(false);

  const findSolanaNftList = async () => {

    try {
      let userSolanaNfts;

      // http://localhost:3000/nft/wallet?&nftProjectId=8B7rLcQamb4jsBPowEocYJU6CmZpB7MVNX7CwezEiEU6
      if (mint) {
        userSolanaNfts = [await metaplex.nfts().findByMint(new PublicKey(mint)).run()];
      } else {

        userSolanaNfts = await metaplex.nfts().findAllByOwner(wallet.adapter.publicKey).run();
      }

      // console.log("userSolanaNfts");
      // console.log(userSolanaNfts);

      if (userSolanaNfts.length === 0) {
        setUserSolanaNftList("No user solana nft list");
        return;
      }

      if (userSolanaNfts.length > 0) {

        for (let i = 0; i < userSolanaNfts.length; i++) {
          const { data } = await axios.get(userSolanaNfts[i].uri);
          userSolanaNfts[i] = {
            ...userSolanaNfts[i],
            // @ts-ignore
            data,
          };
          // console.log(data);
        }

        // console.log("userSolanaNfts");
        // console.log(userSolanaNfts);

        // setUserSolanaNftList(
        //   [
        //     ...userSolanaNfts, 
        //     userSolanaNftList[0], 
        //     userSolanaNftList[1]
        //   ]
        // );

        // if (nftProjectId) {
          
        // If there is nftProjectId, use this?
        userSolanaNfts.sort((a, b) => {
          

          // alert(aId);
          // alert(bId)

          // alert("new Number(aId) > new Number(bId)");
          // alert(new Number(aId) > new Number(bId));

          if (a.name > b.name) {
            return 2; // alphabetic order first
          } else {
            const aId = a.name.split("#")[1];
            const bId = b.name.split("#")[1];

            // If there is no # part, for example a NFT for a collection
            if (aId === undefined || bId === undefined) {
              return -2;
            } 

            // TODO
            // Need to be ordered in increasing order if it is a same collection
            // if (new Number(aId) > new Number(bId)) {
            //   return 1;
            // } else if (new Number(aId) < new Number(bId)) {
            //   return -1;
            // } else {
            //   return 0;
            // }

            return parseInt(aId) - parseInt(bId);
            // return parseInt(bId) - parseInt(aId);
          }


        });

        setUserSolanaNftList(userSolanaNfts);
        // setUserSolanaNftList(userSolanaNfts.slice(0, 1));
        // setUserSolanaNftList(userSolanaNfts.slice(0, 2));
      }

    } catch (error) {
      console.log("metaplex.nfts().findAllByOwner(solanaWalletPublicKey).run() error");
      console.error(error);
    }

  };

  useEffect(() => {
    if (connected) {
      findSolanaNftList();
    } else {
      clickSolanaWalletButton();
    }
  }, [connected, mint]);

  if (connected === false) {
    return (
      <CenteredInPage
        style={{
          marginTop: "-3.75rem",
        }}
      >
        <WalletMultiButton
          startIcon={<SolanaImage />}
        />
      </CenteredInPage>
    );
  }

  if (userSolanaNftList === null) {
    return <CenteredInPage
      style={{
        marginTop: "-3.75rem",
      }}
    >
      <PrimarySpinner />
    </CenteredInPage>;
  }

  if (userSolanaNftList === "No user solana nft list") {
    return <SolanaNFTWalletContainer id="solana-nft-wallet" >
      <SolanaWalletProfile
        solanaWalletUserPublicKey={publicKey}
        solanaConnection={connection}
        userSolanaNftList={userSolanaNftList}
      />
    </SolanaNFTWalletContainer>;
  }
    
  // const desktopListPerRow = 3;  
  const desktopListPerRow = 4;  
  const includeDesktopMoreList = userSolanaNftList.length % desktopListPerRow;

  const mobileListPerRow = 3;  
  const includeMobileMoreList = userSolanaNftList.length % mobileListPerRow;

  // alert(userSolanaNftList.length);
  // alert(userSolanaNftList.length === 1);

  return (
    <SolanaNFTWalletContainer id="solana-nft-wallet" >
      <SolanaWalletProfile
        solanaWalletUserPublicKey={publicKey}
        solanaConnection={connection}
      />
      <SolanaNFTWalletListContainer
        $includeDesktopMoreList={includeDesktopMoreList}
        $includeMobileMoreList={includeMobileMoreList}
      >
        {userSolanaNftList.map(nft => {
          // return <NFT nft={nft}/>
          const nftLink = nft.mintAddress?.toString();

          if (nftLink) {
            return (
              <SolanaNFT
                key={nftLink}
                $isOneNFT={userSolanaNftList.length === 1}
              >
                {/* <MainNFTPreviewImage src={nft.data.image} /> */}
                {/* <Tooltip title="Save it as your main NFT" arrow > */}
                <ExternalLink
                  href={nft.data.image}
                >
                  <SolanaNFTImage
                    src={nft.data.image}
                    alt={nft.data.image}
                  />
                </ExternalLink>

                {/* </Tooltip> */}

                <SolanaNFTDetails>
                  <SolanaNFTName>{nft.name}</SolanaNFTName>
                  <SolanaNFTProject>{nft.symbol}</SolanaNFTProject>
                  <ExternalLink
                    href={`${SOLSCAN}/token/${nftLink}`}
                  >
                    <SolanaNFTLink
                      title={"See the details of this NFT"}
                    >
                      <SolanaImage width="1rem" height="1rem" />
                      <span style={{
                        fontSize: "1rem",
                        marginLeft: "0.25rem",
                      }} >
                        Solana
                        {/* {shortenAddress(nft.mintAddress.toString())} */}
                      </span>
                    </SolanaNFTLink>
                  </ExternalLink>
                </SolanaNFTDetails>
              </SolanaNFT>
            );
          } else {
            return null;
          }
        })}
      </SolanaNFTWalletListContainer>

    </SolanaNFTWalletContainer>
  );

 
};

export default Wallet;