import React, { useState, useEffect } from "react";
import Select from "react-select";

import Link from "next/link";

import moment from "moment";

import {
  BlogPostHeader,
  BlogPostCover,
  BlogListState,
  BlogPostListForNotOwnerHeader,

  // LocationWrapper,
} from "./ProfileBlogsForNotOwnerCSS";

// import Skill from "../../Skill";

// import Alert from "@material-ui/lab/Alert";
import NoBlogPost from "../NoBlogPost";

import { findBlogListByUsername, findTotalBlogList } from "../../../api/blog";

import { Chip } from "@material-ui/core";
// import JobFeatures from "../JobFeatures";
import ListHeader from "../../SearchList/ListHeader";
// import pageTitle from "../../pageTitle";
import BlogSkeleton from "../BlogSkeleton";

import {
  // ProfileListContainer,
  // ProfileListSection,

  // ProfileListWrapper,
  ProfileListCardContainer,

  // CompanyName,
  Title,

  // ProfileListSkillContainer,
  // ProfileListSkill,
  ProfileListTag,
  ProfileListTagContainer,
} from "../../profile/ProfileList/ProfileListCSS";
import ProfileList from "../../profile/ProfileList";
import CentralizeChildren from "../../CentralizeChildren";
import { formatPathTitle } from "../../../title/path";
import NoProfileList from "../../NoProfileList";
import { findProfileBlogListNotOwnerSortOptionsLabelValue, profileBlogListNotOwnerOptions } from "../../../typeDefinitions/blog";
import useProfileBlogPostsForNotOwnerForm from "./useProfileBlogPostsForNotOwnerForm";
import { ListPaginationButtonsContainer, ListPaginationPrevButton, ListPaginationNextButton } from "../../job/ListPagination/ListPaginationCSS";
import { useRouter } from "next/router";

// Extract this?
// const formatProfileBlogPostListTitle = (
//   numberOfJobs: Number,
// ) => {
//   // const prefix = "Code";

//   let suffix = "Posts";
//   // let suffix = "jobs";
//   if (numberOfJobs < 2) {
//     suffix = "Post";
//   }

//   // const jobListTitle = `${numberOfJobs} ${prefix} ${suffix}`;
//   const jobListTitle = `${numberOfJobs} ${suffix}`;

//   return jobListTitle;
// };

const formatProfileBlogPostListTitle = (
  numberOfBlogs: Number,
  // currentPage: Number,
  // totalPage: Number,
) => {
  // const prefix = "Code";

  let suffix = "Posts";
  // let suffix = "jobs";
  if (numberOfBlogs < 2) {
    suffix = "Post";
  }

  // const jobListTitle = `${numberOfJobs} ${prefix} ${suffix}`;
  // const jobListTitle = `${numberOfJobs} ${suffix} (${currentPage} / ${totalPage})`;
  const blogListTitle = `${numberOfBlogs} ${suffix}`;
  // const blogListState = `(${currentPage} / ${totalPage})`;

  return <div>
    {blogListTitle} 
    {/* <BlogListState>{blogListState}</BlogListState> */}
  </div>;
};

const ProfileBlogsForNotOwner = ({
  username,
  sort,
  page,
}) => {
  const router = useRouter();
  
  // TODO
  // Update this
  const [blogList, setBlogList] = useState(null);
  const [totalBlogList, setTotalBlogList] = useState(null); // Should be 0 or totalJobList
  // const [totalBlogList, setTotalBlogList] = useState(null); // Should be 0 or totalJobList

  // const blogsPerPage = 10;
  const blogsPerPage = 10;
  // const totalPage = Math.ceil(totalBlogList / blogsPerPage);

  // let currentPage;
  // if (page === null || page === 1) {
  //   currentPage = 1;
  // } else {
  //   // currentPage = new Number(page);
  //   currentPage = page;
  // }

  // if (page > totalPage && totalPage !== 0) {
  //   const queries = new URLSearchParams(window.location.search);
  //   queries.set("page", totalPage.toString());
  //   // @ts-ignore
  //   window.location = `${window.location.pathname}?${queries.toString()}`;
  // }

  useEffect(() => {
    // const skip = (currentPage - 1) * blogsPerPage;
    // const limit = blogsPerPage;
    const skip = null;
    const limit = null;

    findBlogListByUsername(username, sort, skip, limit)
      .then(({ data }) => {
        // console.log("data");
        // console.log(data);
        // alert(data);

        const { 
          // TODO
          // Use this to update website
          // All, Top, New, Old similar to /blogs without dropdown and posts
          blogList, blogListTotal
        } = data;
        
        setBlogList(blogList); // return null when there is no job so NoJob part works
        setTotalBlogList(blogListTotal);
      })
      .catch(error => {
        console.log(error);
      });

    // findTotalBlogList(username)
    //   .then(({ data }) => {
    //     // console.log("data");
    //     // console.log(data);
    //     // alert(data);
    //     setTotalBlogList(data); // return null when there is no job so NoJob part works
    //   })
    //   .catch(error => {
    //     console.log("findTotalJobListByUsername error");
    //     console.error(error);
    //   });
  }, [
    username, 
    sort,  
    // page
  ]);

  const {
    setFieldValue,
    submitForm,
  } = useProfileBlogPostsForNotOwnerForm({
    username,
    sort,
    // page,
  });

  if (blogList === null) {
    return <ProfileList>
      <BlogSkeleton />
      <BlogSkeleton />
      <BlogSkeleton />
      <BlogSkeleton />
      <BlogSkeleton />
    </ProfileList>;
  }

  if (blogList.length === 0) {
    return <ProfileList>
      <NoProfileList href="/blogs" message={"The user doesn't have any public post yet."} />
      <BlogSkeleton />
      <BlogSkeleton />
      <BlogSkeleton />
      <BlogSkeleton />
      <BlogSkeleton />
    </ProfileList>;
  }

  return (
    <ProfileList>
      {
        <div>
          <BlogPostListForNotOwnerHeader>
            <CentralizeChildren>
              {formatProfileBlogPostListTitle(
                blogList.length, 
                // currentPage, totalPage
              )}
            </CentralizeChildren>
            <div
              style={{
                marginRight: "0.5rem",
              }}
            >
              <Select
                id="profile_blogs_not_owner_sort_options"
                name="profile_blogs_not_owner_sort_options"

                styles={{
                  control: (provided) => ({
                    ...provided,
                    border: "2px solid rgb(239, 239, 239)",
                    borderRadius: "0.5rem",

                    fontFamily: "roboto",

                    // minWidth: "8rem",

                    marginRight: "1rem",
                  }),
                  placeholder: (provided) => ({
                    ...provided,
                    marginLeft: "1.75rem",
                    opacity: "0.7"
                  }),
                  input: (provided) => ({
                    ...provided,
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
                value={findProfileBlogListNotOwnerSortOptionsLabelValue(sort)}

                options={profileBlogListNotOwnerOptions}
              />

            </div>
          </BlogPostListForNotOwnerHeader>
        </div>
      }

      {blogList.map(({
        id,
        cover,
        title,
        tags,
        published_at,
        total_blog_post_money_voters,
      }, index) => {
        // alert(total_blog_post_money_voters);
        // alert(company_logo);

        return (
          <ProfileListCardContainer 
            key={id} 
            // $first={index === 0}
            $last={index === blogList.length -1}
          >
            {cover && <Link href={`/blog?&title=${formatPathTitle(title)}&id=${id}`}
            ><BlogPostCover
                src={cover} 
                alt="cover" 
              />
            </Link>}
            <BlogPostHeader>

              <div style={{
                fontSize: "1rem",
                opacity: "0.7",
                marginTop: "0.5rem",
              }}>
                {/* blog_published_at */}
                  Posted {moment.utc(published_at).fromNow()}
                {/* Posted {moment.utc(job_published_at).fromNow()} */}
              </div>

            </BlogPostHeader>

            {/* blog_title, blog_id */}
            <Link href={`/blog?&title=${formatPathTitle(title)}&id=${id}`}>
              {/* <Link href={`/job?&title=${jobPageTitle(job_title, company_name)}&id=${job_id}`}> */}
              {/* <div> */}
              <Title>
                {title}
              </Title>
              {/* </div> */}
            </Link>

            <div style={{
              display: "flex",
              alignItems: "center",
              marginTop: "0.5rem",
              marginBottom: "0.5rem",
              marginLeft: "0.1rem",
            }}>
              <img src="/static/logo.png" style={{
                width: "1rem",
                height: "1rem"
              }} />
              <span style={{
                marginLeft: "0.25rem",
              }} >
                {!total_blog_post_money_voters ? 0 : total_blog_post_money_voters}
              </span>
            </div>

            <ProfileListTagContainer>
              {tags && tags.map((tag: string) => {
                return (
                  <Link key={tag} href={`/blogs?&tag=${tag}`}>
                    <ProfileListTag>
                      <Chip
                        variant="outlined"
                        label={tag}

                        style={{
                          cursor: "pointer",
                        }}
                        // color="secondary"
                      />
                    </ProfileListTag>

                  </Link>
                );
              })}
            </ProfileListTagContainer>
          </ProfileListCardContainer>
        );
      })
      }

    </ProfileList>
  );
};

export default ProfileBlogsForNotOwner;

// {/* {blogList && totalPage > 1 && <ListPaginationButtonsContainer>
//         {currentPage.toString() !== "1" && <ListPaginationPrevButton
//           onClick={(e) => {
//             e.preventDefault();

//             const prevPage = +(new Number(currentPage)) - 1;

//             const queries = new URLSearchParams(window.location.search);
//             queries.set("page", prevPage.toString());
//             // @ts-ignore
//             // window.location = `${window.location.pathname}?${queries.toString()}`;

//             router.push(`/user/${username}/posts?${queries.toString()}`);
//           }}
//         >
//           Prev
//         </ListPaginationPrevButton>}
//         {currentPage.toString() !== totalPage.toString() && <ListPaginationNextButton
//           onClick={(e) => {
//             e.preventDefault();

//             let nextPage = +(new Number(currentPage)) + 1;

//             const queries = new URLSearchParams(window.location.search);
//             queries.set("page", nextPage.toString());
//             // @ts-ignore
//             // window.location = `${window.location.pathname}?${queries.toString()}`;
//             router.push(`/user/${username}/posts?${queries.toString()}`);
//           }}
//         >
//           Next
//         </ListPaginationNextButton>}
//       </ListPaginationButtonsContainer>} */}