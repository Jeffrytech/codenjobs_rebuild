import React, { useState, useEffect } from "react";
// import { Categoryouter } from "next/router";
import { Avatar } from "baseui/avatar";

import {
  MoreBlogsByCategoryCard, // Extract this
  MoreFromTheCategory,
  MoreBlogsContainer,
  MoreBlog,
} from "./MoreBlogsByCategoryCSS";

// import { findMoreJobListByCategory  } from "../../../api/job";
import { findMoreBlogListByCategory } from "../../../api/blog";
import ExternalLink from "../../ExternalLink";
import { COMPANY_LOGO } from "../../../config/environment";
// import MoreJosFromTheCategorySkeleton from "./MoreJosFromTheCategorySkeleton";
// import { Tooltip } from "@material-ui/core";
// import Link from "next/link";

// Edit CSS later.

const MoreBlogsByCategory = ({
  category,
  blog_id,
}) => {

  const [moreBlogs, setMoreBlogs] = useState(null);

  useEffect(() => {
    findMoreBlogListByCategory(category, blog_id)
      // findMoreJobListByCategory(job_id)
      .then(({ data, error }) => {
        // console.log("data");
        // console.log(data);

        if (data.length > 0) {
          setMoreBlogs(data);
        }

        if (error) {
          console.error(error);
        }
      }).catch(error => {
        console.error(error);
      });
  }, []);

  if (moreBlogs === null) {
    return null;
  }

  // if (moreJobs === []) {
  //   return <MoreJobsByCategoryCard>
  //     <MoreJosFromTheCategorySkeleton />
  //   </MoreJobsByCategoryCard>
  // }

  return (
    <MoreBlogsByCategoryCard>
      <ExternalLink href={`/blogs?category=${category}`} >
        <MoreFromTheCategory>
          {/* Check out similar roles */}
          {/* {moreJobs.length === 1 ? "Check out this job" : "Check out relevant jobs"} */}
          {/* {moreJobs.length === 1 ? "Read this post" : "Read more blog posts"} */}
          {moreBlogs.length === 1 ? "Read this" : "Read more"}
          {/* {moreBlogs.length === 1 ? "Read this" : "Read New Posts"} */}
          {/* {moreBlogs.length === 1 ? "Read a new post" : `Read ${moreBlogs.length} new relevant posts`} */}
          {/* {moreBlogs.length === 1 ? "Read a new post" : `Read ${moreBlogs.length} new relevant posts`} */}
        </MoreFromTheCategory>
      </ExternalLink>

      {/* <MoreFromTheCategory>
        {job_id === null ? "Jobs" : "More"} from the Category
      </MoreFromTheCategory> */}

      <MoreBlogsContainer>
        {moreBlogs.map(({
          id,
          cover,
          title,
        }) => {
          // job?&title=Backend-Rust-developer-with-experience-in-web-or-mobile-apps&id=c603f94c-fc9a-4c92-ab66-807021ee05ab
          const blog_link = `/blog?&title=${title.split(" ").join("-")}&id=${id}`;

          return (
            <MoreBlog
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
            </MoreBlog>
          );
        })}
      </MoreBlogsContainer>
    </MoreBlogsByCategoryCard>
  );
};

export default MoreBlogsByCategory;