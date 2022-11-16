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
// import PaymentIcon from "@material-ui/icons/Payment";
// import PublishIcon from '@material-ui/icons/Publish';
import ScreenShareIcon from '@material-ui/icons/ScreenShare';

// eslint-disable-next-line no-unused-vars
import { StepIconProps } from "@material-ui/core";

import {
  ColorlibConnector,
  useColorlibStepIconStyles,
  useStyles,

  BlogPostFormHeaderContainer,
  BlogPostFormHeaderTitle,
} from "./BlogPostFormHeaderCSS";

function ColorlibStepIcon(props: StepIconProps) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons: { [index: string]: React.ReactElement } = {
    1: <CreateIcon />,
    2: <VisibilityIcon />,
    // 3: <ScreenShareIcon />,
    // 3: <PublishIcon />,
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

function getSteps(
  blogId: string, 
  // blogStatus: string
) {
  // alert(blogId);

  // Remove publish part?

  // {/* Should be differnt depending on the blog status? */ }
  // Refer to dev.to
  // return [blogId ? "Edit the blog post" : "Create a new blog post", "Preview", "Publish"];
  return [blogId ? "Edit the blog post" : "Create a new blog post", `Preview`];
  // return [blogId ? "Edit the blog post" : "Create a new blog post", `Preview`, "Publish"];
  // return [blogId ? "Edit the blog post" : "Create a new blog post", `Preview your ${status === "Draft" ? "draft" : "post"}`, "Publish"];
}

function JobSteppers({
  activeStep,
  blogId,
  // blogStatus,
}) {
  const classes = useStyles();
  const steps = getSteps(
    blogId, 
    // blogStatus
  );

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

const BlogPostFormHeader = ({
  activeStep,
  blogId,
  // blogStatus,
  // newBlog,
}) => {
  return (
    <BackgroundColor>
      <BlogPostFormHeaderContainer>
        <BlogPostFormHeaderTitle>Show your skills to the largest code community on the web</BlogPostFormHeaderTitle>
        {/* <BlogPostFormHeaderTitle>Reach the largest code community on the web</BlogPostFormHeaderTitle> */}
        <JobSteppers 
          activeStep={activeStep} 
          blogId={blogId} 
          // blogStatus={blogStatus} 
        />
      </BlogPostFormHeaderContainer>
    </BackgroundColor>
  );
};

export default BlogPostFormHeader;