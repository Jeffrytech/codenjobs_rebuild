import React, { useState, useEffect } from "react";
// import { useRouter } from "next/router";
import { Avatar } from "baseui/avatar";

import {
  MoreJobsByUserCard, // Extract this
  MoreFromTheUser,
  MoreJobsContainer,
  MoreJob,
} from "./MoreJobsFromTheUserCSS";

import { findMoreJobListByUsername } from "../../../api/job";
import ExternalLink from "../../ExternalLink";
// import Link from "next/link";

const MoreJobsFromTheUser = ({
  job_id,
  username,
}) => {
  // const router = useRouter();
  
  const [moreJobs, setMoreJobs] = useState(null);

  useEffect(() => {
    findMoreJobListByUsername(username, job_id)
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
  //   return <MoreJobsByUserCard>
  //     <MoreJosFromTheUserSkeleton />
  //   </MoreJobsByUserCard>
  // }

  return (
    <MoreJobsByUserCard>
      <ExternalLink href={`/user/${username}/jobs`} >
        <MoreFromTheUser>
          {job_id === null ? moreJobs.length === 1 ? "Job" : "Jobs"  : "More"} from the user
        </MoreFromTheUser>
      </ExternalLink>
      
      {/* <MoreFromTheUser>
        {job_id === null ? "Jobs" : "More"} from the user
      </MoreFromTheUser> */}

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
              // onClick={(e) => {
              //   e.preventDefault();
              //   router.push(job_link);
              // }}
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
                  src={company_logo || ""} // Should use this instead.
                />
                <span style={{
                  marginLeft: "0.5rem",
                }}>
                  {job_title} at {company_name}
                  {/* {job_title} at <b>{company_name}</b> */}
                  {/* Backend Rust developer with experience in web or mobile apps */}
                </span>
              </a>
            </MoreJob>
          );
        })}
      </MoreJobsContainer>
    </MoreJobsByUserCard>
  );
};

export default MoreJobsFromTheUser;