import React, { useCallback, useEffect, useState } from "react";

import AccountBoxIcon from "@material-ui/icons/AccountBox";
import Money from "@material-ui/icons/AttachMoneyRounded";
import LocationOnIcon from "@material-ui/icons/LocationOn";
// import SettingsIcon from '@material-ui/icons/Settings';

import CancelIcon from "@material-ui/icons/Cancel";

import SearchIcon from "@material-ui/icons/Search";

import CompanyLogoSide from "../../company/CompanyLogoSide";
import {
  JobListCardContainer,
  JobHeader,
  CompanyName,
  JobTitle,
  JobFeaturesContainer,
  JobFeatureWrapper,
  JobListSkill,
  JobListSkillContainer,
  JobListPaginationButtonsContainer,
  JobListPaginationNextButton,
  JobListPaginationPrevButton,
  JobSearchListContent,
  JobSearchListContainer,
  JobSearchListPrimaryWrapper,
  JobSearchListSecondaryWrapper,
  JobNoSearchListHeader,
  JobSearchListHeader,
  JobSearchListTextInput,
  JobListInputClearButtonWrapper,
  JobListInputSearchButtonWrapper,
  JobSearchListTextInputWrapper,
} from "./JobListCSS";

import PostedBy from "../../PostedBy";
// import CompanyLogo from "../../CompanyLogo";
import { Chip, Tooltip } from "@material-ui/core";

import { yes, no } from "../../../typeDefinitions/select";
import CompanyContainer from "../../company/CompanyContainer";
import { formatPathTitle } from "../../../title/path";
import BitcoinImage from "../../../crypto/BitcoinImage";

import { useRouter } from "next/router";
import Community from "../../Community";
import TopUsersForHire from "../../TopUsersForHire";
import NoSearchList from "../../SearchList/NoSearchList";
import CentralizeChildren from "../../CentralizeChildren";
import JobSearchListSkeleton from "./JobSearchListSkeleton";
import { jobTitleMaxLength } from "../../../validators";
import useJobListForm from "../JobListForm/useJobListForm";
import { findJobList } from "../../../api/job";
import { scrollToTop } from "../../../browser/scroll";
import ListBySortOptionNavbar from "../../ListBySortOptionNavbar";
import ListBanner from "../../SearchList/ListBanner";
import CompanyLogo from "../../company/CompanyLogo";

const JobSearchListSecondary = () => {
  return (
    <JobSearchListSecondaryWrapper>
      <Community list={"blog"} />

      <TopUsersForHire limit={10} list={"blog"} />
    </JobSearchListSecondaryWrapper>
  );
};

export const findJobs = async ({
  currentPage,
  jobsPerPage,

  title,
  category,
  type,

  company_name,

  salary,
  pay_in_cryptocurrency,

  location,

  skill,
  // page,

  sort,

  // setJobList,
  // setTotalPage,
}) => {
  const skip = (currentPage - 1) * jobsPerPage;
  const limit = jobsPerPage;

  const { data, error } = await findJobList(
    title,
    category,
    type,
    location,
    salary,
    skill,
    company_name,
    sort,
    pay_in_cryptocurrency,

    skip,
    limit
  );

  if (error) {
    console.log("findJobList error");
    console.error(error);
  }

  if (data) {
    const { jobList, totalJobList } = data;

    return [jobList, totalJobList / jobsPerPage];
  }

  return [false, false];
};

const JobList = ({
  title,
  category,
  type,

  location,

  salary,
  pay_in_cryptocurrency,

  skill,
  company_name,

  sort,
  page,
}) => {
  const router = useRouter();
  const jobsPerPage = 25;

  const [jobList, setJobList] = useState(null);
  const [totalPage, setTotalPage] = useState(0);

  let currentPage;
  if (page === null || page === 1) {
    currentPage = 1;
  } else {
    currentPage = page;
  }

  if (currentPage > totalPage) {
    if (currentPage !== 1) {
      const queries = new URLSearchParams(window.location.search);
      // const query = Object.fromEntries(queries);
      router.push({
        pathname: window.location.pathname,
      });
    }
  }

  const {
    handleSubmit,

    handleChange,
    handleBlur,

    values,

    setFieldValue,

    isSubmitting,
    submitForm,
  } = useJobListForm({
    title,
    category,
    type,

    company_name,

    salary,
    pay_in_cryptocurrency,

    location,

    skill,
    page,

    sort,
  });

  const fetchJobs = useCallback(async () => {
    const [jobs, totalJobs] = await findJobs({
      currentPage,
      jobsPerPage,
      title,
      category,
      type,
      location,
      salary,
      pay_in_cryptocurrency,
      skill,
      company_name,
      sort,
    });

    if (jobs) {
      setJobList(jobs);
      setTotalPage(totalJobs);
    }
  }, [
    currentPage,
    jobsPerPage,
    title,
    category,
    type,
    location,
    salary,
    pay_in_cryptocurrency,
    skill,
    company_name,
    sort,
  ]);

  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  if (jobList === null) {
    // if (true) {
    return (
      <>
        <ListBanner />

        <JobSearchListContainer>
          <JobSearchListContent>
            <JobSearchListPrimaryWrapper>
              <JobNoSearchListHeader>
                <CentralizeChildren>
                  <span
                    style={{
                      width: "1rem",
                      height: "1rem",
                    }}
                  >
                    {/* <PrimarySpinner /> */}
                  </span>
                </CentralizeChildren>
              </JobNoSearchListHeader>
              <JobSearchListSkeleton />
              <JobSearchListSkeleton />
              <JobSearchListSkeleton />
              <JobSearchListSkeleton />
              <JobSearchListSkeleton />
              <JobSearchListSkeleton />
            </JobSearchListPrimaryWrapper>

            <JobSearchListSecondary />
          </JobSearchListContent>
        </JobSearchListContainer>
      </>
    );
  }

  if (jobList.length === 0) {
    // if (true) {
    return (
      <>
        <ListBanner />

        <ListBySortOptionNavbar
          includeTopOption={false}
          setFieldValue={setFieldValue}
          submitForm={submitForm}
        />

        <JobSearchListContainer>
          <JobSearchListContent>
            <JobSearchListPrimaryWrapper>
              <JobNoSearchListHeader>
                <CentralizeChildren>
                  <NoSearchList href="/jobs" message="No results" />
                </CentralizeChildren>
              </JobNoSearchListHeader>
              <JobSearchListSkeleton />
              <JobSearchListSkeleton />
              <JobSearchListSkeleton />
              <JobSearchListSkeleton />
              <JobSearchListSkeleton />
              <JobSearchListSkeleton />
            </JobSearchListPrimaryWrapper>

            <JobSearchListSecondary />
          </JobSearchListContent>
        </JobSearchListContainer>
      </>
    );
  }

  return (
    <>
      <ListBanner />

      <ListBySortOptionNavbar
        includeTopOption={false}
        setFieldValue={setFieldValue}
        submitForm={submitForm}
      />

      <JobSearchListContainer>
        <JobSearchListContent>
          <JobSearchListPrimaryWrapper>
            <JobSearchListHeader>
              <form
                style={{
                  width: "100%",
                }}
                onSubmit={handleSubmit}
              >
                <JobSearchListTextInputWrapper>
                  <JobListInputSearchButtonWrapper
                    aria-label="search"
                    click={async () => {
                      await submitForm();
                    }}
                  >
                    <SearchIcon />
                  </JobListInputSearchButtonWrapper>

                  <JobSearchListTextInput
                    id="title"
                    name="title"
                    type="text"
                    placeholder="Type a job title"
                    maxLength={jobTitleMaxLength}
                    value={values.title}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />

                  <JobListInputClearButtonWrapper>
                    <CancelIcon
                      onClick={(e) => {
                        e.preventDefault();

                        router.push("/jobs");
                        scrollToTop();
                      }}
                      type="button"
                      aria-label="reset form"
                    />
                  </JobListInputClearButtonWrapper>
                </JobSearchListTextInputWrapper>
              </form>
            </JobSearchListHeader>

            {jobList.map(
              ({
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

                job_skills,
              }) => {
                return (
                  // Move this to cards/JobListCard.tsx?
                  <JobListCardContainer key={job_id}>
                    {company_logo && (
                      <CompanyLogoSide
                        onClick={async (e) => {
                          e.preventDefault();
                          setFieldValue("company_name", company_name);
                          await submitForm();
                        }}
                        loading="lazy"
                        src={company_logo || ""}
                        // src={`${API}/${company_logo}`}
                        alt="logo"
                      />
                    )}

                    <JobHeader>
                      <PostedBy
                        username={username}
                        published_at={job_published_at}
                      />
                    </JobHeader>

                    <CompanyContainer
                      onClick={(e) => {
                        e.preventDefault();
                        setFieldValue("company_name", company_name);
                        submitForm();
                      }}
                    >
                      {company_logo && (
                        <CompanyLogo src={company_logo} alt="logo" />
                      )}
                      <CompanyName>{company_name}</CompanyName>
                    </CompanyContainer>

                    {/* <Link href={`/job?&title=${jobPageTitle(job_title)}&id=${job_id}`}> */}
                    <a
                      href={`/job?&title=${formatPathTitle(
                        job_title
                      )}&id=${job_id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "black",
                        textDecoration: "none",
                      }}
                    >
                      <JobTitle>{job_title}</JobTitle>
                    </a>
                    {/* </Link> */}

                    <JobFeaturesContainer>
                      <JobFeatureWrapper
                        $isPreview={false}
                        onClick={async (e) => {
                          e.preventDefault();
                          setFieldValue("category", {
                            label: job_category,
                            value: job_category,
                          });
                          await submitForm();
                        }}
                      >
                        <img
                          src={"/static/logo_white.png"}
                          style={{
                            width: "1rem",
                          }}
                        />
                        <span
                          style={{
                            marginLeft: "0.25rem",
                          }}
                        >
                          {job_category}
                        </span>
                      </JobFeatureWrapper>

                      <JobFeatureWrapper
                        $isPreview={false}
                        onClick={async (e) => {
                          e.preventDefault();
                          setFieldValue("type", {
                            label: job_type,
                            value: job_type,
                          });
                          await submitForm();
                        }}
                      >
                        <AccountBoxIcon
                          style={{
                            fontSize: "1.25rem",
                            // marginLeft: "0.1rem",
                          }}
                        />
                        <span
                          style={{
                            marginLeft: "0.25rem",
                          }}
                        >
                          {job_type}
                        </span>
                      </JobFeatureWrapper>

                      <JobFeatureWrapper
                        $isPreview={false}
                        onClick={async (e) => {
                          e.preventDefault();
                          // setFieldValue("page", "");
                          setFieldValue("salary", job_salary);
                          await submitForm();
                        }}
                      >
                        <Money
                          style={{
                            fontSize: "1rem",
                            marginLeft: "0.1rem",
                            marginRight: "0.1rem",
                            color: "white",
                            backgroundColor: "rgb(37, 191, 161)",
                          }}
                        />
                        <span
                          style={{
                            marginLeft: "0.25rem",
                          }}
                        >
                          {job_salary}
                        </span>
                      </JobFeatureWrapper>

                      <JobFeatureWrapper
                        $isPreview={false}
                        onClick={(e) => {
                          e.preventDefault();
                          // setFieldValue("page", "");
                          setFieldValue("location", job_location);
                          submitForm();
                        }}
                      >
                        <LocationOnIcon
                          style={{
                            fontSize: "1.25rem",
                            // marginLeft: "0.1rem",
                          }}
                        />
                        <span
                          style={{
                            marginLeft: "0.1rem",
                          }}
                        >
                          {job_location}
                        </span>
                      </JobFeatureWrapper>

                      <Tooltip title="Pay in cryptocurrency" arrow>
                        <JobFeatureWrapper
                          $isPreview={false}
                          onClick={async (e) => {
                            e.preventDefault();
                            // alert(job_pay_in_cryptocurrency);
                            if (job_pay_in_cryptocurrency) {
                              // setFieldValue("page", "");
                              setFieldValue("pay_in_cryptocurrency", yes);
                            } else {
                              // setFieldValue("page", "");
                              setFieldValue("pay_in_cryptocurrency", no);
                            }

                            await submitForm();
                          }}
                        >
                          <BitcoinImage />
                          <span
                            style={{
                              marginLeft: "0.25rem",
                            }}
                          >
                            {job_pay_in_cryptocurrency ? "Yes" : "No"}
                          </span>
                        </JobFeatureWrapper>
                      </Tooltip>
                    </JobFeaturesContainer>

                    <JobListSkillContainer>
                      {job_skills &&
                        job_skills.map((job_skill: string) => {
                          const selected = job_skill === skill;
                          return (
                            <JobListSkill
                              key={job_skill}
                              onClick={async (e) => {
                                e.preventDefault();

                                if (!selected) {
                                  // setFieldValue("page", "");
                                  setFieldValue("skill", job_skill);
                                  await submitForm();
                                }
                              }}
                            >
                              {!selected ? (
                                <Chip
                                  variant="outlined"
                                  label={job_skill}
                                  style={{
                                    cursor: "pointer",
                                  }}
                                />
                              ) : (
                                <Chip
                                  variant="outlined"
                                  label={job_skill}
                                  style={{
                                    cursor: "pointer",
                                    color: "rgb(17, 160, 245)",
                                    border: "1px solid rgb(17, 160, 245)",
                                  }}
                                  onClick={async (e) => {
                                    e.preventDefault();
                                    setFieldValue("skill", "");
                                    await submitForm();
                                  }}
                                  onDelete={async (e) => {
                                    e.preventDefault();
                                    setFieldValue("skill", "");
                                    await submitForm();
                                  }}
                                  deleteIcon={
                                    <CancelIcon
                                      style={{
                                        color: "rgb(17, 160, 245)",
                                      }}
                                    />
                                  }
                                />
                              )}
                            </JobListSkill>
                          );
                        })}
                    </JobListSkillContainer>
                  </JobListCardContainer>
                );
              }
            )}

            {jobList && totalPage > 1 && (
              <JobListPaginationButtonsContainer>
                {page !== 1 && (
                  <JobListPaginationPrevButton
                    onClick={(e) => {
                      const prevPage = page - 1;
                      const queries = new URLSearchParams(
                        window.location.search
                      );
                      queries.set("page", prevPage.toString());

                      const query = Object.fromEntries(queries);
                      router.push({
                        pathname: window.location.pathname,
                        query,
                      });
                      scrollToTop();
                    }}
                  >
                    Prev
                  </JobListPaginationPrevButton>
                )}
                {page !== totalPage && (
                  <JobListPaginationNextButton
                    onClick={(e) => {
                      e.preventDefault();

                      const nextPage = page + 1;
                      const queries = new URLSearchParams(
                        window.location.search
                      );
                      queries.set("page", nextPage.toString());

                      const query = Object.fromEntries(queries);
                      router.push({
                        pathname: window.location.pathname,
                        query,
                      });
                      scrollToTop();
                    }}
                  >
                    Next
                  </JobListPaginationNextButton>
                )}
              </JobListPaginationButtonsContainer>
            )}
          </JobSearchListPrimaryWrapper>

          <JobSearchListSecondary />
        </JobSearchListContent>
      </JobSearchListContainer>
    </>
  );
};

export default JobList;
