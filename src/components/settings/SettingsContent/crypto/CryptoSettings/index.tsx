import React, { useEffect, useState } from "react";

import { updateProfileImage, deleteProfileImage } from "../../../../../api/privateProfile";
import { useAuth } from "../../../../../contexts/auth";
import { useWallet as useSolanaWallet } from "@solana/wallet-adapter-react";
// import MainNFTForm from "./MainNFTForm";
import NFTList from "./NFTList";
import SolanaWallet from "./SolanaWallet";
// import MainNFTForm from "./MainNFTForm";

// import env from "../../../../config/environment";
// const API = `${env.API}`;

// To update image without any problem
// https://stackoverflow.com/questions/42192346/how-to-reset-reactjs-file-input
const CryptoSettings = () => {
  const {
    // @ts-ignore
    user,
    // @ts-ignore
    setUser,
  } = useAuth();

  const { publicKey } = useSolanaWallet();

  // useEffect(() => {
  //   // Find the better solution than this.
  //   if (publicKey === null) {
  //     const solanaWalletButton = document.getElementsByClassName("wallet-adapter-button ")[0];
  //     // alert("Connect your Solana wallet to use this.")
  //     // @ts-ignore
  //     solanaWalletButton.click();
  //   }
  // }, []);

  return (
    <>
      <SolanaWallet
        publicKey={publicKey}
        user={user}
        setUser={setUser}
      />
      {/* <MainNFTForm 
        publicKey={publicKey}
        user={user}
        mainNFT={mainNFT}
        setMainNFT={setMainNFT}
      /> */}
      <NFTList 
        publicKey={publicKey}
        user={user}
        // mainNFT={mainNFT}
        // setMainNFT={setMainNFT}

        // snackbarOpen={snackbarOpen} 
        // setSnackbarOpen={setSnackbarOpen}
      />
    </>
  );
};

export default CryptoSettings;