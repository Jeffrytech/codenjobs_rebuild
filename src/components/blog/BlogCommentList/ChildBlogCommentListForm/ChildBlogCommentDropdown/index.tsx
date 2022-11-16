import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useState } from 'react';
import { findBlogCommentList } from '../../../../../api/blogComment';
import { deleteBlogChildComment, deleteBlogComment } from '../../../../../api/privateBlogComment';
import { blue } from '../../../../../design/colors';

import {
  CommentDropdownButtonWrapper,
  CommentDropdownContainer,
  CommentDropdownContent,
  CommentDropdownContentOptionWrapper
} from "./CommentDropdownCSS";

const ChildBlogCommentDropdown = ({
  // commenter,
  // user,
  userIsCommenter,
  blog_id,
  blog_comment_id,
  parent_blog_comment_id,

  // Move to the context?
  // childBlogCommentList,
  // setChildBlogCommentList,
  blogCommentList,
  setBlogCommentList,

  // setSortBlogCommentList,
  setShowBlogCommentEdit,

  // totalChildBlogComments, 
  // setTotalChildBlogComments,
}) => {
  const [showCommentDropdown, setShowCommentDropdown] = useState(false);

  // console.log("blogCommentList");
  // console.log(blogCommentList);

  // alert(blog_comment_id);
  // alert(parent_blog_comment_id);

  if (userIsCommenter) {
    return (
      <CommentDropdownContainer>
        <CommentDropdownButtonWrapper>
          <CommentDropdownButtonWrapper
            onClick={() => {
              setShowCommentDropdown(!showCommentDropdown);
            }}
          >
            <MoreHorizIcon style={{
              color: showCommentDropdown ? blue : "inherit",
            }} />
          </CommentDropdownButtonWrapper>
        </CommentDropdownButtonWrapper>
        {/* {showPeopleCategoriesDropdown && <TopNavDropdownContent></TopNavDropdownContent> */}
        {showCommentDropdown && <CommentDropdownContent>
          <CommentDropdownContentOptionWrapper
            onClick={() => {
              setShowBlogCommentEdit(true);
            }}
          >
            <span style={{
              marginRight: "0.25rem",
            }}>
                            Edit this
              {/* Recruiters */}
            </span>
          </CommentDropdownContentOptionWrapper>
          <CommentDropdownContentOptionWrapper 
            onClick={async () => {
              const confirmed = confirm("Do you really want to remove this?");

              // alert(blog_comment_id);
              // alert(parent_blog_comment_id);

              if (confirmed) {
                const { data: result, error: deleteBlogCommentError } = await deleteBlogChildComment({ id: blog_comment_id, parent_blog_comment_id });

                if (deleteBlogCommentError) {
                  alert("Fail to delete the comment");

                  console.log("deleteBlogCommentError");
                  console.error(deleteBlogCommentError);
                                    
                  return;
                }
                                
                if (result) {
                  setShowCommentDropdown(false);

                  // alert(blog_id);
                  // const { data: newBlogCommentList, error: findBlogCommentListError } = await findBlogCommentList(blog_id);
                  // // console.log("findBlogCommentList data");
                  // // console.log(data);
                  // // This doens't update the react app currently
                  // if (findBlogCommentListError) {
                  //     console.log("findBlogCommentListError");
                  //     console.error(findBlogCommentListError);
                  // } else {
                  //     alert("The comment was removed");

                  //     // setSortBlogCommentList("new");
                  //     // Instead of this remove from the frontend list?
                  //     setBlogCommentList(newBlogCommentList);
                  // }

                  alert("The comment was removed");

                  // const newChildBlogCommentList = childBlogCommentList.filter(blogComment => {
                  //     return blogComment.blog_comment_id !== blog_comment_id
                  // })

                  // console.log("blogCommentList");
                  // console.log(blogCommentList);

                  const newBlogCommentList = blogCommentList.map(blogComment => {
                    return blogComment.blog_comment_id === parent_blog_comment_id ? {
                      ...blogComment,
                      blog_comment_child_blog_comments: blogComment.blog_comment_child_blog_comments?.filter((childBlogComment) => {
                        // alert(childBlogComment.blog_comment_id);
                        // alert(blog_comment_id);
                        return childBlogComment.blog_comment_id !== blog_comment_id;
                      })
                      // Find a better way than this?
                    } : blogComment;
                  });

                  // alert(newBlogCommentList);

                  setBlogCommentList(newBlogCommentList);

                  // setChildBlogCommentList(newChildBlogCommentList);

                  // setTotalChildBlogComments(totalChildBlogComments - 1);

                  // Remove in the list later
                } else {
                  alert("Something went wrong at the server (deleteBlogChildComment result was false)");
                }

              } else {
                return;
              }
            }}
          >
            <span style={{
              marginRight: "0.25rem",
            }}>
                            Delete
              {/* Recruiters */}
            </span>
          </CommentDropdownContentOptionWrapper>
        </CommentDropdownContent>}
      </CommentDropdownContainer>
    );
  } else {
    return null;
        
    // Implement this part later
    return (
      <CommentDropdownContainer>
        <CommentDropdownButtonWrapper>
          <CommentDropdownButtonWrapper
            onClick={() => {
              setShowCommentDropdown(!showCommentDropdown);
            }}
          >
            <MoreHorizIcon style={{
              color: showCommentDropdown ? blue : "inherit",
            }} />
          </CommentDropdownButtonWrapper>
        </CommentDropdownButtonWrapper>
        {/* {showPeopleCategoriesDropdown && <TopNavDropdownContent></TopNavDropdownContent> */}
        {showCommentDropdown && <CommentDropdownContent>
          <CommentDropdownContentOptionWrapper>
            <span style={{
              marginRight: "0.25rem",
            }}>
                            Report this
              {/* Recruiters */}
            </span>
          </CommentDropdownContentOptionWrapper>
        </CommentDropdownContent>}
      </CommentDropdownContainer>
    );
  }


};

export default ChildBlogCommentDropdown;
