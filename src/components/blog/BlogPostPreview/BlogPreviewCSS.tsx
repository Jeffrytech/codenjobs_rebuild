import { styled } from "baseui";
import { MOBILE, XS } from "../../../design/breakpoints";
import { boxShadow } from "../../../design/common";

// import { fullWidthPercent } from "../../design";
// import { XS, MOBILE } from "../../breakpoints";

// 1. Container to give a background color
// 2. Primary (panel)
// 3. Secondary (panel)

const BlogPreviewContainer = styled("div", {
  color: "#374252",
  boxShadow: "0 2px 4px 0 rgba(0,0,0,.1)", // Extract it to previewBoxShadow
  flexShrink: 0,
  borderRadius: "8px",
  backgroundColor: "white",

  border: "1px solid #efefef",

  minHeight: 0,

  width: "100%",

  wordBreak: "break-word",

  marginTop: "1.5rem",
});

const BlogHeader = styled("div", {
  padding: "2rem 2.5rem",
  position: "relative",

  [MOBILE]: {
    // padding: "1rem 2rem"
    padding: "1.5rem"
  }
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

// const BlogFeaturesContainer = styled("div", {
//   ...flex.flex,
//   ...flex.row,
//   ...fullWidthPercent,

//   flexWrap: "wrap",
  
//   marginTop: "0.25rem",

//   // [XS]: {
//   //   marginTop: "0.25rem",
//   // }
// });

// const BlogFeatureWrapper = styled("div", {
//   display: "flex",
//   alignItems: "center",
//   marginTop: "0.5rem",
//   marginRight: "0.5rem",
//   marginBottom: "0.25rem",
  

//   // color: "black",

//   // transition: "all 0.2s",
//   // cursor: "pointer",
//   // ":hover": {
//   //   opacity: 0.7,
//   //   color: "rgb(17, 160, 245)",
//   // }
// });

const BlogPreviewBody = styled("div", {
  padding: "2rem 2.5rem",
  borderTop: "1px solid #efefef",

  [MOBILE]: {
    // padding: "1rem 2rem"
    padding: "1.5rem"
  },
});


// const HowToApplyContainer = styled("div", {
//   padding: "2rem 2.5rem",
//   borderTop: "1px solid #eee",

//   borderBottom: "1px solid #eee",

//   [MOBILE]: {
//     // padding: "1rem 2rem"
//     padding: "1.5rem"
//   }
// });

// const HowToApply = styled("a", {
//   fontSize: "25px",
//   fontWeight: "bold",
//   margin: "0 0 0.5rem 0",

//   color: "rgb(17, 160, 245)",
//   textDecoration: "none",
//   transition: "all 0.2s",
//   display: "block",
  
//   ":hover": {
//     opacity: 0.8
//   },

//   [XS]: {
//     fontSize: "1.25rem",
//   },
//   // marginBottom: "8px",
// });

// const BlogLink = styled("a", {
//     marginTop: "8px",
//     color: "rgb(17, 160, 245)",
//     textDecoration: "none",
// });

//
const BlogPostTagContainer = styled("div", {
  display: "flex",
  flexFlow: "row",
  // ...fullWidthPercent,

  padding: "2rem 2.5rem",
  borderTop: "1px solid #efefef",

  [MOBILE]: {
    // padding: "1rem 2rem"
    padding: "1.5rem"
  },
});

// const CompanyWebsite = styled("a", {
//   color: "black",
//   textDecoration: "none",

//   ":hover": {
//     textDecoration: "underline",
//   }
// });

const BlogPostTag = styled("li", {
  marginRight: "0.5rem",
  marginBottom: "0.5rem",
});

// Refer to this to update.
// https://baseweb.design/blog/responsive-web
// https://www.styletron.org/concepts#media-queries-and-pseudo-classes

export {
  // Extract these?
  BlogPreviewContainer,

  BlogHeader,
  PostedBy,
  
  BlogPostTime,

  BlogTitle,

  // BlogFeaturesContainer,
  // BlogFeatureWrapper,
  
  // BlogFeaturesContainer,
  // BlogFeature,
  BlogPreviewBody,

  // HowToApplyContainer,
  // HowToApply,
  // BlogLink,

  BlogPostTagContainer,
  BlogPostTag,

  // CompanyWebsite,
  UsernameWrapper,
};