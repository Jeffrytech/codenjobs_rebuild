import React from "react";
import Link from "next/link";

import { styled } from "baseui";

import BackgroundColor from "../../../BackgroundColor";

import clsx from "clsx";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

// import SettingsIcon from "@material-ui/icons/Settings";
// import CreateIcon from "@material-ui/icons/Create";
import VisibilityIcon from "@material-ui/icons/Visibility";
// import PaymentIcon from "@material-ui/icons/Payment";

// eslint-disable-next-line no-unused-vars
import { StepIconProps } from "@material-ui/core";

import {
  useColorlibStepIconStyles,
  useStyles,

  JobPostConfirmationHeaderContainer,
  JobPostConfirmationHeaderTitle,
} from "./JobPostFormHeaderCSS";
import { shortenAddress } from "../../../../crypto/utils";
import SolanaImage from "../../../../crypto/SolanaImage";
import CentralizeChildren from "../../../CentralizeChildren";
import { solana } from "../../../../design/colors";
import ExternalLink from "../../../ExternalLink";
import { 
  SOLSCAN 
  // API, JOB_SOLANA_CONTRACT,
} from "../../../../config/environment";

const JobPostLinkText = styled("span", {
  color: "rgb(17, 160, 245)",
  cursor: "pointer",
});

function ColorlibStepIcon(props: StepIconProps) {
  const classes = useColorlibStepIconStyles();
  const { completed } = props;

  const icons: { [index: string]: React.ReactElement } = {
    1: <VisibilityIcon />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
};

function JobSteppers({ id, title }) {
  const classes = useStyles();

  // console.log("id");
  // console.log(id);

  return (
    <Link href={`/job?&title=${title}&id=${id}`} >
      <div className={classes.root}>
        <Stepper alternativeLabel activeStep={1} >
          <Step>
            <StepLabel StepIconComponent={ColorlibStepIcon}>
              <JobPostLinkText>View your paid job post</JobPostLinkText>
            </StepLabel>
          </Step>
        </Stepper>
      </div>
    </Link>
  );
}
//

const JobPostConfirmationHeader = ({
  id,
  user,
  title,
  
  pay_job_post_tx,
  // job_status
}) => {
  // alert(id);
  // alert(user.username);

  return (
    <BackgroundColor>
      <JobPostConfirmationHeaderContainer>
        <JobPostConfirmationHeaderTitle>Thank you {user.username}!</JobPostConfirmationHeaderTitle>
        <JobSteppers id={id} title={title} />
        <section>
          
          <ExternalLink
            href={`${SOLSCAN}/tx/${pay_job_post_tx}`}
          >
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              textAlign: "center",
              width: "100%",
              // display: "block",
              /* margin-top: 1rem; */
              color: solana,
              // opacity: "0.5",
              // textDecoration: "underline"
            }}>
              <SolanaImage />
              {/* Use job_status to show which message to show. */}
              {/* It will be visible for others also after we confirm your post. */}
              {/* If we find any issue with the payment or post, it could be suspended. */}
              {/* If we find any issue with the payment or post, it could be unpublished. */}
              {/* If we find any issue with the payment or post, it could be unpublished. */}
              {/* If we find any issue with the payment or post, we will contact you. */}
              <span style={{
                marginLeft: "0.25rem",
              }}>
                {/* If we find any issue with the payment or post, we will notify you. */}
                If we find any issue, we will notify you
                {/* If we find any issue, we will notify you. */}
              </span>
              {/* {shortenAddress(tx)} */}
              {/* It is published, but still needs for our confirmation. */}
            </div>
          </ExternalLink>

        </section>
      </JobPostConfirmationHeaderContainer>
    </BackgroundColor>
  );
};

export default JobPostConfirmationHeader;