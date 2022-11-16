import React, { useEffect, useState } from "react";

// import ShareIcon from "@material-ui/icons/Share";
import ModeCommentIcon from "@material-ui/icons/ModeComment";

import {
  BlogShareCard,

  BlogShareContainer,
  BlogShareWrapper,
  // BlogShareText,
  SocialShareWrapper,
  BlogCommentText,
} from "./BlogShareCSS";

import SocialShare from "../../SocialShare";
import { UserCommentButtonWrapper } from "../../OwnerButtonsCSS";
import { useAuth } from "../../../contexts/auth";
import { useBlogComment } from "../../../contexts/blogComment";
import { useShadow } from "../../../contexts/shadow";
import { useLoginRequired } from "../../../contexts/loginRequired";
import { useRouter } from "next/router";
// import { findTotalBlogComments } from "../../../api/blogComment";

const BlogShare = ({
  title,
  url,

  // blog_id,

  totalBlogComments,
}) => {
  const {
    // @ts-ignore
    user,
    // isOwner,
  } = useAuth();

  const router = useRouter();

  // @ts-ignore
  const { setLoginRequired } = useLoginRequired();

  // @ts-ignore
  const { showBlogComment, setShowBlogComment } = useBlogComment();
  // @ts-ignore
  const { setShowShadow } = useShadow();

  // const [totalBlogComments, setTotalBlogComments] = useState(0); // Use 0 or null?

  // useEffect(() => {
  //   findTotalBlogComments(blog_id)
  //     .then(({ data }) => {
  //       // alert(data);
  //       // console.log("data");
  //       // console.log(data);
  //       setTotalBlogComments(data);
  //     })
  //     .catch(error => {
  //       console.log("findTotalBlogComments error");
  //       console.error(error);
  //     })
  // }, []);
  
  return (<BlogShareCard>
    <BlogShareContainer>
      <BlogShareWrapper>
        {/* <ShareIcon style={{
          color: "rgb(17, 160, 245)",
        }} />
        <BlogShareText>
          Share
        </BlogShareText> */}
        
        <UserCommentButtonWrapper
          onClick={() => {
            if (user === null) {
              setLoginRequired({
                show: true,
                title: "Login Required",
                description: `Please, do login first before you comment`,
                // description: `Login first before you follow u/${username}`,
                // description: "Login first before you follow the user.",
                // description: "Login or register to the website first.",
                from: router.asPath,
              });
              // alert("Please, do login at https://www.codenjobs.com/signin first to read comments.");
            } else {
              // setShowBlogComment(!showBlogComment);
              setShowBlogComment(true);
              setShowShadow(true);
            }
          }}
        >
          <ModeCommentIcon style={{
            height: "1rem",
          }} />
          <div style={{
            fontSize: "1rem",
            // marginLeft: "0.25rem",
          }}>
            {totalBlogComments} <BlogCommentText>{totalBlogComments > 2 ? "Comments" : "Comment"}</BlogCommentText>
          </div>

        </UserCommentButtonWrapper>

        <SocialShareWrapper>
          
          <SocialShare
            title={title}
            url={url}
          />
        </SocialShareWrapper>
      </BlogShareWrapper>
    </BlogShareContainer>
  </BlogShareCard>);
};

export default BlogShare;