import React, { useEffect } from "react";
import { useRouter } from "next/router";
import moment from "moment";

import axios from "axios";

import {
  Box, Button,
  Typography
} from "@mui/material";

import styled from "@emotion/styled";

import {
  black, white,
  solana, green
} from "../../../design/colors";

// TODO, 
// Show warning that user needs some Solana?
// Previous Balance at mainnet 10 Solana
// -0.00204 Sol and less than 0.00001 network fee
// -0.00207 Sol and less than 0.00001 network fee
// about 0.00422 spent? 
// 9.9958786 0.004121400000000719 spent?
const JobPostCodePaymentCheckout = ({
  // userSolanaWallet,
  // userPublicKey,
  // jobId,
  // title,
  // username,

  job_post_price_in_code,
  job_post_price_in_code_with_discount,
  userCodeTokenBalance,
  jobPostCodePayment,
  last_updated,
  disableJobPostCodePaymentButton,

  codePrice,
  setCodePrice,
}) => {
  // Verify the job(id) was already paid here and redirect?

  const router = useRouter();

  

  // let socket;
  // useEffect(() => {
  //   socket = new WebSocket("wss://stream.binance.com:9443/ws/solusdt@aggTrade");
  //   socket.onmessage = function (event) {
  //     setSolanaPrice(JSON.parse(event.data).p);
  //   };
  // }, []);

  useEffect(() => {
    const findCodePrice = async () => {
      const CODE_TOKEN_PRICE_API = "https://api.solscan.io/amm/market?address=Code7hV6DaK5Werof8c7vPwBxLvhmEWVUbU2AfhBZArB&sort_by=liquidity&sort_type=desc";
      const { data } = await axios.get(CODE_TOKEN_PRICE_API);
      // console.log("data");
      // console.log(data);

      const { price: codeTokenPriceUSDT } = data.data[0]; // CODE/USDT
      const { price: codeTokenPriceUSDC } = data.data[1]; // CODE/USDC
      // The last one is from Serum
      const codeTokenPriceInFloat = (codeTokenPriceUSDT + codeTokenPriceUSDC) / 2;
      // alert(codeTokenPriceInFloat);

      setCodePrice(codeTokenPriceInFloat);
    };

    const oneSecond = 1000;
    const id = setInterval(() => {
      findCodePrice(); // <-- (3) invoke in interval callback
    }, 10 * oneSecond); // Every ten minutes

    findCodePrice(); // <-- (2) invoke on mount

    return () => clearInterval(id);
  }, []);

  const Title = styled(Typography)({
    fontSize: "1.25rem",
    marginBottom: ".5rem",
    width: "100%",
    textAlign: "center",
  });

  const ContentBox = styled(Box)({
    width: "100%",
    background: "#DFE0EF",
    overflowX: "hidden",
    paddingLeft: "2rem",
    boxSizing: "border-box",
  });

  const IndividualBox = styled(Box)({
    width: "100%",
    display: "flex",
    flexDirection: "row",
    margin: ".2rem",
  });

  const Item = styled(Typography)({
    flex: "2",
  });

  const Price = styled(Typography)({
    flex: "1",
  });

  const Discount = styled(Typography)({
    fontWeight: 400,
    flex: "2",
  });

  const Value = styled(Typography)({
    flex: "1",
  });

  const Label = styled(Typography)({
    fontWeight: 400,
    flex: "2",
  });

  const Total = styled(Typography)({
    fontWeight: 400,
    flex: "2",
  });

  const TotalPrice = styled(Typography)({
    fontWeight: 700,
    flex: "1",
  });

  const UserTokenBalanceInDollar = styled(Typography)({
    fontWeight: 700,
    flex: "1",
    // marginRight: "0.75rem",
  });

  const CodeLabel = styled(Typography)({
    fontWeight: 400,
    flex: "1",
  });
  const CodeValue = styled(Typography)({
    fontWeight: 400,
    flex: "1",
  });

  // alert(job_post_price_in_code);
  // alert(job_post_price_in_code_with_discount);

  const currentCodePrice = (codePrice * 1).toFixed(10);

  const currentJobPostPriceInDollar = (codePrice * job_post_price_in_code).toFixed(2);
  const currentJobPostPriceInDollarDiscount = (codePrice * (job_post_price_in_code - job_post_price_in_code_with_discount)).toFixed(2);

  const totalPrice = (codePrice * job_post_price_in_code_with_discount).toFixed(2);
  const userCodeTokenBalanceInDollar = (codePrice * userCodeTokenBalance).toFixed(0);
  // const userCodeTokenBalanceInDollar = (codePrice * userCodeTokenBalance).toFixed(2);

  return (
    <>
      <Box>
        <ContentBox style={{
          padding: "1rem",
        }}>
          <Title align="center" style={{
            marginBottom: "0.5rem",
          }} >Your Order Summary</Title>

          {/* <Box>
            <IndividualBox>
              <Label>Last Contract Price Update</Label>
            </IndividualBox>
            <IndividualBox>
              <Label style={{
                color: solana,
              }} >7 minutes ago</Label>
            </IndividualBox>
          </Box> */}

          {/* <Box mt={"1.2rem"} > */}
          <Box >
            <div style={{
              display: "flex",
              alignItems: "center",
              // justifyContent: "center",
            }} >
              {/* <img src="/static/logo_no_white.png" style={{
                width: "1rem",
                height: "1rem",
                // marginLeft: "0.25rem",
                // marginRight: "0.25rem",
              }} />
              <span style={{
                marginLeft: "0.25rem",
                // color: solana
              }} >
                Price
              </span>
              <span style={{
                marginLeft: "auto",
                marginRight: "1.45rem",
                // color: solana,
              }} >
                ${currentCodePrice}
              </span> */}
            </div>

            <IndividualBox>
              <Item>1 Job Post</Item> <Value>${currentJobPostPriceInDollar}</Value>
            </IndividualBox>
            <IndividualBox>
              <Label style={{
                color: green,
                // fontWeight: "bold",
              }} >🎉 Discount 5%</Label> <TotalPrice style={{
                marginLeft: "-0.25rem",
                color: green,
                fontWeight: "bold",
              }} >
                <span style={{
                  marginLeft: "0.1rem",
                }} >
                  {/* -${currentJobPostPriceInDollarDiscount} */}
                  ${currentJobPostPriceInDollarDiscount}
                </span>
              </TotalPrice>
            </IndividualBox>
          </Box>

          <Box mt={"1.2rem"}>
            {/* <Box> */}
            <IndividualBox>
              <Label>Total Price</Label> <TotalPrice>${totalPrice}</TotalPrice>
            </IndividualBox>
            <IndividualBox>
              <CodeLabel style={{
                color: black,
                display: "flex",
                alignItems: "center",
              }} >
                In CODE <img src="/static/logo_no_white.png" style={{
                  width: "1rem",
                  height: "1rem",
                  marginLeft: "0.25rem",
                  marginRight: "0.25rem",
                }} /><span style={{
                  marginRight: "1.25rem",
                }} >
                  {job_post_price_in_code_with_discount?.toFixed(0)}
                </span>
              </CodeLabel>
              {/* <CodeValue style={{
                marginLeft: "-0.25rem",
                color: black,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }} >
                <img src="/static/logo_no_white.png" style={{
                  width: "1rem",
                  height: "1rem",
                  marginRight: "0.25rem",
                }} /><span style={{
                  marginRight: "1.25rem",
                }} >
                  {job_post_price_in_code_with_discount?.toFixed(0)} 
                </span>
              </CodeValue> */}
            </IndividualBox>

            <IndividualBox>
              <Label>Your Balance</Label> <UserTokenBalanceInDollar>${userCodeTokenBalanceInDollar}</UserTokenBalanceInDollar>
            </IndividualBox>
            <IndividualBox>
              <CodeLabel style={{
                color: black,
                display: "flex",
                alignItems: "center",
              }} >
                In CODE <img src="/static/logo_no_white.png" style={{
                  width: "1rem",
                  height: "1rem",
                  marginLeft: "0.25rem",
                  marginRight: "0.25rem",
                }} /><span style={{
                  marginRight: "1.5rem",
                }} >
                  {userCodeTokenBalance?.toFixed(0)}
                </span>
              </CodeLabel>
              {/* <CodeValue style={{
                marginLeft: "-0.25rem",
                color: black,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }} >
                <img src="/static/logo_no_white.png" style={{
                  width: "1rem",
                  height: "1rem",
                  marginRight: "0.25rem",
                }} /><span style={{
                  marginRight: "1.5rem",
                }} >
                  {userCodeTokenBalance?.toFixed(0)} 
                </span>
              </CodeValue> */}
            </IndividualBox>

          </Box>

          <div style={{
            marginTop: "0.5rem",
            opacity: 0.6,
            fontSize: "0.75rem",
            lineHeight: "1rem",
            padding: "0.25rem",
          }} >
            <span>
              The last update for the CODE price in the contract was {moment.utc(last_updated).fromNow()}. (Update happens every 10 minutes if there were differences in prices.)
              {/* The last update for the Solana price in the contract was {moment.utc(new Date(last_updated)).fromNow()}.  */}
            </span>
          </div>
        </ContentBox>

        <Box border={"1px solid #d3d3d3"} borderRadius="0 0 0.5rem 0.5rem" >
          <Box
            m={"1rem 1rem 0 1rem"}
          >
            <Typography
              sx={{
                fontWeight: "bold",
                width: "100%",
                textAlign: "center",

                color: solana,

                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                "&:hover": {
                  opacity: "0.7",
                  transition: "all 0.2s",
                  cursor: "pointer",
                }
              }}

              onClick={() => {
                router.push(
                  {
                    pathname: router.pathname,
                    query: {
                      ...router.query,
                      method: "solana"
                    }
                  }
                );
              }}
            >
              Use <img src="/static/solana.png"
                style={{
                  width: "1rem",
                  height: "1rem",
                  marginLeft: "0.25rem",
                  marginRight: "0.25rem",
                }}
              /> Solana without discount
            </Typography>
          </Box>

          <Box
            m={"1rem 1rem 1.5rem 1rem"}
            display={"flex"}
            justifyContent={"space-around"}
          >
            <Button
              // Balance check here?
              disabled={disableJobPostCodePaymentButton}
              onClick={jobPostCodePayment}
              sx={{
                background: black,
                color: white,
                width: "8.5rem",
                border: "1px solid black",

                "&:disabled": {
                  color: "#d3d3d3",
                },
                "&:hover": {
                  color: black,
                  border: "1px solid black"
                }
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: "0.5rem",
                }}
              >
                {/* <Image
                  width={"16px"}
                  height={"16px"}
                  src={code_logo}
                  alt="code logo"
                /> */}
                <img 
                  src="/static/logo.png"
                  style={{
                    width: "1rem",
                    height: "1rem",
                  }}
                />
              </Box>
              {/* Pay $299 */}
              Confirm
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default JobPostCodePaymentCheckout;
