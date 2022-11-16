import { styled } from "baseui";
import { XS, XXS, MOBILE, DESKTOP } from "../../design/breakpoints";
import { shadowBlue, white } from "../../design/colors";
import { boxShadow } from "../../design/common";
import { desktopWidth } from "../../design/width";

// import { MOBILE, XS, XXS } from "../breakpoints";
// import { card } from "../design";
// import { flex } from "../../flex";

const SearchListContainer = styled("section", ({ $isIndex }) => {
  return {
    // padding: $isIndex ? "2rem 2rem 0 2rem" : "1rem 0 1rem 0",
    padding: $isIndex ? "2rem 2rem 0 2rem" : "1rem 0 1rem 0",
    // padding: "2rem 1.5rem",
    // Extract this?
    backgroundColor: "#f7f8fa",

    [XS]: {
      // padding: "2rem 1.5rem",
      padding: $isIndex ? "1rem 1rem 0 1rem" : "1rem 1rem 1rem 1rem",
      // padding: "1rem 1rem 0 1rem",
    },
    [XXS]: {
      padding: "1rem 0 0 0",
    }
  };
});

// List with sidebar

const SearchListContent = styled("div", ({ $list }) => {
  return {
    margin: "auto",
    display: "flex",
    flexWrap: "wrap",
    maxWidth: desktopWidth,
    justifyContent: "space-between",

    [MOBILE]: {
      flexFlow: $list === undefined ? "column-reverse" : "column",
    }
  };
});

const SearchListPrimaryWrapper = styled("div", ({ $list }) => {
  return {
    // ...card,

    // width: "700px",
    width: $list === undefined ? "44rem" : "45rem", // 16 x 44 / 704
    // width: "768px",
    minHeight: "0",
    // maxHeight: "0",
    // height: "10rem",

    marginBottom: "2rem",

    // [MOBILE]: {
    //   width: "100%",
    // }
    [DESKTOP]: {
      width: "100%",
    },

    [MOBILE]: {
      marginBottom: "1rem",
    }
  };
});

const IndexPrimaryWrapper = styled("div", ({ $list }) => {
  return {
    // ...card,

    // width: "700px",
    width: $list === undefined ? "44rem" : "45rem", // 16 x 44 / 704
    // width: "768px",
    minHeight: "0",

    marginBottom: "2rem",

    // [MOBILE]: {
    //   width: "100%",
    // }
    [DESKTOP]: {
      width: "100%",
    },

    [XS]: {
      // marginTop: "1rem",
      marginBottom: "1rem",
    }
  };
});

const SearchListSecondaryWrapper = styled("div", {
  // width: "270px",
  width: "18rem",
  overflow: "hidden",

  // [MOBILE]: {
  //   width: "100%"
  // }
  [DESKTOP]: {
    width: "100%"
  }
});

// List only

const SearchListWrapper = styled("div", {
  margin: "auto",
  maxWidth: desktopWidth,
  // paddingTop: "2rem",
});

const SearchListSection = styled("section", {
  boxShadow,
  // marginTop: "-64px",
  borderRadius: "0.5rem",
  backgroundColor: "white",
  width: "100%"
});

const SearchListCardContainer = styled("div", ({ $last }) => {
  // alert($last);

  return {
    boxShadow,
    color: shadowBlue,

    flexShrink: 0,

    border: "1px solid #eee",
    display: "block",
    // padding: "2rem 2.5rem",
    padding: "2rem",
    // padding: "32px 40px 32px 40px",
    position: "relative",
    // transition: "all 0.2s",
    textDecoration: "none",
    backgroundColor: white,

    borderRadius: $last ? "0 0 0.5rem 0.5rem" : "0",

    [XS]: {
      // padding: "1.5rem",
      padding: "1.25rem",
    }
  };

});

const IndexJobListCardContainer = styled("div", ({ $first, $last }) => {
  // alert($last);

  let borderRadius;
  // alert($first);

  if ($first === true && $last === true) {
    borderRadius = "0.5rem 0.5rem 0.5rem 0.5rem";
  } else if ($first === true) {
    borderRadius = "0.5rem 0.5rem 0 0";
  } else if ($last === true) {
    borderRadius = "0 0 0.5rem 0.5rem";
  } else {
    borderRadius = "0";
  }

  return {
    boxShadow,
    color: shadowBlue,

    flexShrink: 0,

    border: "0.5px solid #eee",
    display: "block",
    // padding: "2rem 2.5rem",
    padding: "2rem",
    // padding: "32px 40px 32px 40px",
    position: "relative",
    // transition: "all 0.2s",
    textDecoration: "none",
    backgroundColor: white,

    // borderRadius: $last ? "0 0 0.5rem 0.5rem" : "0",
    borderRadius,

    [XS]: {
      // padding: "1.5rem",
      padding: "1.25rem",
    }
  };

});

const SearchListSkeletonCotainer = styled("div", {
  // color: "#374252",
  color: shadowBlue,
  border: "1px solid #eee",
  display: "block",
  padding: "2rem 2.5rem",
  position: "relative",
  // transition: "all 0.2s",
  textDecoration: "none",
  backgroundColor: white,

  // cursor: "pointer",
  // ":hover": {
  //     opacity: "0.8",
  // }
});

export {
  SearchListContainer,
  SearchListContent,

  IndexPrimaryWrapper,

  IndexJobListCardContainer,

  SearchListPrimaryWrapper,
  SearchListSecondaryWrapper,
  
  SearchListWrapper,
  SearchListSection,

  SearchListCardContainer,
  SearchListSkeletonCotainer,
};