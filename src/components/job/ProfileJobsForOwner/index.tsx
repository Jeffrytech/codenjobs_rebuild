
import React, { useState, useEffect } from "react";
import Link from "next/link";

import Select from "react-select";
import { useRouter } from "next/router";

import moment from "moment";

import ErrorIcon from '@material-ui/icons/Error';

import CompanyLogoSide from "../../company/CompanyLogoSide";
import {
  JobHeader, JobListForOwnerHeader, JobPostDetailWrapper, JobPostResubmit, JobPostReview, SolanaJobPostPaymentTx,
} from "./ProfileJobsForOwnerCSS";

import ProfileJobsOwnerButtons from "./ProfileJobsForOwnerButtons";

import { findJobDraftListByOwner, findJobListSolanaByOwner } from "../../../api/privateJob";
// import { UserName } from "../cmp/ProfileUser/another/ProfileUser/ProfileUserCSS";

import ListHeader from "../../SearchList/ListHeader";
// import { JobListHeader } from "../JobList/JobListCSS";
// import Alert from "@material-ui/lab/Alert";

import ProfileJobStatus from "./ProfileJobStatus";

import {
  // ProfileListContainer,
  // ProfileListSection,

  // ProfileListWrapper,
  ProfileListCardContainer,

  CompanyName,
  Title

  // ProfileListSkillContainer,
  // ProfileListSkill,
} from "../../profile/ProfileList/ProfileListCSS";
import ProfileList from "../../profile/ProfileList";
import SearchListSkeleton from "../../SearchList/SearchListSkeleton";
import { findJobStatusLabelValue, jobStatusOptions } from "../../../typeDefinitions/job";
import NoProfileList from "../../NoProfileList";
import JobListSkeleton from "../../profile/JobListSkeleton";
import CentralizeChildren from "../../CentralizeChildren";
import { formatPathTitle } from "../../../title/path";
import SolanaImage from "../../../crypto/SolanaImage";
import { shortenAddress } from "../../../crypto/utils";
import { blue, red, solana } from "../../../design/colors";
import ExternalLink from "../../ExternalLink";
import { SOLSCAN } from "../../../config/environment";
import CompanyLogo from "../../company/CompanyLogo";
import ProfileJobCompanyLogo from "../../company/ProfileJobCompanyLogo";

// Extract this?
const formatProfileJobListTitle = (
  numberOfJobs: Number,
) => {
  // const prefix = "Code";

  let suffix = "Jobs";
  // let suffix = "jobs";
  if (numberOfJobs < 2) {
    suffix = "Job";
  }

  // const jobListTitle = `${numberOfJobs} ${prefix} ${suffix}`;
  const jobListTitle = `${numberOfJobs} ${suffix}`;

  return jobListTitle;
};

// // Should test it work correctly
// // Should work without new Date with sa.func.now()?
// const jobTimeForOwner = (job_published_at, job_updated_at, job_created_at) => {
//   return `${moment.utc(job_published_at || job_updated_at || job_created_at).fromNow()}`;

//   // if (job_published_at !== null) {
//   //   return `Posted ${moment.utc(job_published_at).fromNow()}`;
//   // }

//   // if (job_updated_at !== null) {
//   //   return `Updated ${moment.utc(job_updated_at).fromNow()}`;
//   // }

//   // if (job_created_at !== null) {
//   //   return `Created ${moment.utc(job_created_at).fromNow()}`;
//   // }
// };

// Should include edit and delete.
const ProfileJobsForOwner = ({
  username,
  status,
  id,
}) => {
  // alert("id");
  // alert(id);
  // alert(status);

  const router = useRouter();

  const [jobList, setJobList] = useState(null);

  useEffect(() => {
    
    if (status === null) {
      // alert(status);
      Promise.all([findJobDraftListByOwner(), findJobListSolanaByOwner(null, id)]).then((values) => {
        let { data: draftJobList } = values[0];
        let { data: jobListSolana } = values[1];


        console.log("draftJobList");
        console.log("jobListSolana");
        console.log(draftJobList);
        console.log(jobListSolana);

        // if (draftJobList === null) {
        //   draftJobList = [];
        // }

        // if (jobListSolana === null) {
        //   jobListSolana = [];
        // }

        if (draftJobList.length === 0 && jobListSolana.length === 0) {
          setJobList([]);
          return;
        }

        const jobList = [...draftJobList, ...jobListSolana];

        if (jobList.length > 0) {
          setJobList(jobList.sort(function (x, y) {
            return (new Date(y.job_created_at)).getTime() - (new Date(x.job_created_at)).getTime();
          })); 
        }
      }).catch(error => {
        console.log("error");
        console.error(error);
      });
      
    } else if (status === "Draft") {
      findJobDraftListByOwner()
        .then(({ data }) => {
          // console.log("data");
          // console.log(data);

          // if (data === null) {
          //   setJobList(null);
          //   return;
          // }

          // if (data.length > 0) {
          //   setJobList(data); // return null when there is no job so NoJob part works
          //   return;
          // }
          setJobList(data);
        })
        .catch(error => {
          console.log("error");
          console.error(error);
        });
    } else {
      findJobListSolanaByOwner(status, id)
        .then(({ data }) => {
          // console.log("data");
          // console.log(data);

          // if (data === null) {
          //   setJobList(null);
          //   return;
          // }

          // if (data.length > 0) {
          //   setJobList(data); // return null when there is no job so NoJob part works
          //   return;
          // }
          setJobList(data);
        })
        .catch(error => {
          console.log("error");
          console.error(error);
        });
    }

  }, [status]);

  // console.log(jobList);

  let message = "You don't have any job post.";
  let redirect = "/job/post";

  // hold, review, cancelled, paid, closed
  if (status === "Draft") {
    message = "You don't have any job post draft.";
    redirect = `/user/${username}/jobs`;
  } else if (status === "Paid") {
    message = "You don't have any paid job post for confirmation.";
    redirect = `/user/${username}/jobs`;
  } else if (status === "Confirmed") {
    message = "You don't have any confirmed job post.";
    redirect = `/user/${username}/jobs`;
  } else if (status === "Hold") {
    message = "You don't have any job post on hold by admins.";
    redirect = `/user/${username}/jobs`;
  } else if (status === "Review") {
    message = "You don't have any post for review by admins.";
    redirect = `/user/${username}/jobs`;
  } else if (status === "Closed") {
    message = "You don't have any closed post.";
    redirect = `/user/${username}/jobs`;
  }

  // alert(jobList);

  if (jobList === null) {
    return <ProfileList>
      <JobListSkeleton />
      <JobListSkeleton />
      <JobListSkeleton />
      <JobListSkeleton />
      <JobListSkeleton />
      <JobListSkeleton />
      <JobListSkeleton />
      <JobListSkeleton />
      <JobListSkeleton />
      <JobListSkeleton />
      <JobListSkeleton />
      <JobListSkeleton />
    </ProfileList>;
  }

  if (jobList.length === 0) {
    return <ProfileList>
      <NoProfileList href={redirect} message={message} />
      <JobListSkeleton />
      <JobListSkeleton />
      <JobListSkeleton />
      <JobListSkeleton />
      <JobListSkeleton />
      <JobListSkeleton />
      <JobListSkeleton />
      <JobListSkeleton />
      <JobListSkeleton />
      <JobListSkeleton />
      <JobListSkeleton />
      <JobListSkeleton />
    </ProfileList>;
  }

  return (
    <ProfileList>
      <JobListForOwnerHeader>
        <CentralizeChildren>
          {/* {formatProfileJobListTitle(jobList === [] ? 0 : jobList.length)} */}
          {formatProfileJobListTitle(jobList.length)}
        </CentralizeChildren>

        <div style={{
          marginLeft: "1rem",
          marginRight: "1rem",
          minWidth: "8rem",
        }}>
          <Select
            // id="satus"
            // name="status"

            styles={{
              control: (provided) => ({
                ...provided,
                // none of react-select's styles are passed to <Control />
                border: "2px solid rgb(239, 239, 239)",
                borderRadius: "0.5rem",

                fontFamily: "roboto",

                // marginLeft: "1rem",

                // opacity: "0.7",
              }),
              placeholder: (provided) => ({
                ...provided,
                // backgroundColor: "red",
                marginLeft: "1.75rem",
                opacity: "0.7"
              }),
              input: (provided) => ({
                ...provided,
                // backgroundColor: "blue",
                backgroundImage: "url('/static/logo.png')",
                backgroundRepaet: "no-repeat",
                backgroundSize: "cover",

                width: "1.25rem",
                height: "1.25rem",

                marginRight: "1rem",
              }),
              singleValue: (provided) => ({
                ...provided,
                marginLeft: "1.75rem",
              }),
            }}

            // defaultValue={blogStatusOptions[0]}
            value={findJobStatusLabelValue(status)}

            onChange={({ value }) => {
              // alert(value);
              // console.log(e);
              if (value === null) {
                router.push(`/user/${username}/jobs`);
              } else {
                router.push(`/user/${username}/jobs?&status=${value}`);
              }
            }}

            options={jobStatusOptions}

            // isSearchable={false}

            // placeholder="Status"
          />
        </div>
      </JobListForOwnerHeader>

      {jobList.map(({
        company_name,
        company_logo,
        // username,
        job_title,

        job_created_at,
        job_updated_at,
        job_published_at,

        job_id,
        job_location,
        job_type,
        job_salary,
        job_skills,

        job_status,

        // Solana
        // What to use for this?
        job_post_public_key,
        user_public_key,
        pay_job_post_tx,

        hold_job_post_tx,
        edit_job_post_tx,
          
        paid_to_confirmed_job_post_tx,
        review_to_confirmed_job_post_tx,

        refund_job_post_tx,
        refund_job_post_at,

        authority_close_job_post_tx,
        authority_close_job_post_at,

        solana_payment_method,
      }, index) => {
        // alert(solana_payment_method);

        const draft = job_status === "Draft";
        const paid = job_status === "Paid";
        const hold = job_status === "Hold";
        const review = job_status === "Review";
          
        // const confirmed = job_status === "Confirmed";
        // alert(paid_to_confirmed_job_post_tx);
        const confirmed = paid_to_confirmed_job_post_tx || review_to_confirmed_job_post_tx;
        // alert(confirm_tx);

        const closed = job_status === "Closed";

        const showJobPost = (paid || confirmed) && !closed;

        // alert(moment.utc(new Date(job_created_at)).fromNow());
        // alert(job_updated_at);
        // alert(job_published_at);

        // console.log(job_created_at);

        return (
          <ProfileListCardContainer 
            key={job_id}
            $last={index === jobList.length - 1}
          >
            {company_logo && <Link
              href={`/user/${username}/companies?&company_name=${company_name}`}
              // href={`/jobs?&company_name=${company_name}`}
            >
              <CompanyLogoSide
                src={company_logo || ""}
                alt="logo"
              />
            </Link>}

            <div style={{
              display: "flex",
              marginBottom: "0.25rem",
              // marginBottom: "0.5rem",
            }}>
              <span style={{
                marginRight: "auto",
                opacity: "0.7",
              }} >
                {/* {jobTimeForOwner(job_published_at, job_updated_at, job_created_at)} */}
                {/* Created {moment.utc("2021-08-04T22:32:52.806479").fromNow()} */}
                  Created {moment.utc(job_created_at).fromNow()}
              </span>

              <ProfileJobStatus
                // job_status={"Paid"}
                job_status={job_status}
              />
            </div>

            <JobHeader>

              {/* Should be the link to edit company */}
              <Link href={`/user/${username}/companies?&company_name=${company_name}`} >
                <div style={{
                  display: "flex",
                }}>
                  {company_logo && <ProfileJobCompanyLogo src={company_logo} alt="logo" />}
                  <CompanyName>
                    {company_name}
                  </CompanyName>
                </div>
              </Link>

            </JobHeader>

            <Title 
              $inherit={closed || hold || review}
              onClick={(e) => {
                e.preventDefault();

                // Should handle all these for buttons, time and link etc.
                // DRAFT = "Draft"
                // PAID = "Paid"

                // CONFIRMED = "Confirmed"

                // HOLD = "Hold"
                // REVIEW = "Review"

                // CLOSED = "Closed"

                if (closed) {
                  return;
                }

                if (review) {
                  return;
                }

                if (draft) {
                  router.push(`/job/post/preview?&title=${formatPathTitle(job_title)}&id=${job_id}`);
                } else if (confirmed) {
                  router.push(`/job?&title=${formatPathTitle(job_title)}&id=${job_id}`);
                } else if (paid) {
                  router.push(`/job?&title=${formatPathTitle(job_title)}&id=${job_id}`);
                }
              }} >
              {job_title}
            </Title>

            {showJobPost && <JobPostDetailWrapper>
              <div style={{
                marginRight: "auto",
                opacity: "0.7",
                lineHeight: "1.25rem",
              }} >
                {/* This should work at the frontend */}
                {/* Created {moment.utc(job_created_at).fromNow()} */}
                {/* {moment.utc(job_published_at)} */}
                  🗓️ 
                <span style={{
                  marginLeft: "0.25rem",
                }} >
                  {/* Extract this to variables later? */}
                    It will be public from {moment.utc(job_published_at).format("YYYY-MM-DD")} to {moment.utc(job_published_at).add(28, 'd').format("YYYY-MM-DD")}
                </span>
              </div>
            </JobPostDetailWrapper>}

            {hold && <JobPostResubmit>
              <Link href={`/job/repost?&title=${formatPathTitle(job_title)}&id=${job_id}`}>
                <div style={{
                  display: "flex",
                  alignItems: "center",

                  marginRight: "auto",
                  // opacity: "0.7",
                  lineHeight: "1.25rem",

                  marginLeft: "-0.1rem",
                }} >
                  <ErrorIcon style={{
                    color: blue,
                    width: "1rem",
                  }} />
                  <span style={{
                    marginLeft: "0.25rem",
                    color: blue,
                  }} >
                    {/* Please, submit your job post again */}
                      Please, edit and repost your job ad
                  </span>
                </div>
              </Link>
                
            </JobPostResubmit>}

            {refund_job_post_tx && <JobPostReview>
              <div style={{
                display: "flex",
                alignItems: "center",

                marginRight: "auto",
                opacity: "0.7",
                lineHeight: "1.25rem",

                marginLeft: "-0.1rem",
              }} >
                <ErrorIcon style={{
                  color: red,
                  width: "1rem",
                }} />
                <span style={{
                  marginLeft: "0.25rem",
                  color: red,
                }} >
                    It was refunded by admins at {moment.utc(refund_job_post_at).format("YYYY-MM-DD")}
                </span>
              </div>

            </JobPostReview>}

            {review && <JobPostReview>
              <div style={{
                display: "flex",
                alignItems: "center",

                marginRight: "auto",
                opacity: "0.7",
                lineHeight: "1.25rem",

                marginLeft: "-0.1rem",
              }} >
                <ErrorIcon style={{
                  // color: red,
                  width: "1rem",
                }} />
                <span style={{
                  marginLeft: "0.25rem",
                  // color: red,
                }} >
                    It will be reviewed by admins 
                </span>
              </div>
                
            </JobPostReview>}

            {authority_close_job_post_at && <JobPostDetailWrapper>
              <div style={{
                marginRight: "auto",
                opacity: "0.7",
                lineHeight: "1.25rem",
              }} >
                {/* This should work at the frontend */}
                {/* Created {moment.utc(job_created_at).fromNow()} */}
                {/* {moment.utc(job_published_at)} */}
                  🗓️
                <span style={{
                  marginLeft: "0.25rem",
                }} >
                    Published on {moment.utc(job_published_at).format("YYYY-MM-DD")} and closed on {moment.utc(authority_close_job_post_at).format("YYYY-MM-DD")} by the authority
                </span>
              </div>
            </JobPostDetailWrapper>}

            {(job_post_public_key && !closed) && <JobPostDetailWrapper>
              <ExternalLink
                href={`${SOLSCAN}/account/${job_post_public_key}`}
              >
                <SolanaJobPostPaymentTx>
                  <SolanaImage
                    width="0.75rem"
                    height="0.75rem"
                  />
                  <span style={{
                    marginLeft: "0.25rem",
                  }} >
                    {/* Job: {shortenAddress(job_post_public_key)} */}
                      Job Post: {shortenAddress(job_post_public_key)}
                  </span>
                </SolanaJobPostPaymentTx>
              </ExternalLink>
            </JobPostDetailWrapper>}

            {user_public_key && <JobPostDetailWrapper>
              <ExternalLink
                href={`${SOLSCAN}/account/${user_public_key}`}
              >
                <SolanaJobPostPaymentTx>
                  <SolanaImage
                    width="0.75rem"
                    height="0.75rem"
                  />
                  <span style={{
                    marginLeft: "0.25rem",
                  }} >
                      Payer Wallet: {shortenAddress(user_public_key)}
                    {/* User Wallet: {shortenAddress("8LEaQsb1cCypqaGFQERw9kybV7Bs96EeXqFELafCj6bq")} */}
                    {/* Payer: {shortenAddress(solana_user_public_key)} */}
                    {/* User: {shortenAddress("8LEaQsb1cCypqaGFQERw9kybV7Bs96EeXqFELafCj6bq")} */}
                  </span>
                </SolanaJobPostPaymentTx>
              </ExternalLink>
            </JobPostDetailWrapper>}

            {pay_job_post_tx && <JobPostDetailWrapper>
              <ExternalLink
                href={`${SOLSCAN}/tx/${pay_job_post_tx}`}
              >
                <SolanaJobPostPaymentTx>
                  <SolanaImage 
                    width="0.75rem"
                    height="0.75rem"
                  /> 
                  <span style={{
                    marginLeft: "0.25rem",
                  }} >
                    Payment Tx: {shortenAddress(pay_job_post_tx)} with {solana_payment_method === "Solana" ? "Solana" : "CODE token"}
                  </span>
                </SolanaJobPostPaymentTx>
              </ExternalLink>
            </JobPostDetailWrapper>}

            {hold_job_post_tx && <JobPostDetailWrapper>
              <ExternalLink
                href={`${SOLSCAN}/tx/${hold_job_post_tx}`}
              >
                <SolanaJobPostPaymentTx>
                  <SolanaImage
                    width="0.75rem"
                    height="0.75rem"
                  />
                  <span style={{
                    marginLeft: "0.25rem",
                  }} >
                      Hold Tx: {shortenAddress(hold_job_post_tx)}
                  </span>
                </SolanaJobPostPaymentTx>
              </ExternalLink>
            </JobPostDetailWrapper>}

            {edit_job_post_tx && <JobPostDetailWrapper>
              <ExternalLink
                href={`${SOLSCAN}/tx/${edit_job_post_tx}`}
              >
                <SolanaJobPostPaymentTx>
                  <SolanaImage
                    width="0.75rem"
                    height="0.75rem"
                  />
                  <span style={{
                    marginLeft: "0.25rem",
                  }} >
                      Edit Tx: {shortenAddress(edit_job_post_tx)}
                  </span>
                </SolanaJobPostPaymentTx>
              </ExternalLink>
            </JobPostDetailWrapper>}

            {confirmed && <JobPostDetailWrapper>
              <ExternalLink
                href={`${SOLSCAN}/tx/${confirmed}`}
              >
                <SolanaJobPostPaymentTx>
                  <SolanaImage 
                    width="0.75rem"
                    height="0.75rem"
                  /> 
                  <span style={{
                    marginLeft: "0.25rem",
                  }} >
                    {review_to_confirmed_job_post_tx ? "Review" : "Confirmation"} Tx: {shortenAddress(confirmed)}
                    {/* {review_to_confirmed_job_post_tx && "Review"} Confirmation Tx: {shortenAddress(confirmed)} */}
                  </span>
                </SolanaJobPostPaymentTx>
              </ExternalLink>
            </JobPostDetailWrapper>}

            {refund_job_post_tx && <JobPostDetailWrapper>
              <ExternalLink
                href={`${SOLSCAN}/tx/${refund_job_post_tx}`}
              >
                <SolanaJobPostPaymentTx>
                  <SolanaImage
                    width="0.75rem"
                    height="0.75rem"
                  />
                  <span style={{
                    marginLeft: "0.25rem",
                  }} >
                      Refund Tx: {shortenAddress(refund_job_post_tx)}
                  </span>
                </SolanaJobPostPaymentTx>
              </ExternalLink>
            </JobPostDetailWrapper>}

            {authority_close_job_post_tx && <JobPostDetailWrapper>
              <ExternalLink
                href={`${SOLSCAN}/tx/${authority_close_job_post_tx}`}
              >
                <SolanaJobPostPaymentTx>
                  <SolanaImage
                    width="0.75rem"
                    height="0.75rem"
                  />
                  <span style={{
                    marginLeft: "0.25rem",
                  }} >
                      Close Tx: {shortenAddress(authority_close_job_post_tx)}
                  </span>
                </SolanaJobPostPaymentTx>
              </ExternalLink>
            </JobPostDetailWrapper>}

            {/* {closed && <JobPostDetailWrapper>
                <ExternalLink
                  href={`${SOLSCAN}/tx/${confirm_tx}`}
                >
                <SolanaJobPostPaymentTx>
                  <SolanaImage 
                    width="0.75rem"
                    height="0.75rem"
                  /> 
                  <span style={{
                    marginLeft: "0.25rem",
                  }} >
                    Close Tx: {shortenAddress(confirm_tx)}
                  </span>
                </SolanaJobPostPaymentTx>
                </ExternalLink>
              </JobPostDetailWrapper>} */}

            {/* <div style={{
                display: "flex",
                marginTop: "0.5rem",
                fontSize: "0.75rem",
              }}>
                <ExternalLink
                  href={`${SOLSCAN}/tx/3tiWqqPSJGg8vupY7DY2muJ51YGTUX1spQUSez4jJSSWLuVCvLu9x8gxgdNBWiueGsgMWAHdDj2uwLLqgyvFLYn9`}
                >
                <SolanaJobPostPaymentTx>
                  <SolanaImage 
                    width="0.75rem"
                    height="0.75rem"
                  /> 
                  <span style={{
                    marginLeft: "0.25rem",
                  }} >
                    Payment Tx: {shortenAddress("3tiWqqPSJGg8vupY7DY2muJ51YGTUX1spQUSez4jJSSWLuVCvLu9x8gxgdNBWiueGsgMWAHdDj2uwLLqgyvFLYn")}
                  </span>
                </SolanaJobPostPaymentTx>
                </ExternalLink>

              </div> */}

              
            <ProfileJobsOwnerButtons
              // job_status="Paid"
              job_status={job_status}
              job_id={job_id}

              job_title={job_title}
              company_name={company_name}

              setJobList={setJobList}
            />

            {/* <div style={{
                marginBottom: "0.5rem",
              }}>
                {jobTimeForOwner(job_published_at, job_updated_at, job_created_at)}
              </div> */}

          </ProfileListCardContainer>
        );
      })
      }
    </ProfileList>
  );
};

export default ProfileJobsForOwner;

// {/* <ToolTip>
//                       <NoEncryptionIcon style={{
//                         fontSize: "1rem",
//                         marginRight: "0.25rem",
//                       }} />
//                     </ToolTip> */}

// {/* <PaymentIcon style={{
//                       fontSize: "1rem",
//                       marginRight: "0.25rem",
//                     }} /> Paid */}