import React, { useEffect, useState } from "react";
import { useConnection, useConnection as useSolanaConnection, useWallet } from "@solana/wallet-adapter-react";

import { useWallet as useSolanaWallet } from "@solana/wallet-adapter-react";

import {
  SettingsContentDetail,
  SettingsContentDetailLabel,
  SettingsContentDetailText,
  SettingsContentImageDetailWrapper,
  SettingsContentImageHeader,
  // ProfileEditLoading,
} from "../../../SettingsContentCSS";
import { 
  SolanaWalletDetailWrapper,
  SolanaWalletHeader,
  SolanaWalletRemoveButton, 
  SolanaWalletRemoveButtonWrapper, 
  // SolanaWalletResetButton, 
  // SolanaWalletUpdateButton ,
  // BuyButton, BuyButtonWrapper, MarketButton, MarketButtonWrapper, 
} from "./SolanaWalletCSS";

// import { findUserMainNFTByUsername } from "../../../../../../api/mainNFT";
import ExternalLink from "../../../../../ExternalLink";
import SolanaImage from "../../../../../../crypto/SolanaImage";
import SolanaText from "../../../../../../crypto/SolanaLink";

import { CODE_SOLANA_TOKEN, COMPANY_LOGO_WHITE, NODE_ENV, SOLSCAN } from "../../../../../../config/environment";
import { findCodeTokenBalance } from "../../../../../../crypto/solana/spl";
import { updateUserBalance, updateUserSolanaWallet } from "../../../../../../api/privateUser";
import { shortenAddress } from "../../../../../../crypto/utils";
import { findUserSolanaWalletByUsername } from "../../../../../../api/solanaWallet";
import { deleteSolanaWallet, updateSolanaWallet, verifySolanaWallet } from "../../../../../../api/privateSolanaWallet";
import { useSolanaCodeTokenDetails } from "../../../../../../contexts/solanaCodeToken";
import { Tooltip } from "@mui/material";
import { disconnect } from "process";
// import SolscanImage from "../../../../../../crypto/SolscanImage";

// import {
//   // UpdateImageSpinnerWrapper,
//   UpdateImageSpinner
// } from "../../../../spinners/UpdateImageSpinner";

const CodeTokenBalance = ({
  publicKey: solanaWalletUserPublicKey,
  user,
  setUser,
}) => {
  // @ts-ignore
  const { solanaCodeTokenPrice } = useSolanaCodeTokenDetails();
  // alert(user.solana_wallet_user_public_key);
  // console.log("user");
  // console.log(user);
  // alert(user.solana_wallet_user_public_key);
  // https://solana-labs.github.io/wallet-adapter/

  const userSolanaWallet = useSolanaWallet();
  console.log("userSolanaWallet");
  console.log(userSolanaWallet);

  // const { connection: solanaConnection } = useConnection();
  const { publicKey: userPublicKey, connected, wallet, connecting, connect, select, disconnect } = userSolanaWallet;

  // alert(solanaWalletPublicKey);

  useEffect(() => {

    async function fetchSolanaWalletDetails() {      
      try {
        if (solanaWalletUserPublicKey === null) {
          if (user.solana_wallet_user_public_key) {
            const codeTokenBalance = await findCodeTokenBalance(user?.solana_wallet_user_public_key);

            setUser({
              ...user,
              balance: codeTokenBalance,
            });
          } else {
            return;
          }
        } else {
          // Update and fetch here


          // const { data: dbSolanaWalletUserPublicKey, error } = await findUserSolanaWalletByUsername(user?.username);
          // Should be from user /me

          if (user?.solana_wallet_user_public_key === null) {
            await verifySolanaWallet(solanaWalletUserPublicKey); // Should handle error and result later
          } else if (solanaWalletUserPublicKey !== user?.solanaWalletUserPublicKey) {
            // alert(solanaWalletUserPublicKey);

            await updateSolanaWallet(solanaWalletUserPublicKey); // Should handle error and result later
          }

          const codeTokenBalance = await findCodeTokenBalance(solanaWalletUserPublicKey);

          if (user.balance === codeTokenBalance) {
            setUser({
              ...user,
              solana_wallet_user_public_key: solanaWalletUserPublicKey,
            });
          } else {
            const { data: result, error } = await updateUserBalance(codeTokenBalance);
            // const result = await updateUserBalance(codeTokenBalance);

            if (error) {
              console.log("updateUserBalanceError");
              console.error(error);

              return;
            }

            // console.log("result");
            // console.log(result);

            if (result) {
              setUser({
                ...user,
                solana_wallet_user_public_key: solanaWalletUserPublicKey,
                balance: codeTokenBalance,
              });
            }
          }
        }

      } catch(error) {
        console.log("fetchBalance error");
        console.error(error);
      }

    }

    fetchSolanaWalletDetails();

  }, [solanaWalletUserPublicKey]);

  return (
    <div>
      <SolanaWalletHeader>
        {/* Code Token Balance */}
        Your Solana Wallet
      </SolanaWalletHeader>

      <SolanaWalletDetailWrapper>
        <SettingsContentDetail>
          <div style={{
            display: "flex",
            marginBottom: "0.5rem",
          }}>
            {/* <SolscanImage /> */}
            <SolanaImage />
            <span style={{
              marginLeft: "0.25rem"
            }} >
              {/* {!user.solanaWalletUserPublicKey == null ? <ExternalLink
                href={user.solanaWalletUserPublicKey && `https://solscan.io/account/${user.solanaWalletUserPublicKey.toString()}`}
              >
                <SolanaText>
                  {user.solanaWalletUserPublicKey && shortenAddress(user.solanaWalletUserPublicKey.toString())}
                </SolanaText>
              </ExternalLink> : <SolanaText onClick={() => {
                  const solanaWalletButton = document.getElementsByClassName("wallet-adapter-button ")[0];
                  // alert("Connect your Solana wallet to use this.")
                  // @ts-ignore
                  solanaWalletButton.click();
              }}>
                Please, connect your wallet first
              </SolanaText>}
               */}
              {user.solana_wallet_user_public_key !== null ? <ExternalLink
                href={`https://solscan.io/account/${user.solana_wallet_user_public_key?.toString()}`}
              >
                <SolanaText>
                  {shortenAddress(user.solana_wallet_user_public_key?.toString())}
                </SolanaText>
              </ExternalLink> : <SolanaText onClick={() => {
                const solanaWalletButton = document.getElementsByClassName("wallet-adapter-button ")[0];
                // alert("Connect your Solana wallet to use this.")
                // @ts-ignore
                solanaWalletButton.click();
              }}>
                Connect your wallet and it will be shown at your profile
              </SolanaText>}
            </span>
          </div>

          <ExternalLink
            href={`https://solscan.io/account/${CODE_SOLANA_TOKEN}`}
          >
            {/* Extract this */}
            <div style={{
              display: "flex",
              alignItems: "center",
            }} >
              <img
                src={COMPANY_LOGO_WHITE}
                style={{
                  width: "1.25rem",
                  marginLeft: "-0.1rem",
                }}
              />
              <span style={{
                marginLeft: "0.1rem",
                opacity: 0.5,
                fontSize: "1.1rem",
              }} >
                {/* 100000000 */}
                {user && <Tooltip title={`You have ${user.balance} CODE`} arrow >
                  <span>
                    {/* ${(user.balance * solanaCodeTokenPrice).toFixed(6)} */}
                    ${(user.balance * solanaCodeTokenPrice).toFixed(2)}
                  </span>
                </Tooltip>}
              </span>
            </div>
          </ExternalLink>

          <SettingsContentDetailText>
            
          </SettingsContentDetailText>
        </SettingsContentDetail>
      </SolanaWalletDetailWrapper>

      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
      }}>
        {/* <ExternalLink
          href={`${SOLSCAN}/token/${CODE_SOLANA_TOKEN}#markets`}
        >
          <MarketButtonWrapper>
            <MarketButton type="button" >
              Markets
            </MarketButton>
          </MarketButtonWrapper>
        </ExternalLink > */}
        

        {/* Use a market later */}
        {user?.solana_wallet_user_public_key && <SolanaWalletRemoveButtonWrapper>
          {/* <SolanaWalletUpdateButton 
            type="button" 

            onClick={async () => {
              await updateUserBalance("0");
              const { data, error } = await deleteSolanaWallet();

              if (error) {
                alert("Couldn't reset your Solana wallet details");
                console.log("deleteSolanaWallet error");
                console.log(error);
              }

              if (data) {
                window.location.reload();
              } else {
                alert("Couldn't reset your Solana wallet details");
              }
            }}
          >
            Update
          </SolanaWalletUpdateButton> */}
          <SolanaWalletRemoveButton 
            type="button" 

            onClick={async () => {
              await disconnect();

              await updateUserBalance("0");
              const { data, error } = await deleteSolanaWallet();

              if (error) {
                alert("Couldn't reset your Solana wallet details");
                console.log("deleteSolanaWallet error");
                console.log(error);
              }

              if (data) {
                window.location.reload();
              } else {
                alert("Couldn't reset your Solana wallet details");
              }
            }}
          >
            {/* Include image later for Serum or else? */}
            Remove
          </SolanaWalletRemoveButton>
        </SolanaWalletRemoveButtonWrapper>}
      </div >
      
    </div>
  );
};

export default CodeTokenBalance;

// {/* <ExternalLink
//           // Later, include it to the market
//           href={`https://raydium.io/swap/?from=EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v&to=Code7hV6DaK5Werof8c7vPwBxLvhmEWVUbU2AfhBZArB`}
//         >
//           <BuyButtonWrapper>
//             <BuyButton type="button" >
//               {/* Include image later for Serum or else? */}
// {/* Buy */ }
// {/* </BuyButton> */ }
// {/* </BuyButtonWrapper> */ }
//         // </ExternalLink > */}