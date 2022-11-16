import { styled } from "baseui";
import { MOBILE, XS } from "../../../design/breakpoints";

// import { MOBILE, XS } from "../../breakpoints";
// import { flex } from "../../flex";

// const JobPostTime = styled("div", {
//   marginLeft: "auto",
//   opacity: 0.8,

//   [XS]: {
//     marginLeft: "inherit",
//     // opacity: 0.7,
//     fontSize: "15px",
//   }
// });

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
    color: "rgb(17, 160, 245)"
  },
  
  [XS]: {
    fontSize: "1.2rem",
  }
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
    lineHeight: "18px"
  }
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
});

const JobListSkill = styled("div", {
  marginTop: "0.25rem",
  marginRight: "0.25rem",
  // marginBottom: "0.5rem",

  transition: "all 0.2s",
  cursor: "pointer",
  ":hover": {
    opacity: "0.7",
  }
});

const LocationWrapper = styled("div", {
  display: "flex",
  [XS]: {
    display: "none",
  },
});

export {
  // JobListHeaderContainer, JobListHeaderTitle,
  
  // JobListContainer,
  // JobListWrapper,
  // // JobListHeader,
  // JobListSection,

  // JobListCardContainer,

  // PostedByWrapper,
  // CompanyContainer,

  // JobHeader,
  // PostedBy,
  // JobPostTime,

  CompanyName,
  JobTitle,
  
  JobFeaturesContainer,
  JobFeatureWrapper,
  // JobFeature,

  JobListSkillContainer,
  JobListSkill,

  LocationWrapper,
};