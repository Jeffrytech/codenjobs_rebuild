import { styled } from "baseui";

const ParentBlogCommentEditFormWrapper = styled("section", {
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

const ParentBlogCommentEditForm = styled("form", {
  width: "100%",
  marginLeft: "0.5rem",
  marginRight: "0.5rem",
  display: "flex",
  flexFlow: "column",
});

const ParentBlogCommentEditTextarea = styled("textarea", {
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
  ParentBlogCommentEditFormWrapper,
  ParentBlogCommentEditForm,
  ParentBlogCommentEditTextarea,
};