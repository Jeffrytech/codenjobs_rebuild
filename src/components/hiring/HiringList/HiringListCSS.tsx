import { styled } from "baseui";
import { XS, MOBILE, DESKTOP } from "../../../design/breakpoints";
import { shadowBlue, white } from "../../../design/colors";
import { boxShadow, hover } from "../../../design/common";
import { desktopWidth } from "../../../design/width";

const HiringSearchListContainer = styled("section", () => {
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

const HiringSearchListContent = styled("div", () => {
  return {
    margin: "auto",
    display: "flex",
    flexWrap: "wrap",
    maxWidth: desktopWidth,
    justifyContent: "space-between",

    [MOBILE]: {
      flexFlow: "column",
    }
  };
});

const HiringSearchListPrimaryWrapper = styled("div", () => {
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

const HiringSearchListSecondaryWrapper = styled("div", {
  // width: "270px",
  width: "18rem",
  overflow: "hidden",

  // [MOBILE]: {
  //   width: "100%"
  // }
  [DESKTOP]: {
    // width: "100%"
    display: "none",
  }
});


const HiringSearchListSkeletonContainer = styled("div", {
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

  [DESKTOP]: {
    margin: "0 1rem 1rem 1rem",
  }
});

const HiringNoSearchListHeader = styled("div", () => {
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    fontSize: "1rem",
    fontWeight: "bold",
    lineHeight: "1.25rem",
    letterSpacing: "0.7px",

    fontFamily: "Roboto, Helvetica, sans-serif",

    padding: "1rem",
    textAlign: "left",

    backgroundColor: white,

    border: "1px solid #efefef",
    borderRadius: "0.5rem",

    marginBottom: "1rem",
    // borderRadius: "0.5rem 0.5rem 0 0",
    // borderRadius: "0.5rem",

    // marginBottom: "1rem",

    [DESKTOP]: {
      margin: "0 1rem 1rem 1rem",
    }

    // [MOBILE]: {
    // [DESKTOP]: {
    //   // padding: "16px 20px 16px 20px",
    //   // padding: $isFollow ? "1rem 0 1rem 1.5rem" : "1rem 0 1rem 1.5rem",
    //   padding: $isFollow ? "1rem 0 1rem 1.25rem" : "1rem 0 1rem 1.25rem",
    //   // padding: "1rem 0 1rem 1.5rem",
    //   textAlign: "center"
    // },
    // [XS]: {
    //   padding: "1rem",
    // }
  };
});

const HiringListCardContainer = styled("div", {
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
  borderRadius: '0.5rem',
  marginBottom: "1rem",

  [XS]: {
    // padding: "1.5rem",
    padding: "1.25rem",
  }
});

const HiringHeader = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  fontWeight: 400,
  lineHeight: "1.5rem",

  width: "100%",

  [XS]: {
    flexFlow: "column-reverse",
    alignItems: "flex-start",
  }
});

// Rename later
const HiringTopWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  width: "100%",
  opacity: 0.8,

  [XS]: {
    flexFlow: "column",
  }
});

const HiringTopUsername = styled("div", {
  [XS]: {
    display: "none",
  }
});

const JoinedTime = styled("div", {
  marginLeft: "auto",
  opacity: 0.8,

  [XS]: {
    display: "none",
    // marginLeft: "inherit",
    // opacity: 0.7,
    // fontSize: "15px",
  }
});

const ProfileName = styled("div", {
  fontSize: "1.5rem",
  fontWeight: 700,
  lineHeight: "25px",

  wordBreak: "break-all",

  marginTop: "0.25rem",
  marginBottom: "0.25rem",

  transition: "all 0.2s",
  cursor: "pointer",
  ":hover": {
    opacity: "0.8",
    color: "rgb(17, 160, 245)"
  }
});

const ProfileBio = styled("p", {
  display: "flex",
  alignItems: "center",

  // margin: "0.5rem 0 0.25rem 0",
  margin: "0.25rem 0 0.25rem 0",
  padding: 0,
  opacity: 0.8,
  lineHeight: "1.25rem",

  wordBreak: "break-all",

  // [XS]: {
  //   display: "none",
  // },
});

// const ForHireListSkillContainer = styled("div", {
//   display: "flex",
//   alignItems: "center",

//   flexWrap: "wrap",

//   // Temporarily
//   [XS]: {
//     display: "none",
//   }

//   // marginTop: "8px",
// });

// const ForHireSkill = styled("div", {
//   marginTop: "0.25rem",
//   marginRight: "0.25rem",

//   transition: "all 0.2s",

//   ":hover": {
//     opacity: "0.7",
//   }
// });

const HiringFeaturesContainer = styled("div", {
  display: "flex",
  flexFlow: "row",
  flexWrap: "wrap !important",

  marginTop: "0.25rem",
  marginBottom: "0.25rem",

  [MOBILE]: {
    display: "none",
  }
});


const HiringFeatureWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  marginTop: "0.5rem",
  marginRight: "0.25rem",
  marginBottom: "0.25rem",

  color: "black",

  transition: "all 0.2s",
  cursor: "pointer",
  ":hover": {
    opacity: 0.7,
    color: "rgb(17, 160, 245)",
  }
});

const HiringFeatureLink = styled("a", {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",

  marginTop: "0.5rem",
  marginBottom: "0.25rem",

  color: "black",

  textDecoration: "none",
  transition: "all 0.2s",
  cursor: "pointer",
  ":hover": {
    opacity: 0.7,
    color: "rgb(17, 160, 245)",
  }
});

const HiringListTitle = styled("div", {
  // marginLeft: "0.1rem",

  [MOBILE]: {
    // marginLeft: "0.5rem",
  }
});

const HiringListPaginationButtonsContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  // padding: "0.5rem",

  borderTop: "2px solid rgb(247, 248, 250)",

  backgroundColor: white,

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

const HiringListPaginationPrevButton = styled("button", {
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

const HiringListPaginationNextButton = styled("button", {
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
  HiringSearchListContainer,

  HiringNoSearchListHeader,

  HiringSearchListContent,
  HiringSearchListPrimaryWrapper,
  HiringSearchListSecondaryWrapper,
  // ForHireListHeader,
  // ForHireListCardContainer,
  
  HiringSearchListSkeletonContainer,
  
  HiringListCardContainer,

  HiringListTitle,
  
  HiringHeader,
  HiringTopWrapper,
  HiringTopUsername,
  JoinedTime,
  
  ProfileName,
  ProfileBio,
  
  HiringFeaturesContainer,
  HiringFeatureWrapper,
  
  HiringFeatureLink,

  // ForHireListSkillContainer,
  // ForHireSkill,

  HiringListPaginationButtonsContainer,
  HiringListPaginationPrevButton,
  HiringListPaginationNextButton,
};