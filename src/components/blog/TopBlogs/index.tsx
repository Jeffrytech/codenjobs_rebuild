import React, { useState, useEffect } from "react";
// import { Categoryouter } from "next/router";
import { Avatar } from "baseui/avatar";

import {
  TopBlogListCard,
  TopBlogListContainer,
  TopBlogListTitle,
  TopBlogList
} from "./TopBlogListCSS";

// import { findMoreJobListByCategory  } from "../../../api/job";
import { findMoreBlogListByCategory, findTopBlogList  } from "../../../api/blog";
import ExternalLink from "../../ExternalLink";
import { COMPANY_LOGO } from "../../../config/environment";
// import MoreJosFromTheCategorySkeleton from "./MoreJosFromTheCategorySkeleton";
// import { Tooltip } from "@material-ui/core";
// import Link from "next/link";

// Edit CSS later.

const TopBlogs = ({
  // category,
  limit,
}) => {  
  const [topBlogList, setTopBlogList] = useState(null);

  useEffect(() => {
    findTopBlogList(limit)
    // findMoreJobListByCategory(job_id)
      .then(({ data, error }) => {
        // console.log("data");
        // console.log(data);

        if (error) {
          console.error(error);
        }

        const { blogList } = data;
        setTopBlogList(blogList); 
        
        // if (data.blogList.length > 0) {
        //   setTopBlogList(data);
        // }

        
      }).catch(error => {
        console.error(error);
      });
  }, []);

  if (topBlogList === null) {
    return null;
  }

  // if (moreJobs === []) {
  //   return <MoreJobsByCategoryCard>
  //     <MoreJosFromTheCategorySkeleton />
  //   </MoreJobsByCategoryCard>
  // }

  return (
    <TopBlogListCard>
      <ExternalLink href="/blogs?sort=top" >
        <TopBlogListTitle>
          {/* Check out similar roles */}
          {/* {moreJobs.length === 1 ? "Check out this job" : "Check out relevant jobs"} */}
          {/* {moreJobs.length === 1 ? "Read this post" : "Read more blog posts"} */}
          {/* {TopBlogList.length === 1 ? "Read this" : "Read more"} */}
          Top Posts
          {/* {moreBlogs.length === 1 ? "Read this" : "Read New Posts"} */}
          {/* {moreBlogs.length === 1 ? "Read a new post" : `Read ${moreBlogs.length} new relevant posts`} */}
          {/* {moreBlogs.length === 1 ? "Read a new post" : `Read ${moreBlogs.length} new relevant posts`} */}
        </TopBlogListTitle>
      </ExternalLink>
      
      {/* <MoreFromTheCategory>
        {job_id === null ? "Jobs" : "More"} from the Category
      </MoreFromTheCategory> */}

      <TopBlogListContainer>
        {topBlogList.map(({
          id,
          cover,
          title,
        }) => {
          // job?&title=Backend-Rust-developer-with-experience-in-web-or-mobile-apps&id=c603f94c-fc9a-4c92-ab66-807021ee05ab
          const blog_link = `/blog?&title=${title.split(" ").join("-")}&id=${id}`;

          return (
            <TopBlogList
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
            </TopBlogList>
          );
        })}
      </TopBlogListContainer>
    </TopBlogListCard>
  );
};

export default TopBlogs;