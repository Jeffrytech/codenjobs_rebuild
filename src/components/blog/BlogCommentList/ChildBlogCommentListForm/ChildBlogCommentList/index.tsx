// Remove parent and it should work?

import { useEffect, useState } from "react";
import ChildBlogComment from "../ChildBlogComment";

// import { findBlogChildCommentList } from "../../../../../api/blogComment";

import PrimarySpinner from "../../../../spinners/PrimarySpinner";

const ChildBlogCommentList = ({
  showChildBlogCommentForm,
  showChildBlogCommentList,

  blogId,
  // parent_blog_comment_id,

  writer,
  user,

  totalChildBlogComments,
  // setTotalChildBlogComments,

  blogCommentList,
  setBlogCommentList,

  blog_comment_child_blog_comments,
}) => {
  if (showChildBlogCommentList === false) {
    return null;
  }

  if (showChildBlogCommentList && blog_comment_child_blog_comments === null) {
    return (
      <div style={{
        marginTop: showChildBlogCommentForm ? "1rem" : "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginRight: "2.25rem",
        opacity: "0.7",
      }} >
        <PrimarySpinner />
      </div>
    );
  }

  return (
    <div>
      {blog_comment_child_blog_comments?.map((data, index) => {
        // alert(data.blog_comment_id);
        // alert(index);

        // alert(data.blog_comment_id);

        // console.log("data");
        // console.log(data);

        return (
          // Need to fix this
          <div key={data.blog_comment_id}>
            <ChildBlogComment
              data={data} 
              writer={writer} 
              user={user} 

              blogId={blogId}

              blogCommentList={blogCommentList}
              setBlogCommentList={setBlogCommentList}

              // childBlogCommentList={childBlogCommentList} 
              // setChildBlogCommentList={setChildBlogCommentList}
              
              // totalChildBlogComments={totalChildBlogComments}
              // setTotalChildBlogComments={setTotalChildBlogComments}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ChildBlogCommentList;

