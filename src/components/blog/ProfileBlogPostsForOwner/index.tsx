import React, { useState, useEffect } from "react";
import Select from "react-select";

import moment from "moment";

import ModeCommentIcon from "@material-ui/icons/ModeComment";

import ListHeader from "../../SearchList/ListHeader";
import BlogSkeleton from "../BlogSkeleton";

import {
  ProfileListCardContainer,

  Title,

} from "../../profile/ProfileList/ProfileListCSS";
import ProfileList from "../../profile/ProfileList";
import ProfileBlogStatus from "../ProfileBlogStatus";
// import { findBlogListByOwner } from "../../../api/privateBlog";
import { useRouter } from "next/router";

import ProfileBlogPostsForOwnerButtons from "./ProfileBlogPostsForOwnerButtons";
import { blogPostStatusOptions, findBlogPostStatusLabelValue } from "../../../typeDefinitions/blog";
import NoProfileList from "../../NoProfileList";
import { findBlogListByOwner } from "../../../api/privateBlog";
import CentralizeChildren from "../../CentralizeChildren";
import { formatPathTitle } from "../../../title/path";
import { findTotalBlogList } from "../../../api/blog";
import { UserCommentButtonWrapper, UserProfileCommentButtonWrapper, UserProfileMoneyButtonWrapper } from "../../OwnerButtonsCSS";
import { BlogPostListForOwnerHeader } from "./ProfileBlogPostsForOwnerCSS";
// import { findJobStatusLabelValue } from "../../../typeDefinitions/job";

// Extract this later to typeDefinitions/blog similar to blogPostCategories and functions for it?
// const blogStatusOptions = [
//   { value: null, label: 'All' },
//   { value: 'Draft', label: 'Draft' },
//   { value: 'Public', label: 'Public' }
// ]

// const findBlogPostStatusValue = (status) => {
//   if (status === null) {
//     return {
//       "label": "All",
//       "value": null,
//     };
//   }

//   return {
//     label: status,
//     value: status,
//   };
// };

// Extract this?
const formatProfileBlogPostListTitle = (
  numberOfJobs: Number,
) => {
  // const prefix = "Code";

  let suffix = "Posts";
  // let suffix = "jobs";
  if (numberOfJobs < 2) {
    suffix = "Post";
  }

  // const jobListTitle = `${numberOfJobs} ${prefix} ${suffix}`;
  const jobListTitle = `${numberOfJobs} ${suffix}`;

  return jobListTitle;
};

// Should include edit and delete.
const ProfileJobsForOwner = ({
  username,
  status,
}) => {
  // alert(status);

  const router = useRouter();
  
  const [blogList, setBlogList] = useState(null);

  useEffect(() => {
    findBlogListByOwner(status)
      .then(({ data }) => {
        // console.log("data");
        // console.log(data);
        // // alert(data);

        // if (data === null) {
        //   setBlogList(null);
        //   return;
        // }

        // if (data.length > 0) {
        //   setBlogList(data); // return null when there is no job so NoJob part works
        // }

        setBlogList(data);
        
      })
      .catch(error => {
        console.log(error);
      });
  }, [status]);

  // let message = "You don't have any post.";
  let message = "You don't have any blog post.";
  let redirect = "/blog/post";

  if (status === "Draft") {
    message = "You don't have any draft.";
    redirect = `/user/${username}/posts`;
  } else if (status == "Public") {
    message = "You don't have any published post.";
    // message = "No published post.";
    redirect = `/user/${username}/posts`;;
  }

  if (blogList === null) {
    return <ProfileList>
      <BlogSkeleton />
      <BlogSkeleton />
      <BlogSkeleton />
      <BlogSkeleton />
      <BlogSkeleton />
      <BlogSkeleton />
      <BlogSkeleton />
      <BlogSkeleton />
    </ProfileList>;
  }

  if (blogList.length === 0) {
    return <ProfileList>
      <NoProfileList href={redirect} message={message} />
      <BlogSkeleton />
      <BlogSkeleton />
      <BlogSkeleton />
      <BlogSkeleton />
      <BlogSkeleton />
      <BlogSkeleton />
      <BlogSkeleton />
      <BlogSkeleton />
    </ProfileList>;
  }

  return (
    <ProfileList>
      {findTotalBlogList !== null && <BlogPostListForOwnerHeader>
        <CentralizeChildren>
          {formatProfileBlogPostListTitle(blogList.length)}
        </CentralizeChildren>
        
        <div style={{
          marginLeft: "1rem",
          marginRight: "1rem",
          minWidth: "8rem",
        }}>
          <Select
            // id="satus"
            // name="status"

            styles={{
              control: (provided) => ({
                ...provided,
                // none of react-select's styles are passed to <Control />
                border: "2px solid rgb(239, 239, 239)",
                borderRadius: "0.5rem",

                fontFamily: "roboto",

                // marginLeft: "1rem",

                // opacity: "0.7",
              }),
              placeholder: (provided) => ({
                ...provided,
                // backgroundColor: "red",
                marginLeft: "1.75rem",
                opacity: "0.7"
              }),
              input: (provided) => ({
                ...provided,
                // backgroundColor: "blue",
                backgroundImage: "url('/static/logo.png')",
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
            
            // defaultValue={blogStatusOptions[0]}
            value={findBlogPostStatusLabelValue(status)}

            onChange={({ value }) => {
              // alert(value);
              // console.log(e);
              if (value === null) {
                router.push(`/user/${username}/posts`);
              } else {
                router.push(`/user/${username}/posts?&status=${value}`);
              }
            }}
            options={blogPostStatusOptions}

            placeholder={"status"}
          />
        </div>
      </BlogPostListForOwnerHeader>}

      {blogList.map(({
        id,
        title,

        created_at,
          
        // updated_at,
        // published_at,

        status,

        total_blog_post_money_voters,
        total_blog_comments,
        // total
      }, index) => {
        // alert(created_at);
        // alert(updated_at);
        // alert(published_at);
          
        // Make delete work.
        // Filter by status with dropdown

        return (
          <ProfileListCardContainer 
            key={id} 
            $last={index = blogList.length - 1}
          >
            <div style={{
              display: "flex",
              // marginBottom: "0.25rem",
              marginBottom: "0.5rem",
            }}>
              <span style={{
                marginRight: "auto",
                opacity: "0.7",
              }} >
                {/* {blogTimeForOwner(published_at, updated_at, created_at)} */}
                  Created {moment.utc(created_at).fromNow()}
              </span>

              <ProfileBlogStatus
                // job_status={"Paid"}
                id={id}
                status={status}
                username={username}
              />
            </div>

            <Title onClick={(e) => {
              e.preventDefault();
              // alert(job_status);

              // Should handle all these for buttons, time and link etc.
              // DRAFT = "Draft"
              // PUBLIC = "Public"

              if (status === "Draft") {
                router.push(`/blog/post/preview?&title=${formatPathTitle(title)}&id=${id}`);
              } else if (status === "Public") {
                router.push(`/blog?&title=${formatPathTitle(title)}&id=${id}`);
              }
            }} >
              {title}
            </Title>

            <div style={{
              display: "flex",
              alignItems: "center",
              marginTop: "0.5rem",
              marginBottom: "0.5rem",
              // marginLeft: "0.1rem",
            }}>
              <UserProfileMoneyButtonWrapper
                $isPublic={status === "Public"}
                onClick={() => {
                  if (status === "Public") {
                    router.push(`/blog?&title=${formatPathTitle(title)}&id=${id}&showVoters=true`);
                  }
                }}

              >
                <img src="/static/logo.png" style={{
                  width: "1rem",
                  height: "1rem"
                }} />
                <span style={{
                  marginLeft: "0.25rem",
                }} >
                  {!total_blog_post_money_voters ? 0 : total_blog_post_money_voters}
                </span>
              </UserProfileMoneyButtonWrapper>
               
              <UserProfileCommentButtonWrapper
                $isPublic={status === "Public"}
                onClick={() => {
                  if (status === "Public") {
                    router.push(`/blog?&title=${formatPathTitle(title)}&id=${id}&showComment=true`);
                  }
                }}
              >
                <ModeCommentIcon style={{
                  height: "1rem",
                }} />
                <span>
                  {total_blog_comments}
                  {/* 1 */}
                </span>

              </UserProfileCommentButtonWrapper>
            </div>

            <ProfileBlogPostsForOwnerButtons
              id={id}
              title={title}
              status={status}

              blogList={blogList}
              setBlogList={setBlogList}
            />

          </ProfileListCardContainer>
        );
      })
      }
    </ProfileList>
  );
};

export default ProfileJobsForOwner;