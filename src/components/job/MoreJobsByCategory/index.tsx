import React, { useState, useEffect } from "react";
// import { Categoryouter } from "next/router";
import { Avatar } from "baseui/avatar";

import {
  MoreJobsByCategoryCard, // Extract this
  MoreFromTheCategory,
  MoreJobsContainer,
  MoreJob,
} from "./MoreJobsByCategoryCSS";

import { findMoreJobListByCategory } from "../../../api/job";
import ExternalLink from "../../ExternalLink";

const MoreJobsByCategory = ({
  category,
  job_id,
}) => {  
  const [moreJobs, setMoreJobs] = useState(null);

  useEffect(() => {
    findMoreJobListByCategory(category, job_id)
    // findMoreJobListByCategory(job_id)
      .then(({ data, error }) => {
        if (data.length > 0) {
          setMoreJobs(data);
        }

        if (error) {
          console.error(error);
        }
      }).catch(error => {
        console.error(error);
      });
  }, []);

  if (moreJobs === null) {
    return null;
  }

  // if (moreJobs === []) {
  //   return <MoreJobsByCategoryCard>
  //     <MoreJosFromTheCategorySkeleton />
  //   </MoreJobsByCategoryCard>
  // }

  return (
    <MoreJobsByCategoryCard>
      <ExternalLink href={`jobs?category=${category}`} >
        <MoreFromTheCategory>
          {/* Check out similar roles */}
          {moreJobs.length === 1 ? "Check out this job" : "Check out relevant jobs"}
        </MoreFromTheCategory>
      </ExternalLink>
      
      {/* <MoreFromTheCategory>
        {job_id === null ? "Jobs" : "More"} from the Category
      </MoreFromTheCategory> */}

      <MoreJobsContainer>
        {moreJobs.map(({
          company_name,
          company_logo,

          job_id,
          job_title,
        }) => {
          // job?&title=Backend-Rust-developer-with-experience-in-web-or-mobile-apps&id=c603f94c-fc9a-4c92-ab66-807021ee05ab
          const job_link = `/job?&title=${job_title.split(" ").join("-")}&id=${job_id}`;

          return (
            <MoreJob
              key={job_id}
            >
              <a
                href={job_link}
                target="_blank"
                rel="noopener noreferrer"

                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "black",
                  textDecoration: "none",
                }}
              >
                <Avatar
                  // name={company_name}
                  name={""}
                  size="2rem"
                  src={company_logo || ""}
                />
                <span style={{
                  marginLeft: "0.5rem",
                }}>
                  {job_title} at {company_name}
                  {/* {job_title} at <b>{company_name}</b> */}
                  {/* {job_title} at <b>{company_name}</b> */}
                  {/* {job_title} by <b>{company_name}</b> */}
                </span>
              </a>
            </MoreJob>
          );
        })}
      </MoreJobsContainer>
    </MoreJobsByCategoryCard>
  );
};

export default MoreJobsByCategory;