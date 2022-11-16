import React, { createContext, useState, useContext } from "react";
// import {toast} from 'react-toastify';

import { Contract, ethers } from "ethers";
import Web3Modal from "web3modal";

// import Toastify from "../components/Toastify";
// import { ethContracts } from "../crypto/eth/config";
// import NFTTEST from "../crypto/eth/abi/NFTTEST.json";

const MetamaskWalletContext = createContext({});

interface Props {
  children: React.ReactNode;
}

export const MetamaskWalletProvider: React.FC<Props> = ({ children }) => {
  const [metamaskWallet, setMetamaskWallet] = useState(null);

  const connectMetamaskWallet = async () => {
    try {
      const providerOptions = {
        /* See Provider Options Section */
      };

      const web3Modal = new Web3Modal({
        providerOptions, // required
      });

      const instance = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(instance);
            
      const signer = provider.getSigner();

      const account = await signer.getAddress();
      const balance = await signer.getBalance();

      setMetamaskWallet({
        // @ts-ignore
        provider,
        signer,

        account,
        balance,

        blockchainNetworkId: provider._network.chainId,
        blockchainName: provider._network.name,
      });
    } catch (error) {
      console.log("WalletConnectionModal error");
      console.log(error);
    }
  };

  const disconnectMetamaskWallet = () => {
    setMetamaskWallet(null);
  };

  return (
    <MetamaskWalletContext.Provider value={{
      metamaskWallet,
      setMetamaskWallet,

      connectMetamaskWallet,
      disconnectMetamaskWallet,
    }}>
      {children}
    </MetamaskWalletContext.Provider>
  );
};

export const useMetamaskWallet = () => useContext(MetamaskWalletContext);