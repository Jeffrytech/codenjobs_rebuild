import React, { useState, useEffect } from "react";
// import { Categoryouter } from "next/router";
import { Avatar } from "baseui/avatar";

import {
  RecentBlogListCard,
  RecentBlogListContainer,
  RecentBlogListTitle,
  RecentBlogList
} from "./RecentBlogListCSS";

// import { findMoreJobListByCategory  } from "../../../api/job";
import { findMoreBlogListByCategory, findRecentBlogList  } from "../../../api/blog";
import ExternalLink from "../../ExternalLink";
import { COMPANY_LOGO } from "../../../config/environment";
// import MoreJosFromTheCategorySkeleton from "./MoreJosFromTheCategorySkeleton";
// import { Tooltip } from "@material-ui/core";
// import Link from "next/link";

// Edit CSS later.

const RecentBlogs = ({
  // category,
  limit,
}) => {  
  const [recentBlogList, setRecentBlogList] = useState(null);

  useEffect(() => {
    findRecentBlogList(limit)
    // findMoreJobListByCategory(job_id)
      .then(({ data, error }) => {
        // console.log("data");
        // console.log(data);
        
        if (data.length > 0) {
          setRecentBlogList(data);
        }

        if (error) {
          console.error(error);
        }
      }).catch(error => {
        console.error(error);
      });
  }, []);

  if (recentBlogList === null) {
    return null;
  }

  // if (moreJobs === []) {
  //   return <MoreJobsByCategoryCard>
  //     <MoreJosFromTheCategorySkeleton />
  //   </MoreJobsByCategoryCard>
  // }

  return (
    <RecentBlogListCard>
      <ExternalLink href="/blogs" >
        <RecentBlogListTitle>
          {/* Check out similar roles */}
          {/* {moreJobs.length === 1 ? "Check out this job" : "Check out relevant jobs"} */}
          {/* {moreJobs.length === 1 ? "Read this post" : "Read more blog posts"} */}
          {/* {recentBlogList.length === 1 ? "Read this" : "Read more"} */}
          New Posts
          {/* {moreBlogs.length === 1 ? "Read this" : "Read New Posts"} */}
          {/* {moreBlogs.length === 1 ? "Read a new post" : `Read ${moreBlogs.length} new relevant posts`} */}
          {/* {moreBlogs.length === 1 ? "Read a new post" : `Read ${moreBlogs.length} new relevant posts`} */}
        </RecentBlogListTitle>
      </ExternalLink>
      
      {/* <MoreFromTheCategory>
        {job_id === null ? "Jobs" : "More"} from the Category
      </MoreFromTheCategory> */}

      <RecentBlogListContainer>
        {recentBlogList.map(({
          id,
          cover,
          title,
        }) => {
          // job?&title=Backend-Rust-developer-with-experience-in-web-or-mobile-apps&id=c603f94c-fc9a-4c92-ab66-807021ee05ab
          const blog_link = `/blog?&title=${title.split(" ").join("-")}&id=${id}`;

          return (
            <RecentBlogList
              key={id}
            >
              <a
                href={blog_link}
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
                  name={title}
                  size="2rem"
                  src={cover || COMPANY_LOGO}
                  // src={cover || ""}
                />
                <span style={{
                  marginLeft: "0.5rem",
                }}>
                  {title} 
                </span>
              </a>
            </RecentBlogList>
          );
        })}
      </RecentBlogListContainer>
    </RecentBlogListCard>
  );
};

export default RecentBlogs;