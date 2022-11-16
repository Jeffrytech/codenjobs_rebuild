import { styled, withStyle } from "baseui";
import { DESKTOP, XS } from "../../../design/breakpoints";
import { boxShadow } from "../../../design/common";

const editorStyles = {
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

  //   fontSize: "1.25rem", // 1rem at mobile?
  //   // fontSize: "1.1rem", // 1rem at mobile?

  //   // [XS]: {
  //   //   padding: 0,
  //   // }
  // },
};

// Move these to JobList and JobCard
const JobPostFormContainer = styled("section", {
  padding: "2rem 2rem 4rem 2rem",
  // [MOBILE]: {
  //   padding: "0px 16px 64px 16px"
  // }

  // background: "url(/static/background.png)", // background: url(/static/background.png);
  background: "url(/static/tokens.png)", // background: url(/static/background.png);
  backgroundSize: "contain", // background-size: contain;
  minHeight: "100vh",
  
  [XS]: {
    padding: 0,
  }

  // background: url(/static/background.png);
  // background- size: contain;
});

const JobPostFormWrapper = styled("div", {
  // margin: "2rem auto 0",
  margin: "0 auto",
  // maxWidth: "1024px"
  maxWidth: "48rem",
  width: "48rem",
  // paddingTop: "2rem",

  // [XS]: {
  //   // margin: "0 auto 0",
  //   padding: 0,
  // }

  [DESKTOP]: {
    width: "100%",
    maxWidth: "100%",
  }

  
});

const JobPostFormSection = styled("section", {
  color: "#374252",
  boxShadow,
  flexShrink: 0,
  borderRadius: "8px",
  // marginBottom: "32px",
  backgroundColor: "white",
  padding: "1.5rem",

  minHeight: "100vh",

  [XS]: {
    padding: "1.5rem",
    // padding: "0 1.5rem 1.5rem 1.5rem",
  }
});

// const JobPostFormDetailWrapper = styled("div", {
//   display: "flex",
//   flexFlow: "row",
//   margin: 0,
//   padding: "1.5rem 1rem 0 1rem",
// });

const JobPostFormDetailText = styled("span", {
  marginTop: "0.25rem",
  opacity: 0.5,
  fontSize: "0.85rem",

  display: "flex",
});

const JobPostFormButton = styled("button", {
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

const JobPostFormDeleteButton = withStyle(JobPostFormButton, {
  // @ts-ignore
  color: "#ff1676",
  border: "1px solid #ff1676",
});

const LogoInputLabel = styled("label", {
  display: "flex",

  borderRadius: "0.5rem",
  border: "1px solid #efefef",
  width: "7rem",
  padding: "0.5rem",
  margin: "1.5rem 0",
  cursor: "pointer",
  position: "relative",
});

const LogoEditButton = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  position: "absolute",
  top: "5rem",
  right: "1rem",

  padding: "0.5rem",

  background: "white",
  color: "rgb(17, 160, 245)",
  border: "1px solid rgb(17, 160, 245)",

  borderRadius: "50%",
});

const LogoInput = styled("input", {
  display: "none",
});

const FormIntro = styled("h2", {
  margin: "0 0 1rem 0",
  color: "#ff7676",
});

const CompanyLogoDetailWrapper = styled("div", {
  display: "flex",
});

const CompanyLogoDetail = styled("div", {
  marginRight: "auto",
});

const CompanyLogoLabel = styled("label", {
  fontSize: "1.2rem",
  fontWeight: "bold",
  display: "flex",
});

const JobPostFormLabel = styled("label", {
  fontSize: "1.2rem",
  fontWeight: "bold",
});

const JobPostFormInputWrapper = styled("div", {
  // marginTop: "0.5rem",
  marginRight: "1rem",
});

const JobPostFormTextInput = styled("input", {
  width: "100%",
  marginTop: "1rem",
  boxSizing: "border-box",
  borderRadius: "0.5rem",
  fontSize: "1rem",
  padding: "0.5rem",
  backgroundColor: "#fff",
  border: "2px solid #efefef",

  // [XS]: {
  //   fontSize: "0.8rem",
  // }
});

const JobPostFormTextarea = styled("textarea", {
  width: "100%",
  marginTop: "1rem",
  boxSizing: "border-box",
  borderRadius: "0.5rem",
  // fontSize: "1.1rem",
  fontSize: "1.25rem",
  padding: "0.5rem",
  backgroundColor: "#fff",
  border: "2px solid #efefef",

  resize: "both",

  [XS]: {
    fontSize: "1rem",
  }
});

const CharactersLeftWrapper = styled("span", {
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

const SkillsLeftWrapper = withStyle(CharactersLeftWrapper, {
  // @ts-ignore
  margin: "0.5rem 0 0 0.25rem",
});

// const SkillsLeftWrapper = styled("span", {
//   display: "flex",

//   opacity: 0.5,
//   margin: "0.5rem 0 1rem 0.25rem",
//   fontSize: "0.8rem",
// });

// const JobPostFormDetailText = styled("span", {
//   opacity: 0.5,
//   fontSize: "0.85rem",
// });

const JobTypeRadioGroupWrapper = styled("div", {
  marginTop: "0.5rem",
  marginBottom: "0.5rem",
  // marginBottom: "1rem",
});

const JobCategoryWrapper = styled("div", {
  marginTop: "1rem",
  marginBottom: "1rem",
  marginRight: "1rem",
});

const JobPostSkillsWrapper = styled("ul", {
  display: "flex",
  flexWrap: "wrap",

  listStyle: "none",
  marginTop: "1rem",
  marginBottom: "0.5rem",
  padding: 0,
});

const JobPostSkill = styled("li", {
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

  // marginRight: "1rem",
  marginRight: "0.8rem",
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

export {
  editorStyles,
  
  JobPostFormContainer,
  JobPostFormWrapper,
  JobPostFormSection,

  JobPostFormDetailText,
  JobPostFormButton,
  JobPostFormDeleteButton,

  LogoInputLabel,
  LogoEditButton,
  LogoInput,

  FormIntro,
  
  CompanyLogoDetailWrapper,
  CompanyLogoDetail,
  CompanyLogoLabel,

  JobPostFormLabel,
  JobPostFormInputWrapper,
  JobPostFormTextInput,
  JobPostFormTextarea,

  CharactersLeftWrapper,
  CodeOfConductWrapper,
  
  SkillsLeftWrapper,

  JobTypeRadioGroupWrapper,

  JobCategoryWrapper,
  
  JobPostSkillsWrapper,
  JobPostSkill,

  ContinueButtonWrapper,
  ContinueButton,
};