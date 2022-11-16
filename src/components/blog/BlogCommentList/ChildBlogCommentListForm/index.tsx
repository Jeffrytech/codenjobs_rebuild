// Remove parent and it should work?

import { useEffect, useState } from "react";
// import { Avatar } from "baseui/avatar";
// import moment from "moment";

// import ModeCommentIcon from "@material-ui/icons/ModeComment";
// import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
// import CreateIcon from "@material-ui/icons/Create";

import {
  // Edit
  ChildBlogCommentListFormWrapper,

  ChildBlogCommentForm,
  ChildBlogCommentListTextarea,
} from "./ChildBlogCommentCSS";

import {
  BlogCommentListButtonContainer,
  BlogCommentListCancelButton,
  BlogCommentListResponseButton,
} from "../BlogCommentListCSS";

import { blogCommentMaxLength } from "../../../../validators/maxLengths";
import { createBlogComment } from "../../../../api/privateBlogComment";
import ChildBlogCommentList from "./ChildBlogCommentList";
// import ChildBlogCommentList from "./ChildBlogCommentList";

// Form and list?
const ChildBlogCommentListForm = ({
  blog_id,
  blog_comment_id,

  showChildBlogCommentList,
  setShowChildBlogCommentList,

  showChildBlogCommentForm,
  setShowChildBlogCommentForm,

  commenter,

  writer,
  user,

  blogCommentList,
  setBlogCommentList,

  totalChildBlogComments,
  // setTotalChildBlogComments,

  blog_comment_child_blog_comments,
}) => {
  // alert(blog_id);

  const [childBlogCommentText, setChildBlogCommentText] = useState(null);

  if (showChildBlogCommentForm === false && showChildBlogCommentList === false) {
    return null;
  }

  // Handle delete
  if (showChildBlogCommentForm === false && totalChildBlogComments === 0) {
    return null;
  }

  return (<>
    <ChildBlogCommentListFormWrapper>
      {showChildBlogCommentForm && <ChildBlogCommentForm>
        <ChildBlogCommentListTextarea
          placeholder={`Respond to ${commenter}`}
          maxLength={blogCommentMaxLength}
          value={childBlogCommentText}
          onChange={(e) => {
            setChildBlogCommentText(e.target.value);
          }}
        />

        <BlogCommentListButtonContainer>
          <div
            style={{
              marginLeft: "auto",
              display: "flex",
              marginRight: "0.5rem",
            }}
          >
            <BlogCommentListCancelButton
              type="button"
              onClick={() => {
                setChildBlogCommentText("");
                setShowChildBlogCommentForm(false);
              }}
            >
              Cancel
            </BlogCommentListCancelButton>
            <BlogCommentListResponseButton
              type="button"
              disabled={(childBlogCommentText === null || childBlogCommentText === "") ? true : false}

              onClick={async () => {
                // alert(blog_id);
                // alert(blog_comment_id);

                const { data: newChildBlogCommentData, error: createBlogCommentError } = await createBlogComment({
                  blog_id,
                  parent_blog_comment_id: blog_comment_id,
                  text: childBlogCommentText,
                });

                if (createBlogCommentError) {
                  console.log("createBlogCommentError");
                  console.error(createBlogCommentError);

                  alert("Something went wrong");
                  return;
                }

                // console.log("newChildBlogCommentData");
                // console.log(newChildBlogCommentData);

                // alert(blog_comment_text);

                // const {
                //   // id: blog_comment_id,
                //   owner_id: blog_comment_owner_id,
                //   text: blog_comment_text,

                //   money_voters: blog_comment_money_voters,
                //   parent_blog_comment_id: blog_comment_parent_blog_comment_id,
                //   child_blog_comments: blog_comment_child_blog_comments,

                //   created_at: blog_comment_created_at,
                //   // updated_at: blog_comment_updated_at,
                // } = newChildBlogCommentData;

                // alert(newChildBlogCommentData.blog_comment_text);
                // alert(blog_comment_text);

                const newChildBlogComment = {
                  blog_comment_id: newChildBlogCommentData.blog_comment_id,
                  blog_comment_owner_id: newChildBlogCommentData.owner_id,
                  blog_comment_text: newChildBlogCommentData.blog_comment_text,

                  blog_comment_money_voters: newChildBlogCommentData.blog_comment_money_voters,
                  blog_comment_parent_blog_comment_id: newChildBlogCommentData.blog_comment_parent_blog_comment_id,
                  blog_comment_child_blog_comments: newChildBlogCommentData.blog_comment_child_blog_comments,

                  blog_comment_created_at: newChildBlogCommentData.blog_comment_created_at,
                  blog_comment_updated_at: null,

                  username: user.username,
                  profile_image: user.image,
                };

                const newBlogCommentList = blogCommentList.map(blogComment => {
                  return blogComment.blog_comment_id === blog_comment_id ? {
                    ...blogComment,
                    blog_comment_child_blog_comments: [newChildBlogComment, ...blogComment.blog_comment_child_blog_comments]
                  } : blogComment;
                });

                // console.log("blogCommentList");
                // console.log(blogCommentList);

                // console.log("newBlogCommentList");
                // console.log(newBlogCommentList);

                setBlogCommentList(newBlogCommentList);

                // setShowChildBlogCommentForm(false);
                // setShowChildBlogCommentList(true);

                setChildBlogCommentText("");

                // Should be at the backend?
                setShowChildBlogCommentList(true);
                setShowChildBlogCommentForm(false);

                // This shows form instead of the list
                // setTimeout(() => {
                //   // setShowChildBlogCommentList(true);
                // }, 1000);

                // setShowChildBlogCommentList(true);
                // alert(showChildBlogCommentList);

                // Need to get data from all
                // const newBlogCommentList = ;
                // setChildBlogCommentList = ()

                // Make this work
                // 1. Should show child blog posts
                // 2. Should update child blog posts when edit and remove happen 
                // const newBlogCommentList = blogCommentList.map(blogComment => {
                //   return blogComment.blog_comment_id === blog_comment_id ? {
                //     ...blogComment,
                //     blog_comment_child_blog_comments: [...blogComment.blog_comment_child_blog_comments, newBlogComment]
                //     // Find a better way than this?
                //   } : blogComment
                // })

                // setBlogCommentList(newBlogCommentList); // This shows new posts first anyway
                // setShowChildBlogCommentList(true);
              }}
            >
              Respond
            </BlogCommentListResponseButton>
          </div>
        </BlogCommentListButtonContainer>
      </ChildBlogCommentForm>}

      <ChildBlogCommentList
        showChildBlogCommentForm={showChildBlogCommentForm}
        showChildBlogCommentList={showChildBlogCommentList}

        // blog_id={blog_id}
        // parent_blog_comment_id={blog_comment_id}

        writer={writer}
        user={user}

        blogId={blog_id}

        blogCommentList={blogCommentList}
        setBlogCommentList={setBlogCommentList}
        blog_comment_child_blog_comments={blog_comment_child_blog_comments}

        totalChildBlogComments={totalChildBlogComments}
      // setTotalChildBlogComments={setTotalChildBlogComments}
      />
    </ChildBlogCommentListFormWrapper>
  </>);

};

export default ChildBlogCommentListForm;
