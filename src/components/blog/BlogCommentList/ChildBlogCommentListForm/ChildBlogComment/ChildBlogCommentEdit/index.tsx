// Remove parent and it should work?

import { useEffect, useState } from "react";

import { 
  ChildBlogCommentEditForm, 
  ChildBlogCommentEditFormWrapper, 
  ChildBlogCommentEditTextarea 
} from "./ChildBlogCommentEditCSS";
import { BlogCommentListButtonContainer, BlogCommentListCancelButton, BlogCommentListResponseButton } from "../../../BlogCommentListCSS";

import { findBlogCommentList } from "../../../../../../api/blogComment";

import { editBlogComment } from "../../../../../../api/privateBlogComment";
import { blogCommentMaxLength } from "../../../../../../validators/maxLengths";

const ChildBlogCommentEdit = ({
  showChildBlogCommentEdit,
  setShowEditChildBlogCommentForm,

  // childBlogCommentList,
  // setChildBlogCommentList,

  parent_blog_comment_id,

  blogCommentList,
  setBlogCommentList,

  blog_id, // This is null when edited?
  blog_comment_text,
  blog_comment_id,
}) => {
  // 
  // alert("blog_id");
  // alert(blog_id);
  // alert("blog_comment_text");
  // alert(blog_comment_text);

  const [childCommentEditText, setChildCommentEditText] = useState(blog_comment_text);

  if (showChildBlogCommentEdit) {
    return (
      // Extract this?
      // ChildBlogCommentEditFormWrapper
      <ChildBlogCommentEditFormWrapper>
        <ChildBlogCommentEditForm>
          <ChildBlogCommentEditTextarea
            placeholder="Edit your comment here"
            maxLength={blogCommentMaxLength}
            value={childCommentEditText}
            onChange={(e) => {
              setChildCommentEditText(e.target.value);
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
                  setChildCommentEditText(blog_comment_text);
                  setShowEditChildBlogCommentForm(false);
                }}
              >
                Cancel
              </BlogCommentListCancelButton>
              <BlogCommentListResponseButton
                type="button"
                disabled={(childCommentEditText === null || childCommentEditText === "" || childCommentEditText === blog_comment_text) ? true : false}

                onClick={async () => {
                  // alert(blog_comment_id);
                  // alert(blog_id);

                  // alert(parent_blog_comment_id);

                  const { data: result, error: editBlogCommentError } = await editBlogComment({
                    id: blog_comment_id,
                    blog_id,
                    parent_blog_comment_id,
                    text: childCommentEditText,
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
                    
                    setShowEditChildBlogCommentForm(false);

                    // const newChildBlogCommentList = childBlogCommentList.map(blogComment => {
                    //   return blogComment.blog_comment_id === blog_comment_id ? {
                    //     ...blogComment,
                    //     blog_comment_text: childCommentEditText,
                    //     // Find a better way than this?
                    //     blog_comment_updated_at: (new Date()).toISOString(),
                    //   } : blogComment
                    // })

                    // setChildBlogCommentList(newChildBlogCommentList);

                    // const newBlogCommentList = blogCommentList.map(blogComment => {
                    //   return blogComment.blog_comment_id === blog_comment_id ? {
                    //     ...blogComment,
                    //     blog_comment_text: parentCommentEditText,
                    //     // Find a better way than this?
                    //     blog_comment_updated_at: (new Date()).toISOString(),
                    //   } : blogComment
                    // })

                    const newBlogCommentList = blogCommentList.map(blogComment => {
                      return blogComment.blog_comment_id === parent_blog_comment_id ? {
                        ...blogComment,
                        blog_comment_child_blog_comments: blogComment.blog_comment_child_blog_comments?.map((childBlogComment) => {
                          return childBlogComment.blog_comment_id === blog_comment_id ? {
                            ...childBlogComment,
                            blog_comment_text: childCommentEditText,
                            // Find a better way than this?
                            blog_comment_updated_at: (new Date()).toISOString(),
                          } : childBlogComment;
                        })
                        // Find a better way than this?
                      } : blogComment;
                    });

                    // console.log("blogCommentList");
                    // console.log(blogCommentList);

                    // console.log("newBlogCommentList");
                    // console.log(newBlogCommentList);

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
        </ChildBlogCommentEditForm>
      </ChildBlogCommentEditFormWrapper>
    );
  } else {
    return null;
  }
};

export default ChildBlogCommentEdit;
