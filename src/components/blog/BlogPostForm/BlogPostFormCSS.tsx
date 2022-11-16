import { styled, withStyle } from "baseui";
import { XS, XXS, MOBILE, DESKTOP } from "../../../design/breakpoints";
import { red } from "../../../design/colors";
import { boxShadow } from "../../../design/common";

const editorStyles = {
  // Move them to CSS files later?
  wrapperStyle: {
    marginTop: "1rem",
  },

  toolbarStyle: {
    marginBottom: "1rem",
    padding: "1rem 0.5rem 0.5rem 0.75rem",

    // [XS]: {
    //   padding: 0,
    // }
  },

  // editorStyle: {
  //   padding: "0 1rem",
  //   border: "1px solid #efefef",
  //   marginTop: 0,
  //   minHeight: "10rem",

  //   // Use CSS file instead with editorClassName?
  //   fontSize: "1.25rem", // 1rem at mobile?
  //   // fontSize: "1.1rem", // 1rem at mobile?

  //   // [XS]: {
  //   //   padding: 0,
  //   // }
  // },
};

// Move these to JobList and JobCard
const BlogPostFormContainer = styled("section", {
  padding: "2rem 2rem 4rem 2rem",
  // [MOBILE]: {
  //   padding: "0px 16px 64px 16px"
  // }
  // background: "url(/static/background.png)",
  background: "url(/static/tokens.png)",
  backgroundSize: "contain",
  minHeight: "100vh",

  [XS]: {
    padding: 0,
  },


});

const BlogPostFormWrapper = styled("div", {
  // maxWidth: "1024px"
  margin: "0 auto",
  width: "48rem",
  maxWidth: "48rem",

  // [XS]: {
  //   margin: "0 auto",
  // }

  [DESKTOP]: {
    width: "100%",
    maxWidth: "100%",
  }
});

const BlogPostFormSection = styled("section", {
  color: "#374252",
  boxShadow,
  flexShrink: 0,
  borderRadius: "0.5rem",
  // marginBottom: "32px",
  backgroundColor: "white",
  padding: "1.5rem",

  minHeight: "100vh",

  [XS]: {
    padding: "1.5rem",
    // padding: "0 1.5rem 1.5rem 1.5rem",
  }
});

// const BlogPostFormDetailWrapper = styled("div", {
//   display: "flex",
//   flexFlow: "row",
//   margin: 0,
//   padding: "1.5rem 1rem 0 1rem",
// });

const BlogPostFormDetailText = styled("span", {
  marginTop: "0.25rem",
  opacity: 0.5,
  fontSize: "0.85rem",

  display: "flex",
});

const BlogPostFormButton = styled("button", {
  marginRight: "1rem",

  color: "rgb(17, 160, 245)",
  background: "white",
  border: "1px solid rgb(17, 160, 245)",
  borderRadius: "8px",
  padding: "0 8px",
  fontWeight: "bold",

  transition: "all 0.2s",
  cursor: "pointer",

  ":hover": {
    opacity: 0.7,
    background: "#efefef",
  }
});

const BlogPostFormDeleteButton = withStyle(BlogPostFormButton, {
  // @ts-ignore
  color: red,
  border: `1px solid ${red}`,

  [XXS]: {
    border: "none",
  }
});

const CoverInputLabel = styled("label", {
  display: "block",

  borderRadius: "0.5rem",
  border: "1px solid #efefef",
  // width: "7rem",
  padding: "0.5rem",
  margin: "1.5rem 1rem 1.5rem 0",
  // margin: "1.5rem 0",
  cursor: "pointer",
  position: "relative",

  height: "16rem",

  [MOBILE]: {
    height: "8rem",
  }
});

const CoverImage = styled("img", {
  width: "100%",
  maxHeight: "16rem",
  // height: "100%",
  // backgroundColor: "black",
  marginBottom: 0,
  paddingBottom: 0,
  display: "flex",

  [MOBILE]: {
    maxHeight: "8rem",
  }
});

const CoverEditButton = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  position: "absolute",
  top: "13.8rem",
  right: "1rem",

  padding: "0.5rem",

  background: "white",
  color: "rgb(17, 160, 245)",
  border: "1px solid rgb(17, 160, 245)",

  borderRadius: "50%",

  [MOBILE]: {
    top: "5.8rem",
  }
});

const CoverInput = styled("input", {
  display: "none",
});

const FormIntro = styled("h2", {
  margin: "0 0 1rem 0",
  color: "#ff7676",
});

const CoverDetailWrapper = styled("div", {
  display: "flex",
});

const CoverDetail = styled("div", {
  marginRight: "auto",
});

const CoverLabel = styled("label", {
  fontSize: "1.2rem",
  fontWeight: "bold",
  display: "flex",
});

const BlogPostFormLabel = styled("label", {
  fontSize: "1.2rem",
  fontWeight: "bold",
});

// Is this necessary?
const BlogPostFormInputWrapper = styled("div", {
  // marginTop: "1rem",
  marginTop: "0.5rem",
  marginRight: "1rem",
  // marginTop: "0.25rem",
});

const BlogPostFormTextInput = styled("input", {
  width: "100%",
  marginTop: "0.5rem",
  // marginTop: "0.25rem",
  boxSizing: "border-box",
  borderRadius: "0.5rem",
  fontSize: "1rem",
  padding: "0.5rem",
  backgroundColor: "#fff",
  border: "2px solid #efefef",

  [XS]: {
    // fontSize: "0.8rem",
  }
});

const BlogPostFormTextarea = styled("textarea", {
  width: "100%",
  marginTop: "1rem",
  boxSizing: "border-box",
  borderRadius: "0.5rem",
  // fontSize: "1.1rem",
  fontSize: "1.25rem",
  padding: "0.5rem",
  backgroundColor: "#fff",
  border: "2px solid #efefef",

  // fontFamily: "Roboto, Helvetica, sans-serif !important",
  // background: "black",

  resize: "both",

  [XS]: {
    // fontSize: "1rem",
  }
});

// const CharactersLeftWrapper = styled("span", {
const CharactersLeftWrapper = styled("div", {
  display: "flex",

  opacity: 0.5,
  margin: "0.5rem 0 1rem 0.25rem",
  fontSize: "0.8rem",
});

const CodeOfConductWrapper = styled("span", {
  marginLeft: "auto",
  marginRight: "1.25rem",

  transition: "all 0.2s",
  ":hover": {
    opacity: 0.7,
  }
});

const TagsLeftWrapper = withStyle(CharactersLeftWrapper, {
  // @ts-ignore
  margin: "0.5rem 0 0 0.25rem",
});

// const SkillsLeftWrapper = styled("span", {
//   display: "flex",

//   opacity: 0.5,
//   margin: "0.5rem 0 1rem 0.25rem",
//   fontSize: "0.8rem",
// });

// const BlogPostFormDetailText = styled("span", {
//   opacity: 0.5,
//   fontSize: "0.85rem",
// });

const JobTypeRadioGroupWrapper = styled("div", {
  marginTop: "0.5rem",
  marginBottom: "0.5rem",
  // marginBottom: "1rem",
});

const BlogPostCategoryWrapper = styled("div", {
  marginTop: "1rem",
  marginBottom: "1rem",
  marginRight: "1rem",
});

const BlogPostTagsWrapper = styled("ul", {
  display: "flex",
  flexWrap: "wrap",

  listStyle: "none",
  marginTop: "1rem",
  marginBottom: "0.5rem",
  padding: 0,
});

const BlogPostTag = styled("li", {
  marginRight: "0.5rem",
  marginBottom: "0.5rem",
});

const ContinueButtonWrapper = styled("div", {
  // display: "flex",
  // alignItems: "center",
  // justifyContent: "flex-end",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  marginRight: "0.85rem",
  // marginRight: "0.75rem",
  // marginLeft: "1rem",
  // marginTop: "1rem",
});

const ContinueButton = styled("button", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  
  // background: "rgb(37, 191, 161)",
  background: "rgb(17, 160, 245)",
  width: "100%",
  color: "white",
  padding: "0.8rem 1.8rem",
  border: "2px solid #efefef",
  borderRadius: "0.5rem",
  fontSize: "1rem",

  transition: "all 0.2s",
  cursor: "pointer",
  ":hover": {
    opacity: 0.7,
  },
  ":focus": {
    outline: "none",
  },

  [XS]: {
    // padding: "0.8rem",
    // fontSize: "1rem",
  }
});

// const BlogPostCategoryWrapper = styled("div", {
//   marginTop: "1rem",
//   marginBottom: "1rem",
//   marginRight: "1rem",
// });

export {
  editorStyles,
  
  BlogPostFormContainer,
  BlogPostFormWrapper,
  BlogPostFormSection,

  BlogPostFormDetailText,
  BlogPostFormButton,
  BlogPostFormDeleteButton,

  CoverInputLabel,
  CoverImage,

  CoverEditButton,
  CoverInput,

  FormIntro,
  
  CoverDetailWrapper,
  CoverDetail,
  CoverLabel,

  BlogPostFormLabel,
  BlogPostFormInputWrapper,
  BlogPostFormTextInput,
  BlogPostFormTextarea,

  CharactersLeftWrapper,
  CodeOfConductWrapper,
  
  TagsLeftWrapper,

  JobTypeRadioGroupWrapper,

  BlogPostCategoryWrapper,
  
  BlogPostTagsWrapper,
  BlogPostTag,

  ContinueButtonWrapper,
  ContinueButton,
};