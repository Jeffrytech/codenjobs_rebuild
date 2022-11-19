import React, { useState, useEffect } from "react";
import Select from "react-select";

import LockIcon from "@material-ui/icons/Lock";
import NoEncryptionIcon from "@material-ui/icons/NoEncryption";

import moment from "moment";

import LocationOnIcon from "@material-ui/icons/LocationOn";

// import NoCompany from "./NoCompany";
// import ProfileCompanySkeleton from "../ProfileCompanySkeleton";

import {
  // ProfileListContainer,
  // ProfileListSection,

  // ProfileListWrapper,
  ProfileListCardContainer,
} from "../../profile/ProfileList/ProfileListCSS";

import {
  // JobListContainer,
  // ComapnyListWrapper,
  // ComapnyListHeader,
  // ComapnyListSection,

  // ComapnyListCardContainer,

  CompanyHeader,
  CompanyName,
  CompanyLocationContainer,
  CompanyFeature,
  CompanyDescription,
  CompanyStatusContainer,
  CompanyListState,
  CompanyListForOwnerHeader,

  // ProfileCompaniesContainer,
} from "./ProfileCompaniesCSS";

import ProfileCompaniesDialog from "./ProfileCompaniesDialog";

// import { API } from "../../../config/environment";

// import { findCompanyListForOwner } from "../../../api/privateCompany";
// import CompanyLogo from "../../CompanyLogo";
// import CompanyContainer from "../../CompanyContainer";
import ListHeader from "../../SearchList/ListHeader";
import NoList from "../../SearchList/NoList";
// import ProfileList from "../profile/ProfileList";
import SearchListSkeleton from "../../SearchList/SearchListSkeleton";
import ProfileJCompaniesForOwnerButtons from "./ProfileCompaniesForOwnerButtons";
import ProfileList from "../../profile/ProfileList";
import {
  findCompanyListForOwner,
  findTotalCompanyListForOwner,
} from "../../../api/privateCompany";
import CentralizeChildren from "../../CentralizeChildren";
import CompanyLogoSide from "../CompanyLogoSide";
import CompanyContainer from "../CompanyContainer";
import {
  findProfileCompanyListOwnerSortOptionsLabelValue,
  profileCompanyListOwnerOptions,
} from "../../../typeDefinitions/company";
import useProfileCompanyListForOwnerForm from "./useProfileCompanyListForOwnerForm";
import {
  ListPaginationButtonsContainer,
  ListPaginationNextButton,
  ListPaginationPrevButton,
} from "../../job/ListPagination/ListPaginationCSS";
import { scrollToTop } from "../../../browser/scroll";
import { useRouter } from "next/router";
import NoProfileList from "../../NoProfileList";
import NoProfileCompanyList from "../NoProfileCompanyList";
import CompanyLogo from "../CompanyLogo";

// import { CompanyContainer } from "../../job/JobList/JobListCSS";

const formatProfileCompanyListTitleForOwner = (
  numberOfComapnies: Number,
  currentPage: Number,
  totalPage: Number
) => {
  // if (numberOfComapnies === null) {
  //   return null;
  // }

  let suffix = "Companies";
  // let suffix = "jobs";
  if (numberOfComapnies < 2) {
    suffix = "Company";
  }

  const compnayListTitle = `${numberOfComapnies} ${suffix}`;
  // const companyListState = `(${currentPage} / ${totalPage})`;

  return (
    <div>
      {/* {compnayListTitle} <CompanyListState>{companyListState}</CompanyListState> */}
      {compnayListTitle}
    </div>
  );
};

const formatNumberOfJobs = (numberOfJobs: Number) => {
  let suffix = "Jobs";
  if (numberOfJobs < 2) {
    suffix = "Job";
  }

  const numberOfJobsTitle = `${numberOfJobs} ${suffix}`;

  return numberOfJobsTitle;
};

// Should include edit and delete.
const CompanyList = ({ company_name, sort, page, username }) => {
  const router = useRouter();

  const [showProifleCompaniesDialog, setShowProfileCompaniesDialog] =
    useState(false);
  const [dialogNumberOfJobs, setDialogNumberOfJobs] = useState("");

  const [companyList, setCompanyList] = useState(null);
  const [totalCompanyList, setTotalCompanyList] = useState(null); // Should be 0 or totalJobList

  const companyPerPage = 25;
  const totalPage = Math.ceil(totalCompanyList / companyPerPage);

  let currentPage;
  if (page === null || page === 1) {
    currentPage = 1;
  } else {
    currentPage = page;
  }

  // if (page > totalPage && totalPage !== 0) {
  //   const queries = new URLSearchParams(window.location.search);
  //   queries.set("page", totalPage.toString());
  //   // @ts-ignore
  //   window.location = `${window.location.pathname}?${queries.toString()}`;
  // }

  if (currentPage > totalPage) {
    if (currentPage !== 1) {
      router.push({
        pathname: window.location.pathname,
      });
    }
  }

  const { setFieldValue, submitForm } = useProfileCompanyListForOwnerForm({
    page,
    sort,
  });

  useEffect(() => {
    // findCompanyListForOwner(company_name)
    findCompanyListForOwner(
      company_name,
      sort,
      (currentPage - 1) * companyPerPage,
      companyPerPage
    )
      .then(({ data }) => {
        // console.log("data");
        // console.log(data);

        const { companyList, totalCompanyList } = data;

        setCompanyList(companyList);
        setTotalCompanyList(totalCompanyList);
      })
      .catch((error) => {
        console.log("findCompanyListForOwner error");
        console.error(error);
      });
  }, [
    page,
    sort,
    // username
  ]);

  if (companyList === null) {
    return (
      <ProfileList>
        <SearchListSkeleton />
        <SearchListSkeleton />
        <SearchListSkeleton />
        <SearchListSkeleton />
        <SearchListSkeleton />
        <SearchListSkeleton />
        <SearchListSkeleton />
        <SearchListSkeleton />
        <SearchListSkeleton />
      </ProfileList>
    );
  }

  if (companyList.length === 0) {
    // if (true) {
    return (
      <ProfileList>
        <NoProfileCompanyList
          href="/job/post"
          message="You can register your company with a job post."
        />
        <SearchListSkeleton />
        <SearchListSkeleton />
        <SearchListSkeleton />
        <SearchListSkeleton />
        <SearchListSkeleton />
        <SearchListSkeleton />
        <SearchListSkeleton />
        <SearchListSkeleton />
        <SearchListSkeleton />
      </ProfileList>
    );
  }

  return (
    <ProfileList>
      <CompanyListForOwnerHeader>
        <CentralizeChildren>
          {/* {formatProfileCompanyListTitle(companyList.length)} */}
          {formatProfileCompanyListTitleForOwner(
            totalCompanyList,
            currentPage,
            totalPage
          )}
        </CentralizeChildren>

        <div
          style={{
            marginLeft: "0.5rem",
            marginRight: "1rem",
            // minWidth: "8rem",
          }}
        >
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

                minWidth: "8rem",
                // opacity: "0.7",
              }),
              placeholder: (provided) => ({
                ...provided,
                // backgroundColor: "red",
                marginLeft: "1.75rem",
                opacity: "0.7",
              }),
              input: (provided) => ({
                ...provided,
                // backgroundColor: "blue",
                backgroundImage: "url('/static/logo.svg')",
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
              if (e === null) {
                setFieldValue("sort", undefined);
              } else {
                setFieldValue("sort", e);
              }

              submitForm();
            }}
            isClearable={false}
            placeholder="Sort"
            value={findProfileCompanyListOwnerSortOptionsLabelValue(sort)}
            options={profileCompanyListOwnerOptions}
          />
        </div>
      </CompanyListForOwnerHeader>

      {companyList.map(
        ({
          company_id,
          company_name,
          company_website,
          company_logo,
          company_location,
          company_description,

          company_created_at,
          company_updated_at,

          jobs_for_company_by_owner,
        }) => {
          // alert(jobs_for_company_by_owner.length);
          // alert(jobs_for_company_by_owner);
          // alert(company_created_at);
          // alert(company_updated_at);

          const numberOfJobsForCompanyByOwner =
            jobs_for_company_by_owner.length;
          const numberOfJobsTitle = formatNumberOfJobs(
            jobs_for_company_by_owner.length
          );
          const jobUsed = numberOfJobsForCompanyByOwner !== 0;

          return (
            <ProfileListCardContainer key={company_id}>
              {company_logo && (
                <a
                  href={company_website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CompanyLogoSide src={`${company_logo}`} alt="logo" />
                </a>
              )}

              <CompanyHeader>
                <div
                  style={{
                    fontSize: "1rem",
                    opacity: "0.7",
                  }}
                >
                  {`Created ${moment.utc(company_created_at).fromNow()}`}
                </div>

                <CentralizeChildren>
                  <CompanyStatusContainer
                    onClick={() => {
                      if (numberOfJobsForCompanyByOwner !== 0) {
                        setDialogNumberOfJobs(numberOfJobsTitle);
                        setShowProfileCompaniesDialog(true);
                      }
                    }}
                    $jobUsed={jobUsed}
                  >
                    {numberOfJobsForCompanyByOwner !== 0 ? (
                      <LockIcon
                        style={{
                          fontSize: "1rem",
                          marginRight: "0.25rem",
                          opacity: 0.5,
                        }}
                      />
                    ) : (
                      <NoEncryptionIcon
                        style={{
                          fontSize: "1rem",
                          marginRight: "0.25rem",
                          opacity: 0.7,
                        }}
                      />
                    )}
                    <span
                      style={{
                        opacity: 0.7,
                        // color: "#ff1676",
                      }}
                    >
                      {numberOfJobsTitle}
                    </span>
                  </CompanyStatusContainer>
                </CentralizeChildren>
              </CompanyHeader>

              <CompanyContainer>
                {company_logo && <CompanyLogo src={company_logo} alt="logo" />}
                <CompanyName
                  href={company_website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {company_name}
                </CompanyName>
              </CompanyContainer>

              <CompanyLocationContainer>
                <LocationOnIcon
                  style={{
                    fontSize: "1.2rem",
                  }}
                />
                <CompanyFeature>{company_location}</CompanyFeature>
              </CompanyLocationContainer>

              <CompanyDescription>{company_description}</CompanyDescription>

              <ProfileJCompaniesForOwnerButtons
                numberOfJobsForCompanyByOwner={numberOfJobsForCompanyByOwner}
                company_id={company_id}
                // company_name={company_name}
              />
            </ProfileListCardContainer>
          );
        }
      )}

      {companyList && totalPage > 1 && (
        <ListPaginationButtonsContainer>
          {currentPage.toString() !== "1" && (
            <ListPaginationPrevButton
              onClick={(e) => {
                const prevPage = +new Number(currentPage) - 1;

                const queries = new URLSearchParams(window.location.search);
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
            </ListPaginationPrevButton>
          )}
          {currentPage.toString() !== totalPage.toString() && (
            <ListPaginationNextButton
              onClick={(e) => {
                e.preventDefault();

                let nextPage = +new Number(currentPage) + 1;

                const queries = new URLSearchParams(window.location.search);
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
            </ListPaginationNextButton>
          )}
        </ListPaginationButtonsContainer>
      )}

      <ProfileCompaniesDialog
        showProfileCompaniesDialog={showProifleCompaniesDialog}
        setShowProfileCompaniesDialog={setShowProfileCompaniesDialog}
        dialogNumberOfJobs={dialogNumberOfJobs}
      />
    </ProfileList>
  );
};

export default CompanyList;
