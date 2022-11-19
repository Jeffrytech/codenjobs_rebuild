import React from "react";
import Image from "next/image";

import emailBoxWaterSplash from "../../../images/email/message_box_water_splash.png";
import { Box, Typography } from "@mui/material";

import { black, solana } from "../../../design/colors";

import ExternalLink from "../../ExternalLink";
import SolanaImage from "../../../crypto/SolanaImage";
import { SOLSCAN } from "../../../config/environment";

import {
  JobPostConfirmationButton,
  JobPostConfirmationContainer,
} from "./JobPostConfirmationCSS";
import { MOBILE } from "../../../design/breakpoints";

const JobPostConfirmation = ({
  id,
  user,

  title,
  payment_method, // code || solana
  // payment_method = "code",

  pay_job_post_tx,
}) => {
  return (
    <>
      {/* <JobPostConfirmationHeader
        id={id}
        user={user}
        title={title}
        pay_job_post_tx={pay_job_post_tx}
        // job_status={job_status}
      /> */}

      <JobPostConfirmationContainer>
        <Box sx={{ width: "20rem" }}>
          <Image src={emailBoxWaterSplash} alt="water splash image" />
        </Box>

        <Typography
          sx={{
            fontSize: "2rem",
            margin: "1rem",
            textAlign: "center",

            [MOBILE]: {
              fontSize: "1.5rem",
            },
          }}
        >
          Thank you {user.username}, the payment with{" "}
          <span
            style={{
              color: payment_method === "solana" ? solana : black,
            }}
          >
            {payment_method === "solana" ? (
              <SolanaImage />
            ) : (
              <img
                src="/static/logo.svg"
                style={{
                  width: "1.25rem",
                  height: "1.25rem",
                }}
              />
            )}{" "}
            {payment_method === "solana" ? "Solana" : "CODE"}
          </span>{" "}
          was done!
        </Typography>
        <Typography
          sx={{
            fontWeight: "bold",
            margin: "0 1rem",

            textAlign: "center",
          }}
        >
          An email with the details of{" "}
          <ExternalLink href={`${SOLSCAN}/tx/${pay_job_post_tx}`}>
            <span
              style={{
                color: solana,
              }}
            >
              this transaction
            </span>
          </ExternalLink>{" "}
          will be sent to you shortly.
        </Typography>
        <ExternalLink href={`/job?&title=${title}&id=${id}`}>
          <JobPostConfirmationButton>
            Read your job post
          </JobPostConfirmationButton>
        </ExternalLink>
      </JobPostConfirmationContainer>
    </>
  );
};

export default JobPostConfirmation;
