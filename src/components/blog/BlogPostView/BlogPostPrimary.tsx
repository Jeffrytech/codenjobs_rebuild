import React from "react";

import { useRouter } from "next/router";

import {
  // BlogViewBody, 
  BlogViewBodyWrapper,
} from "./BlogPostPrimaryCSS";

import PrimaryWrapper from "../../PrimaryWrapper";
// import { useAuth } from "../../../contexts/auth";

// import { BlogPostTime } from "../BlogPostPreview/BlogPreviewCSS";
// import { COMPANY_WEBSITE } from "../../../config/environment";

// import { validateEmail } from "../../validators";
import BlogCover from "../BlogCover";
import BlogHeader from "../BlogHeader";
// import { BlogBody } from "../BlogPostPreview/BlogPreviewCSS";
import BlogPostTags from "../BlogPostTags";
import { useAuth } from "../../../contexts/auth";
import PostRenderer from "../../markdown/PostRenderer";
import BlogPrimaryWrapper from "../../BlogPrimaryWrapper";

const BlogPostPrimary = ({
  id,
  // isOwner,

  username, // Just use user_username,

  cover,

  title,
  published_at,
  category,
  
  body,
  tags,

  status,
  commentable,

  userProfile,
  setUserProfile,

  totalBlogComments,

  showVoters,
}) => {
  const {
    // @ts-ignore
    user,
    // isOwner,
  } = useAuth();
  const isOwner = (user && user.username === username);
  
  //   alert(job_status);
  const router = useRouter();

  // This doesn't work for whatever reason
  // const returnToJobsPageList = ["Draft", "Hold", "Review", "Cancelled", "Closed"];
  //   if (job_status in returnToJobsPageList) {
  //     router.replace("/jobs");
  //     return null;
  //   }

  if (status === "Draft") {
    router.replace("/blogs");
    return null;
  }

  return (
    <BlogPrimaryWrapper>
      <BlogCover cover={cover} />
      <BlogHeader 
        id={id} 
        status={status} 
        commentable={commentable}
        
        user={user} 
        isOwner={isOwner} 
        username={username} title={title} published_at={published_at} 
        
        category={category}
      
        userProfile={userProfile}
        setUserProfile={setUserProfile}

        totalBlogComments={totalBlogComments}

        showVoters={showVoters}
      />
      <BlogViewBodyWrapper>
        <PostRenderer input={body} />
      </BlogViewBodyWrapper>
     
      <BlogPostTags tags={tags} isPreview={false} />
    </BlogPrimaryWrapper>
  );
};

export default BlogPostPrimary;