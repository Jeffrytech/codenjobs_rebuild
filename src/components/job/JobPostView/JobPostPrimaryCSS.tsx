import { styled } from "baseui";
import { MOBILE, XS } from "../../../design/breakpoints";
import { fullWidthPercent } from "../../../design/width";

// 1. Container to give a background color
// 2. Primary (panel)
// 3. Secondary (panel)

const JobHeader = styled("div", {
  // padding: "2rem 2.5rem",
  // position: "relative",

  // [MOBILE]: {
  //   padding: "1.5rem"
  // }
  // padding: "2rem 2rem 1.5rem 2rem",
  padding: "2rem 2rem 0 2rem",
  position: "relative",

  [MOBILE]: {
    // padding: "1rem 2rem"
    padding: "1.5rem 1.5rem 0 1.5rem"
  }
});

const JobPostVisibilityWrapper = styled("div", {
  display: "flex",
  alignItems: "center",

  marginTop: "0.5rem",
  marginLeft: "-0.1rem",
  marginBottom: "0.5rem",
});

const PostedBy = styled("div", {
  display: "flex",
  
  opacity: 0.7,
  fontSize: "1rem",
  // marginBottom: "8px",

  [XS]: {
    flexFlow: "column",
    // fontSize: "0.8rem",
  },
});

const UsernameWrapper = styled("div", {
  // [XS]: {
  //   marginBottom: "0.5rem",
  // },
});

const JobPostTime = styled("span", {
  [XS]: {
    marginTop: "0.25rem",
  }
});

const JobTitle = styled("h1", {
  fontSize: "2rem",
  fontWeight: 800,
  lineHeight: "2.5rem",

  margin: "0.5rem 0 0.25rem 0",

  // [XS]: {
  //   // fontSize: "1.25rem",
  //   fontSize: "2rem",
  //   lineHeight: "inherit",
  // },
});

// const JobFeaturesContainer = styled("div", {
//   ...flex.flex,
//   ...flex.row,
//   ...fullWidthPercent,
//   marginTop: "0.5rem",

//   [XS]: {
//     marginTop: "0.25rem",
//   }
// });

// const JobFeature = styled("div", {
//   display: "flex",
//   alignItems: "center",
  
//   padding: "4px 8px 4px 8px",
//   fontSize: "1rem",
//   lineHeight: "18px",
//   // fontWeight: "bold",
//   borderRadius: "8px",
//   marginRight: "0.5rem",

//   color: "rgb(17, 160, 245)",
//   backgroundColor: "white",
//   border: "1px solid rgb(17, 160, 245)",

//   transition: "all 0.2s",
//   cursor: "pointer",
//   ":hover": {
//     opacity: "0.7",
//   },

//   [XS]: {
//     // padding: "0.5rem",
//     lineHeight: "none",
//     border: "none",
//     marginRight: 0,

//     padding: "0 0.5rem 0 0",
//   },
// });

const JobFeaturesContainer = styled("div", {
  display: "flex",
  flexFlow: "row",
  ...fullWidthPercent,

  flexWrap: "wrap",

  marginTop: "0.25rem",

  // [XS]: {
  //   marginTop: "0.25rem",
  // }
});

const JobFeatureWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  marginTop: "0.5rem",
  marginRight: "0.5rem",
  marginBottom: "0.25rem",

  color: "black",

  transition: "all 0.2s",
  cursor: "pointer",
  ":hover": {
    opacity: 0.7,
    color: "rgb(17, 160, 245)",
  }
});

//
const JobDescription = styled("div", {
  // padding: "0 2rem 1.5rem 2rem",
  padding: "0 2rem 0 2rem",

  wordBreak: "break-word",

  [MOBILE]: {
    // padding: "1rem 2rem"
    // padding: "0 1.5rem 1.5rem 1.5rem"
    padding: "0 1.5rem 0 1.5rem"
  },
});
//

const HowToApplyContainer = styled("div", {
  padding: "2rem 2.5rem",
  borderTop: "1px solid #eee",

  borderBottom: "1px solid #eee",

  [MOBILE]: {
    padding: "1.5rem"
  }
});

const HowToApply = styled("a", {
  fontSize: "25px",
  fontWeight: "bold",
  margin: "0 0 0.5rem 0",

  color: "rgb(17, 160, 245)",
  textDecoration: "none",
  transition: "all 0.2s",
  display: "block",

  ":hover": {
    opacity: 0.8
  },

  [XS]: {
    fontSize: "1.25rem",
  },
  // marginBottom: "8px",
});

// const JobLink = styled("a", {
//     marginTop: "8px",
//     color: "rgb(17, 160, 245)",
//     textDecoration: "none",
// });

//
const JobPostSkillContainer = styled("div", {
  display: "flex",
  flexFlow: "column",
  // ...fullWidthPercent,

  padding: "2rem 2.5rem",
  // borderTop: "1px solid #eee"
  [MOBILE]: {
    padding: "1.5rem"
  }
});

const JobPostSkill = styled("li", {
  marginRight: "0.5rem",
  marginBottom: "0.5rem",

  transition: "all 0.2s",
  cursor: "pointer",
  ":hover": {
    opacity: "0.7",
  }
});

// Refer to this to update.
// https://baseweb.design/blog/responsive-web
// https://www.styletron.org/concepts#media-queries-and-pseudo-classes

const CompanyWebsite = styled("a", {
  color: "black",
  textDecoration: "none",

  ":hover": {
    textDecoration: "underline",
  }
});

const JobShareWrapper = styled("div", {
  display: "flex",

  marginLeft: "auto",
  marginRight: "0.25rem",

  opacity: 0.7,

  // color: blue,

  // marginTop: "0.5rem",

  ":hover": {
    // color: blue,
    cursor: "pointer",
  },
});

const ShareTextWrapper = styled("span", {
  marginLeft: "0.25rem",
  
  [XS]: {
    display: "none",
  }
});


export {
  JobPostVisibilityWrapper,

  JobHeader,
  
  PostedBy,

  JobPostTime,
  
  UsernameWrapper,

  JobTitle,
  
  JobFeaturesContainer,
  JobFeatureWrapper,
  // JobFeature,
  JobDescription,

  HowToApplyContainer,
  HowToApply,
  // JobLink,

  JobPostSkillContainer,
  JobPostSkill,

  CompanyWebsite,

  JobShareWrapper,
  ShareTextWrapper,

};