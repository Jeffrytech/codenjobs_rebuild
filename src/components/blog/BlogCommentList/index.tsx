import React, { useEffect, useRef, useState } from "react";
// import onClickOutside from "react-onclickoutside";
import { useSpring } from "react-spring";
import Select from "react-select";
import { Avatar } from "baseui/avatar";

import CloseIcon from "@material-ui/icons/Close";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";


// const Sidebar = ({ show }) => {
//   const { left } = useSpring({
//     from: { left: "-100%" },
//     left: show ? "0" : "-100%"
//   });
//   return (
//     <animated.div style={{ left: left }} className="Sidebar">

//     </animated.div>
//   );
// };

import { 
  BlogCommentListContainer,

  BlogCommentListHeader,
  BlogCommentListPolicies,

  BlogCommentListResponses,
  BlogCommentListClose,
  BlogCommentListBody,
  BlogCommentListFormWrapper,
  BlogCommentListUserProfile,
  BlogCommentListForm,
  BlogCommentListTextarea,
  BlogCommentListButtonContainer,
  BlogCommentListCancelButton,
  BlogCommentListResponseButton,

  CharactersLeftWrapper,
  ReadBlogCommentList,
} from "./BlogCommentListCSS";

// import Comment from "./Comment";

import { useBlogComment } from "../../../contexts/blogComment";
import { useAuth } from "../../../contexts/auth";
import { 
  blogCommentOptions, findBlogCommentSortOptionsLabelValue, 
} from "../../../typeDefinitions/blog";

import Shadow from "../../layouts/Shadow";

import { useShadow } from "../../../contexts/shadow";
import { createBlogComment, deleteBlogComments } from "../../../api/privateBlogComment";
import { blogCommentMaxLength } from "../../../validators/maxLengths";

import { charactersLeft } from "../../../form";

import { findBlogCommentList } from "../../../api/blogComment";
import { useOnOutsideClick } from "../../../useOutsideClick";
import PrimarySpinner from "../../spinners/PrimarySpinner";
import ParentBlogComment from "./ParentBlogComment";
import { textAlign } from "@mui/system";
import ExternalLink from "../../ExternalLink";
import Link from "next/link";
import { useRouter } from "next/router";
import { editBlogCommentable } from "../../../api/privateBlog";

const BlogCommentList = ({
  blog_id,
  writer,

  blogCommentList,
  setBlogCommentList,
  totalBlogComments,

  sortBlogCommentList,
  setSortBlogCommentList,

  showComment,
  commentId,

  blogCommentable,
}) => {
  // alert(blog_id);
  const {
    // @ts-ignore
    user,
    // isOwner,
  } = useAuth();

  const router = useRouter();

  // const queries = new URLSearchParams(router.search);

  if (user === null) {
    return null;
  }

  const [commentable, setCommentable] = useState(blogCommentable); // Start with true or null?
  // const [commentable, setCommentable] = useState(false); // Start with true or null?

  const handleCommentable = async () => {
    if (commentable === true) {
      const response = confirm("This will remove all comments if there were any also, are you sure?");
      if (response === true) {
        const { data, error } = await deleteBlogComments({ id: blog_id });

        if (error) {
          console.log("deleteBlogComments");
          console.error(error);

          // TODO
          // Use notificaition instead
          alert("Fail to delete blog comments first");
          
          return;
        }
        
        if (data) {
          setBlogCommentList([]);

          // alert("TODO Blog post commentable to false");

          // const { data, error } = await setBlogPostCom
          const { data, error } = await editBlogCommentable(blog_id);

          if (error) {
            console.log("editBlogCommentable error");
            console.error(error);

            // TODO
            // Use notification instead
            alert("Fail to set commentable to false");

            return;
          }

          if (data === true) {
            setCommentable(false);
          } else {
            alert("Something went wrong");
          }
        } else {
          alert("Something went wrong");
        }

      }
    } else {
      const { data, error } = await editBlogCommentable(blog_id);

      if (error) {
        console.log("editBlogCommentable error");
        console.error(error);

        // TODO
        // Use notification instead
        alert("Fail to set commentable to true");

        return;
      }

      if (data === true) {
        setCommentable(true);
      } else {
        alert("Something went wrong");
      }
    }
  };

  // @ts-ignore
  const { showBlogComment, setShowBlogComment } = useBlogComment();
  // @ts-ignore
  const { setShowShadow } = useShadow();
  
  useEffect(() => {
    if (showComment) {
      setShowBlogComment(showComment);
      setShowShadow(true);
    }
  }, []);


  // Use context here

  // Use formik later
  const [comment, setComment] = useState(null);

  const sidebar = useSpring({
    // from: { right: "-25rem" },
    // right: showBlogComment ? "0" : "-25rem"
    from: { right: "-27rem" },
    right: showBlogComment ? "0" : "-27rem"
  });

  // const componentRef = useRef();

  const { innerBorderRef } = useOnOutsideClick(() => {
    setShowBlogComment(false);
    setShowShadow(false);
  });
  
  return (
    <BlogCommentListContainer 
      id="blog-comment" style={sidebar} 
      ref={innerBorderRef}
    >
      <BlogCommentListHeader>
        <BlogCommentListResponses>
          Responses ({totalBlogComments})
        </BlogCommentListResponses>

        <BlogCommentListClose
          onClick={() => {
            setShowBlogComment(false);
            setShowShadow(false);
          }}
        >
          <CloseIcon />
        </BlogCommentListClose>
      </BlogCommentListHeader>

      {writer !== user.username ? <BlogCommentListPolicies>
        <ExternalLink href="/company/policies/code-of-conduct">
          <span>
            Code of Conduct
          </span>
        </ExternalLink>
      </BlogCommentListPolicies> : <div
        style={{
          marginLeft: "1.1rem",
          // marginLeft: "auto",
          marginBottom: "1rem",

          display: "flex",
          alignItems: "center",
        }}
      >
        <span
          style={{
            marginRight: "0.5rem",
            fontSize: "0.8rem",
            opacity: 0.8,
          }}
        >
          Commentable
        </span>
        <FormControlLabel
          control={
            <Switch
              style={{
                color: commentable ? "rgb(17, 160, 245)" : "#efefef",
              }}
              checked={commentable}
              onChange={async () => {
                await handleCommentable();
              }}
              color="primary"
            />
          }
          label={commentable ? "Yes" : "No"}
        />
      </div>}
     
      {commentable && <BlogCommentListBody>
        <BlogCommentListFormWrapper>
          <BlogCommentListUserProfile>
            <Avatar
              name={user.username}
              size="2.5rem"
              src={user.image || ""}
            // src={profile_image ? `${API}/${profile_image}` : ""}
            />
            <span style={{
              marginLeft: "0.5rem",
              wordBreak: "break-word",
              // opacity: 0.8,
            }}>
              {user.username}
            </span>

            {/* <span>
              Code of Conduct
            </span> */}
          </BlogCommentListUserProfile>
          <BlogCommentListForm>
            {/* TODO */}
            {/* Only European characters here if you can make it work */}
            <BlogCommentListTextarea
              // ref={focusCommentTextarea}

              placeholder="Write your comment here" 
              maxLength={blogCommentMaxLength}
              value={comment}
              onChange={(e) => {
                setComment(e.target.value);
              }}
            />

            {/* <CharactersLeftWrapper>
              {charactersLeft(blogCommentMaxLength, comment)}
            </CharactersLeftWrapper> */}
            
            <BlogCommentListButtonContainer>
              <div style={{
                marginLeft: "auto",
                display: "flex",
              }} 
                
              >
                <BlogCommentListCancelButton 
                  type="button"
                  onClick={() => {
                    setComment("");
                  }}
                >
                  Cancel
                </BlogCommentListCancelButton>
                <BlogCommentListResponseButton
                  type="button"
                  disabled={(comment === null || comment === "") ? true : false}

                  onClick={async () => {
                    // if (user.username === "codenjobs") {
                    const { data: newBlogCommentData, error: createBlogCommentError } = await createBlogComment({
                      blog_id,
                      parent_blog_comment_id: null,
                      text: comment,
                    });

                    // # fields = [
                    // #     "blog_id",

                    // #     "blog_comment_id",
                    // #     "blog_comment_owner_id",
                    // #     "blog_comment_text",
                    // #     "blog_comment_show_comment",  # Use it or not ?
                    // #     "blog_comment_money_voters",

                    // #     "blog_comment_parent_blog_comment_id",
                    // #     "blog_comment_child_blog_comments",

                    // #     "blog_comment_created_at",
                    // #     "blog_comment_updated_at",
                    // #]

                    const {
                      id: blog_comment_id,
                      owner_id: blog_comment_owner_id,
                      text: blog_comment_text,
                      
                      money_voters: blog_comment_money_voters,
                      parent_blog_comment_id: blog_comment_parent_blog_comment_id,
                      child_blog_comments: blog_comment_child_blog_comments,

                      created_at: blog_comment_created_at,
                      updated_at: blog_comment_updated_at,
                    } = newBlogCommentData;

                    // console.log("newBlogComment");
                    // console.log(newBlogComment);

                    // alert(user.username);
                    // alert(user.image);

                    if (createBlogCommentError) {
                      console.log("createBlogCommentError");
                      console.error(createBlogCommentError);

                      alert("Something went wrong");
                      return;
                    }

                    // Need to update return fields at the server
                    // const newBlogCommentList = [...blogCommentList, newBlogComment];
                    // console.log("newBlogCommentList");
                    // console.log(newBlogCommentList);
                    
                    // setBlogCommentList(newBlogCommentList);

                    // const { data: newBlogCommentList, error: findBlogCommentListError } = await findBlogCommentList(blog_id);

                    // if (findBlogCommentListError) {
                    //   console.log("findBlogCommentListError");
                    //   console.error(findBlogCommentListError);
                    // } else {
                    //   // Label value should be new
                    //   // Use a better way than this?
                    //   // Use newBlogComment here instead?
                    //   setBlogCommentList(newBlogCommentList); // This shows new posts first anyway
                    //   setSortBlogCommentList("new");
                    // }

                    const newBlogComment = {
                      blog_comment_id,
                      blog_comment_owner_id,
                      blog_comment_text,

                      blog_comment_money_voters,
                      blog_comment_parent_blog_comment_id,
                      blog_comment_child_blog_comments,

                      blog_comment_created_at,
                      blog_comment_updated_at,

                      username: user.username,
                      profile_image: user.image,
                    };

                    // console.log(blogCommentList.push({
                    //   newBlogComment
                    // }));

                    // console.log("[newBlogComment, ...blogCommentList] ");
                    // console.log([newBlogComment, ...blogCommentList]);

                    if (sortBlogCommentList === "new") {
                      setBlogCommentList([newBlogComment, ...blogCommentList]);
                    } else {
                      setBlogCommentList([newBlogComment, ...blogCommentList]);
                      setSortBlogCommentList("new");
                    }

                    setComment("");

                    const queries = new URLSearchParams(window.location.search);
                    if (queries.get("commentId") !== null) {
                      // alert(page);
                      queries.delete("commentId");
                      // queries.set("page", page);
                    }

                    router.push(`/blog?${queries.toString()}`);
                  }}
                >
                  Respond
                </BlogCommentListResponseButton>
              </div>
            </BlogCommentListButtonContainer>
          </BlogCommentListForm>
        </BlogCommentListFormWrapper>

        {/* Extract this? */}
        {totalBlogComments !== 0 && commentId === null && <div style={{
          marginTop: "1rem",
          marginBottom: "1rem",
        }}>
          <div>
            <Select
              id="blog_comment_sort_options"
              name="blog_comment_sort_options"

              styles={{
                control: (provided) => ({
                  ...provided,
                  border: "2px solid rgb(239, 239, 239)",
                  borderRadius: "0.5rem",

                  fontFamily: "roboto",

                  minWidth: "10rem",
                }),
                placeholder: (provided) => ({
                  ...provided,
                  marginLeft: "1.75rem",
                  opacity: "0.7"
                }),
                input: (provided) => ({
                  ...provided,
                  backgroundImage: "url('/static/logo.png')",
                  backgroundRepaet: "no-repeat",
                  backgroundSize: "cover",

                  width: "1.25rem",
                  height: "1.25rem",

                  marginRight: "1rem",
                }),
                singleValue: (provided) => ({
                  ...provided,
                  marginLeft: "1.75rem",
                  // opacity: "0.7"
                }),
              }}

              onChange={(e) => {
                // alert(e.value);

                // console.log(e);
                // console.log(e.label);
                // console.log(e.value);
                // setBlogCommentList(blogCommentList => blogCommentList.reverse());

                // alert(e.label);
                // alert(e.value);
                setSortBlogCommentList(e.value);
              }}
              isClearable={false}

              placeholder="Sort"

              defaultValue={blogCommentOptions[0]}
              value={findBlogCommentSortOptionsLabelValue(sortBlogCommentList)}

              options={blogCommentOptions}
            />
          </div>
        </div>}

        {commentId !== null && <ReadBlogCommentList>
          <Link href={`/blog?&title=${router.query["title"]}&id=${router.query["id"]}&showComment=true`} >
            <span>
              Show all comment list
            </span>
          </Link>
        </ReadBlogCommentList>}

        {blogCommentList !== null && commentId !== null && blogCommentList.every(data => {
          // alert(data.blog_comment_id);
          // alert(commentId);

          return data.blog_comment_id !== commentId;
        }) && (
          <div style={{
            opacity: "0.7",
            marginLeft: "0.1rem",
            // padding: "0.5rem 1rem",
            wordBreak: "break-all",
          }}>
            <p style={{
              margin: "0.5rem 0 0 0",
              // textAlign: "center",
            }} >
              The comment was removed
            </p>
          </div>
        )}

        {blogCommentList === null ? (
          <div style={{
            marginTop: "1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }} >
            <PrimarySpinner />
          </div>
        ) : (
          // blogCommentList?.map((data, index) => {
          blogCommentList.length !== 0 ? blogCommentList.map((data, index) => {

            if (commentId === null) {
              // alert(data.blog_comment_id);

              return (
                <div key={data.blog_comment_id}>
                  <ParentBlogComment
                    data={data}
                    writer={writer}
                    user={user}

                    blogId={blog_id}

                    blogCommentList={blogCommentList}
                    setBlogCommentList={setBlogCommentList}
                  />
                </div>
              ); 
            } else {
              if (commentId === data.blog_comment_id) {
                return (
                  <div key={data.blog_comment_id}>
                    <ParentBlogComment
                      data={data}
                      writer={writer}
                      user={user}

                      blogId={blog_id}

                      blogCommentList={blogCommentList}
                      setBlogCommentList={setBlogCommentList}
                    />
                  </div>
                );
              } else {
                return null;
              }
            }
          }) : commentId === null && <div style={{
            opacity: "0.7",
            padding: "0.5rem 1rem",
            wordBreak: "break-all",
          }}>
            <p style={{
              margin: "0.5rem 0 0 0",
              textAlign: "center",
            }} >
              There are currently no responses for this. 
            </p>
            <p style={{
              margin: "0.5rem 0 0 0",
              textAlign: "center",
            }}>
              Be the first to comment.
            </p>
          </div>
        )}
        
      </BlogCommentListBody>}

      {!commentable && user.username === writer && <BlogCommentListBody>
        <div style={{
          opacity: "0.7",
          // padding: "0.5rem 1rem",
          wordBreak: "break-all",
        }}>
          <p style={{
            // margin: "0.5rem 0 0 0"
            margin: 0,
            textAlign: "center",
          }} >
            {/* Comments are not allowed by the writer */}
            Comments are not allowed
          </p>
        </div>
      </BlogCommentListBody>}

      {!commentable && user.username !== writer && <BlogCommentListBody>
        <div style={{
          opacity: "0.7",
          // padding: "0.5rem 1rem",
          wordBreak: "break-all",
        }}>
          <p style={{
            // margin: "0.5rem 0 0 0"
            margin: 0,
            textAlign: "center",
          }} >
            {/* Comments are not allowed by the writer */}
            Comments are not allowed 
          </p>
        </div>
      </BlogCommentListBody>}
    </BlogCommentListContainer>
  );
};

export default BlogCommentList;

// const clickOutsideConfig = {
//   // @ts-ignore
//   handleClickOutside: () => BlogComment.handleClickOutside
// };

// export default onClickOutside(BlogComment, clickOutsideConfig);
