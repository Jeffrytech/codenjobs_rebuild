import React from "react";
import Image from 'next/image';

import emailMessageBoxWaterSplash from '../../../images/email/message_box_water_splash.png';
import { Box, Typography } from '@mui/material';

import ExternalLink from "../../ExternalLink";

import {
  JobRePostConfirmationButton,
  // JobRePostConfirmationButton,
  JobRePostConfirmationContainer,
} from "./JobRePostConfirmationCSS";
import { MOBILE } from "../../../design/breakpoints";

const JobRePostConfirmation = ({
  id,
  user,

  title,
  // payment_method, // code || solana
  
  edit_job_post_tx,
}) => {
  return (
    <>
      <JobRePostConfirmationContainer>
        <Box sx={{ width: "20rem" }} >
          <Image src={emailMessageBoxWaterSplash} alt="water splash image" />
        </Box>

        <Typography 
          sx={{ 
            fontSize: "2rem", 
            margin: "1rem",
            textAlign: "center",

            [MOBILE]: {
              fontSize: "1.5rem",
            }
          }}
        >
          Thank you {user.username}, the repost was done!
        </Typography>
        <Typography sx={{ 
          fontWeight: "bold", 
          margin: "0 1rem",

          textAlign: "center",
        }}>
          It will be reviewed by admins and public again if there weren't any issue
        </Typography>

        <ExternalLink href={`/user/${user.username}/jobs?id=${id}`} >
          <JobRePostConfirmationButton>
            {/* Your Job Post Status  */}
            {/* Your Job Post Details */}
            Your Job Post In Review
          </JobRePostConfirmationButton>
        </ExternalLink>
      </JobRePostConfirmationContainer>
    </>
  );
};

export default JobRePostConfirmation;