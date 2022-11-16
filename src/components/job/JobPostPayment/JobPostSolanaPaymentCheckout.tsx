import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import moment from "moment";

import solana_logo from "../../../images/logos/solana_logo.png";

import { 
  Box, Button, 
  Typography 
} from "@mui/material";

import styled from "@emotion/styled";

import { 
  black, white, 
  purple, blue, solana, green 
} from "../../../design/colors";
import { useSolanaNotification } from "../../../contexts/solanaNotification";

const JobPostSolanaPaymentCheckout = ({
  // userSolanaWallet,
  // userPublicKey,
  // jobId,
  // title,
  // username,

  job_post_price_in_solana,
  userSolanaBalance,
  jobPostSolanaPayment,
  last_updated,
  disableJobPostSolanaPaymentButton,

  solanaPrice, 
  setSolanaPrice,
}) => {
  // Verify the job(id) was already paid here and redirect?
  
  const router = useRouter();
  // @ts-ignore
  const { solanaNotification, setSolanaNotification } = useSolanaNotification();

  // const solanaPayRef = useRef(null);

  // const [solPrice, setSolPrice] = useState(0);
  // const [showCheckout, setShowCheckout] = useState(false);
  const [disableSolanaButton, setDisableSolanaButton] = useState(false);
  // const [solanaPrice, setSolanaPrice] = useState(0)

  let socket;
  useEffect(() => {
    socket = new WebSocket("wss://stream.binance.com:9443/ws/solusdt@aggTrade");
    socket.onmessage = function (event) {
      setSolanaPrice(JSON.parse(event.data).p);
    };
  }, []);

  const Title = styled(Typography)({
    fontSize: "1.25rem",
    marginBottom: "0.5rem",
    width: "100%",
    textAlign: "center",
  });

  const ContentBox = styled(Box)({
    width: "100%",
    background: "#DFE0EF",
    overflowX: "hidden",
    // paddingLeft: "2rem",
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

  const TotalPrice = styled(Typography)({
    fontWeight: 700,
    display: "flex",
    alignItems: "center",
    flex: "1",
  });

  // const currentSolanaPrice = (solanaPrice * 1).toFixed(2);

  const currentJobPostPriceInDollar = (solanaPrice * job_post_price_in_solana).toFixed(2);
  const currentUserBalanceInDollar = (solanaPrice * userSolanaBalance).toFixed(2);
  
  // alert(last_updated);

  return (
    <>
      <Box>
        <ContentBox style={{
          padding: "1rem",
        }}>
          <Title align="center" style={{
            marginBottom: "0.5rem",
          }} >
            Your Order Summary
          </Title>

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

          {/* <Box mt={"1rem"} > */}
          <Box >
            {/* <IndividualBox>
              <Label style={{
                color: solana,
              }} >
                <Image
                  width={"12px"}
                  height={"12px"}
                  src={solana_logo}
                  alt="solana logo"
                />
                <span style={{
                  marginLeft: "0.25rem",
                }} >
                  Price
                </span>
              </Label> <TotalPrice style={{
                color: solana,
              }} >${currentSolanaPrice}</TotalPrice>
            </IndividualBox> */}

            <IndividualBox>
              <Item>1 Job Post</Item> <Value>${currentJobPostPriceInDollar}</Value>
            </IndividualBox>
            <IndividualBox>
              <Label style={{
                // color: solana,
                color: green,
                // fontWeight: "bold",
              }} >🎉 Discount</Label> <TotalPrice style={{
                marginLeft: "-0.25rem",
                color: green,
                fontWeight: "bold",
              }} >
                <span style={{
                  marginLeft: "0.1rem",
                }} >
                  $0
                </span>
              </TotalPrice>
            </IndividualBox>
          </Box>

          <Box mt={"1.2rem"}>
            <IndividualBox>
              <Label>Total Price</Label> <TotalPrice>${currentJobPostPriceInDollar}</TotalPrice>
            </IndividualBox>
            <IndividualBox>
              <Label style={{
                color: solana,
              }} >
                In Solana <Image
                  width={"12px"}
                  height={"12px"}
                  src={solana_logo}
                  alt="solana logo"
                />
                <span style={{
                  marginLeft: "0.25rem",
                }} >
                  {job_post_price_in_solana.toFixed(2)}
                </span>
              </Label> 
              {/* <TotalPrice style={{
                marginLeft: "-0.25rem",
                color: solana,
              }} >
                <Image
                  width={"12px"}
                  height={"12px"}
                  src={solana_logo}
                  alt="solana logo"
                /> 
                <span style={{
                  marginLeft: "0.1rem",
                }} >
                  {job_post_price_in_solana.toFixed(2)} 
                </span>
              </TotalPrice> */}
            </IndividualBox>
            <IndividualBox>
              <Label>Your Balance</Label> <TotalPrice>${currentUserBalanceInDollar}</TotalPrice>
            </IndividualBox>
            <IndividualBox>
              <Label style={{
                color: solana,
              }} >
                In Solana <Image
                  width={"12px"}
                  height={"12px"}
                  src={solana_logo}
                  alt="solana logo"
                />
                <span style={{
                  marginLeft: "0.25rem",
                }} >
                  {userSolanaBalance?.toFixed(2)}
                </span>
              </Label> 
              {/* <TotalPrice style={{
                marginLeft: "-0.25rem",
                color: solana,
              }} >
                <Image
                  width={"12px"}
                  height={"12px"}
                  src={solana_logo}
                  alt="solana logo"
                /> 
                <span style={{
                  marginLeft: "0.1rem",
                }} >
                  {userSolanaBalance?.toFixed(2)} 
                </span>
              </TotalPrice> */}
            </IndividualBox>
          </Box>

          <div style={{
            marginTop: "0.5rem",
            opacity: 0.6,
            fontSize: "0.75rem",
            lineHeight: "1rem",
            padding: "0.25rem",
          }} >
            <span 
              onClick={() => {
                // alert(solanaNotification.show);
                // setSolanaNotification({
                //   show: true,
                //   // title: "Job Post Payment with CODE token ready",
                //   title: "Pay with CODE token ready",
                //   message: `Confirm your job post payment`,
                // });
                
                // alert(solanaNotification.show);

              }}
            >
              The last update for the Solana price in the contract was {moment.utc(last_updated).fromNow()}. (Update happens every 10 minutes if there were differences in prices.)
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

                color: blue,

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
                      method: "code"
                    }
                  }
                );
              }}
            >
              Use <img src="/static/logo.png"
                style={{
                  width: "1rem",
                  height: "1rem",
                  marginLeft: "0.25rem",
                  marginRight: "0.25rem",
                }}
              /> CODE and have 5% off
            </Typography>
          </Box>

          <Box
            m={"1rem 1rem 1.5rem 1rem"}
            display={"flex"}
            justifyContent={"space-around"}
          >
            <Button
              // Balance check here?
              disabled={disableJobPostSolanaPaymentButton}
              onClick={jobPostSolanaPayment}
              sx={{ 
                background: purple,
                color: white, 
                width: "8.5rem",
                border: "1px solid white",

                "&:disabled":{
                  color: "#d3d3d3",
                },
                "&:hover":{
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
                <Image
                  width={"16px"}
                  height={"16px"}
                  src={solana_logo}
                  alt="solana logo"
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

export default JobPostSolanaPaymentCheckout;
