import React, { useEffect, useState } from "react";
// Refer to this later https://github.com/metaplex-foundation/js-examples/tree/main/paginate-nfts
import { Metaplex } from "@metaplex-foundation/js"; 
import { Connection, clusterApiUrl, PublicKey } from "@solana/web3.js";


import axios from "axios";

import { Tooltip } from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";

import {
  ProfileImageDeleteButton,
  SettingsContentDetail,
  SettingsContentDetailLabel,
  SettingsContentDetailText,
  SettingsContentErrorWrapper,
  SettingsContentImageDetailWrapper,
  SettingsContentImageHeader,
} from "../../../SettingsContentCSS";

import { 
  // MainNFTPreviewEditButton,
  NFTListContainer,
  NFTListHeader,
  // NFTLabel,
  NFT,
  NFTImage,
  NFTDetails,
  NFTName,
  NFTProject,
  NFTLink,

} from "./NFTListCSS";
import { MainNFTPreviewEditButton, MainNFTPreviewImage } from "../MainNFTCSS";
// import BlackPreview from "../../../../../BlackPreivew";
import useNFTListForm from "./useNFTListForm";

import { findUserMainNFTByUsername } from "../../../../../../api/mainNFT";
import SnackbarNotification from "./SnackbarNotification";
import SolanaImage from "../../../../../../crypto/SolanaImage";
import { shortenAddress } from "../../../../../../crypto/utils";
import { solana } from "../../../../../../design/colors";
import ExternalLink from "../../../../../ExternalLink";
import { SOLSCAN } from "../../../../../../config/environment";
import MainNFTForm from "./MainNFTForm";
// import { scrollToTop } from "../../../../../../browser/scroll";

const NFTList = ({
  publicKey: solanaWalletPublicKey,
  user,
}) => {
  const connection = new Connection(clusterApiUrl("mainnet-beta"));
  const metaplex = new Metaplex(connection); 

  const [userSolanaNftList, setUserSolanaNftList] = useState(null);
  // const [blockchainType, setBlockchainType] = useState(null);

  const [mainNFT, setMainNFT] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const {
    handleSubmit,

    handleChange,
    handleBlur,

    values,
    errors,
    touched,

    setFieldValue,
    // // setFieldTouched,
    // setValues,

    setFieldError,

    isSubmitting,
    submitForm,
  } = useNFTListForm(
    solanaWalletPublicKey,
    setMainNFT, mainNFT,
    setSnackbarOpen,
  );

  const findSolanaNftList = async () => {

    try {

      const userSolanaNfts = await metaplex.nfts().findAllByOwner(solanaWalletPublicKey).run();
      
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

        // TODO
        // Use sort with this?
        // userSolanaNfts.sort((a, b) => {
        //   const aId = a.name.split("#")[1];
        //   const bId = b.name.split("#")[1];

        //   // alert(aId);
        //   // alert(bId)

        //   // alert("new Number(aId) > new Number(bId)");
        //   // alert(new Number(aId) > new Number(bId));

        //   if (new Number(aId) > new Number(bId)) {
        //     return 1;
        //   }
        //   if (new Number(aId) < new Number(bId)) {
        //     return -1;
        //   }
        //   return 0;
        // })

        setUserSolanaNftList(userSolanaNfts);
        // console.log("userSolanaNfts");
        // console.log(userSolanaNfts);
      }

    } catch (error) {
      console.log("metaplex.nfts().findAllByOwner(solanaWalletPublicKey).run() error");
      console.error(error);
    }
    
  };

  useEffect(() => {
    if (solanaWalletPublicKey !== null) {
      findSolanaNftList();
    }
  }, [solanaWalletPublicKey]);

  // const { publicKey } = useSolanaWallet();
  
  // Should use it with the database later
  // This should be from the database with useEffect
  // const [mainNFT, setMainNFT] = useState(null);\
  useEffect(() => {
    findUserMainNFTByUsername(user.username).then(({ data }) => {
      // console.log("data");
      // console.log(data);
      if (data !== null) {
        setFieldValue("solanaMainNFTPublicKey", data.public_key);
        setMainNFT(data.link);
        // Use this later if you include ETH/BNB later?
        // and also send to https://solscan.io/token/${data.public_key}
        // setBlockchainType(data.blockchain_type);
      }
    }).catch(error => {
      console.log("error");
      console.log(error);
    });
  }, []);

  let totalUserNFTs;
  if (userSolanaNftList === null) {
    totalUserNFTs = `You don't have any NFT`;
  } else if (userSolanaNftList.length === 1) {
    totalUserNFTs = `You have 1 NFT`;
  } else {
    totalUserNFTs = `You have ${userSolanaNftList.length} NFTs`;
  }

  return (
    <>
      <MainNFTForm 
        publicKey={solanaWalletPublicKey}
        user={user}
        mainNFT={mainNFT}
        setMainNFT={setMainNFT}
      />
      <form
        onSubmit={handleSubmit}
      >
        <NFTListHeader>
          Your Solana NFT List
        </NFTListHeader>
        <SettingsContentImageDetailWrapper>
          <SettingsContentDetail>
            <SettingsContentDetailLabel>
              {solanaWalletPublicKey === null ? "Your NFTs will be shown here" : totalUserNFTs}
            </SettingsContentDetailLabel>
            <SettingsContentDetailText>
              {solanaWalletPublicKey === null ? "Connect a Solana wallet first" : "You can select one of your NFTs as your main NFT"}
            </SettingsContentDetailText>
          </SettingsContentDetail>
        </SettingsContentImageDetailWrapper>

        <NFTListContainer>
          {userSolanaNftList?.map((nft) => {
            // console.log("nft");
            // console.log(nft);
            // alert(nft.data.image)

            const nftLink = nft.mintAddress?.toString();

            if (nftLink) {
              return (
                <NFT
                  key={nftLink}
                >
                  {/* <MainNFTPreviewImage src={nft.data.image} /> */}
                  <Tooltip title="Save it as your main NFT" arrow >
                    <NFTImage
                      src={nft.data.image}
                      alt={nft.data.image}
                      onClick={async () => {
                        setFieldValue("solanaMainNFTPublicKey", nftLink);
                        setFieldValue("image", nft.data.image);

                        // Find a wat to fix this instead of this code?
                        setTimeout(async () => {
                          await submitForm();
                        }, 0);
                        // scrollToTop();
                      }}
                    />
                  </Tooltip>

                  <NFTDetails>
                    <NFTName>{nft.name}</NFTName>
                    <NFTProject>{nft.symbol}</NFTProject>
                    <ExternalLink
                      href={`${SOLSCAN}/token/${nftLink}`}
                    >
                      <NFTLink

                        title={"See the details of this NFT"}
                      >
                        <SolanaImage width="0.85rem" height="0.85rem" />
                        <span style={{
                          marginLeft: "0.25rem",
                        }} >
                          Solana
                          {/* {shortenAddress(nft.mintAddress.toString())} */}
                        </span>
                      </NFTLink>
                    </ExternalLink>
                  </NFTDetails>


                </NFT>
              );
            } else {
              return null;
            }


          })}
        </NFTListContainer>

        <SnackbarNotification
          snackbarOpen={snackbarOpen}
          setSnackbarOpen={setSnackbarOpen}
        />
      </form>
    </>
      

   
  );
};

export default NFTList;