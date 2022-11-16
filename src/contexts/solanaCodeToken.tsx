import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const CODE_TOKEN_PRICE_API = "https://api.solscan.io/amm/market?address=Code7hV6DaK5Werof8c7vPwBxLvhmEWVUbU2AfhBZArB&sort_by=liquidity&sort_type=desc";

const SolanaCodeTokenDetailsContext = createContext({});

// Use this or just use the same logic for each page to get a user?
export const SolanaCodeTokenDetailsProvider = ({ children }) => {
  // Include function to set only profile image and informations here?

  const [solanaCodeTokenTotalHolders, setSolanaCodeTokenTotalHolders] = useState(null);
  const [solanaCodeTokenPrice, setSolanaCodeTokenPrice] = useState(null);

  useEffect(() => {
    axios.get("https://public-api.solscan.io/token/meta?tokenAddress=Code7hV6DaK5Werof8c7vPwBxLvhmEWVUbU2AfhBZArB").then(({ data: { holder } }) => {
      // console.log("response");
      // console.log(response);

      // alert(holder);
      // alert(solanaCodeTokenTotalHolders);
      setSolanaCodeTokenTotalHolders(holder);
    }).catch(error => {
      console.log("solscan public api for token metadata catch error");
      console.error(error);
    });
  }, []);

  useEffect(() => {
    axios.get(CODE_TOKEN_PRICE_API).then(({ data }) => {

      // console.log("data");
      // console.log(data);

      const { price: codeTokenPriceUSDT } = data.data[0]; // CODE/USDT
      const { price: codeTokenPriceUSDC } = data.data[1]; // CODE/USDC

      // Include Solana code here later?
      // console.log(`The current CODE price in USDT scientific notification is ${codeTokenPriceUSDT}.`);
      // console.log(`The current CODE price in USDC scientific notification is ${codeTokenPriceUSDC}.`);

      const currentSolanaCodeTokenPrice = (((codeTokenPriceUSDC + codeTokenPriceUSDT) / 2)).toFixed(8);

      setSolanaCodeTokenPrice(currentSolanaCodeTokenPrice);
    }).catch(error => {
      console.log("solscan public api for token metadata catch error");
      console.error(error);
    });
  }, []);

  return (
    <SolanaCodeTokenDetailsContext.Provider value={{
      solanaCodeTokenTotalHolders, 
      setSolanaCodeTokenTotalHolders,
      solanaCodeTokenPrice,
      setSolanaCodeTokenPrice,
    }}>
      {children}
    </SolanaCodeTokenDetailsContext.Provider>
  );
};

export const useSolanaCodeTokenDetails = () => useContext(SolanaCodeTokenDetailsContext);

// https://stackoverflow.com/questions/64662486/how-do-you-deal-with-public-and-private-routes-in-a-nextjs-app
// https://www.mikealche.com/software-development/how-to-implement-authentication-in-next-js-without-third-party-libraries
// https://jasonraimondi.com/posts/secure-a-next-js-application-with-jwt-and-a-private-route-higher-order-component/

// const axios = require("axios");

// const PRICE_IN_USD = 299;
// const JOB_POST_CODE_TOKEN_DISCOUNT = 5 // 5%

// const COINGECKO_TOKEN_PRICE_API = "https://api.coingecko.com/api/v3/coins";
// const CODE_TOKEN_PRICE_API = "https://api.solscan.io/amm/market?address=Code7hV6DaK5Werof8c7vPwBxLvhmEWVUbU2AfhBZArB&sort_by=liquidity&sort_type=desc";

// const CODE_DECIMAL = 6;
// const LAMPORTS_PER_CODE = 10 ** CODE_DECIMAL;

// const findCryptoPrice = async (coinId = "solana", currency = "usd") => {
//   const { data } = await axios.get(`${COINGECKO_TOKEN_PRICE_API}/${coinId}`)
//   return data.market_data.current_price[currency];
// }

// // $node
// // await findJobPostPriceInSolana();
// const findJobPostPriceInSolana = async () => {
//   const solanaPriceInUsd = await findCryptoPrice("solana", "usd");
//   console.log(`The current Solana price in USD is ${solanaPriceInUsd}.`);

//   const jobPostPriceInSolana = PRICE_IN_USD / solanaPriceInUsd;
//   console.log(`jobPostPriceInCode before discount is ${jobPostPriceInSolana} Sol.`);

//   return jobPostPriceInSolana;
// }

// // $node
// // await findJobPostPriceInCode();
// const findJobPostPriceInCode = async () => {
//   const { data } = await axios.get(CODE_TOKEN_PRICE_API);
//   // console.log("data");
//   // console.log(data);

//   const { price: codeTokenPriceUSDT } = data.data[0]; // CODE/USDT
//   const { price: codeTokenPriceUSDC } = data.data[1]; // CODE/USDC
//   // The last one is from Serum

//   console.log(`The current CODE price in USDT scientific notification is ${codeTokenPriceUSDT}.`);
//   console.log(`The current CODE price in USDC scientific notification is ${codeTokenPriceUSDC}.`);

//   // Use this for the frontend
//   const codeTokenPriceInFloat = (new Number(((codeTokenPriceUSDT + codeTokenPriceUSDC) / (data.data.length - 1)).toString())).toFixed(8); // 0.00000011
//   // const codeTokenPriceInFloat = (new Number(codeTokenPrice.toString())).toFixed(20); // 0.00000011432207288178
//   console.log("codeTokenPriceInFloat");
//   console.log(codeTokenPriceInFloat);

//   const jobPostPriceInCode = PRICE_IN_USD / codeTokenPriceInFloat;
//   console.log(`jobPostPriceInCode before discount is ${jobPostPriceInCode} CODE.`);

//   const jobPostPriceInCodeWithDiscount = jobPostPriceInCode * (100 - JOB_POST_CODE_TOKEN_DISCOUNT);
//   console.log(`jobPostPriceInCode with discount is ${jobPostPriceInCodeWithDiscount} CODE.`);

//   return jobPostPriceInCodeWithDiscount;
// }

// module.exports = {
//   PRICE_IN_USD,
//   LAMPORTS_PER_CODE,

//   findJobPostPriceInSolana,
//   findJobPostPriceInCode,
// }