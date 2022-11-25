// import { makeStyles } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import { styled } from "baseui";
import { DESKTOP, MOBILE, XS } from "../../../design/breakpoints";
import { blue, shadowBlue, white } from "../../../design/colors";
import { boxShadow, hover } from "../../../design/common";
import { desktopWidth } from "../../../design/width";

const BlogListContainer = styled("div", {
  display: "flex",
  // display: "none",
  flexFlow: "column-reverse",

  [MOBILE]: {
    flexFlow: "column-reverse",
  },
});

const BlogListSection = styled("section", {
  // display: "flex",
});

// const BlogListCoverWrapper = styled("div", {
const BlogListCoverWrapper = styled("a", {
  // display: "flex",
  marginLeft: "auto",

  cursor: "pointer",
  transition: "all 0.2s",

  width: "100%",

  ":hover": {
    opacity: 0.8,
  },

  [MOBILE]: {
    marginLeft: "0",
    marginBottom: "0.5rem",
  },
});

const BlogListCover = styled("img", {
  // height: "4rem",
  // width: "12rem",

  width: "100%",
  height: "10rem",

  borderRadius: "0.25rem",

  [MOBILE]: {
    width: "100%",
    maxHeight: "5rem",
    // marginBottom: "0.25rem",
    // marginBottom: "0.5rem",
  },
});

// Extrac this?
const BlogListHeader = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  fontWeight: 400,
  lineHeight: "1.5rem",

  width: "100%",

  // For category part
  marginBottom: "0.25rem",

  [XS]: {
    flexFlow: "column-reverse",
    alignItems: "flex-start",
  },
});

// Rename later
const BlogListUsernamerWrapper = styled("div", {
  display: "flex",
  width: "100%",
  opacity: 0.8,

  [XS]: {
    flexFlow: "column",
  },
});

const BlogCategory = styled("span", ({ $isCategorySelected }) => {
  if ($isCategorySelected) {
    return {
      fontSize: "0.75rem",
      padding: "0.25rem",

      color: blue,
      background: white,
      border: `1px solid ${blue}`,
      borderRadius: "0.5rem",

      transition: "all 0.2s",
      cursor: "pointer",
      ":hover": {
        opacity: "0.7",
      },
    };
  } else {
    return {
      fontSize: "0.75rem",
      padding: "0.25rem",
      background: "#efefef",
      borderRadius: "0.5rem",

      transition: "all 0.2s",
      cursor: "pointer",
      ":hover": {
        opacity: "0.7",
      },
    };
  }
});

const BlogListTitle = styled("div", {
  fontSize: "1.5rem",
  fontWeight: 700,
  lineHeight: "1.5rem",
  // lineHeight: "25px",
  wordBreak: "break-all",

  marginTop: "0.75rem",
  // marginTop: "0.5rem",
  // marginTop: "0.5rem",
  // marginBottom: "0.5rem",
  marginBottom: "0.75rem",

  paddingRight: "0.5rem",

  transition: "all 0.2s",
  cursor: "pointer",
  ":hover": {
    opacity: "0.8",
    color: "rgb(17, 160, 245)",
  },

  [XS]: {
    // marginTop: "0.25rem",
    // marginTop: "0.5rem",
    fontSize: "1.2rem",
  },
});

const TotalMoneyVoteContainer = styled("div", {
  display: "flex",
  // marginTop: "1rem",
  // marginBottom: "1rem",
  // marginTop: "0.5rem",
  // marginBottom: "0.5rem",
  marginTop: "0.75rem",
  marginBottom: "0.75rem",

  // [DESKTOP]: {
  //   marginTop: "0.75rem",
  //   marginBottom: "0.75rem",
  //   // marginTop: "1rem",
  //   // marginBottom: "1rem",
  // }
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

// List

const BlogNoSearchListHeader = styled("div", () => {
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
    // borderRadius: "0.5rem 0.5rem 0 0",
    // borderRadius: "0.5rem",

    // marginBottom: "1rem",

    // [DESKTOP]: {
    //   margin: "0 1rem 1rem 1rem",
    // }

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

const BlogSearchListCardContainer = styled("div", ({ $first, $last }) => {
  // let borderRadius;
  // if ($first && $last) {
  //   borderRadius = "0.5rem";
  // } else if ($first) {
  //   borderRadius = "0.5rem 0.5rem 0 0";
  // } else if ($last) {
  //   borderRadius = "0 0 0.5rem 0.5rem";
  // } else {
  //   borderRadius = 0;
  // }

  return {
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
  };
});

const BlogSearchListHeader = styled("div", () => {
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

const BlogSearchListTextInputWrapper = styled("div", {
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

const BlogListInputSearchButtonWrapper = styled("div", {
  // margin: "0.25rem 0.5rem 0 0.75rem",
  margin: "0.25rem 0.25rem 0 0.5rem",
  opacity: 0.5,

  ":hover": {
    cursor: "pointer",
  },
});

const BlogListInputClearButtonWrapper = styled("div", {
  margin: "0.25rem 0.75rem 0 0",
  opacity: 0.5,

  ":hover": {
    cursor: "pointer",
  },
});

const BlogSearchListTextInput = styled("input", {
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

const BlogListSearchButton = styled("button", {
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
  },
});

const BlogSearchListContainer = styled("section", () => {
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

const BlogSearchListContent = styled("div", () => {
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

const BlogSearchListPrimaryWrapper = styled("div", () => {
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

const BlogSearchListSecondaryWrapper = styled("div", {
  // width: "270px",
  // width: "18rem",

  overflow: "hidden",

  // [MOBILE]: {
  //   width: "100%"
  // }
  [DESKTOP]: {
    // width: "100%"
    display: "none",
  },
});

const BlogSearchListSkeletonCotainer = styled("div", {
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

// Pagination

const BlogListPaginationButtonsContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  // padding: "0.5rem",

  borderTop: "2px solid rgb(247, 248, 250)",

  backgroundColor: white,

  paddingLeft: "2rem",
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

const BlogListPaginationPrevButton = styled("button", {
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

const BlogListPaginationNextButton = styled("button", {
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
  BlogListContainer,
  BlogListSection,
  BlogListCoverWrapper,
  BlogListCover,
  // ForHireListHeader,
  // ForHireListCardContainer,
  BlogListHeader,
  BlogListUsernamerWrapper,
  TotalMoneyVoteContainer,
  TotalMoneyVoteWrapper,
  BlogCategory,
  BlogListTitle,

  // ForHireListSkillContainer,
  // ForHireSkill,
  BlogSearchListCardContainer,
  BlogNoSearchListHeader,
  BlogSearchListHeader,
  BlogSearchListTextInputWrapper,
  BlogSearchListTextInput,
  BlogListInputSearchButtonWrapper,
  BlogListInputClearButtonWrapper,

  // useStyles,
  BlogListSearchButton,
  BlogSearchListContainer,
  BlogSearchListContent,
  BlogSearchListPrimaryWrapper,
  BlogSearchListSecondaryWrapper,
  BlogSearchListSkeletonCotainer,
  BlogListPaginationButtonsContainer,
  BlogListPaginationNextButton,
  BlogListPaginationPrevButton,
};
