import { makeStyles } from "@material-ui/core";
import { styled } from "baseui";
import { DESKTOP, MOBILE, XS } from "../../../design/breakpoints";
import { shadowBlue, white } from "../../../design/colors";
import { boxShadow, hover } from "../../../design/common";
import { desktopWidth } from "../../../design/width";

const ForHireSearchListContainer = styled("section", () => {
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

const ForHireSearchListContent = styled("div", () => {
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

const ForHireSearchListPrimaryWrapper = styled("div", () => {
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

const ForHireSearchListSecondaryWrapper = styled("div", {
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


const ForHireSearchListSkeletonContainer = styled("div", {
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

const ForHireNoSearchListHeader = styled("div", () => {
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


const ForHireSearchListTextInputWrapper = styled("div", {
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

const ForHireListInputSearchButtonWrapper = styled("div", {
  // margin: "0.25rem 0.5rem 0 0.75rem",
  margin: "0.25rem 0.25rem 0 0.5rem",
  opacity: 0.5,

  ":hover": {
    cursor: "pointer",
  }
});

const ForHireListInputClearButtonWrapper = styled("div", {
  margin: "0.25rem 0.75rem 0 0",
  opacity: 0.5,

  ":hover": {
    cursor: "pointer",
  }
});

const ForHireSearchListTextInput = styled("input", {
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
  }
});

const ForHireListSearchButton = styled("button", {
  display: "flex",
  alignItems: "center",

  marginLeft: "1rem",

  background: "rgb(17, 160, 245)",
  border: "none",
  padding: "0.5rem",
  color: "white",
  borderRadius: "0.5rem",

  transition: "all 0.2s",
  cursor: "pointer",

  ":hover": {
    opacity: "0.7",
  },

  [XS]: {
    display: "none",
  }
});

const ForHireListCardContainer = styled("div", {
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

const ForHireSearchListHeader = styled("div", () => {
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

    // [MOBILE]: {
    // [DESKTOP]: {
    //   padding: "1rem 0 1rem 1.25rem",
    //   textAlign: "center"
    // },
    // [XS]: {
    //   padding: "1rem",
    // }
  };
});

const ForHireHeader = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  fontWeight: 400,
  lineHeight: "24px",

  width: "100%",

  [XS]: {
    flexFlow: "column-reverse",
    alignItems: "flex-start",
  }
});

// Rename later
const ForHireUsernamerWrapper = styled("div", {
  display: "flex",
  width: "100%",
  opacity: 0.8,

  // [XS]: {
  //   flexFlow: "column",
  // }
});

const JoinedTime = styled("div", {
  marginLeft: "auto",
  opacity: 0.8,
  
  fontSize: "1rem",

  [XS]: {
    display: "none",
    // marginLeft: "inherit",
    // opacity: 0.7,
    // fontSize: "15px",
    // display: "none",
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
  // display: "none",
  // wordBreak: "break-all",
  /* font-size: 1rem; */
  /* word-spacing: normal; */
  // fontSize: "0.85rem",
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

const ForHireFeaturesContainer = styled("div", {
  display: "flex",
  flexFlow: "row wrap !imporant",

  marginTop: "0.25rem",
  marginBottom: "0.25rem",

  // [XS]: {
  //   marginTop: "0.25rem",
  // }
});


const ForHireFeatureWrapper = styled("div", {
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

const ForHireFeatureLink = styled("a", {
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

const ForHireListTitle = styled("div", {
  // [MOBILE]: {
  //   marginLeft: "0.5rem",
  // }
});

const ShowCurrentPage = styled("span", {
  [MOBILE]: {
    display: "none",
  }
});

const TotalMoneyVoteContainer = styled("div", {
  display: "flex",
  marginTop: "0.5rem",
});

const TotalMoneyVoteWrapper = styled("span", () => {
  // alert($moneyVote);

  return {
    display: "flex",
    alignItems: "center",

    marginRight: "0.5rem",

    transition: "all 0.2s",
    // cursor: "pointer",
    // ":hover": {
    //   opacity: 0.8,
    // }
  };
});


const ForHireListPaginationButtonsContainer = styled("div", {
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

const ForHireListPaginationPrevButton = styled("button", {
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

const ForHireListPaginationNextButton = styled("button", {
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

const useStyles = makeStyles((theme) => ({
  // root: {
  //   padding: "2px 4px",
  //   display: "flex",
  //   alignItems: "center",
  //   margin: "0 auto",

  //   border: "1px solid #efefef",
  //   boxShadow,

  //   width: "100%",
  // },
  input: {
    // marginLeft: theme.spacing(1),
    flex: 1,

    width: "100%",
    marginRight: "0.5rem",

    // margin: "0 1rem 0 0",
    // padding: "0.5rem",
  },
  searchButton: {
    padding: 10,

    "&:hover": {
      //you want this to be the same as the backgroundColor above
      backgroundColor: "transparent",
      ...hover,
    }
  },

  setButton: {
    padding: 10,

    "&:hover": {
      //you want this to be the same as the backgroundColor above
      backgroundColor: "transparent",
      ...hover,
    }
  },

  clearButton: {
    padding: 10,

    "&:hover": {
      //you want this to be the same as the backgroundColor above
      backgroundColor: "transparent",
      ...hover,
    }
  },
  // divider: {
  //   height: 28,
  //   margin: 4,
  // },
}));


export {
  ForHireSearchListContainer,

  ForHireNoSearchListHeader,

  ForHireSearchListHeader,
  ForHireSearchListTextInputWrapper,
  ForHireSearchListTextInput,
  ForHireListInputSearchButtonWrapper,
  ForHireListInputClearButtonWrapper,

  ForHireSearchListContent,
  ForHireSearchListPrimaryWrapper,
  ForHireSearchListSecondaryWrapper,
  // ForHireListHeader,
  // ForHireListCardContainer,

  ForHireSearchListSkeletonContainer,
  ForHireListCardContainer,

  ForHireHeader,
  ForHireUsernamerWrapper,
  JoinedTime,
  
  ProfileName,
  ProfileBio,
  
  ForHireFeaturesContainer,
  ForHireFeatureWrapper,
  
  ForHireFeatureLink,

  ForHireListTitle,

  ShowCurrentPage,

  TotalMoneyVoteContainer,
  TotalMoneyVoteWrapper,

  // ForHireListSkillContainer,
  // ForHireSkill,

  ForHireListPaginationButtonsContainer,
  ForHireListPaginationPrevButton,
  ForHireListPaginationNextButton,

  useStyles,
};