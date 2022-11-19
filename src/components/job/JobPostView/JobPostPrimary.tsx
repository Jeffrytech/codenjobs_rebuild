import React, { useState } from "react";

import { useRouter } from "next/router";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

import ShareIcon from "@material-ui/icons/Share";

import {
  // JobPostVisibilityWrapper,

  JobHeader,
  JobTitle,
  // JobFeaturesContainer,
  // JobFeatureWrapper,
  // JobFeature,
  JobDescription,
  JobShareWrapper,
  ShareTextWrapper,
  // HowToApplyContainer,
  // HowToApply,
  // JobLink,
  // JobPostSkillContainer,

  // CompanyWebsite,
  // JobPostSkill,
} from "./JobPostPrimaryCSS";

// import { useAuth } from "../../../contexts/auth";

// import { Chip } from "@material-ui/core";

// import { JobPostTime } from "../JobPostPreview/JobPreviewCSS";
// import { COMPANY_WEBSITE } from "../../../config/environment";

import JobPostSkills from "../JobPostSkills";
import JobFeatures from "../JobFeatures";
import How from "../How";
import PostedBy from "../../PostedBy";
import PostRenderer from "../../markdown/PostRenderer";
import {
  COMPANY_NAME,
  COMPANY_WEBSITE,
  HTTPS,
} from "../../../config/environment";
import { Avatar, Tooltip } from "@material-ui/core";
import SocialShare from "../../SocialShare";
import JobPrimaryWrapper from "../../JobPrimaryWrapper";

const JobPostPrimary = ({
  company_name,
  company_website,

  username,

  job_id,

  job_title,

  job_category,
  job_location,
  job_how_to_apply,

  job_salary,
  job_pay_in_cryptocurrency,

  job_published_at,

  //   job_created_at,
  // job_updated_at,

  job_description,

  job_type,
  job_skills,
  job_status,

  jobPostValid, // Use this later when you update the backend code with Solana mainnet and ready for production
}) => {
  const router = useRouter();

  const [showShare, setShowShare] = useState(false);
  const handleClose = () => {
    setShowShare(false);
  };

  // if (!jobPostValid) {
  //   router.replace("/jobs");
  //   return null;
  // }

  //   alert(job_status);

  // This doesn't work for whatever reason
  // const returnToJobsPageList = ["Draft", "Hold", "Review", "Cancelled", "Closed"];
  //   if (job_status in returnToJobsPageList) {
  //     router.replace("/jobs");
  //     return null;
  //   }

  if (job_status === "Draft") {
    router.replace("/jobs");
    return null;
  }
  if (job_status === "Hold") {
    router.replace("/jobs");
    return null;
  }
  if (job_status === "Review") {
    router.replace("/jobs");
    return null;
  }
  if (job_status === "Closed") {
    router.replace("/jobs");
    return null;
  }

  // const format = "YYYY-MM-DD hh:mm:ss";

  // const currentTime = moment.utc();

  // const jobPostDuration = 28 // 'd', 28 days (4 weeks)
  // const jobPostStartTime = moment.utc(job_published_at).format(format);
  // const jobPostEndTime = moment.utc(job_published_at).add(jobPostDuration, 'd').format(format);
  // // alert(currentTime);
  // // alert(jobPublishedTime);
  // // alert(jobEndTime);

  // if (!currentTime.isBetween(jobPostStartTime, jobPostEndTime)) {
  //   // router.replace("/jobs");
  //   // window.location.href = "/jobs";
  //   return null;
  // }

  return (
    <JobPrimaryWrapper>
      <JobHeader>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <PostedBy username={username} published_at={job_published_at} />

          <JobShareWrapper
            onClick={() => {
              setShowShare(true);
            }}
          >
            <Tooltip title="Share this job post" arrow>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  // color: blue,
                }}
              >
                <ShareIcon
                  style={{
                    fontSize: "1rem",
                  }}
                />
                <ShareTextWrapper>Share</ShareTextWrapper>
              </div>
            </Tooltip>
          </JobShareWrapper>
        </div>

        <JobTitle>{`${job_title}`}</JobTitle>

        <JobFeatures
          job_category={job_category}
          job_type={job_type}
          job_location={job_location}
          job_salary={job_salary}
          job_pay_in_cryptocurrency={job_pay_in_cryptocurrency}
          isPreview={false}
        />

        {/* <JobShareWrapper
          onClick={() => {
            setShowShare(true);
          }}
        >
          <Tooltip title="Share this job post" arrow >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                // color: blue,
              }}
            >
              <ShareIcon
                style={{
                  fontSize: "1rem",
                }}
              />
              <span 
                style={{
                  marginLeft: "0.21rem",
                }}
              >
                Share
              </span>
            </div>
          </Tooltip>
        </JobShareWrapper> */}
      </JobHeader>
      {/* https://github.com/remarkjs/react-markdown */}
      {/* https://github.com/remarkjs/react-markdown#appendix-b-node-types */}

      <JobDescription>
        <PostRenderer input={job_description} />
      </JobDescription>

      <How
        company_name={company_name}
        company_website={company_website}
        job_how_to_apply={job_how_to_apply}
      />

      <JobPostSkills job_skills={job_skills} isPreview={false} />

      {/* <JobShare
        title={job_title}
        url={`https://${COMPANY_WEBSITE}/job?&title=${job_title.split(" ").join("-")}&id=${job_id}`}
      /> */}

      <Dialog
        open={showShare}
        onClose={handleClose}
        aria-labelledby="job-post-show-social-share-buttons"
      >
        <DialogTitle id="job-post-show-social-share">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "1rem",
            }}
          >
            <Avatar alt={COMPANY_NAME} src={"/static/logo.svg"} />
            <span
              style={{
                marginLeft: "0.5rem",
              }}
            >
              Share this job post
            </span>
          </div>
        </DialogTitle>

        <DialogContent>
          <section
            style={{
              display: "flex",
              alignItems: "center",
              // justifyContent: "center",
              justifyContent: "space-around",
              margin: "0 1.5rem",
            }}
          >
            <SocialShare
              title={`${job_title} - Code&Jobs`}
              // Update this later?
              // This will work at the production anyway.
              url={`${HTTPS}${COMPANY_WEBSITE}/job?&title=${job_title.replaceAll(
                " ",
                "-"
              )}?&id=${job_id}`}
            />
          </section>

          {/* <DialogContentText>
            Share this profile with others
          </DialogContentText> */}
        </DialogContent>

        <DialogActions>
          <Button
            // disabled={isSubmitting}
            onClick={handleClose}
            color="primary"
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </JobPrimaryWrapper>
  );
};

export default JobPostPrimary;

// {/* <div
//             dangerouslySetInnerHTML={{
//               __html: job_description,
//             }}
//           /> */}
