import React, { useState, useEffect } from "react";
import { Avatar } from "baseui/avatar";

import {
  TopUsersForHireCard,
  TopUsersForHireContainer,
  TopUsersForHireTitle,
  TopUsersForHireList,
} from "./TopUsersForHireCSS";

import ExternalLink from "../ExternalLink";
import { COMPANY_LOGO } from "../../config/environment";
import { findTopUsersForHire } from "../../api/user";

const TopUsersForHire = ({
  // category,
  limit = 10,
  list = undefined,
}) => {  
  const [topUsersForHireList, setTopUsersForHireList] = useState(null);

  useEffect(() => {
    // Make an end point for this later?
    findTopUsersForHire(limit)
      .then(({ data, error }) => {
        // console.log("data");
        // console.log(data);

        if (error) {
          console.log("findTopUsersForHire error");
          console.error(error);
        }
        
        const { forhireList } = data;
        setTopUsersForHireList(forhireList);

        
      }).catch(catchError => {
        console.error("findTopUsersForHire catchError");
        console.error(catchError);
      });
  }, []);

  if (topUsersForHireList === null) {
    return null;
  }

  // if (moreJobs === []) {
  //   return <MoreJobsByCategoryCard>
  //     <MoreJosFromTheCategorySkeleton />
  //   </MoreJobsByCategoryCard>
  // }

  return (
    <TopUsersForHireCard $list={list} >
      <ExternalLink href="/forhire?sort=top" >
        <TopUsersForHireTitle>
          {/* Check out similar roles */}
          {/* {moreJobs.length === 1 ? "Check out this job" : "Check out relevant jobs"} */}
          {/* {moreJobs.length === 1 ? "Read this post" : "Read more blog posts"} */}
          {/* {recentBlogList.length === 1 ? "Read this" : "Read more"} */}
          Top Users For Hire
          {/* {moreBlogs.length === 1 ? "Read this" : "Read New Posts"} */}
          {/* {moreBlogs.length === 1 ? "Read a new post" : `Read ${moreBlogs.length} new relevant posts`} */}
          {/* {moreBlogs.length === 1 ? "Read a new post" : `Read ${moreBlogs.length} new relevant posts`} */}
        </TopUsersForHireTitle>
      </ExternalLink>
      
      {/* <MoreFromTheCategory>
        {job_id === null ? "Jobs" : "More"} from the Category
      </MoreFromTheCategory> */}

      <TopUsersForHireContainer>
        {topUsersForHireList.map(({
          username,
          profile_image,
        }) => {
          // job?&title=Backend-Rust-developer-with-experience-in-web-or-mobile-apps&id=c603f94c-fc9a-4c92-ab66-807021ee05ab
          const user_profile = `/user/${username}`;

          return (
            <TopUsersForHireList
              key={username}
            >
              <a
                href={user_profile}
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
                  name={username}
                  size="2rem"
                  src={profile_image || COMPANY_LOGO}
                  // src={profile_image}
                  // src={cover || ""}
                />
                <span style={{
                  marginLeft: "0.5rem",
                }}>
                  {username} 
                </span>
              </a>
            </TopUsersForHireList>
          );
        })}
      </TopUsersForHireContainer>
    </TopUsersForHireCard>
  );
};

export default TopUsersForHire;