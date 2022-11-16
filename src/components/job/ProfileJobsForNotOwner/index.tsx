import React, { useState, useEffect } from "react";
import Select from "react-select";
import Link from "next/link";

import moment from "moment";

import {
  // JobsContainer,
  // JobListWrapper,
  // JobListSection,

  // JobListCardContainer,

  JobHeader, JobListForNotOwnerHeader,
  // CompanyName,
  // JobTitle,

  // JobListSkillContainer,
  // JobListSkill,
  // LocationWrapper,
} from "./ProfileJobsForNotOwnerCSS";

import {
  ProfileListCardContainer,

  CompanyName,
  Title,

  ProfileListSkillContainer,
  ProfileListSkill,
} from "../../profile/ProfileList/ProfileListCSS";

// import JobSkeleton from "../JobSkeleton";


import CompanyLogoSide from "../../company/CompanyLogoSide";

// import Skill from "../../Skill";

// import Alert from "@material-ui/lab/Alert";
import { Chip } from "@material-ui/core";

import { findJobListByUsername } from "../../../api/job";

import JobFeatures from "../JobFeatures";
// import NoList from "../../NoList";
import ProfileList from "../../profile/ProfileList";
import JobListSkeleton from "../../profile/JobListSkeleton";
import CentralizeChildren from "../../CentralizeChildren";
import NoProfileList from "../../NoProfileList";
import { findProfileJobListNotOwnerSortOptionsLabelValue, profileJobListNotOwnerOptions } from "../../../typeDefinitions/job";
import useProfileJobsForNotOwnerForm from "./useProfileJobsForNotOwnerForm";
import { useRouter } from "next/router";
import ProfileJobCompanyLogo from "../../company/ProfileJobCompanyLogo";

// Extract this?
const formatProfileJobListTitle = (
  numberOfJobs: Number,
  // currentPage: Number,
  // totalPage: Number,
) => {
  // const prefix = "Code";

  let suffix = "Jobs";
  // let suffix = "jobs";
  if (numberOfJobs < 2) {
    suffix = "Job";
  }

  // const jobListTitle = `${numberOfJobs} ${prefix} ${suffix}`;
  // const jobListTitle = `${numberOfJobs} ${suffix} (${currentPage} / ${totalPage})`;
  const jobListTitle = `${numberOfJobs} ${suffix}`;
  // const jobListState = `(${currentPage} / ${totalPage})`;

  return <div>
    {/* {jobListTitle} <JobListState>{jobListState}</JobListState> */}
    {jobListTitle} 
  </div>;
};

// Extract this?
const jobPageTitle = (
  job_title: string,
  // company_name: string
) => {
  return `${job_title.split(" ").join("-")}`;
  // return `${job_title.replaceAll(" ", "-")}`;
  // return `${job_title.replaceAll(" ", "-")}-for-${company_name}`;
};

// Should include edit and delete.
const ProfileJobsForNotOwner = ({
  username,
  sort,
  page,
}) => {
  const router = useRouter();
  
  const [jobList, setJobList] = useState(null);
  // const [totalJobList, setTotalJobList] = useState(null); // Should be 0 or totalJobList
  const [totalJobList, setTotalJobList] = useState(null); // Should be 0 or totalJobList

  // const jobPerPage = 10;
  // const totalPage = Math.ceil(totalJobList / jobPerPage);

  // let currentPage;
  // if (page === null || page === 1) {
  //   currentPage = 1;
  // } else {
  //   // currentPage = new Number(page);
  //   currentPage = page;
  // }

  // if (page > totalPage && totalPage !== 0) {
  //   const queries = new URLSearchParams(window.location.search);
  //   queries.set("page", totalPage.toString());
  //   // @ts-ignore
  //   window.location = `${window.location.pathname}?${queries.toString()}`;
  // }

  const {
    setFieldValue,
    submitForm,
  } = useProfileJobsForNotOwnerForm({
    username,
    sort,
    // page,
  });

  useEffect(() => {
    // const skip = (currentPage - 1) * jobPerPage;
    // const limit = jobPerPage;

    const skip = null;
    const limit = null;

    findJobListByUsername(username, sort, skip, limit)
      .then(({ data, error }) => {
        // console.log("data");
        // console.log(data);
        // alert(data);
        const { jobList, totalJobList } = data;
        setJobList(jobList); // return null when there is no job so NoJob part works
        setTotalJobList(totalJobList);
      })
      .catch(error => {
        console.log("findJobListByUsername error");
        console.error(error);
      });

    // findTotalJobList(username)
    //   .then(({ data }) => {
    //     // console.log("data");
    //     // console.log(data);
    //     // alert(data);
    //     setTotalJobList(data); // return null when there is no job so NoJob part works
    //   })
    //   .catch(error => {
    //     console.log("findTotalJobListByUsername error");
    //     console.error(error);
    //   });
  }, [sort, page]);

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
      <NoProfileList href="/jobs" message={"The user doesn't have any job post yet."} />
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
      {<JobListForNotOwnerHeader>
        <CentralizeChildren>
          {formatProfileJobListTitle(
            jobList.length
          )}
        </CentralizeChildren>

        <div style={{
          marginLeft: "0.5rem",
          marginRight: "1rem",
          // minWidth: "8rem",
        }}>
          <Select
            id="profile_jobs_not_owner_sort_options"
            name="profile_jobs_not_owner_sort_options"

            styles={{
              control: (provided) => ({
                ...provided,
                // none of react-select's styles are passed to <Control />
                border: "2px solid rgb(239, 239, 239)",
                borderRadius: "0.5rem",

                // padding: "0.25rem",
                fontFamily: "roboto",

                // minWidth: "10rem",
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

            onChange={(e) => {
              // console.log("e");
              // console.log(e);
              // console.log(e.label);
              // console.log(e.value);

              // alert(e);

              if (e === null) {
                // setFieldValue("page", "");
                setFieldValue("sort", undefined);
              } else {
                // setFieldValue("page", "");
                setFieldValue("sort", e);
              }

              submitForm();
            }}
            isClearable={false}
            // isSearchable={false}

            placeholder="Sort"
            value={findProfileJobListNotOwnerSortOptionsLabelValue(sort)}
    
            options={profileJobListNotOwnerOptions}
          />
        </div>
      </JobListForNotOwnerHeader>}

      {jobList?.map(({
        company_name,
        company_logo,
        // username,
        job_title,

        // job_created_at,
        // job_updated_at,
        job_published_at,

        job_category,

        job_id,
        job_location,
        job_type,
        job_salary,
        job_skills,

        job_pay_in_cryptocurrency,
      }, index) => {
        return (
          <ProfileListCardContainer 
            key={job_id} 
            $last={index === jobList.length - 1}
          >
            {company_logo && <Link
              href={`/jobs?&company_name=${company_name}`}
            >
              <CompanyLogoSide
                src={company_logo || ""}
                alt="logo"
              />
            </Link>}

            {/* <a href={`/jobs?&company_name=${company_name}`} >
                {company_logo && <CompanyLogo
                  src={company_logo}
                  alt="logo"
                />}
              </a> */}

            <JobHeader>
              <Link href={`/jobs?&company_name=${company_name}`} >
                <CentralizeChildren>
                  {company_logo && <ProfileJobCompanyLogo src={company_logo} alt="logo" />}
                  {/* {company_logo && <img style={{
                        width: "1rem",
                        marginRight: "0.25rem",
                        marginLeft: "-0.1rem",
                        borderRadius: "50%;",
                      }} src={company_logo} alt="log" />} */}
                  <CompanyName>
                    {company_name}
                  </CompanyName>
                </CentralizeChildren>
              </Link>
              {/* <Link href={`/jobs?&company_name=${company_name}`} >
                    <CompanyName>
                      {company_name}
                    </CompanyName>
                  </Link> */}
              {/* <Link href={`/jobs?&company_name=${company_name}`}> */}


              {/* </Link> */}
              {/* </div> */}

              <div style={{
                fontSize: "1rem",
                opacity: "0.7",
              }}>
                {moment.utc(job_published_at).fromNow()}
                {/* Posted {moment.utc(job_published_at).fromNow()} */}
                {/* Posted {moment.utc(job_published_at).fromNow()} */}
                {/* Posted {moment.utc(new Date(job_published_at)).fromNow()} */}
                {/* {moment.utc(job_created_at).fromNow()} */}
              </div>
            </JobHeader>
            <Link href={`/job?&title=${jobPageTitle(job_title)}&id=${job_id}`}>
              {/* <Link href={`/job?&title=${jobPageTitle(job_title, company_name)}&id=${job_id}`}> */}
              <Title>
                {job_title}
              </Title>
            </Link>

            {/* <JobFeaturesContainer>
                <Link href={`/jobs?&location=${job_location}`} >
                  <JobFeature>{job_location}</JobFeature>
                </Link>
                &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                <Link href={`/jobs?&type=${job_type}`} >
                  <JobFeature>{job_type}</JobFeature>
                </Link>
                &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                <Link href={`/jobs?&salary=${job_salary}`} >
                  <JobFeature>{job_salary}</JobFeature>
                </Link>
              </JobFeaturesContainer> */}

            <JobFeatures
              job_category={job_category}
              job_type={job_type}
              job_salary={job_salary}
              job_location={job_location}
              isPreview={false} 
              job_pay_in_cryptocurrency={job_pay_in_cryptocurrency}
            />

            {/* Should Handle empty tag here. */}
            <ProfileListSkillContainer>
              {job_skills && job_skills.map((job_skill: string) => {
                return (
                  <Link key={job_skill} href={`/jobs?&skill=${job_skill}`}>
                    {/* <Skill>
                        {job_skill}
                      </Skill> */}
                    <ProfileListSkill>
                      <Chip
                        variant="outlined"
                        label={job_skill}

                        style={{
                          cursor: "pointer",
                        }}
                        // color="secondary"
                      />
                    </ProfileListSkill>

                  </Link>
                );
              })}
            </ProfileListSkillContainer>
          </ProfileListCardContainer>
        );
      })
      }
    </ProfileList>
  );
};

export default ProfileJobsForNotOwner;

// {
//   jobList && totalPage > 1 && <ListPaginationButtonsContainer>
//     {currentPage.toString() !== "1" && <ListPaginationPrevButton
//       onClick={(e) => {
//         e.preventDefault();

//         const prevPage = +(new Number(currentPage)) - 1;
//         // setFieldValue("page", prevPage);
//         // submitForm();

//         // @ts-ignore
//         // window.location = `/jobs?page=${prevPage}`;

//         const queries = new URLSearchParams(window.location.search);
//         queries.set("page", prevPage.toString());
//         // @ts-ignore
//         // window.location = `${window.location.pathname}?${queries.toString()}`;
//         // history.pushState(null, null, "?" + queries.toString());

//         router.push(`/user/${username}/jobs?${queries.toString()}`);
//       }}
//     >
//       Prev
//     </ListPaginationPrevButton>}
//     {currentPage.toString() !== totalPage.toString() && <ListPaginationNextButton
//       onClick={(e) => {
//         e.preventDefault();

//         // Use Postgresql command instead?
//         // https://www.sqlshack.com/pagination-in-sql-server/

//         let nextPage = +(new Number(currentPage)) + 1;
//         // setFieldValue("page", nextPage);
//         // submitForm();

//         // setFieldValue("page", nextPage);
//         // submitForm();

//         const queries = new URLSearchParams(window.location.search);
//         queries.set("page", nextPage.toString());
//         // @ts-ignore
//         // window.location = `${window.location.pathname}?${queries.toString()}`;
//         // history.pushState(null, null, "?" + queries.toString());

//         router.push(`/user/${username}/jobs?${queries.toString()}`);

//       }}
//     >
//       Next
//     </ListPaginationNextButton>}
//   </ListPaginationButtonsContainer>
// }