import { styled } from "baseui";

const ChildBlogCommentListFormWrapper = styled("div", {
  width: "100%",
  marginTop: "1rem",

  display: "flex",
  alignItems: "flexStart",
  justifyContent: "center",
  flexDirection: "column",

  borderLeft: "0.25rem solid #efefef",
  paddingLeft: "0.5rem",

  // paddingTop: "0.25rem",
  paddingBottom: "0.25rem",
  
  marginLeft: "2.25rem",
});

const ChildBlogCommentForm = styled("form", () => {
  return {
    width: "calc(100% - 2.5rem)",

    borderRadius: "0.5rem",
    boxShadow: "rgb(0 0 0 / 12%) 0px 0.25rem 0.5rem",

    // marginLeft: "2rem",
    marginLeft: "calc(0.25rem)",
    marginRight: "calc(0.25rem)",

    display: "flex",
    flexFlow: "column",
  };

});

const ChildBlogCommentListTextarea = styled("textarea", {
  borderRadius: "0.5rem",
  // border: `2px solid #efefef`,
  // resize: "none",
  margin: "0.5rem",

  // or
  border: "none",
  resize: "none",

  height: "6rem",

  padding: "0.5rem",
  fontFamily: "roboto",

});

export {
  ChildBlogCommentListFormWrapper,

  ChildBlogCommentForm,
  ChildBlogCommentListTextarea,
};