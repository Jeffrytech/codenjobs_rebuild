import { styled } from "baseui";
import { MOBILE, XS } from "../../../design/breakpoints";
import { fullWidthPercent } from "../../../design/width";

// 1. Container to give a background color
// 2. Primary (panel)
// 3. Secondary (panel)

const BlogHeader = styled("div", {
  padding: "2rem 2.5rem",
  position: "relative",

  [MOBILE]: {
    padding: "1.5rem"
  }
});

const BlogPostVisibilityWrapper = styled("div", {
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

const BlogPostTime = styled("span", {
  [XS]: {
    marginTop: "0.25rem",
  }
});

const BlogTitle = styled("h1", {
  fontSize: "2rem",
  fontWeight: 800,
  lineHeight: "2.5rem",

  margin: "0.5rem 0 0.25rem 0",

  // [XS]: {
  //   fontSize: "1.25rem",
  //   lineHeight: "inherit",
  // },
});

// const BlogFeaturesContainer = styled("div", {
//   ...flex.flex,
//   ...flex.row,
//   ...fullWidthPercent,
//   marginTop: "0.5rem",

//   [XS]: {
//     marginTop: "0.25rem",
//   }
// });

// const BlogFeature = styled("div", {
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

const BlogFeaturesContainer = styled("div", {
  display: "flex",
  flexFlow: "row",

  ...fullWidthPercent,

  flexWrap: "wrap",

  marginTop: "0.25rem",

  // [XS]: {
  //   marginTop: "0.25rem",
  // }
});

const BlogFeatureWrapper = styled("div", {
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
// const BlogDescription = styled("div", {
//   padding: "2rem",
//   // padding: "2rem 2.5rem",
//   borderTop: "1px solid #eee",

//   [MOBILE]: {
//     // padding: "1.5rem"
//     // padding: "1rem 2rem"
//     padding: "1rem",
//   }
// });
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

// const BlogLink = styled("a", {
//     marginTop: "8px",
//     color: "rgb(17, 160, 245)",
//     textDecoration: "none",
// });

//
const BlogPostSkillContainer = styled("div", {
  display: "flex",
  flexFlow: "row",
  // ...fullWidthPercent,

  padding: "2rem 2.5rem",
  // borderTop: "1px solid #eee"
  [MOBILE]: {
    padding: "1.5rem"
  }
});

const BlogPostSkill = styled("li", {
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

const BlogViewBodyWrapper = styled("div", {
  // padding: "2rem 2.5rem",
  padding: "0 2rem 1.5rem 2rem",
  // margin: 0,
  // borderTop: "1px solid #efefef",

  wordBreak: "break-word",

  [MOBILE]: {
    // padding: "1rem 2rem"
    padding: "0 1.5rem 1.5rem 1.5rem"
  },
});


export {
  BlogPostVisibilityWrapper,

  BlogHeader,
  
  PostedBy,

  BlogPostTime,
  
  UsernameWrapper,

  BlogTitle,
  
  BlogFeaturesContainer,
  BlogFeatureWrapper,
  // BlogFeature,
  // BlogDescription,

  HowToApplyContainer,
  HowToApply,
  // BlogLink,

  BlogPostSkillContainer,
  BlogPostSkill,

  CompanyWebsite,

  BlogViewBodyWrapper,
};