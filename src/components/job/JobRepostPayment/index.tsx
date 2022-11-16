import React, { useEffect } from "react";
import { useRouter } from "next/router";

import { PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";
import {
  Program,
  // Provider, web3
} from '@project-serum/anchor';

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet as useSolanaWallet } from "@solana/wallet-adapter-react";

import JobPostFormHeader from "../JobPostFormHeader";

// import PayPalButton from "./PayPalButton";

// import {
//   startPaypalTransactionForJobPost,
//   completePaypalTransactionForJobPost,
// } from "../../../../api/pay/privatePayPal";

import {
  PaymentIntro,

  JobPostPreviewContainer,
  JobPostPreviewWrapper,
  JobPostPreviewSection,

  JobPreviewHeader,
  // JobEditButtonWrapper,

  // PreviewTypeRadioGroupWrapper,

  // ContinueButtonWrapper,
  // ContinueButton,

  // FreePaymentButton,
  // JobPostPaymentButton,
  SolanaBuyButton,
  JobRepostPaymentButton,
  WalletRequirement,
} from "./JobRepostPaymentCSS";

// import Link from "next/link";
// import { Tooltip } from "@material-ui/core";

// import { freeJobPayment } from "../../../api/pay/testPay";
import { findJobStatusById } from "../../../api/job";
import CentralizeChildren from "../../CentralizeChildren";
import { JOB_PUBLIC_KEY, JOB_SOLANA_CONTRACT } from "../../../config/environment";
import SolanaImage from "../../../crypto/SolanaImage";

import idl from '../../../crypto/solana/contracts/job/idl.json';
import { shortenAddress, userProvider } from "../../../crypto/utils";
import { solanaJobPostEdit } from "../../../api/pay/privateSolana";
import { findJobPostPublicKeyById } from "../../../api/privateJob";
import { useConnection } from "@solana/wallet-adapter-react";
import { useSolanaNotification } from "../../../contexts/solanaNotification";
import { useErrorNotification } from "../../../contexts/errorNotification";
import ViewOnSolscan from "../../../crypto/ViewOnSolscan";
import ExternalLink from "../../ExternalLink";

const JobPostPayment = ({
  jobId,
  title,
  user,
}) => {
  const { username } = user;

  const router = useRouter();
  const userSolanaWallet = useSolanaWallet();
  // console.log("userSolanaWallet");
  // console.log(userSolanaWallet);

  const { connection: solanaConnection } = useConnection();
  const { publicKey: userPublicKey, connected, wallet } = userSolanaWallet;
  // @ts-ignore
  const { setSolanaNotification } = useSolanaNotification();
  // @ts-ignore
  const { errorNotification, setErrorNotification } = useErrorNotification();

  useEffect(() => {
    if (jobId !== null) {
      // setErrorNotification({
      //   ...errorNotification,
      //   show: true,
      // });

      findJobStatusById(jobId)
        .then(({ data: status, error }) => {
          if (status === "Hold") {
            if (userPublicKey === null) {
              const solanaWalletButton = document.getElementsByClassName("wallet-adapter-button ")[0];
              // // alert("Connect your Solana wallet to use this.")
              // @ts-ignore
              solanaWalletButton.click();
            }
          } else if (status === "Confirmed") {
            router.replace(`/job/repost/confirmation?&id=${jobId}`);
          } else {
            router.replace("/job/post");
          }

          // if (error.response.data.detail === "no_job") {
          //   router.replace("/job/post");
          // }
        });
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

  useEffect(() => {
    if (userPublicKey !== null) {
      solanaConnection.getBalance(userPublicKey).then((balance) => {
        const currentSolanaBalance = balance / LAMPORTS_PER_SOL;

        // TODO
        // Find correct cost and use here?
        if (currentSolanaBalance == 0) {
          // setDisableJobPostSolanaPaymentButton(true);

          setErrorNotification({
            ...errorNotification,
            show: true,

            title: "Insufficient Solana Balance",
            message: "Please, use a wallet with enough Solana balance",
            button: <ExternalLink
              // Use another referral instead
              // href={FTX_RFERRAL}
            >
              <SolanaBuyButton>
                <SolanaImage />
                <span style={{
                  marginLeft: "0.5rem",
                }} >
                  Buy Solana
                </span>
              </SolanaBuyButton>
            </ExternalLink>
          });

          // showErrorMessage(
          //   "Insufficient Solana Balance",
          //   `The current job post price is ${jobPostPrices.job_post_price_in_solana.toFixed(2)} SOL while your balance is ${currentSolanaBalance.toFixed(2)} SOL. Please buy it more first.`,
          //   <ExternalLink
          //     href={FTX_RFERRAL}
          //   >
          //     <SolanaBuyButton>
          //       <SolanaImage />
          //       <span style={{
          //         marginLeft: "0.5rem",
          //       }} >
          //         Buy Solana
          //       </span>
          //     </SolanaBuyButton>
          //   </ExternalLink>
          // );
          return;
        }

      });
    }
  }, [userPublicKey]);

  return (
    <>
      <JobPostFormHeader activeStep={2} jobId={jobId} jobStatus={"Hold"} />

      <JobPostPreviewContainer>
        <JobPostPreviewWrapper>
          <JobPostPreviewSection>
            {/* Extract CSS */}
            <JobPreviewHeader>
              <PaymentIntro>
                {/* Repost */}
                Repost Your Job
              </PaymentIntro>
            </JobPreviewHeader>
            
            {/* Find the price is possible for this later? */}
            <WalletRequirement>
              Use the same wallet you used to pay this job post
            </WalletRequirement>

            <CentralizeChildren $style={{
              marginTop: "1rem",
            }}>
              {!userPublicKey ? <WalletMultiButton
                startIcon={<SolanaImage />}
                // className="solana-wallet-button"
                style={{
                  height: "2.5rem",
                  padding: "1rem",
                  fontSize: "0.75rem",
                }}
              /> : <JobRepostPaymentButton onClick={async (e) => {
                e.preventDefault();

                // TODO

                // Test error and solana notifcaiton work with edit
                // Use ErrorNotification at JobPostPayment instead of JobPostPaymentError
                // Test it all again

                // Make a new post and test from hold // Include the modal for warnings instead of alert and connect and confirm pop up instead alert similar to post part

                try {
                  // Include backend relevant code and the end point

                  const { data, error } = await findJobPostPublicKeyById(jobId);

                  if (error) {
                    setErrorNotification({
                      ...errorNotification,
                      show: true,

                      title: "findJobPostPublicKeyById error",
                      message: error.message,
                      button: null,
                    });
                    
                    console.log("findJobPostPublicKeyById error");
                    console.error(error);

                    return;
                  }

                  if (data === null) {
                    // Show the snackbar with no jobPostPublicKey
                    // alert(`No Solana job payment at the server`);

                    setErrorNotification({
                      ...errorNotification,
                      show: true,

                      title: "No Solana job payment",
                      message: "There was no job payment data saved at the server",
                      button: null,
                    });

                    return;
                  }

                  const jobPostPublicKey = data[0];
                  const jobPostUserPublicKey = data[1];

                  if (userPublicKey.toString() !== jobPostUserPublicKey) {
                    // Use the snackbar instead
                    // alert(`Select the Solana wallet ${shortenAddress(jobPostUserPublicKey)} to repost the job ad`);
                    
                    setErrorNotification({
                      ...errorNotification,
                      show: true,

                      title: "Use correct Solana wallet",
                      message: `Please, use "${shortenAddress(jobPostUserPublicKey)}" to repost this job ad instead`,
                      button: null,
                    });

                    userSolanaWallet.disconnect();

                    return;
                  } 
                  
                  // // console.log("jobPostPublicKey");
                  // // console.log(jobPostPublicKey); null || PulbicKey

                  const provider = userProvider(userSolanaWallet);
                  // @ts-ignore
                  // const programID = new PublicKey(idl.metadata.address);
                  const programID = new PublicKey(JOB_SOLANA_CONTRACT);
                  // @ts-ignore
                  const program = new Program(idl, programID, provider);

                  const edit_job_post_tx = await program.rpc.editJobPost({
                    accounts: {
                      job: JOB_PUBLIC_KEY,
                      jobPost: jobPostPublicKey,
                      user: userPublicKey,
                    },
                  });

                  // Show Solana notificaiton here

                  setSolanaNotification({
                    show: true,
                    title: "Repost Transaction Sent",
                    message: <ViewOnSolscan solanaTx={edit_job_post_tx} />
                  });

                  // console.log("edit_job_post_tx");
                  // console.log(edit_job_post_tx);

                  // // // It doesn't work because of async

                  // // // const job = await program.account.job.fetch(JOB_PUBLIC_KEY);
                  // // // const jobPosted = job.posts.includes(jobPostPublicKey);
                  
                  // const reviewJobPost = await program.account.jobPost.fetch(jobPostPublicKey);
                  // const isReview = "Review" in reviewJobPost.jobStatus;

                  if (
                    edit_job_post_tx
                    // isReview
                  ) {
                    const { data, error } = await solanaJobPostEdit(userPublicKey.toString(), edit_job_post_tx, jobId);

                    if (error) {
                      // console.log("solanaJobPostEdit end point error");
                      // console.error(error.message);

                      setErrorNotification({
                        ...errorNotification,
                        show: true,

                        title: "solanaJobPostEdit error",
                        message: `Please, contact admins to set your job post status to Review at the server`,
                        button: null,
                      });

                      return;
                    }

                    if (data === true) {
                      router.replace(`/job/repost/confirmation?&title=${title}&id=${jobId}&edit_job_post_tx=${edit_job_post_tx}`);
                    } else {
                      setErrorNotification({
                        ...errorNotification,
                        show: true,

                        title: "solanaJobPostEdit data",
                        message: `Please, contact admins to set your job post status to Review at the server`,
                      });
                    }

                  } else {
                    // Use this or not?
                    console.error("rpc.editJobPost error");

                    setErrorNotification({
                      ...errorNotification,
                      show: true,

                      title: "rpc.editJobPost error",
                      message: `There was an error with rpc call`,
                    });
                  }

                } catch (error) {
                  // Show snackbar instead
                  // console.log("Solana payment to edit the job post error");
                  // console.error(error.message);

                  setErrorNotification({
                    ...errorNotification,
                    show: true,

                    title: "Solana Payment Error",
                    message: error.message,
                  });
                }
              }}>
                {/* <SolanaImage /> */}
                <span style={{
                  marginLeft: "0.5rem",
                }}>
                  Confirm
                </span>
              </JobRepostPaymentButton>}
            </CentralizeChildren>

            {/* {userPublicKey && <div style={{
              width: "100%",
              marginTop: "1rem",
              marginLeft: "0.5rem",
              marginRight: "0.5rem",
              lineHeight: "1.25rem",
              opacity: 0.5,
            }}>
              It will be public if it passes our confirmation process else we will refund <b>{JOB_POST_PRICE}</b> to your wallet
            </div>} */}

          </JobPostPreviewSection>
        </JobPostPreviewWrapper>
        {/* Remove this later after you include payment relevant code */}
        {/* <section style={{
          height: "7rem",
        }} /> */}
      </JobPostPreviewContainer>
    </>
  );
};

export default JobPostPayment;