import { green } from "@material-ui/core/colors";
import { styled } from "baseui";

const ParentBlogCommentContainer = styled("section", ({ 
  // $showBlogComment
}) => {
  return {
    // maxWidth: "20rem",
    padding: "0.5rem 0",
    // padding: "18px 10px",
    borderBottom: "1px solid #efefef",
  };
});

// Rename these
const ParentBlogCommentListBody = styled("div", {
  flexGrow: "1",
  // padding: "0 1rem 1rem 1rem",
  // overflowY: "auto",
  width: "100%",
});

const ParentBlogCommentListWrapper = styled("div", {
  width: "100%",

  padding: "0.5rem 0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",

  // border: "1px solid #efefef",
  // boxShadow: "rgb(0 0 0 / 12%) 0px 0.25rem 0.5rem",

  borderRadius: "0.5rem",
  // boxShadow: "rgb(0 0 0 / 12%) 0px 2px 8px",
});

const ParentBlogCommentListFormWrapper = styled("div", {
  width: "100%",

  // padding: "0.5rem 0",
  // padding: "0.5rem 0 0 0",
  // padding: "0.5rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",

  // border: "1px solid #efefef",
  boxShadow: "rgb(0 0 0 / 12%) 0px 0.25rem 0.5rem",

  borderRadius: "0.5rem",
  // boxShadow: "rgb(0 0 0 / 12%) 0px 2px 8px",
});

const ParentBlogCommentListUserProfile = styled("div", {
  width: "100%",
  display: "flex",
  alignItems: "center",

  marginBottom: "0.5rem",
});

// Move to BlogCommentListCSS.tsx and rename to BlogCommentTextWrapper?
const ParentBlogCommentTextWrapper = styled("p", {
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  width: "100%",

  // margin: '0.5rem 1.5rem 0.5rem 2rem',
  margin: '0.5rem 1.5rem 0 2rem',
  paddingBottom: "1rem",
  
  wordBreak: "break-word",
  // lineHeight: "1.5rem",

  whiteSpace: "break-spaces",
  
  fontSize: "0.85rem",
});

const UserCommentButtonsContainer = styled("div", {
  display: "flex",
  marginLeft: "0.25rem",

  width: "100%",
});

const UserCommentMoneyButtonWrapper = styled("div", () => {
  // alert($moneyVote);

  return {
    display: "flex",
    alignItems: "center",

    marginLeft: "0.1rem",
    marginRight: "0.25rem",

    transition: "all 0.2s",
    cursor: "pointer",
    ":hover": {
      opacity: 0.8,
    }
  };
});

const UserShowSubCommentListButtonWrapper = styled("div", () => {
  return {
    display: "flex",
    alignItems: "center",

    marginRight: "0.5rem",

    transition: "all 0.2s",
    cursor: "pointer",
    ":hover": {
      opacity: 0.8,
    }
  };
});

const UserSubCommentPostButtonWrapper = styled("div", () => {
  // alert($moneyVote);

  return {
    display: "flex",
    alignItems: "center",
    marginLeft: "auto",

    // color: black,
    marginRight: "0.5rem",

    transition: "all 0.2s",
    cursor: "pointer",
    ":hover": {
      opacity: 0.8,
      // color: green,
      // color: blue,
    },

    // [MOBILE]: {
    //   display: "none",
    // }
  };
});

export {
  ParentBlogCommentContainer,

  ParentBlogCommentListBody,
  ParentBlogCommentListWrapper,
  ParentBlogCommentListUserProfile,

  ParentBlogCommentListFormWrapper,

  ParentBlogCommentTextWrapper,

  UserCommentButtonsContainer,
  UserCommentMoneyButtonWrapper,
  UserShowSubCommentListButtonWrapper,
  UserSubCommentPostButtonWrapper,
};