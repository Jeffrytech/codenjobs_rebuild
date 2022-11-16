import React, { useState, useEffect } from "react";
// import { useRouter } from "next/router";
import { Avatar } from "baseui/avatar";

import {
  MoreBlogsByUserCard, // Extract this
  MoreFromTheUser,
  MoreBlogsContainer,
  MoreBlog,
} from "./MoreBlogsFromTheUserCSS";

import { findMoreBlogListByUsername } from "../../../api/blog";
import ExternalLink from "../../ExternalLink";
import { COMPANY_LOGO } from "../../../config/environment";
// import Link from "next/link";

const MoreBlogsFromTheUser = ({
  id,
  username,
}) => {
  // const router = useRouter();
  
  const [moreBlogs, setMoreBlogs] = useState([]);

  useEffect(() => {
    findMoreBlogListByUsername(username, id)
      .then(({ data, error }) => {
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

  if (moreBlogs.length === 0) {
    return null;
  }

  return (
    <MoreBlogsByUserCard>
      <ExternalLink href={`/user/${username}/posts`} >
        <MoreFromTheUser>
          More from the user
          {/* More from {username} */}
        </MoreFromTheUser>
      </ExternalLink>


      <MoreBlogsContainer>
        {moreBlogs.map(({
          // company_name,
          // company_logo,

          id,
          cover,
          title,
        }) => {
          // job?&title=Backend-Rust-developer-with-experience-in-web-or-mobile-apps&id=c603f94c-fc9a-4c92-ab66-807021ee05ab
          const blogLink = `/blog?&title=${title.split(" ").join("-")}&id=${id}`;

          return (
            <MoreBlog
              key={id}
              // onClick={(e) => {
              //   e.preventDefault();
              //   router.push(job_link);
              // }}
            >
              <a
                href={blogLink}
                target="_blank"
                rel="noopener noreferrer"

                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "black",
                  textDecoration: "none",
                }}
              >
                {/* Use this or not? */}
                <Avatar
                  name={cover ? title : ""}
                  // name={""}
                  // name={title}
                  size="2rem"
                  src={cover || COMPANY_LOGO} // Should use this instead.
                  // src={cover || ""} // Should use this instead.
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
    </MoreBlogsByUserCard>
  );
};

export default MoreBlogsFromTheUser;