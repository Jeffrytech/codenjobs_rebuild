// import { makeStyles } from "@material-ui/core";
import { styled } from "baseui";
import { MOBILE, XS, DESKTOP } from "../../../design/breakpoints";
import { shadowBlue, white } from "../../../design/colors";
import { boxShadow, hover } from "../../../design/common";
import { desktopWidth } from "../../../design/width";

const JobSearchListContainer = styled("section", () => {
  return {
    // padding: $isIndex ? "2rem 2rem 0 2rem" : "1rem 0 1rem 0",
    // padding: "1rem 0 1rem 0",
    padding: "1rem 1rem 0 1rem",
    // padding: "2rem 1.5rem",
    // Extract this?
    backgroundColor: "#f7f8fa",

    // [XS]: {
    //   // padding: "2rem 1.5rem",
    //   padding: "1rem 1rem 1rem 1rem",
    //   // padding: "1rem 1rem 0 1rem",
    // },
    // [XXS]: {
    //   padding: "1rem 0 0 0",
    // }
  };
});

const JobSearchListContent = styled("div", () => {
  return {
    margin: "auto",
    display: "flex",
    flexWrap: "wrap",
    maxWidth: desktopWidth,
    justifyContent: "space-between",

    [MOBILE]: {
      flexFlow: "column",
    },
  };
});

const JobSearchListPrimaryWrapper = styled("div", () => {
  return {
    width: "45rem", // 16 x 44 / 704
    minHeight: "0",

    // marginBottom: "2rem",

    // [MOBILE]: {
    //   width: "100%",
    // }
    [DESKTOP]: {
      width: "100%",
    },

    // [MOBILE]: {
    //   marginBottom: "1rem",
    // }
  };
});

const JobSearchListSecondaryWrapper = styled("div", {
  // width: "270px",
  width: "18rem",
  overflow: "hidden",

  // [MOBILE]: {
  //   width: "100%"
  // }
  [DESKTOP]: {
    // width: "100%"
    display: "none",
  },
});

const JobNoSearchListHeader = styled("div", () => {
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    fontSize: "1rem",
    fontWeight: "bold",
    lineHeight: "1.25rem",
    letterSpacing: "0.7px",

    fontFamily: "Roboto, Helvetica, sans-serif",

    // padding: "1rem",
    padding: "0.75rem",
    textAlign: "left",

    backgroundColor: white,

    border: "1px solid #efefef",
    borderRadius: "0.5rem",

    marginBottom: "1rem",
  };
});

const JobSearchListSkeletonContainer = styled("div", {
  // color: "#374252",
  color: shadowBlue,
  border: "1px solid #eee",
  display: "block",
  // padding: "2rem 2.5rem",
  padding: "2rem",
  position: "relative",
  // transition: "all 0.2s",
  textDecoration: "none",
  backgroundColor: white,

  margin: "0 0 1rem 0",

  borderRadius: "0.5rem",

  // [DESKTOP]: {
  //   margin: "0 1rem 1rem 1rem",
  // }
});

const JobSearchListTextInputWrapper = styled("div", {
  // padding: "2px 4px",
  display: "flex",
  alignItems: "center",
  margin: "0 auto",

  border: "1px solid #efefef",
  // boxShadow: "0px 1px 3px 0px rgba(0,0,0,0.12)",

  borderRadius: "0.5rem",

  width: "100%",

  // width: "18rem",
  // maxWidth: "18rem",
});

const JobListInputSearchButtonWrapper = styled("div", {
  // margin: "0.25rem 0.5rem 0 0.75rem",
  margin: "0.25rem 0.25rem 0 0.5rem",
  opacity: 0.5,

  ":hover": {
    cursor: "pointer",
  },
});

const JobListInputClearButtonWrapper = styled("div", {
  margin: "0.25rem 0.75rem 0 0",
  opacity: 0.5,

  ":hover": {
    cursor: "pointer",
  },
});

const JobSearchListTextInput = styled("input", {
  width: "100%",
  padding: "0.85rem 1rem 0.85rem 0",
  border: "none",
  fontSize: "1rem",

  opacity: 0.7,

  borderRadius: "0.5rem",
  // opacity: 0.6,
  color: "#121212",

  ":focus": {
    outline: "none",
  },
});

// Extract this?
const JobListCardContainer = styled("div", {
  boxShadow,
  color: shadowBlue,

  flexShrink: 0,

  border: "1px solid #eee",
  display: "block",
  padding: "2rem",
  position: "relative",
  // transition: "all 0.2s",
  textDecoration: "none",
  backgroundColor: white,

  // borderRadius: $last ? "0 0 0.5rem 0.5rem" : "0",
  // borderRadius,
  // borderRadius: '0.5rem',
  borderRadius: "0.5rem",
  marginBottom: "1rem",

  [XS]: {
    // padding: "1.5rem",
    padding: "1.25rem",
  },
});

const JobSearchListHeader = styled("div", () => {
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    fontSize: "1rem",
    fontWeight: "bold",
    lineHeight: "1.25rem",
    letterSpacing: "0.7px",

    fontFamily: "Roboto, Helvetica, sans-serif",

    // padding:  "1rem 0.5rem 1rem 1.75rem",
    textAlign: "left",

    backgroundColor: white,

    border: "1px solid #efefef",

    borderRadius: "0.5rem",

    marginBottom: "1rem",
  };
});

// const JobSearchListTextInput = styled("div", {
//   display: "flex",
//   alignItems: "center",
//   margin: "0 auto",

//   border: "1px solid #efefef",
//   // boxShadow: "0px 1px 3px 0px rgba(0,0,0,0.12)",

//   borderRadius: "0.5rem",

//   width: "100%",
// });

// Extract this?
const JobHeader = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  fontWeight: 400,
  lineHeight: "1.5rem",

  [XS]: {
    flexFlow: "column",
    alignItems: "flex-start",
  },
});

// const PostedByWrapper = styled("div", {
//   ...flex.flex,
//   alignItems: "center",
//   justifyContent: "space-between",

//   fontWeight: 400,
//   lineHeight: "24px",

//   [XS]: {
//     flexFlow: "column",
//     alignItems: "flex-start",
//   }
// });

// const CompanyContainer = styled("div", {
//   ...flex.flex,
//   margin: "0.25rem 0 0.25rem 0",

//   // alignItems: "center",
//   // justifyContent: "space-between",

//   // fontWeight: 400,
//   // lineHeight: "24px",

//   // [XS]: {
//   //   flexFlow: "column",
//   //   alignItems: "flex-start",
//   // }
// });

const PostedBy = styled("div", {
  display: "flex",
  width: "100%",
  opacity: 0.8,

  [XS]: {
    flexFlow: "column",
  },
});

const JobPostTime = styled("div", {
  marginLeft: "auto",
  opacity: 0.8,

  [XS]: {
    marginLeft: "inherit",
    // opacity: 0.7,
    fontSize: "15px",
  },
});

const CompanyName = styled("a", {
  display: "flex",

  color: "black",
  opacity: "0.7",
  // textDecoration: "none",
  fontSize: "1rem",

  // marginTop: "0.25rem",
  // marginBottom: "0.25rem",

  transition: "all 0.2s",
  cursor: "pointer",
  ":hover": {
    textDecoration: "underline",
  },
  // [XS]: {
  //   display: "none",
  // }
});

const JobTitle = styled("div", {
  fontSize: "1.5rem",
  fontWeight: 700,
  lineHeight: "25px",

  marginTop: "0.5rem",
  // marginBottom: "0.5rem",

  wordBreak: "break-all",

  transition: "all 0.2s",
  cursor: "pointer",
  ":hover": {
    opacity: "0.8",
    color: "rgb(17, 160, 245)",
  },

  [XS]: {
    fontSize: "1.2rem",
  },
});

const JobFeaturesContainer = styled("div", {
  // marginTop: "8px",

  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",

  // padding: "0px 0px 0.5rem 0px",
  padding: "0",

  fontSize: "1rem",
  // lineHeight: "21px",
  [MOBILE]: {
    // fontSize: "11px",
    // lineHeight: "18px"
    lineHeight: "1.25rem",
  },
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
  },
});

// const JobFeature = styled("a", {
//   ...flex.flex,
//   alignItems: "center",
//   flexWrap: "wrap",

//   fontSize: "1rem",
//   lineHeight: "21px",

//   marginLeft: "1px",
//   padding: "1px 0",

//   // "border-radius": "8px",

//   [MOBILE]: {
//     // fontSize: "12.5px",
//     lineHeight: "18px"
//   },

//   transition: "all 0.2s",
//   cursor: "pointer",
//   ":hover": {
//     opacity: 0.7,
//     color: "rgb(17, 160, 245)"
//   }
// });

// const JobDetail = styled("a", {
//     ...flex.flex,
//     alignItems: "center",
//     flexWrap: "wrap",

//     padding: "4px 0px 4px 0px",
//     fontSize: "15px",
//     lineHeight: "21px",

//     [MOBILE]: {
//         fontSize: "11px",
//         lineHeight: "18",
//     }
// })

const JobListSkillContainer = styled("div", {
  display: "flex",
  alignItems: "center",

  flexWrap: "wrap",

  marginTop: "0.5rem",

  [MOBILE]: {
    marginTop: 0,
  },
});

const JobListSkill = styled("div", {
  marginTop: "0.25rem",
  marginRight: "0.25rem",
  // marginBottom: "0.5rem",

  transition: "all 0.2s",
  cursor: "pointer",
  ":hover": {
    opacity: "0.7",
  },

  [MOBILE]: {
    marginTop: "0.5rem",
    marginRight: "0.5rem",
  },
});

const LocationWrapper = styled("div", {
  display: "flex",
  [XS]: {
    display: "none",
  },
});

const ShowCurrentPage = styled("span", {
  [MOBILE]: {
    display: "none",
  },
});

// Pagination

const JobListPaginationButtonsContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  // padding: "0.5rem",

  borderTop: "2px solid rgb(247, 248, 250)",

  // backgroundColor: white,

  background: "none",
  borderRadius: "0.5rem",
  marginBottom: "1rem",
  border: "none",
  padding: "0.25rem",

  // [MOBILE]: {
  //   // padding: "1rem 2.5rem"
  //   padding: "1rem",
  // }
});

const JobListPaginationPrevButton = styled("button", {
  // color: "rgb(17, 160, 245)",
  // background: "rgb(37, 191, 161)",
  background: "rgb(17, 160, 245)",
  color: "white",
  padding: "0.5rem 2rem",
  border: "2px solid #efefef",
  borderRadius: "0.5rem",

  ":hover": hover,
  // ":focus": {
  //   outline: "none",
  // },
  marginRight: "0.25rem",

  // [MOBILE]: {
  //   padding: "1rem 2.5rem",
  //   fontSize: "1.25rem",
  //   marginRight: "1.25rem",
  // }
});

const JobListPaginationNextButton = styled("button", {
  // color: "rgb(17, 160, 245)",
  // background: "rgb(37, 191, 161)",
  background: "rgb(17, 160, 245)",
  color: "white",
  padding: "0.5rem 2rem",
  border: "2px solid #efefef",
  borderRadius: "0.5rem",

  ":hover": hover,

  // [MOBILE]: {
  //   padding: "1rem 2.5rem",
  //   fontSize: "1.25rem",
  // }
});

export {
  // JobListHeaderContainer, JobListHeaderTitle,

  JobSearchListContainer,
  JobSearchListContent,
  JobSearchListPrimaryWrapper,
  JobSearchListSecondaryWrapper,
  JobSearchListHeader,
  JobSearchListTextInputWrapper,
  JobSearchListTextInput,
  JobListInputSearchButtonWrapper,
  JobListInputClearButtonWrapper,
  JobNoSearchListHeader,
  JobSearchListSkeletonContainer,
  // JobListContainer,
  // JobListWrapper,
  // // JobListHeader,
  // JobListSection,
  JobListCardContainer,

  // PostedByWrapper,
  // CompanyContainer,
  JobHeader,
  PostedBy,
  JobPostTime,
  CompanyName,
  JobTitle,
  JobFeaturesContainer,
  JobFeatureWrapper,
  // JobFeature,
  JobListSkillContainer,
  JobListSkill,
  LocationWrapper,
  ShowCurrentPage,
  JobListPaginationButtonsContainer,
  JobListPaginationPrevButton,
  JobListPaginationNextButton,
};
