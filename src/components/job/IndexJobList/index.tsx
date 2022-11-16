import React, { useState, useEffect } from "react";

import Link from "next/link";
import { useRouter } from "next/router";
// import moment from "moment";
import { Tooltip } from "@material-ui/core";

import {
  CompanyName,
  JobTitle,
} from "./IndexJobListCSS";
import IndexJobListSkills from "./IndexJobListSkills";

import JobFeatures from "../JobFeatures";

import PostedBy from "../../PostedBy";
import CompanyLogo from "../../company/CompanyLogo";
import CompanyContainer from "../../company/CompanyContainer";

// import JobListSkills from "./JobListSkills";

// import SearchListSkeleton from "../../SearchList/SearchListSkeleton";

import CompanyLogoSide from "../../company/CompanyLogoSide";

// import ListHeader from "../../ListHeader";

// import pageTitle from "../../pageTitle";
// formatJobListTitle

// import { SearchListCardContainer } from "../../SearchList/SearchListCSS";
import { JobHeader } from "../JobList/JobListCSS";

import Community from "../../Community";


import { findJobListIndex } from "../../../api/job";

import { formatPathTitle } from "../../../title/path";
import { formatJobListTitle } from "../../../title/job";

import SearchListSkeleton from "../../SearchList/SearchListSkeleton";
import { 
  SearchListContent, SearchListContainer, SearchListSecondaryWrapper, IndexPrimaryWrapper, IndexJobListCardContainer,
} from "../../SearchList/SearchListCSS";

import TopUsersForHire from "../../TopUsersForHire";
import TopBlogs from "../../blog/TopBlogs";

import { useSolanaCodeTokenDetails } from "../../../contexts/solanaCodeToken";

const JobList = () => {
  const router = useRouter();

  const [jobList, setJobList] = useState(null);
  // @ts-ignore
  const { solanaCodeTokenPrice } = useSolanaCodeTokenDetails();

  useEffect(() => {
    findJobListIndex().then(({ data }) => {
      setJobList(data.jobList);
    }).catch(error => {
      console.log("error");
      console.error(error);
    });

  }, []);

  // console.log("data");
  // console.log(data);

  const numberOfJobs = jobList !== null || jobList !== undefined ? jobList?.length : 0;
  const jobListTitle = formatJobListTitle(
    numberOfJobs, true,
  );

  return (
    <>
      <SearchListContainer $isIndex={true} >
        <SearchListContent>
          <IndexPrimaryWrapper>

            {jobList !== null
              ? jobList?.map(({
                username,

                company_name,
                company_logo,

                job_title,
              
                // job_created_at,
                // job_updated_at,
                job_published_at,
                job_category,

                job_id,
                job_location,
                job_type,

                job_salary,
                job_pay_in_cryptocurrency,

                job_skills
              }, index) => {
              // alert(job_pay_in_cryptocurrency);

                // alert(index);

                return (
                // Move this to cards/JobListCard.tsx?
                  <IndexJobListCardContainer
                    key={job_id} 
                    $first={index === 0}
                    $last={index === jobList.length - 1}
                  >
                 
                    {company_logo && <Link
                      href={`/jobs?&company_name=${company_name}`}
                    >
                      <Tooltip title={company_name} arrow >
                        <CompanyLogoSide
                          loading="lazy"
                          src={company_logo || ""}
                          // src={`${API}/${company_logo}`}
                          alt="logo"
                        />
                      </Tooltip>
                    
                      {/* <CompanyLogoSide loading="lazy" src={`${API}/${company_logo}`} alt="logo" /> */}
                    </Link>}

                    <JobHeader>
                      <PostedBy
                        username={username}
                        published_at={job_published_at}
                      />

                    </JobHeader>

                    {/* <BlogCategory>
                    {job_category}
                  </BlogCategory> */}

                    <Link href={`/jobs?&company_name=${company_name}`} >
                      <CompanyContainer>
                        {company_logo && <CompanyLogo src={company_logo} alt="logo" />}
                        <CompanyName>
                          {company_name}
                        </CompanyName>
                      </CompanyContainer>
                    </Link>

                    {/* <Link href={`/job?&title=${jobPageTitle(job_title)}&id=${job_id}`}> */}
                    <a
                      href={`/job?&title=${formatPathTitle(job_title)}&id=${job_id}`}

                      target="_blank"
                      rel="noopener noreferrer"

                      style={{
                        color: "black",
                        textDecoration: "none",
                      }}
                    >
                      <JobTitle>
                        {job_title}
                      </JobTitle>
                    </a>
                    {/* </Link> */}

                    <JobFeatures
                      job_category={job_category}
                      job_type={job_type}
                      job_salary={job_salary}
                      job_location={job_location}
                      job_pay_in_cryptocurrency={job_pay_in_cryptocurrency}

                      isPreview={false}
                    />

                    {/* Should Handle empty skill here. */}
                    <IndexJobListSkills
                      job_skills={job_skills}
                    />
                  </IndexJobListCardContainer>
                );
              }
              )
              : <>
                <SearchListSkeleton />
                <SearchListSkeleton />
                <SearchListSkeleton />
                <SearchListSkeleton />
                <SearchListSkeleton />
                <SearchListSkeleton />
                <SearchListSkeleton />
              </>}
          </IndexPrimaryWrapper>
          {/* </SearchListPrimaryWrapper> */}

          <SearchListSecondaryWrapper>
            {/* <Telegram /> */}
            
            <Community />
            
            {/* <CodePriceCard codePrice={solanaCodeTokenPrice} /> */}
            {/* <RecentBlogList limit={5} /> */}

            <TopBlogs limit={10} />
            
            <TopUsersForHire limit={10} />

          </SearchListSecondaryWrapper>

        </SearchListContent>
      </SearchListContainer>
    </>
  );
};

export default JobList;