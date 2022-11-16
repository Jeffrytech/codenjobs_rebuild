import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import CreateIcon from "@material-ui/icons/Create";

import JobPostFormHeader from "../JobPostFormHeader";

import { findJobCompanyByIdForOwner } from "../../../api/privateJob";

import JobPreview from "./JobPreview";
import CompanyPreview from "./CompanyPreview";

import {
  PreviewIntro,

  JobPostPreviewContainer,
  JobPostPreviewWrapper,
  JobPostPreviewSection,

  JobPreviewHeader,
  JobEditButtonWrapper,

  PreviewTypeRadioGroupWrapper,

  ContinueButtonWrapper,
  CodeContinueButton,
  SolanaContinueButton,
} from "./JobPostPreviewCSS";

import Link from "next/link";
import { Tooltip } from "@material-ui/core";
import { findJobStatusById } from "../../../api/job";
import SolanaImage from "../../../crypto/SolanaImage";

// import {
//   CompanyLogo,
//   CompanyName,
//   CompanyDescription,
// } from "./CompanyPreviewCSS";
// import { CentralizeChildren } from "../Centralize";

// import { API } from "../../../config/environment";

const CurrentJobPostPreview = ({
  previewType,
  preview,
}) => {
  const {
    job_title,
    job_category,

    job_type,
    job_location,

    job_salary,
    job_pay_in_cryptocurrency,

    job_description,

    username,

    job_how_to_apply,

    job_skills,

    company_logo,
    company_name,
    company_location,
    company_description,
    company_website,
  } = preview;

  if (previewType === "job") {
    return (
      <JobPreview
        company_name={company_name}
        company_website={company_website}
        
        username={username}
        job_title={job_title}
        job_category={job_category}
        // job_id,
        job_location={job_location}
        job_how_to_apply={job_how_to_apply}
        
        job_salary={job_salary}
        job_pay_in_cryptocurrency={job_pay_in_cryptocurrency}

        job_description={job_description}
        job_type={job_type}
        job_skills={job_skills}
      />
    );
  } else {
    // return null;
    return (
      <CompanyPreview
        company_logo={company_logo}
        company_website={company_website}
        company_name={company_name}
        company_location={company_location}
        company_description={company_description}
        // job_how_to_apply={job_how_to_apply}
      />
    );
  }
};

const JobPostPreview = ({
  id,
  user,
  
  title,
}) => {
  const router = useRouter();
  const [previewType, setPreviewType] = useState("job");

  const [jobStatus, setJobStatus] = useState(null);

  const [preview, setPreview] = useState({
    company_logo: null,
    company_name: "",
    company_location: "",
    
    company_description: "",
    
    company_website: "https://www.codenjobs.com/",
    
    username: "", //  Send it from the server?

    job_title: "",
    job_category: "",

    job_type: "",
    job_location: "",

    job_salary: "",
    job_pay_in_cryptocurrency: false,
    
    job_description: "",
    
    job_how_to_apply: "https://www.codenjobs.com/",
    
    job_skills: null,

    // job_status: "Draft",
  });

  useEffect(() => {
    if (id !== null) {
      findJobStatusById(id)
        .then(({ data: status, error }) => {
          // Handle error later
          if (status === "Draft") {
            setJobStatus(status);
            return;
          } else if (status === "Hold") {
            setJobStatus(status);
            return;
          } else if (status === "Review") {
            window.location.href = "/job/post";
          } else if (status === "Paid") {
            // router.replace(`/job?&id=${id}`);
            window.location.href = "/job/post";
          } else if (status === "Confirmed") {
            // router.replace(`/job/post/confirmation?&id=${id}`);
            window.location.href = `/job/post/confirmation?&id=${id}`;
          } else if (status === "Closed") {
            // router.replace("/job/post");
            window.location.href = "/job/post";
          } else {
            // router.replace("/job/post");
            window.location.href = "/job/post";
          }

          // router.replace(`/job/post/confirmation?&id=${id}`);

          // if (error.response.data.detail === "no_job") {
          //   router.replace("/job/post");
          // }
        });
    }
  }, []);

  useEffect(() => {
    findJobCompanyByIdForOwner(id)
      .then(({ data }) => {
        if (data !== null) {
          // Send it from the server?
          const isOwner = user && (user.username === data.username);

          if (isOwner) {
            // console.log("data");
            // console.log(data);

            setPreview(data);
          }
        }
      })
      .catch(e => {
        console.log(e);
      });
  }, []);

  return (
    <>
      <JobPostFormHeader activeStep={1} jobId={id} jobStatus={jobStatus} />

      {<JobPostPreviewContainer>
        <JobPostPreviewWrapper>
          <JobPostPreviewSection>
            {/* Extract CSS */}
            <JobPreviewHeader>
              <PreviewIntro>
                Preview your job post
              </PreviewIntro>
              <Link href={`/job/post?&title=${title}&id=${id}`} >
                {/* <Link href={`/job/post?&id=${id}`} > */}
                <Tooltip title="Update the job post" arrow >
                  <JobEditButtonWrapper>
                    <CreateIcon
                      style={{
                        fontSize: "1rem"
                      }}
                    />
                    <span style={{
                      marginLeft: "0.25rem",
                    }}>
                      Edit
                    </span>

                  </JobEditButtonWrapper>
                </Tooltip>
              </Link>
            </JobPreviewHeader>

            <PreviewTypeRadioGroupWrapper>
              <RadioGroup
                row
                aria-label="previewType"
                name="previewType"
                value={previewType}
                onChange={e => {
                  setPreviewType(e.target.value);
                }}
              >
                <FormControlLabel value="job" control={<Radio />} label="Job" />
                <FormControlLabel value="company" control={<Radio />} label="Company" />
              </RadioGroup>
            </PreviewTypeRadioGroupWrapper>

            {preview && <CurrentJobPostPreview
              previewType={previewType}
              preview={preview}
            />}

            {/* This doesn't render PayPal button */}
            {/* <Link href={`/job/post/payment?&id=${id}`} > */}

            {jobStatus !== "Hold" && <ContinueButtonWrapper>
              <a
                style={{
                  width: "100%",
                  textDecoration: "none",
                }}
                href={`/job/post/payment?&method=code&title=${title}&id=${id}`}
                rel="noopener noreferrer"
              >
                <CodeContinueButton>
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
                    {/* Post your job for {JOB_POST_CODE_DISCOUNT_PRICE} */}
                    {/* Post your job ({JOB_POST_CODE_DISCOUNT_PRICE}) */}
                    Pay with CODE (5% Discount)
                  </span>
                </CodeContinueButton>
              </a>
            </ContinueButtonWrapper>}

            <ContinueButtonWrapper>
              <a
                style={{
                  width: "100%",
                  textDecoration: "none",
                }}
                href={`/job/${jobStatus === "Hold" ? "repost" : "post"}/payment?&method=solana&title=${title}&id=${id}`}
                rel="noopener noreferrer"
              >
                <SolanaContinueButton>
                  <SolanaImage />
                  <span style={{
                    marginLeft: "0.5rem",
                  }} >
                    {/* {jobStatus === "Hold" ? "Repost your job ad" : `Post your job (${JOB_POST_PRICE})`} */}
                    {jobStatus === "Hold" ? "Repost your job ad" : `Pay with Solana`}
                  </span>
                  {/* Publish for $299 */}
                  {/* Purchase your job post for $299 */}
                </SolanaContinueButton>
              </a>
            </ContinueButtonWrapper>

          </JobPostPreviewSection>
        </JobPostPreviewWrapper>
      </JobPostPreviewContainer>}
    </>
  );
};

export default JobPostPreview;