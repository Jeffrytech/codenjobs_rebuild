// Remove parent and it should work?

import { useEffect, useState } from "react";

import { 
  ParentBlogCommentEditForm, 
  ParentBlogCommentEditFormWrapper, 
  ParentBlogCommentEditTextarea 
} from "./ParentBlogCommentEditCSS";
import { BlogCommentListButtonContainer, BlogCommentListCancelButton, BlogCommentListResponseButton } from "../../BlogCommentListCSS";

import { findBlogCommentList } from "../../../../../api/blogComment";

import { editBlogComment } from "../../../../../api/privateBlogComment";
import { blogCommentMaxLength } from "../../../../../validators/maxLengths";

// import {
//   // Edit
//   ParentBlogCommentListFormWrapper,

//   ParentBlogCommentEditForm,
//   ParentBlogCommentEditTextarea, 
// } from "./ParentBlogCommentCSS";

const ParentBlogCommentEdit = ({
  showParentBlogCommentEdit,
  setShowEditParentBlogCommentForm,

  blogCommentList,
  setBlogCommentList,

  blog_id,
  blog_comment_text,
  blog_comment_id,
}) => {
  const [parentCommentEditText, setParentCommentEditText] = useState(blog_comment_text);

  if (showParentBlogCommentEdit) {
    return (
      // Extract this?
      // ParentBlogCommentEditFormWrapper
      <ParentBlogCommentEditFormWrapper>
        <ParentBlogCommentEditForm>
          <ParentBlogCommentEditTextarea
            placeholder="Edit your comment here"
            maxLength={blogCommentMaxLength}
            value={parentCommentEditText}
            onChange={(e) => {
              setParentCommentEditText(e.target.value);
            }}
          />

          <BlogCommentListButtonContainer>
            <div
              style={{
                marginLeft: "auto",
                display: "flex",
              }}
            >
              <BlogCommentListCancelButton
                type="button"
                onClick={() => {
                  setParentCommentEditText(blog_comment_text);
                  setShowEditParentBlogCommentForm(false);
                }}
              >
                Cancel
              </BlogCommentListCancelButton>
              <BlogCommentListResponseButton
                type="button"
                disabled={(parentCommentEditText === null || parentCommentEditText === "" || parentCommentEditText === blog_comment_text) ? true : false}

                onClick={async () => {
                  // alert(blog_comment_id);
                  // alert(blog_id);
                  
                  const { data: result, error: editBlogCommentError } = await editBlogComment({
                    id: blog_comment_id,
                    blog_id,
                    parent_blog_comment_id: null,
                    text: parentCommentEditText,
                  });

                  if (editBlogCommentError) {
                    console.log("editBlogCommentError");
                    console.error(editBlogCommentError);

                    // alert("Something went wrong at the server");
                    return;
                  }

                  if (result) {
                    // const { data: newBlogCommentList, error: findBlogCommentListError } = await findBlogCommentList(blog_id);

                    // if (findBlogCommentListError) {
                    //   console.log("findBlogCommentListError");
                    //   console.error(findBlogCommentListError);
                    //   // Show error at the frontend later?
                    // } else {
                    //   setShowEditParentBlogCommentForm(false);

                    //   // Instead of this edit from the existing list
                    //   setBlogCommentList(newBlogCommentList);
                    // }
                    
                    setShowEditParentBlogCommentForm(false);

                    const newBlogCommentList = blogCommentList.map(blogComment => {
                      return blogComment.blog_comment_id === blog_comment_id ? {
                        ...blogComment,
                        blog_comment_text: parentCommentEditText,
                        // Find a better way than this?
                        blog_comment_updated_at: (new Date()).toISOString(),
                      } : blogComment;
                    });

                    setBlogCommentList(newBlogCommentList);
                  } else {
                    alert("Something went wrong at the server");
                  }


                }}
              >
                Update
              </BlogCommentListResponseButton>
            </div>
          </BlogCommentListButtonContainer>
        </ParentBlogCommentEditForm>
      </ParentBlogCommentEditFormWrapper>
    );
  } else {
    return null;
  }
};

export default ParentBlogCommentEdit;
