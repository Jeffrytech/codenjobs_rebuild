import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import moment from "moment";

import { 
  Typography,
  // Button, Stack, 
} from "@mui/material";
import styled from "@emotion/styled";

import {
  useConnection,
} from "@solana/wallet-adapter-react";

import { LAMPORTS_PER_SOL, PublicKey, SystemProgram } from "@solana/web3.js";
import {
  // Token,
  TOKEN_PROGRAM_ID,
  // getMinimumBalanceForRentExemptAccount
  // getOrCreateAssociatedTokenAccount,
  getAssociatedTokenAddress,
} from "@solana/spl-token";

import {
  Program, 
  // Provider,
  utils,
  // Provider, web3
} from '@project-serum/anchor';

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet as useSolanaWallet } from "@solana/wallet-adapter-react";


import JobPostFormHeader from "../JobPostFormHeader";

const Paragraph = styled(Typography)({
  margin: "2rem 0",
});

import {
  PaymentIntro,

  // TotalPrice,

  // JobPostSolanaPaymentButton,
  // JobPostCODEPaymentButton,

  JobPostPaymentContainer,
  JobPostPaymentWrapper,
  JobPostPaymentSection,
  JobPostPaymentHeader,
  CodeBuyButton,

  // PlansWrapper,
  // Plans,
} from "./JobPostPaymentCSS";

import jobPlans from "./JobPostPaymentCard/jobPlans";

// import Link from "next/link";
// import { Tooltip } from "@material-ui/core";

// import { freeJobPayment } from "../../../api/pay/testPay";
import { findJobPostPrices, findJobStatusById } from "../../../api/job";
import CentralizeChildren from "../../CentralizeChildren";
import { 
  JOB_POST_PREFIX, JOB_PUBLIC_KEY, JOB_SOLANA_CONTRACT, 
  BUY_CODE 
} from "../../../config/environment";
import SolanaImage from "../../../crypto/SolanaImage";

import idl from '../../../crypto/solana/contracts/job/idl.json'; // It is not always with metadata for program id
import { userProvider } from "../../../crypto/utils";

import { solanaJobPostPayment } from "../../../api/pay/privateSolana";
import { CODE_SOLANA_TOKEN_PUBLIC_KEY, createSplTokenAccount, findCodeTokenBalance } from "../../../crypto/solana/spl";
import JobPostSolanaPaymentCheckout from "./JobPostSolanaPaymentCheckout";
import JobPostCodePaymentCheckout from "./JobPostCodePaymentCheckout";

import JobPostPaymentCard from "./JobPostPaymentCard";
import JobPostPaymentError from "./JobPostPaymentError";
// import { SolanaContinueButton } from "../JobPostPreview/JobPostPreviewCSS";
import ExternalLink from "../../ExternalLink";
import CodePriceCard from "../../CodePriceCard";
import SolanaPriceCard from "../../SolanaPriceCard";
// import SolanaNotification from "../../../crypto/SolanaNotification";
import { useSolanaNotification } from "../../../contexts/solanaNotification";
import ViewOnSolscan from "../../../crypto/ViewOnSolscan";

const JobPostPayment = ({
  jobId,
  title,
  user,
  method,
}) => {
  const { username } = user;

  const router = useRouter();
  const { connection: solanaConnection } = useConnection();
  
  // @ts-ignore 
  const { setSolanaNotification } = useSolanaNotification();
  
  const userSolanaWallet = useSolanaWallet();
  const { publicKey: userPublicKey, connected, wallet } = userSolanaWallet;

  // Move to the context?
  // const [walletAddress, setWalletAddress] = useState("")
  // const [notificationMessage, setNotificationMessage] = useState("");
  // const [setJobPostPaymentConfirmed, jobPostPaymentConfirmed] = useState(false);
  
  const [jobPostPrices, setJobPostPrices] = useState(null);
  const [disableJobPostSolanaPaymentButton, setDisableJobPostSolanaPaymentButton] = useState(false);
  const [disableJobPostCodePaymentButton, setDisableJobPostCodePaymentButton] = useState(false);

  const [solanaPrice, setSolanaPrice] = useState(0);
  const [codePrice, setCodePrice] = useState(0);
  // const [planInfo, setPlanInfo] = useState(jobPlans);

  const [userSolanaBalance, setUserSolanaBalance] = useState(null);
  const [userCodeTokenBalance, setUserCodeTokenBalance] = useState(null);

  const [errorTitle, setErrorTitle] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errorButton, setErrorButton] = useState(null);
  const [showError, setShowError] = useState(false);

  const showErrorMessage = (title, message, button?) => {
    setErrorTitle(title);
    setErrorMessage(message);
    setErrorButton(button);

    setShowError(true);
  };

  const closeErrorMessage = () => {
    setShowError(false);
  };
  
  useEffect(() => {
    // Find the better solution than this.
    if (userPublicKey === null) {
      const solanaWalletButton = document.getElementsByClassName("wallet-adapter-button ")[0];
      // alert("Connect your Solana wallet to use this.")
      // @ts-ignore
      solanaWalletButton.click();
    }
  }, []);

  useEffect(() => {
    if (connected && userPublicKey) {
      const walletAddress = userPublicKey.toBase58();
      setSolanaNotification({
        show: true,
        title: `${wallet.adapter.name} wallet is connected`,
        message: `Your wallet is ${walletAddress.substring(0, 4)}...${walletAddress.substring(walletAddress.length - 4, walletAddress.length)}`
      });
    } 
  }, [connected, userPublicKey]);

  // Solana
  useEffect(() => {
    if (userPublicKey !== null && jobPostPrices && jobPostPrices.job_post_price_in_solana && method === "solana") {
      solanaConnection.getBalance(userPublicKey).then((balance) => {
        const currentSolanaBalance = balance / LAMPORTS_PER_SOL;
        setUserSolanaBalance(currentSolanaBalance);

        // alert(jobPostPrices?.job_post_price_in_solana);
        // alert(`${currentSolanaBalance} Sol`);
        // alert(currentSolanaBalance < jobPostPrices.job_post_price_in_solan);

        if (currentSolanaBalance <= jobPostPrices.job_post_price_in_solana) {
          setDisableJobPostSolanaPaymentButton(true);

          showErrorMessage(
            "Insufficient Solana Balance",
            `The current job post price is ${jobPostPrices.job_post_price_in_solana.toFixed(2)} SOL while your balance is ${currentSolanaBalance.toFixed(2)} SOL. Please buy it more first.`,
            
            // TODO
            // Use another referral
            // <ExternalLink
            //   // TODO
            //   // href={FTX_RFERRAL}
            // >
            //   <SolanaBuyButton>
            //     <SolanaImage />
            //     <span style={{
            //       marginLeft: "0.5rem",
            //     }} >
            //       Buy Solana
            //     </span>
            //   </SolanaBuyButton>
            // </ExternalLink>
          );
          return;
        }

      });
    }
  }, [userPublicKey, method]);

  // CODE
  useEffect(() => {
    if (userPublicKey !== null && jobPostPrices && jobPostPrices.job_post_price_in_solana && method === "code") {
      findCodeTokenBalance(userPublicKey).then((balance) => {
        // alert(balance);

        const currentCodeTokenBalance = balance;
        setUserCodeTokenBalance(currentCodeTokenBalance);

        if (currentCodeTokenBalance <= jobPostPrices.job_post_price_in_code_with_discount) {
          setDisableJobPostCodePaymentButton(true);

          showErrorMessage(
            "Insufficient CODE Token",
            `The current job post price is ${jobPostPrices.job_post_price_in_code_with_discount.toFixed(2)} CODE while your balance is ${currentCodeTokenBalance.toFixed(2)} CODE. Please buy it more first.`,
            <ExternalLink
              href={BUY_CODE}
            >
              <CodeBuyButton>
                <img
                  src="/static/logo.png"
                  style={{
                    width: "1rem",
                    height: "1rem",
                  }}
                />
                <span style={{
                  marginLeft: "0.5rem",
                }} >
                  Buy CODE
                </span>
              </CodeBuyButton>
            </ExternalLink>
          );
        }

      });
    }
  }, [userPublicKey, method]);

  useEffect(() => {
    if (jobId !== null) {
      findJobStatusById(jobId)
        .then(({ data: status, error }) => {

          if (error) {
            console.log("findJobStatusById server error");
            console.error(error);

            return;
          }

          if (status === "Draft") {
            if (userPublicKey === null) {
              // const solanaWalletButton = document.getElementsByClassName("wallet-adapter-button ")[0];
              // // alert("Connect your Solana wallet to use this.")
              // // @ts-ignore
              // solanaWalletButton.click();
            }

            return;
          } else if (status === "Confirmed") {
            router.replace(`/job/post/confirmation?&id=${jobId}`);
          } else {
            router.replace("/job/post");
          }

          // router.replace(`/job/post/confirmation?&id=${id}`);

          // if (error.response.data.detail === "no_job") {
          //   router.replace("/job/post");
          // }
        })
        .catch(error => {
          console.log("findJobStatusById error");
          console.error(error);
        });
    }
  }, []);

  const [useTimeout, setUseTimeout] = useState(false);
  // const [useInterval, setUseInterval] = useState(false);

  useEffect(() => {
    if (jobId !== null) {
      // 1. Set jobPrcies
      // 2. Set timeout
      // 3. Set interval
      const fetchData = async () => {
        try {
          const { data: jobPrices, error } = await findJobPostPrices();

          if (error) {
            console.log("findJobPostPrices server error");
            console.error(error);

            return;
          }

          // alert("fetchData");

          setJobPostPrices(jobPrices);

        } catch (error) {
          console.log("findJobPostPrices error");
          console.error(error);
        }
      };

      if (jobPostPrices === null) {
        // alert(1);

        fetchData();
        
        setUseTimeout(true);

        return;
      }

      // alert(useTimeout);
      if (useTimeout === true) {
        // alert(2);
        
        const now = moment.utc(new Date());
        const last_updated = moment.utc(new Date(jobPostPrices.last_updated));
        const duration = moment.duration(now.diff(last_updated));
        const startIntervalInSeconds = duration.asSeconds();
        // const startIntervalInSeconds = 10;

        // alert(startIntervalInSeconds);

        const oneSecond = 1000;

        let id;
        const timer = setTimeout(() => {
          // alert("setTimeout");
          
          const oneMinute = 60000;
          setInterval(() => {
            // alert("setInterval");

            fetchData(); // <-- (3) invoke in interval callback
          // }, 10 * oneSecond); // Every ten minutes
          }, 10 * oneMinute); // Every ten minutes
          
          setUseTimeout(false);
          fetchData();
        }, startIntervalInSeconds * oneSecond);
        // }, startIntervalInSeconds * oneSecond);
        
        return () => { 
          clearTimeout(timer);
          clearInterval(id);
        };
      } 

    }
  }, [
    jobPostPrices, // 1 -> 2,
    useTimeout, // 2 -> 3,
  ]);

  const jobPostSolanaPayment = async (e) => {
    e.preventDefault();

    // Extract this?
    try {
      const jobPublicKey = new PublicKey(JOB_PUBLIC_KEY);
      // Include backend relevant code and the end point
      const provider = userProvider(userSolanaWallet);
      // console.log("provider");
      // console.log(provider);

      const programID = new PublicKey(JOB_SOLANA_CONTRACT);
      // @ts-ignore
      const program = new Program(idl, programID, provider);
      // console.log("job program");
      // console.log(program);

      // Extract this
      const [jobPostPDA, _] = await PublicKey
        .findProgramAddress(
          [
            // Use the constant instead
            utils.bytes.utf8.encode(JOB_POST_PREFIX),
            provider.wallet.publicKey.toBuffer(),
            Buffer.from(username.slice(0, 32)),
            Buffer.from(jobId.slice(0, 32)),
            // anchor.getProvider().wallet.publicKey.toBuffer()
          ],
          program.programId
        );

      console.log("jobPostPDA"); // Remove with a script later when you test
      console.log(jobPostPDA);
      console.log(jobPostPDA.toString());

      // Extract this?
      // You can see what the event and logs will be with this without paying
      // const eventsWithRawLogs = await program.simulate.payJobPost(
      //   username,
      //   jobId,
      //   {
      //     accounts: {
      //       user: provider.wallet.publicKey,
      //       jobPost: jobPostPDA,
      //       job: jobPublicKey,
      //       systemProgram: SystemProgram.programId
      //     }
      //   }
      // );
      // console.log("eventsWithRawLogs");
      // console.log(eventsWithRawLogs);

      const payJobPostTx = await program.rpc.payJobPost(
        username,
        jobId,
        {
          accounts: {
            user: provider.wallet.publicKey,
            jobPost: jobPostPDA,
            job: jobPublicKey,
            systemProgram: SystemProgram.programId
          }
        }
      );

      let notificationMessage = <ViewOnSolscan solanaTx={payJobPostTx} />;

      setSolanaNotification({
        show: true,
        title: "Pay Transaction Sent",
        // title: "Job Pay Transaction Sent",
        message: notificationMessage,
      });

      const payJobPostTxDone = await provider.connection.getTransaction(payJobPostTx);

      if (payJobPostTxDone === null) { // null doesn't mean it was failure?
        // should done something here
        showErrorMessage(
          "payJobPostTxDone === null",
          "it is likey your post was paid, please contact admins if you had any problem",
        );
          
        // console.log("payJobPostTxDone === null, it is likey your post was paid, please contact admins if you had any problem");
      } else {
        console.log("payJobPostTx transaction logs...");
        console.log(payJobPostTxDone);
        console.log(payJobPostTxDone.meta.logMessages);
      }

      setSolanaNotification({
        show: true,
        title: "Pay Transaction Confirmed",
        // title: "Job Pay Transaction Confirmed",
        message: notificationMessage,
      });
      
      // Make this work with the backend
      const newJobPost = await program.account.jobPost.fetch(jobPostPDA);
      // console.log("newJobPost");
      // console.log(newJobPost);

      // Continue after this for server to work with this

      // It doesn't work because of async
      const job = await program.account.job.fetch(JOB_PUBLIC_KEY);
      // @ts-ignore
      // This doens't work
      // const jobPosted = job.posts.includes(jobPostPDA);
      let jobPosted = job.posts.filter(jobPost => {
        return jobPost.toString() === jobPostPDA.toString();
      });
      jobPosted = jobPosted.length === 1;
      // alert(jobPosted);

      // @ts-ignore
      const isPaid = "paid" in newJobPost.jobStatus;
      // @ts-ignore
      const withSolana = "solana" in newJobPost.paymentMethod;
      // alert(isPaid)
      // @ts-ignore
      const jobIdCorrect = jobId === newJobPost.jobId;
      // @ts-ignore
      const usernameCorrect = username === newJobPost.username;

      console.log("newJobPost, job, jobPosted, isPaid, withSolana, jobIdCorrect, usernameCorrect");
      console.log(newJobPost, job, jobPosted, isPaid, withSolana, jobIdCorrect, usernameCorrect);

      console.log("payJobPostTx && isPaid && withSolana && jobPosted && jobIdCorrect && usernameCorrect");
      console.log(payJobPostTx && isPaid && withSolana && jobPosted && jobIdCorrect && usernameCorrect);

      if (
        payJobPostTx && isPaid && withSolana && jobPosted && jobIdCorrect && usernameCorrect
      ) {
        const { data, error } = await solanaJobPostPayment(
          userPublicKey.toString(), jobPostPDA.toString(), payJobPostTx, jobId, "Solana",
          null,
        );

        if (error) {
          showErrorMessage(
            "Payment worked for the server but not in the contract",
            // TODO
            // Is this correct?
            // "Payment worked for the server but not in the contract",
            error.message,
          );

          console.log("solanaJobPostPayment end point error");
          console.error(error.message);

          return;
        }

        if (data === true) {
          // setTimeout(() => {
          //   router.replace(`/job/post/confirmation?&title=${title}&id=${jobId}&pay_job_post_tx=${payJobPostTx}&payment_method=solana`);
          // }, 10000);

          router.replace(`/job/post/confirmation?&title=${title}&id=${jobId}&pay_job_post_tx=${payJobPostTx}&payment_method=solana`);
          
          // Include Solana here?
          // router.replace(`/job/post/confirmation?&title=${title}&id=${jobId}&pay_job_post_tx=${pay_job_post_tx}`);
        } else {
          // Use snackbar instead later
          showErrorMessage(
            "Server Error",
            "The payment was ok but something went wrong at the server",
          );
          // alert("The payment was ok but something went wrong at the server");
        }

      } else {
        showErrorMessage(
          "rpc.payJobPost error",
          `payJobPostTx && isPaid && withSolana && jobPosted && jobIdCorrect && usernameCorrect === ${payJobPostTx && isPaid && withSolana && jobPosted && jobIdCorrect && usernameCorrect}`,
        );
        // console.error("rpc.payJobPost error")
      }

    } catch (error) {
      if (error.message === "User rejected the request.") {
        console.log("User rejected the request.");
        console.error(error.message);
      } else {
        console.log("error");
        console.error(error.message);
      }
      // else {
      //   showErrorMessage(
      //     "Job post payment with Solana error",
      //     error.message,
      //   );

      // }

    }
  };

  const jobPostCodePayment = async (e) => {
    e.preventDefault();

    // Extract this?
    try {
      // Find user token account first with mint?
      // userToken: userToken.publicKey,

      const jobPublicKey = new PublicKey(JOB_PUBLIC_KEY);
      // Include backend relevant code and the end point
      const provider = userProvider(userSolanaWallet);
      // console.log("provider");
      // console.log(provider);

      const userCodeToken = await getAssociatedTokenAddress(
        CODE_SOLANA_TOKEN_PUBLIC_KEY,
        provider.wallet.publicKey,
      );

      // Need to use this to delete the job post
      console.log("userCodeToken");
      console.log(userCodeToken);
      console.log(userCodeToken.toString());

      // alert("userCodeToken");
      // alert(userCodeToken);

      // https://github.com/solana-labs/solana-program-library/issues/2497
      const userCodeTokenInfo = await provider.connection.getAccountInfo(userCodeToken);
      if (userCodeTokenInfo === null) {
        showErrorMessage(
          "No CODE Token",
          "Please, buy CODE token first.",
          <ExternalLink
            href={BUY_CODE}
          >
            <CodeBuyButton>
              <img 
                src="/static/logo.png"
                style={{
                  width: "1rem",
                  height: "1rem",
                }}
              />
              <span style={{
                marginLeft: "0.5rem",
              }} >
                Buy CODE
              </span>
            </CodeBuyButton>
          </ExternalLink>
        );
        
        // alert("Please, buy CODE token first at https://solscan.io/token/Code7hV6DaK5Werof8c7vPwBxLvhmEWVUbU2AfhBZArB#markets");
        return;
      }

      console.log("userCodeTokenInfo");
      console.log(userCodeTokenInfo);

      // TODO
      // CODE Balance check here later ?

      const programID = new PublicKey(JOB_SOLANA_CONTRACT);
      // @ts-ignore
      const program = new Program(idl, programID, provider);
      // console.log("program");
      // console.log(program);

      // jobPostPDA should be saved at the server to use script in it later to close, refund etc later
      const [jobPostPDA, _] = await PublicKey
        .findProgramAddress(
          [
            utils.bytes.utf8.encode("job-post"),
            provider.wallet.publicKey.toBuffer(),
            Buffer.from(username.slice(0, 32)),
            Buffer.from(jobId.slice(0, 32)),
            // Buffer.from(jobId.slice(0, 32)),
            // anchor.getProvider().wallet.publicKey.toBuffer()
          ],
          program.programId
        );

      // Need to use this to delete the job post
      console.log("jobPostPDA"); // Remove with a script later when you test
      console.log(jobPostPDA);
      console.log(jobPostPDA.toString());

      // You have to sign two times with Solana?
      // This works
      // Its publicKey Should be saved at the server
      const jobPostCodeToken = await createSplTokenAccount(program, CODE_SOLANA_TOKEN_PUBLIC_KEY);
      console.log("jobPostCodeToken");
      console.log(jobPostCodeToken);
      console.log(jobPostCodeToken.publicKey.toString());

      if (jobPostCodeToken === undefined) {
        // User canceld the, show a message that you will need to sign two times for refund and job post 
        showErrorMessage(
          "Job Post CODE Token",
          "The account to save CODE for the job post was not created",
        );

        // alert("Job post token mint was not created");
        
        return;
      }

      setSolanaNotification({
        show: true,
        // title: "Job Post Pay with CODE token ready",
        title: "Pay with CODE token ready",
        message: `Confirm your job post payment`,
        // message: `You can confirm your job post payment`,
        // message: `Your job post code token is ${jobPostCodeToken.publicKey.toString()}`,
      });

      // Continue after this and should work

      // 10 * priceInCodeToken is the current price and if the balance is less than this, it shows insufficent funds error.
      // let userCODEBalance = await mintSplTokens(program, code, userToken, 10 * priceInCodeToken);
      // console.log("user code token balance before the job post payment: ", userCODEBalance);

      // let jobPostTokenBalance = await program.provider.connection.getTokenAccountBalance(jobPostToken.publicKey);
      // console.log("job post code token balance before the job post payment: ", jobPostTokenBalance);

      // const eventsWithRawLogs = await program.simulate.payJobPostWithSplToken(
      //   username,
      //   jobId,
      //   { code: {} },
      //   {
      //     accounts: {
      //       user: provider.wallet.publicKey,
      //       jobPost: jobPostPDA,
      //       job: jobPublicKey,

      //       mint: CODE_SOLANA_TOKEN_PUBLIC_KEY,
      //       // userToken: userCodeToken.publicKey,
      //       userToken: userCodeToken,
      //       jobPostToken: jobPostCodeToken.publicKey,
      //       tokenProgram: TOKEN_PROGRAM_ID, // Import this
      //       systemProgram: SystemProgram.programId,
      //       // rent: anchor.web3.SYSVAR_RENT_PUBKEY,
      //     }
      //   }
      // );
      // console.log("eventsWithRawLogs");
      // console.log(eventsWithRawLogs);

      const payJobPostWithSplTokenTx = await program.rpc.payJobPostWithSplToken(
        username,
        jobId,
        { code: {} },
        {
          accounts: {
            user: provider.wallet.publicKey,
            jobPost: jobPostPDA,
            job: jobPublicKey,

            mint: CODE_SOLANA_TOKEN_PUBLIC_KEY,
            // userToken: userCodeToken.publicKey,
            userToken: userCodeToken,
            jobPostToken: jobPostCodeToken.publicKey,
            tokenProgram: TOKEN_PROGRAM_ID, // Import this
            systemProgram: SystemProgram.programId,
            // rent: anchor.web3.SYSVAR_RENT_PUBKEY,
          }
        }
      );
      // alert(payJobPostWithSplTokenTx);

      let notificationMessage = <ViewOnSolscan solanaTx={payJobPostWithSplTokenTx} />;

      setSolanaNotification({
        show: true,
        // title: "Job Post Pay Transaction Sent",
        title: "Pay Transaction Sent",
        message: notificationMessage,
      });

      const payJobPostWithSplTokenTxDone = await provider.connection.getTransaction(payJobPostWithSplTokenTx); 

      if (payJobPostWithSplTokenTxDone === null) { // null doesn't mean it was failure?
        // should done something here
        // console.log("payJobPostTxDone === null, it is likey your post was paid, please contact admins if you have any problem");
        showErrorMessage(
          "payJobPostTxDone === null",
          "it is likey your post was paid, please contact admins if you had any problem",
        );
      } else {
        console.log("payJobPostWithSplTokenTx transaction logs...");
        console.log(payJobPostWithSplTokenTxDone);
        console.log(payJobPostWithSplTokenTxDone.meta.logMessages);
      }

      setSolanaNotification({
        show: true,
        title: "Pay Transaction Confirmed",
        // title: "Job Post Pay Transaction Confirmed",
        message: notificationMessage,
      });

      // userCODEBalance = await program.provider.connection.getTokenAccountBalance(userToken.publicKey);
      // console.log("user code token balance after the job post payment: ", userCODEBalance);

      // let ownerCODEBalance = await program.provider.connection.getTokenAccountBalance(codeOwnerToken.publicKey);
      // console.log("owner code token balance after the job post payment: ", ownerCODEBalance);

      // jobPostTokenBalance = await program.provider.connection.getTokenAccountBalance(jobPostToken.publicKey);
      // console.log("job post code token balance after the job post payment: ", jobPostTokenBalance);

      // console.log("payJobPostTx transaction logs...");
      // const payJobPostTxDone = await provider.connection.getConfirmedTransaction(payJobPostTx, "confirmed");

      // if (payJobPostTxDone === null) {
      //   // should done something here
      //   alert("payJobPostTxDone === null");
      // }

      // console.log(payJobPostTxDone);
      // console.log(payJobPostTxDone.meta.logMessages);

      const newJobPost = await program.account.jobPost.fetch(jobPostPDA);
      // console.log("newJobPost");
      // console.log(newJobPost);

      // // It doesn't work because of async
      const job = await program.account.job.fetch(JOB_PUBLIC_KEY);
      // @ts-ignore
      // This doens't work
      // const jobPosted = job.posts.includes(jobPostPDA);
      let jobPosted = job.posts.filter(jobPost => {
        return jobPost.toString() === jobPostPDA.toString();
      });
      jobPosted = jobPosted.length === 1;
      // alert(jobPosted); // Loading or something here

      // @ts-ignore
      const isPaid = "paid" in newJobPost.jobStatus;
      // alert(isPaid)
      // @ts-ignore
      const withCode = "code" in newJobPost.paymentMethod;
      // alert(isCode)

      // @ts-ignore
      const jobIdCorrect = jobId === newJobPost.jobId;
      // @ts-ignore
      const usernameCorrect = username === newJobPost.username;

      if (payJobPostWithSplTokenTx && isPaid && withCode && jobPosted && jobIdCorrect && usernameCorrect) {
        const { data, error } = await solanaJobPostPayment(
          userPublicKey.toString(), jobPostPDA.toString(), payJobPostWithSplTokenTx, jobId, "Code",
          jobPostCodeToken.publicKey.toString(),
        );

        // alert(jobPostCodeToken.publicKey.toString());

        if (error) {
          showErrorMessage(
            "solanaJobPostPayment end point error",
            error.message,
          );
          // console.log("solanaJobPostPayment end point error");
          // console.error(error.message);

          return;
        }

        if (data === true) {
          router.replace(`/job/post/confirmation?&title=${title}&id=${jobId}&pay_job_post_tx=${payJobPostWithSplTokenTx}&payment_method=code`);
          // Include something at the server
          // router.replace(`/job/post/confirmation?&title=${title}&id=${jobId}&pay_job_post_tx=${payJobPostWithSplTokenTx}`);
        } else {
          // Use snackbar instead later
          alert("The payment was ok but something went wrong at the server");
        }

      } else {
        console.error("rpc.payJobPost error");
      }

    } catch (error) {
      if (error.message === "Cannot read properties of undefined (reading 'publicKey')") {
        console.log("Job post payment with CODE error");
        console.error(error.message);
      } else {
        showErrorMessage(
          "Job post payment with CODE error",
          error.message,
        );
      }
      
    }
  };

  return (
    <>
      {/* {connected && <SolanaNotification title={notificationMessage} message={`Your wallet is ${walletAddress.substring(0, 4)}...${walletAddress.substring(walletAddress.length - 4, walletAddress.length)}`} />} */}
      {/* {connected && <SolanaNotification />} */}
      {/* {jobPostPaymentConfirmed && <SolanaNotification walletAddress={userPublicKey.toBase58()} message={notificationMessage} />} */}

      <JobPostFormHeader activeStep={2} jobId={jobId} jobStatus={"Draft"} />

      <JobPostPaymentContainer>

        {!userPublicKey && <CentralizeChildren $style={{
          marginTop: "1rem",
        }}><WalletMultiButton
            startIcon={<SolanaImage />}
          /></CentralizeChildren>}

        {userPublicKey && <JobPostPaymentWrapper>
          <JobPostPaymentWrapper>
            <JobPostPaymentCard
              selected={true}
              data={method === "code" ? jobPlans[0] : jobPlans[1]}
              method={method}
            />
          </JobPostPaymentWrapper>

          {method === "solana" && <SolanaPriceCard 
            solanaPrice={(solanaPrice * 1).toFixed(2)}
          />}

          {method === "code" && <CodePriceCard
            codePrice={(codePrice * 1).toFixed(8)}
            isJobPostPayment={true}
          />}

          <JobPostPaymentSection>
            <JobPostPaymentHeader>
              <PaymentIntro>
                <img
                  src={method === "code" ? "/static/logo.png" : "/static/logos/solana.png"}
                  style={{
                    width: "1.5rem",
                    height: "1.5rem",
                    marginRight: "0.5rem",
                  }}
                />
                Payment
              </PaymentIntro>
            </JobPostPaymentHeader>

            {/* Include checkout relevant code */}
            {method === "solana" ? <JobPostSolanaPaymentCheckout
              job_post_price_in_solana={jobPostPrices?.job_post_price_in_solana}
              userSolanaBalance={userSolanaBalance}
              jobPostSolanaPayment={jobPostSolanaPayment}
              last_updated={jobPostPrices?.last_updated}
              disableJobPostSolanaPaymentButton={disableJobPostSolanaPaymentButton}

              solanaPrice={solanaPrice}
              setSolanaPrice={setSolanaPrice}

            /> : <JobPostCodePaymentCheckout
              // Should be job_post_price_in_code
              job_post_price_in_code={jobPostPrices?.job_post_price_in_code}
              job_post_price_in_code_with_discount={jobPostPrices?.job_post_price_in_code_with_discount}
              userCodeTokenBalance={userCodeTokenBalance}
              jobPostCodePayment={jobPostCodePayment}
              last_updated={jobPostPrices?.last_updated}
              disableJobPostCodePaymentButton={disableJobPostCodePaymentButton}

              codePrice={codePrice} 
              setCodePrice={setCodePrice}
            />}
          </JobPostPaymentSection>

        </JobPostPaymentWrapper>}

      </JobPostPaymentContainer>

      <JobPostPaymentError 
        showError={showError}
        
        title={errorTitle}
        message={errorMessage}
        button={errorButton}

        open={showError}
        closeModal={closeErrorMessage}
      />
    </>
  );
};

export default JobPostPayment;