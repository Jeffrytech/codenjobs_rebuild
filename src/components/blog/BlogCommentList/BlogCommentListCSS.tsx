import { styled } from "baseui";
import { MOBILE, XS } from "../../../design/breakpoints";
import { black, blue, green, shadowBlue, white } from "../../../design/colors";
import { boxShadow, card } from "../../../design/common";
import { animated} from "react-spring";

// 1. Container to give a background color
// 2. Primary (panel)
// 3. Secondary (panel)

// const card = {
//   color: "#374252",
//   boxShadow: "0 2px 4px 0 rgba(0,0,0,.1)",
//   flexShrink: 0,
//   borderRadius: "8px",
//   backgroundColor: "white",

//   border: "1px solid #efefef",
// };

const BlogCommentListContainer = styled(animated.nav, ({ 
  // $showBlogCommentList
}) => {
  return {
    // top: 0,
    // top: "60px",
    top: "3.75rem",
    // right: 0,
    bottom: 0,

    position: "fixed",
    background: white,
    zIndex: 5,
    // maxidth: "288px",
    // maxWidth: "400px",
    // width: "25rem",
    width: "27rem",
    maxWidth: "100%",

    bordeLeft: "1px solid rgba(0, 0, 0, 0.2)",

    boxShadow,

    overflowY: "scroll",
    // visibility: "visible",
    opacity: "1",
    display: "flex",
    flexFlow: "column",

    color: shadowBlue,
    
    // Solve animation later

    // transform: "translateX(100%)",

  };
  // padding: "2rem 2.5rem",
  // position: "relative",

  // [MOBILE]: {
  //   // padding: "1rem 2rem"
  //   padding: "1.5rem"
  // }
});

const BlogCommentListHeader = styled("div", ({
  // $showBlogCommentList
}) => {
  return {
    display: "flex",
    alignItems: "center",
    padding: "1rem 1rem",
  };

});

const BlogCommentListPolicies = styled("div", ({
  // $showBlogCommentList
}) => {
  return {
    display: "flex",
    alignItems: "center",
    padding: "0 1rem 1rem 1rem",

    fontSize: "0.8rem",
    opacity: 0.5,
    marginLeft: "0.1rem",

    cursor: "pointer",
    ":hover": {
      textDecoration: "underline",
      transition: "all 0.2s",
      // color: blue,
    }
  };

});

const ReadBlogCommentList = styled("div", ({
  // $showBlogCommentList
}) => {
  return {
    display: "flex",
    alignItems: "center",
    // padding: "0 1rem 1rem 1rem",
    padding: "0 1rem 0 0",

    fontSize: "0.8rem",
    // opacity: 0.5,

    // marginTop: "0.5rem",
    marginTop: "1rem",
    marginLeft: "0.1rem",

    color: blue,

    cursor: "pointer",
    // ":hover": {
    //   // textDecoration: "underline",
    //   transition: "all 0.2s",
    //   // color: blue,
    // }
  };

});

const BlogCommentListResponses = styled("h2", {
  fontSize: "1.25rem",
  fontWeight: "normal",
  margin: 0,
});

const BlogCommentListClose = styled("div", {
  display: "flex",
  marginLeft: "auto",
  marginRight: "0.5rem",

  cursor: "pointer",
  ":hover": {
    transition: "all 0.2s",
    opacity: 0.8,
  }
});

const BlogCommentListBody = styled("div", {
  flexGrow: "1",
  padding: "0 1rem 2rem 1rem",
  overflowY: "auto",
});

const BlogCommentListFormWrapper = styled("div", {
  padding: "0.5rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",

  border: "1px solid #efefef",
  boxShadow: "rgb(0 0 0 / 12%) 0px 0.25rem 0.5rem",

  borderRadius: "0.5rem",
  // boxShadow: "rgb(0 0 0 / 12%) 0px 2px 8px",
});

const BlogCommentListUserProfile = styled("div", {
  width: "100%",
  display: "flex",
  alignItems: "center",

  marginBottom: "0.5rem",
});

const BlogCommentListForm = styled("form", {
  width: "100%",
  marginLeft: "0.5rem",
  marginRight: "0.5rem",
  display: "flex",
  flexFlow: "column",
});

const BlogCommentListTextarea = styled("textarea", {
  borderRadius: "0.5rem",
  // border: `2px solid #efefef`,
  // resize: "none",

  // or
  border: "none",
  resize: "none",
  
  height: "6rem",

  padding: "0.5rem",
  fontFamily: "roboto",
});

const BlogCommentListButtonContainer = styled("div", {
  display: "flex",
  padding: "0.5rem 0.25rem",
});

const BlogCommentListCancelButton = styled("button", {
  // width: "100%",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  padding: "0.5rem 1rem",
  fontSize: "1rem",
  textAlign: "center",
  lineHeight: "1rem",
  border: "none",
  // borderRadius: "0.5rem",
  letterSpacing: "0.7px",
  textDecoration: "none",

  // Use theme instead?
  color: shadowBlue,
  backgroundColor: white,
  // backgroundColor: "rgb(17, 160, 245)",
  // border: "1px solid rgb(17, 160, 245)",

  transition: "all 0.2s",
  cursor: "pointer",
  ":hover": {
    opacity: 0.7
  }
});

const BlogCommentListResponseButton = styled("button", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  padding: "0.25rem 0.5rem",
  fontSize: "1rem",
  textAlign: "center",
  lineHeight: "1rem",
  borderRadius: "1rem",
  letterSpacing: "0.7px",
  textDecoration: "none",

  // Use theme instead?
  color: "#fff",
  backgroundColor: green,
  border: `1px solid ${green}`,

  transition: "all 0.2s",
  cursor: "pointer",
  ":hover": {
    opacity: 0.7
  },

  ":disabled": {
    opacity: "0.7 !important",
    cursor: "not-allowed",
  }
});

const CharactersLeftWrapper = styled("span", {
  opacity: 0.5,
  fontSize: "0.8rem",

  marginTop: "0.5rem",
  marginRight: "0.5rem",
  marginLeft: "0.5rem",
});

const CommentDropdownContainer = styled("div", {
  position: "relative",
  display: "inline-block",

  marginLeft: "auto",
  // marginRight: "1rem",
});

const UserIsCommenter = styled("span", {
  fontSize: "0.75rem",
  padding: "0.25rem",
  // background: "#efefef",
  background: blue,

  display: "inline-block",
  marginTop: "0.25rem",
  // color: blue,
  color: "white",
  borderRadius: "0.25rem",

  marginLeft: "0.25rem",
  marginRight: "0.25rem",
  // marginRight: "0.5rem",
});

const UserIsWriter = styled("span", {
  fontSize: "0.75rem",
  padding: "0.25rem",
  background: "#efefef",
  // background: green,

  display: "inline-block",
  marginTop: "0.25rem",
  // color: blue,
  // color: "white",
  borderRadius: "0.25rem",
});

export {
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

  UserIsCommenter,
  UserIsWriter,

  ReadBlogCommentList,
};