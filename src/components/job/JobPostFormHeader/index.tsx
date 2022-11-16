import React from "react";

import BackgroundColor from "../../BackgroundColor";
//

import clsx from "clsx";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

// import SettingsIcon from "@material-ui/icons/Settings";
import CreateIcon from "@material-ui/icons/Create";
import VisibilityIcon from "@material-ui/icons/Visibility";
import PaymentIcon from "@material-ui/icons/Payment";

// eslint-disable-next-line no-unused-vars
import { StepIconProps } from "@material-ui/core";

import {
  ColorlibConnector,
  useColorlibStepIconStyles,
  useStyles,

  JobPostFormHeaderContainer,
  JobPostFormHeaderTitle,
} from "./JobPostFormHeaderCSS";
import PrimarySpinner from "../../spinners/PrimarySpinner";
import CentralizeChildren from "../../CentralizeChildren";

function ColorlibStepIcon(props: StepIconProps) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons: { [index: string]: React.ReactElement } = {
    1: <CreateIcon />,
    2: <VisibilityIcon />,
    3: <PaymentIcon />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
};

function getSteps(jobId: string, jobStatus: string) {
  // alert(jobId);

  // return [jobId ? "Edit the job post" : "Create a new job post", "Preview your ad", "Purchase"];
  return [jobId ? "Edit the job post" : "Create a new job post", "Preview your ad", jobStatus === "Hold" ? "Repost" :"Payment"];
  // return [jobId ? "Edit" : "Create", "Preview your ad", "Purchase"];
}

function JobSteppers({
  activeStep,
  jobId,

  jobStatus,
}) {
  const classes = useStyles();
  const steps = getSteps(jobId, jobStatus);

  return (
    <div className={classes.root}>
      <Stepper style={{
        padding: "1rem 0",
      }} alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}
//

const JobPostFormHeader = ({
  activeStep,
  jobId,

  jobStatus,
}) => {
  return (<BackgroundColor>
    {/* <JobPostFormHeaderContainer>
      {(jobStatus === null && jobId !== null) ? <CentralizeChildren><PrimarySpinner /></CentralizeChildren> : <div><JobPostFormHeaderTitle>
        {jobStatus === "Hold" ? "Please, edit and repost your job ad" : "Reach the largest code community on the web"}
      </JobPostFormHeaderTitle>
      <JobSteppers activeStep={activeStep} jobId={jobId} /></div>} */}
    <JobPostFormHeaderContainer>
      <JobPostFormHeaderTitle>
        {jobStatus === "Hold" ? "Please, edit and repost your job ad" : "Reach the largest code community on the web"}
      </JobPostFormHeaderTitle>
      <JobSteppers activeStep={activeStep} jobId={jobId} jobStatus={jobStatus} />
    </JobPostFormHeaderContainer>
  </BackgroundColor>);
};

export default JobPostFormHeader;