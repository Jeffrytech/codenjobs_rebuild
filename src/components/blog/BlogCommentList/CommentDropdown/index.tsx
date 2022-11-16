import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useState } from 'react';
import { findBlogCommentList } from '../../../../api/blogComment';
import { deleteBlogChildComment, deleteBlogComment } from '../../../../api/privateBlogComment';
import { blue } from '../../../../design/colors';
import { useOnOutsideClick } from '../../../../useOutsideClick';

import {
  CommentDropdownButtonWrapper,
  CommentDropdownContainer,
  CommentDropdownContent,
  CommentDropdownContentOptionWrapper
} from "./CommentDropdownCSS";

const CommentDropdown = ({
  // commenter,
  // user,
  userIsCommenter,
  blog_id,
  blog_comment_id,
  // parent_blog_comment_id,

  // Move to the context?
  blogCommentList,
  setBlogCommentList,

  // setSortBlogCommentList,
  setShowBlogCommentEdit,
}) => {
  const [showCommentDropdown, setShowCommentDropdown] = useState(false);

  // console.log("blogCommentList");
  // console.log(blogCommentList);

  // alert(blog_comment_id);
  // alert(parent_blog_comment_id);

  const { innerBorderRef } = useOnOutsideClick(() => {
    setShowCommentDropdown(false);
  });


  if (userIsCommenter) {
    return (
      <CommentDropdownContainer>
        <CommentDropdownButtonWrapper>
          <CommentDropdownButtonWrapper
            onClick={() => {
              setShowCommentDropdown(!showCommentDropdown);
            }}
          >
            <MoreHorizIcon />
          </CommentDropdownButtonWrapper>
        </CommentDropdownButtonWrapper>
        {/* {showPeopleCategoriesDropdown && <TopNavDropdownContent></TopNavDropdownContent> */}
        {showCommentDropdown && <CommentDropdownContent
          ref={innerBorderRef}
        >
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

              if (confirmed) {
                // const { data: result, error: deleteBlogCommentError } = parent_blog_comment_id === null 
                //     ? await deleteBlogComment({ id: blog_comment_id }) : await deleteBlogChildComment({ id: blog_comment_id, parent_blog_comment_id })
                const { data: result, error: deleteBlogCommentError } = await deleteBlogComment({ id: blog_comment_id });

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

                  const newBlogCommentList = blogCommentList.filter(blogComment => {
                    return blogComment.blog_comment_id !== blog_comment_id;
                  });

                  // temp1.filter((blogComment) => { return blogComment.blog_comment_id !== "6b86795a-48cb-4b72-9dda-7086efe7d22d" })

                  setBlogCommentList(newBlogCommentList);

                  // Remove in the list later
                } else {
                  alert("Something went wrong at the server");
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

export default CommentDropdown;
