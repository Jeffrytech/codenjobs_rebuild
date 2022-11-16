// Remove parent and it should work?

import { useEffect, useRef, useState } from "react";
import { Avatar } from "baseui/avatar";
import moment from "moment";

import ModeCommentIcon from "@material-ui/icons/ModeComment";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CreateIcon from "@material-ui/icons/Create";

import {
  ChildBlogCommentListBody, 
  ChildBlogCommentListWrapper,
  ChildBlogCommentListUserProfile,

  ChildBlogCommentContainer, ChildBlogCommentTextWrapper, UserCommentButtonsContainer, UserCommentMoneyButtonWrapper, 
  UserShowSubCommentListButtonWrapper,
  UserSubCommentPostButtonWrapper,
} from "./ChildBlogCommentCSS";

import { 
  UserIsCommenter,
  UserIsWriter
} from "../../BlogCommentListCSS";
import CommentDropdown from "../../CommentDropdown";
import Commenter from "../../Commenter";
import { updateUserVoteMoneyForBlog } from "../../../../../api/privateBlog";
import { editBlogComment, findUserVoteMoneyForBlogComment, updateUserVoteMoneyForBlogComment } from "../../../../../api/privateBlogComment";
import { green } from "../../../../../design/colors";
import ChildBlogCommentEdit from "./ChildBlogCommentEdit";
import ChildBlogCommentDropdown from "../ChildBlogCommentDropdown";

// import ChildBlogCommentEdit from "./ChildBlogCommentEdit";

function ChildBlogComment({
  data,
  writer,
  user,

  blogId,

  // childBlogCommentList,
  // setChildBlogCommentList,
  blogCommentList,
  setBlogCommentList,

  // totalChildBlogComments, 
  // setTotalChildBlogComments,
}) {
  const {
    blog_id,

    blog_comment_id,
    blog_comment_owner_id,
    blog_comment_text,
    
    // blog_comment_show_comment, 
    
    blog_comment_money_voters,

    blog_comment_parent_blog_comment_id,
    blog_comment_child_blog_comments,

    blog_comment_created_at,
    blog_comment_updated_at,

    username: commenter,
    profile_image,
  } = data;

  // alert("blog_id");
  // alert(blog_id);
  
  // alert(blog_comment_parent_blog_comment_id);
  // alert(blog_comment_child_blog_comments.length);

  const userIsCommenter = (commenter === user.username);
  const userIsWriter = (commenter === writer);
  
  const [voteMoneyForBlogComment, setVoteMoneyForBlogComment] = useState(false);
  // Fix this
  const [totalMoneyVoteForBlogComment, setTotalMoneyVoteForBlogComment] = useState(blog_comment_money_voters.length);
  
  const [showChildBlogCommentEdit, setShowChildBlogCommentEdit] = useState(false);
  // const [editParentCommentText, setEditParentCommentText] = useState(blog_comment_text);
  
  // const [showChildBlogCommentList, setShowChildBlogCommentList] = useState(false);
  // const [showChildBlogCommentForm, setShowChildBlogCommentForm] = useState(false);
  
  // let isRendered = useRef(false);
  // Should solve this
  // Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function
  // This is problem?
  useEffect(() => {
    // @ts-ignore
    // isRendered = true;

    findUserVoteMoneyForBlogComment(blog_comment_id).then(({ data }) => {
      setVoteMoneyForBlogComment(data);
    }).catch(error => {
      console.log("findUserVoteMoneyForBlogComment error");
      console.error(error);
    });

    // return () => {
    //   // @ts-ignore
    //   isRendered = false;
    // };
  }, []);

  if (showChildBlogCommentEdit) {
    return <ChildBlogCommentEdit 
      showChildBlogCommentEdit={showChildBlogCommentEdit}
      setShowEditChildBlogCommentForm={setShowChildBlogCommentEdit}

      parent_blog_comment_id={blog_comment_parent_blog_comment_id}
      blogCommentList={blogCommentList}
      setBlogCommentList={setBlogCommentList}

      blog_id={blogId || blog_id}
      blog_comment_text={blog_comment_text}
      blog_comment_id={blog_comment_id}
    />;
  }

  return (
    <ChildBlogCommentContainer>
      <ChildBlogCommentListBody>
        <ChildBlogCommentListWrapper>
          <ChildBlogCommentListUserProfile>
            <Avatar
              name={commenter}
              size="2.5rem"
              src={profile_image || ""}
            />

            <div>
              <Commenter 
                commenter={commenter} 
              />              
              <span style={{
                marginLeft: "0.5rem",
                opacity: 0.7,
                // fontSize: "0.8rem",
                fontSize: "0.85rem",
              }} >
                {moment.utc(blog_comment_created_at).fromNow()} {blog_comment_updated_at !== null && ` (edited)`}
              </span>
            </div>  

            {/* Extract this */}
            <ChildBlogCommentDropdown 
              userIsCommenter={userIsCommenter} 
              blog_id={blogId || blog_id} 
              blog_comment_id={blog_comment_id}
              parent_blog_comment_id={blog_comment_parent_blog_comment_id}

              blogCommentList={blogCommentList}
              setBlogCommentList={setBlogCommentList}

              // setSortBlogCommentList={setBlogCommentList}
              setShowBlogCommentEdit={setShowChildBlogCommentEdit}

              // totalChildBlogComments={totalChildBlogComments}
              // setTotalChildBlogComments={setTotalChildBlogComments}
            />
          </ChildBlogCommentListUserProfile>

          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            width: "100%",
          }} >
            {userIsCommenter && (
              <UserIsCommenter>
                You
              </UserIsCommenter>
            )}
            {userIsWriter && (
              <UserIsWriter>
                Writer
              </UserIsWriter>
            )}
          </div>

          <ChildBlogCommentTextWrapper>
            {blog_comment_text}
          </ChildBlogCommentTextWrapper>

          {/* Extract this */}
          <UserCommentButtonsContainer>
            <UserCommentMoneyButtonWrapper onClick={async (e) => {
              if (user !== null) {
                // setMoneyVote(!moneyVote);

                // alert(updateUserVoteMoneyForBlog);
                const { data, error } = await updateUserVoteMoneyForBlogComment(blog_comment_id);

                // // alert(data);

                if (error) {
                  alert("Something went wrong at the server");
                  console.log("updateUserVoteMoneyForBlog");
                  console.error(error);

                  return;
                }

                if (data === true) {
                  if (voteMoneyForBlogComment === true) {
                    setTotalMoneyVoteForBlogComment(totalMoneyVoteForBlogComment => totalMoneyVoteForBlogComment - 1);
                    setVoteMoneyForBlogComment(false);
                  } else {
                    setTotalMoneyVoteForBlogComment(totalMoneyVoteForBlogComment => totalMoneyVoteForBlogComment + 1);
                    setVoteMoneyForBlogComment(true);
                  }
                } else {
                  alert("Unable to update the vote with money");
                }

              } else {
                // Should show a login popup or something
                alert("Please, do login first at https://www.codenjobs.com/signin");
              }

            }}
              // $moneyVote={voteMoneyForBlogComment}
            >
              <img
                src={"/static/logo.png"}
                style={{
                  width: "1rem",
                  height: "1rem",
                  marginLeft: "0.1rem",
                }}
              />
              <span style={{
                marginLeft: "0.25rem",
                color: voteMoneyForBlogComment ? green : "inherit",
              }} >
                {totalMoneyVoteForBlogComment}
              </span>
            </UserCommentMoneyButtonWrapper>
          </UserCommentButtonsContainer>
        </ChildBlogCommentListWrapper>
      </ChildBlogCommentListBody>
    </ChildBlogCommentContainer>
  );
}

export default ChildBlogComment;
