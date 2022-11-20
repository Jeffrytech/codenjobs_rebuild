// Remove parent and it should work?

import { useEffect, useState } from "react";
import { Avatar } from "baseui/avatar";
import moment from "moment";

import ModeCommentIcon from "@material-ui/icons/ModeComment";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CreateIcon from "@material-ui/icons/Create";

import {
  ParentBlogCommentListBody,
  ParentBlogCommentListWrapper,
  ParentBlogCommentListUserProfile,

  // Edit
  // ParentBlogCommentListFormWrapper,
  ParentBlogCommentContainer,
  ParentBlogCommentTextWrapper,
  UserCommentButtonsContainer,
  UserCommentMoneyButtonWrapper,
  UserShowSubCommentListButtonWrapper,
  UserSubCommentPostButtonWrapper,
  // ParentBlogCommentEditForm,
  // ParentBlogCommentEditTextarea,
} from "./ParentBlogCommentCSS";

import { UserIsCommenter, UserIsWriter } from "../BlogCommentListCSS";
import CommentDropdown from "../CommentDropdown";
import Username from "../../../Username";
import Commenter from "../Commenter";
import { updateUserVoteMoneyForBlog } from "../../../../api/privateBlog";
import {
  editBlogComment,
  findUserVoteMoneyForBlogComment,
  updateUserVoteMoneyForBlogComment,
} from "../../../../api/privateBlogComment";
import { green } from "../../../../design/colors";
import { blogCommentMaxLength } from "../../../../validators/maxLengths";
import { findBlogCommentList } from "../../../../api/blogComment";

import ParentBlogCommentEdit from "./ParentBlogCommentEdit";
// import ChildBlogComment from "../ChildBlogComment";
import ChildBlogCommentListForm from "../ChildBlogCommentListForm";

// import CommentReplies from "./comment_reply";
// import { loggedInUser } from "../../data";
// import FormInput from "../FormInput/form_input";
// import { processDate } from "../../utils";
// import Backdrop from "../Backdrop/Backdrop";
// import Notification from "../Notification/Notification";

// import "./Comment.css";

function ParentBlogComment({
  data,
  writer,
  user,

  blogId,

  blogCommentList,
  setBlogCommentList,

  // handleLike,
  // handleReplySubmit,
  // handleHideReplies,
  // handleReplyToReplySubmit,
  // handleInnerLike,
  // fetchReplies
}) {
  // console.log("ParentBlogComment data");
  // console.log(data);

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
  // alert(commenter);
  // alert(blog_id);
  // alert(profile_image);

  // alert(blog_comment_parent_blog_comment_id);
  // alert(blog_comment_child_blog_comments.length);

  // console.log("user");
  // console.log(user);

  const userIsCommenter = commenter === user.username;
  const userIsWriter = commenter === writer;

  // alert(userIsWriter);
  // alert(user.username);
  // alert(writer);

  const [voteMoneyForBlogComment, setVoteMoneyForBlogComment] = useState(false);
  const [totalMoneyVoteForBlogComment, setTotalMoneyVoteForBlogComment] =
    useState(
      blog_comment_money_voters === undefined
        ? 0
        : blog_comment_money_voters.length
    );

  const totalChildBlogComments =
    blog_comment_child_blog_comments === undefined
      ? 0
      : blog_comment_child_blog_comments.length;

  // Still need this?
  // const [totalChildBlogComments, setTotalChildBlogComments] = useState(blog_comment_child_blog_comments.length);

  const [showParentBlogCommentEdit, setShowParentBlogCommentEdit] =
    useState(false);
  // const [editParentCommentText, setEditParentCommentText] = useState(blog_comment_text);

  const [showChildBlogCommentList, setShowChildBlogCommentList] =
    useState(true);
  const [showChildBlogCommentForm, setShowChildBlogCommentForm] =
    useState(false);

  useEffect(() => {
    findUserVoteMoneyForBlogComment(blog_comment_id)
      .then(({ data }) => {
        // alert(data);
        setVoteMoneyForBlogComment(data);
      })
      .catch((error) => {
        console.log("findUserVoteMoneyForBlogComment error");
        console.error(error);
      });
  }, []);

  if (showParentBlogCommentEdit) {
    return (
      <ParentBlogCommentEdit
        showParentBlogCommentEdit={showParentBlogCommentEdit}
        setShowEditParentBlogCommentForm={setShowParentBlogCommentEdit}
        blogCommentList={blogCommentList}
        setBlogCommentList={setBlogCommentList}
        blog_id={blogId || blog_id}
        blog_comment_text={blog_comment_text}
        blog_comment_id={blog_comment_id}
      />
    );
  }

  return (
    <ParentBlogCommentContainer>
      <ParentBlogCommentListBody>
        <ParentBlogCommentListWrapper>
          <ParentBlogCommentListUserProfile>
            <Avatar
              name={commenter}
              // size="2.5rem"
              size="2.5rem"
              src={profile_image || ""}
            />

            <div>
              <Commenter commenter={commenter} />
              <span
                style={{
                  marginLeft: "0.5rem",
                  opacity: 0.7,
                  // fontSize: "0.8rem",
                  fontSize: "0.85rem",
                }}
              >
                {moment.utc(blog_comment_created_at).fromNow()}{" "}
                {blog_comment_updated_at !== null && ` (edited)`}
              </span>
            </div>

            {/* Extract this */}
            <CommentDropdown
              userIsCommenter={userIsCommenter}
              blog_id={blogId || blog_id}
              blog_comment_id={blog_comment_id}
              // parent_blog_comment_id={null}

              blogCommentList={blogCommentList}
              setBlogCommentList={setBlogCommentList}
              // setSortBlogCommentList={setBlogCommentList}
              setShowBlogCommentEdit={setShowParentBlogCommentEdit}
            />
          </ParentBlogCommentListUserProfile>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              width: "100%",
            }}
          >
            {userIsCommenter && <UserIsCommenter>You</UserIsCommenter>}
            {userIsWriter && <UserIsWriter>Writer</UserIsWriter>}
          </div>

          <ParentBlogCommentTextWrapper>
            {blog_comment_text}
          </ParentBlogCommentTextWrapper>

          {/* Show this when a user clicks edit button? */}
          {/* <BlogCommentListForm>
            <BlogCommentListTextarea
              placeholder="Write your comment here"
              maxLength={blogCommentMaxLength}
              value={comment}
              onChange={(e) => {
                setComment(e.target.value);
              }}
            />

          </BlogCommentListForm> */}

          {/* Extract this */}
          <UserCommentButtonsContainer>
            <UserCommentMoneyButtonWrapper
              onClick={async (e) => {
                if (user !== null) {
                  // setMoneyVote(!moneyVote);

                  // alert(updateUserVoteMoneyForBlog);
                  const { data, error } =
                    await updateUserVoteMoneyForBlogComment(blog_comment_id);

                  // // alert(data);

                  if (error) {
                    alert("Something went wrong at the server");
                    console.log("updateUserVoteMoneyForBlog");
                    console.error(error);

                    return;
                  }

                  if (data === true) {
                    if (voteMoneyForBlogComment === true) {
                      setTotalMoneyVoteForBlogComment(
                        (totalMoneyVoteForBlogComment) =>
                          totalMoneyVoteForBlogComment - 1
                      );
                      setVoteMoneyForBlogComment(false);
                    } else {
                      setTotalMoneyVoteForBlogComment(
                        (totalMoneyVoteForBlogComment) =>
                          totalMoneyVoteForBlogComment + 1
                      );
                      setVoteMoneyForBlogComment(true);
                    }
                  } else {
                    alert("Unable to update the vote with money");
                  }
                } else {
                  // Should show a login popup or something
                  alert(
                    "Please, do login first at https://www.codenjobs.com/signin"
                  );
                }
              }}
              // $moneyVote={voteMoneyForBlogComment}
            >
              <img
                src={"/static/logo.svg"}
                style={{
                  width: "1rem",
                  height: "1rem",
                  marginLeft: "0.1rem",
                }}
              />
              <span
                style={{
                  marginLeft: "0.25rem",
                  color: voteMoneyForBlogComment ? green : "inherit",
                }}
              >
                {totalMoneyVoteForBlogComment}
              </span>
            </UserCommentMoneyButtonWrapper>

            {/* https://mui.com/components/material-icons/?query=comment */}

            {/* Should show only when there is a subcomment */}
            {totalChildBlogComments !== 0 && (
              <UserShowSubCommentListButtonWrapper
                onClick={() => {
                  setShowChildBlogCommentList(!showChildBlogCommentList);
                }}
              >
                <ModeCommentIcon
                  style={{
                    height: "1rem",
                  }}
                />
                <span
                  style={{
                    color: showChildBlogCommentList ? green : "inherit",
                  }}
                >
                  {totalChildBlogComments}
                </span>
              </UserShowSubCommentListButtonWrapper>
            )}

            <UserSubCommentPostButtonWrapper
              onClick={() => {
                setShowChildBlogCommentForm(!showChildBlogCommentForm);
              }}
            >
              <CreateIcon
                style={{
                  fontSize: "0.85rem",
                }}
              />
              <span
                style={{
                  marginLeft: "0.25rem",
                  marginRight: "0.5rem",
                  fontSize: "0.85rem",
                }}
              >
                Comment
              </span>
            </UserSubCommentPostButtonWrapper>
          </UserCommentButtonsContainer>

          <ChildBlogCommentListForm
            blog_id={blogId || blog_id}
            blog_comment_id={blog_comment_id}
            showChildBlogCommentList={showChildBlogCommentList}
            setShowChildBlogCommentList={setShowChildBlogCommentList}
            showChildBlogCommentForm={showChildBlogCommentForm}
            setShowChildBlogCommentForm={setShowChildBlogCommentForm}
            commenter={commenter}
            writer={writer}
            user={user}
            blogCommentList={blogCommentList}
            setBlogCommentList={setBlogCommentList}
            totalChildBlogComments={totalChildBlogComments}
            // setTotalChildBlogComments={setTotalChildBlogComments}

            blog_comment_child_blog_comments={blog_comment_child_blog_comments}
          />
        </ParentBlogCommentListWrapper>
      </ParentBlogCommentListBody>
    </ParentBlogCommentContainer>
  );
}

export default ParentBlogComment;
