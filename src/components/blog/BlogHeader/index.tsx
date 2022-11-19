import React, { useEffect, useState } from "react";
import Link from "next/link";

import moment from "moment";

import { Avatar, Tooltip } from "@material-ui/core";

import CreateIcon from "@material-ui/icons/Create";
import CancelIcon from "@material-ui/icons/Cancel";
import ShareIcon from "@material-ui/icons/Share";

import ModeCommentIcon from "@material-ui/icons/ModeComment";
import PollButton from "@material-ui/icons/Poll";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

import {
  BlogHeaderContainer,
  PostedBy,
  BlogTitle,
  UsernameWrapper,
  BlogPostTime,
  BlogCategory,
  BlogShareWrapper,
} from "./BlogHeaderCSS";

import {
  OwnerButtonsContainer,
  OwnerDeleteButtonWrapper,
  OwnerEditButtonWrapper,
  PollButtonWrapper,
  UserButtonsContainer,
  UserCommentButtonWrapper,
  UserMoneyButtonWrapper,
} from "../../OwnerButtonsCSS";
import {
  deleteBlogByIdForOwner,
  findUserVoteMoneyForBlog,
  updateUserVoteMoneyForBlog,
} from "../../../api/privateBlog";

import Username from "../../Username";
import { useRouter } from "next/router";
import { formatPathTitle } from "../../../title/path";
import { findBlogVoteMoneyCount } from "../../../api/blog";
import BlogVoteMoneyUsers from "../BlogVoteMoneyUsers";
import ExternalLink from "../../ExternalLink";
import { useBlogComment } from "../../../contexts/blogComment";
import { useShadow } from "../../../contexts/shadow";
import { useLoginRequired } from "../../../contexts/loginRequired";
import SocialShare from "../../SocialShare";
import {
  HTTPS,
  COMPANY_WEBSITE,
  COMPANY_NAME,
} from "../../../config/environment";
// import BlogComments from "../BlogComments";
// import { FavoriteBorderOutlined, FavoriteOutlined } from "@material-ui/icons";
// import { MoneyOutlined } from "@material-ui/icons";
// import ProfileBlogStatus from "../ProfileBlogStatus";

// import ProfileBlogPostsForOwnerButtons from "../ProfileBlogPostsForOwner/ProfileBlogPostsForOwnerButtons";

const BlogHeader = ({
  id,
  status,
  commentable,

  user,
  isOwner,

  username,
  title,
  published_at,
  category,

  userProfile,
  setUserProfile,

  page = undefined,

  totalBlogComments,

  showVoters,
}) => {
  const router = useRouter();
  // @ts-ignore
  const { setLoginRequired } = useLoginRequired();
  // @ts-ignore
  const { showBlogComment, setShowBlogComment } = useBlogComment();
  // @ts-ignore
  const { setShowShadow } = useShadow();

  const [showBlogVoteMoneyUsers, setShowBlogVoteMoneyUsers] = useState(
    showVoters === "true" ? true : false
  );
  // const [showBlogComments, setShowBlogComments] = useState(false);

  const [showShare, setShowShare] = useState(false);
  const handleClose = () => {
    setShowShare(false);
  };

  // Rename?
  // const closeBlogVoteMoneyUsers = () => {
  //   setShowBlogVoteMoneyUsers(false);
  // };

  // const [moneyVote, setMoneyVote] = useState(false); // false or null?

  const [totalMoneyVote, setTotalMoneyVote] = useState(0); // 0 or null?
  const [voteMoneyForBlog, setVoteMoneyForBlog] = useState(false);

  // const [totalBlogComments, setTotalBlogComments] = useState(0); // Use 0 or null?

  useEffect(() => {
    findBlogVoteMoneyCount(id)
      .then(({ data }) => {
        setTotalMoneyVote(data);
        // alert(data);
      })
      .catch((error) => {
        console.log("findBlogVoteMoneyCount error");
        console.error(error);
      });

    // if (user !== null) {
    // alert("user");
    findUserVoteMoneyForBlog(id)
      .then(({ data }) => {
        setVoteMoneyForBlog(data);
      })
      .catch((error) => {
        console.log("findBlogVoteMoneyCount error");
        console.error(error);
      });
    // }

    // findTotalBlogComments(id)
    //   .then(({ data }) => {
    //     // alert(data);
    //     // console.log("data");
    //     // console.log(data);
    //     setTotalBlogComments(data);
    //   })
    //   .catch(error => {
    //     console.log("findTotalBlogComments error");
    //     console.error(error);
    //   })
  }, []);
  // }, [user])

  // This should come from the backend
  // const moneyVote = false;
  return (
    <>
      <BlogHeaderContainer $isOwner={isOwner}>
        <PostedBy>
          <div
            style={{
              display: "flex",
            }}
          >
            <span
              style={{
                marginRight: "0.25rem",
              }}
            >
              Posted by
            </span>
            <Link href={`/user/${username}/posts`}>
              <UsernameWrapper>
                <Username username={username} />
              </UsernameWrapper>
            </Link>
          </div>

          <BlogPostTime>
            {published_at === null
              ? moment.utc(new Date()).fromNow()
              : moment.utc(published_at).fromNow()}
          </BlogPostTime>
        </PostedBy>

        <ExternalLink href={`/blogs?category=${category}`}>
          <BlogCategory>{category}</BlogCategory>
        </ExternalLink>

        <BlogTitle>{`${title}`}</BlogTitle>

        {page !== "preview" && (
          <UserButtonsContainer>
            <UserMoneyButtonWrapper
              onClick={async (e) => {
                // e.preventDefault();

                // alert("click");
                // alert(user);

                // alert(user);
                if (user !== null) {
                  // setMoneyVote(!moneyVote);

                  // alert(updateUserVoteMoneyForBlog);
                  const { data, error } = await updateUserVoteMoneyForBlog(id);

                  // alert(data);

                  if (error) {
                    alert("Something went wrong at the server");
                    console.log("updateUserVoteMoneyForBlog");
                    console.error(error);

                    return;
                  }

                  if (data === true) {
                    if (voteMoneyForBlog === true) {
                      setTotalMoneyVote((totalMoneyVote) => totalMoneyVote - 1);
                      setVoteMoneyForBlog(false);

                      if (userProfile !== null) {
                        setUserProfile({
                          ...userProfile,
                          total_blog_votes: userProfile.total_blog_votes - 1,
                        });
                      }
                    } else {
                      setTotalMoneyVote((totalMoneyVote) => totalMoneyVote + 1);
                      setVoteMoneyForBlog(true);

                      if (userProfile !== null) {
                        setUserProfile({
                          ...userProfile,
                          total_blog_votes: userProfile.total_blog_votes + 1,
                        });
                      }
                    }
                  } else {
                    alert("Unable to update the vote with money");
                  }

                  // // Make the server and database work for this
                  // if (moneyVote === true) {
                  //   setTotalMoneyVote(totalMoneyVote => totalMoneyVote - 1);
                  // } else {
                  //   setTotalMoneyVote(totalMoneyVote => totalMoneyVote + 1);
                  // }
                } else {
                  // Should show a login popup or something
                  setLoginRequired({
                    show: true,
                    title: "Login Required",
                    description: `Please, do login first before you vote`,
                    // description: `Login first before you follow u/${username}`,
                    // description: "Login first before you follow the user.",
                    // description: "Login or register to the website first.",
                    from: router.asPath,
                  });

                  return;
                  // alert("Please, do login first at https://www.codenjobs.com/signin");
                }
              }}
              $moneyVote={voteMoneyForBlog}
            >
              {/* <PaidIcon style={{
            fontSize: "1rem",
            marginRight: "0.175rem",
          }} /> */}
              <img
                // src={voteMoneyForBlog ? "/static/logo_green.png" : "/static/logo.svg"}
                src={"/static/logo.svg"}
                style={{
                  width: "1.25rem",
                  height: "1.25rem",
                  // width: "1.25rem",
                  // height: "1.25rem",
                  marginLeft: "0.1rem",
                  // opacity: 0.8,
                }}
              />
              {/* <AttachMoneyIcon style={{
            fontSize: "1rem",
            // marginRight: "0.175rem",
          }} /> */}
              <span
                style={{
                  marginLeft: "0.25rem",
                }}
              >
                {!totalMoneyVote ? 0 : totalMoneyVote}
              </span>
            </UserMoneyButtonWrapper>

            {/* https://mui.com/components/material-icons/?query=comment */}
            <UserCommentButtonWrapper
              onClick={() => {
                if (user === null) {
                  setLoginRequired({
                    show: true,
                    title: "Login Required",
                    description: `Please, do login first before you comment`,
                    from: router.asPath,
                  });
                  return;
                  // alert("Please, do login at https://www.codenjobs.com/signin first to read comments.");
                } else {
                  // setShowBlogComment(!showBlogComment);
                  if (showBlogComment === false) {
                    setShowBlogComment(true);
                    setShowShadow(true);
                  } else {
                    // setTimeout(() => {
                    //   setShowBlogComment(false);
                    // }, 1000);
                  }
                }
              }}
            >
              <ModeCommentIcon
                style={{
                  height: "1.15rem",
                }}
              />
              <span>{totalBlogComments}</span>
            </UserCommentButtonWrapper>

            {totalMoneyVote !== 0 && (
              <Tooltip title="It shows who voted for this blog post" arrow>
                <PollButtonWrapper
                  onClick={() => {
                    setShowBlogVoteMoneyUsers(true);
                  }}
                >
                  <PollButton
                    style={{
                      // height: "1.25rem",
                      height: "1.5rem",
                    }}
                  />
                  {/* <span style={{
              marginLeft: "0.25rem",
            }}>
              {totalMoneyVote > 2 ? "Voters" : "Voter"}
            </span> */}
                </PollButtonWrapper>
              </Tooltip>
            )}

            <BlogShareWrapper
              onClick={() => {
                setShowShare(true);
              }}
            >
              {/* <span>
              Share
            </span> */}
              <Tooltip title="Share this blog post" arrow>
                <ShareIcon
                  style={{
                    fontSize: "1.25rem",
                  }}
                />
              </Tooltip>
            </BlogShareWrapper>
          </UserButtonsContainer>
        )}

        {isOwner && (
          <OwnerButtonsContainer>
            <Link href={`/blog/post?&title=${formatPathTitle(title)}&id=${id}`}>
              <OwnerEditButtonWrapper>
                <CreateIcon
                  style={{
                    fontSize: "1rem",
                  }}
                />
                <span
                  style={{
                    marginLeft: "0.25rem",
                  }}
                >
                  Edit
                </span>
              </OwnerEditButtonWrapper>
            </Link>
            <OwnerDeleteButtonWrapper
              onClick={async (e) => {
                e.preventDefault();

                // @ts-ignore
                // eslint-disable-next-line no-undef
                const confirmed = confirm("Do you really want to delete it?");
                // eslint-disable-next-line no-undef
                if (confirmed) {
                  const { data, error } = await deleteBlogByIdForOwner(id);

                  // alert(data);

                  if (error) {
                    // Handle this better
                    alert("Something went wrong at the server");
                    console.log("deleteBlogByIdForOwner");
                    console.error(error);
                    return;
                    // Show error message
                  }

                  if (data === true) {
                    // router.
                    // Should remove the previous one?
                    router.replace(`/user/${username}/posts`);
                  }
                }
              }}
            >
              <CancelIcon
                style={{
                  fontSize: "1rem",
                }}
              />
              <span
                style={{
                  marginLeft: "0.25rem",
                }}
              >
                Delete
              </span>
            </OwnerDeleteButtonWrapper>
          </OwnerButtonsContainer>
        )}
      </BlogHeaderContainer>

      <BlogVoteMoneyUsers
        id={id}
        showBlogVoteMoneyUsers={showBlogVoteMoneyUsers}
        setShowBlogVoteMoneyUsers={setShowBlogVoteMoneyUsers}
        totalMoneyVote={totalMoneyVote}
      />

      <Dialog
        open={showShare}
        onClose={handleClose}
        aria-labelledby="blog-post-show-social-share-buttons"
      >
        <DialogTitle id="blog-post-show-social-share">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "1rem",
            }}
          >
            <Avatar alt={COMPANY_NAME} src={"/static/logo.svg"} />
            <span
              style={{
                marginLeft: "0.5rem",
              }}
            >
              Share this blog post
            </span>
          </div>
        </DialogTitle>

        <DialogContent>
          <section
            style={{
              display: "flex",
              alignItems: "center",
              // justifyContent: "center",
              justifyContent: "space-around",
              margin: "0 1.5rem",
            }}
          >
            <SocialShare
              title={`${title} - Code&Jobs`}
              // Update this later?
              // This will work at the production anyway.
              url={`${HTTPS}${COMPANY_WEBSITE}/blog?&title=${title.replaceAll(
                " ",
                "-"
              )}?&id=${id}`}
            />
          </section>

          {/* <DialogContentText>
            Share this profile with others
          </DialogContentText> */}
        </DialogContent>

        <DialogActions>
          <Button
            // disabled={isSubmitting}
            onClick={handleClose}
            color="primary"
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default BlogHeader;
