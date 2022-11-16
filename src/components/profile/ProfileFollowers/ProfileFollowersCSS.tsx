import { styled } from "baseui";
import { DESKTOP, MOBILE, XS } from "../../../design/breakpoints";
import { white } from "../../../design/colors";
import { boxShadow, disabled, hover } from "../../../design/common";

const ProfileFollowersContainer = styled("div", {
  width: "44rem",
  minHeight: 0,

  marginBottom: "2rem",

  [MOBILE]: {
    width: "100%",
    marginBottom: "1rem",
  }
});

const FollowerListWrapper = styled("div", {
  margin: "auto",
  maxWidth: "64rem"
});

const FollowerListSection = styled("section", {
  boxShadow,
  // marginTop: "-64px",
  borderRadius: "0.5rem",
  backgroundColor: "white",
  width: "100%"
});

// const FollowerListHeader = styled("div", {
//   ...flex.flex,
//   alignItems: "center",
//   justifyContent: "space-between",

//   fontSize: "15px",
//   fontWeight: "bold",
//   lineHeight: "21px",
//   letterSpacing: "0.7px",

//   fontFamily: "Roboto, Helvetica, sans- serif",

//   padding: "16px 32px 16px 32px",
//   textAlign: "left",
//   [MOBILE]: {
//     padding: "16px 20px 16px 20px",
//     textAlign: "center"
//   }
// });

const FollowerListCardContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  
  color: "#374252",
  border: "1px solid #eee",
  padding: "1rem",
  position: "relative",
  // transition: "all 0.2s",
  textDecoration: "none",
  backgroundColor: "white",

  [XS]: {
    flexFlow: "column",
    alignItems: "inherit"
  }
});

// const FollowerHeader = styled("div", {
//   ...flex.flex,
//   alignItems: "center",
//   justifyContent: "space-between",

//   fontWeight: 400,
//   lineHeight: "24px",

//   [XS]: {
//     flexFlow: "column",
//     alignItems: "flex-start",
//   },
// });

// const CompanyName = styled("a", {
//   color: "black",
//   opacity: "0.7",
//   // textDecoration: "none",

//   transition: "all 0.2s",
//   cursor: "pointer",
//   ":hover": {
//     textDecoration: "underline",
//   }
// });

const FollowerName = styled("h2", {
  fontSize: "1.25rem",
  fontWeight: 700,

  margin: "0.5rem",

  wordBreak: "break-all",

  transition: "all 0.2s",
  ":hover": {
    cursor: "pointer",
    opacity: 0.7,
    color: "rgb(17, 160, 245)",
  },

  [XS]: {
    textAlign: "center",
  }
});

// const FollowerFeaturesContainer = styled("div", {
//   // marginTop: "8px",

//   ...flex.flex,
//   alignItems: "center",
//   flexWrap: "wrap",

//   padding: "4px 0px 4px 0px",

//   fontSize: "12px",
//   lineHeight: "21px",
//   [MOBILE]: {
//     fontSize: "11px",
//     lineHeight: "18px"
//   }
// });

// const FollowerFeature = styled("a", {
//   ...flex.flex,
//   alignItems: "center",
//   flexWrap: "wrap",

//   fontSize: "15px",
//   lineHeight: "21px",

//   marginLeft: "1px",
//   padding: "1px 0",

//   // "border-radius": "8px",

//   [MOBILE]: {
//     // fontSize: "12.5px",
//     lineHeight: "18px"
//   },
// });

// const FollowerListSkillContainer = styled("div", {
//   display: "flex",
//   alignItems: "center",

//   marginBottom: "0.5rem",
// });

const ProfileImage = styled("a", ({
  // @ts-ignore
  // $isOwner
}) => {
  return {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",

    [XS]: {
      justifyContent: "center",
    }
  };
});

const FollowButtonWrapper = styled("div", {
  marginLeft: "auto",
  // marginTop: "0.5rem",

  [XS]: {
    marginLeft: "inherit",
    display: "flex",
    
    marginTop: "0.5rem",
  }
});

const FollowButton = styled("button", ({
  // @ts-ignore
  $following
}) => {
  // alert($following);

  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    border: "1px solid rgb(17, 160, 245)",
    borderRadius: "0.5rem",
    // color: "white",
    // background: "rgb(17, 160, 245)",
    padding: "0.5rem 0.75rem",
    width: "5rem",

    // Use theme instead?
    color: $following ? "rgb(17, 160, 245)" : "#fff",
    backgroundColor: $following ? "white" : "rgb(17, 160, 245)",
    // border: $following ? "1px solid rgb(17, 160, 245)" : "none",

    ":hover": hover,
    ":disabled": disabled,

    [XS]: {
      width: "100%",
    }
  };
});

const FollowerListState = styled("span", {
  [MOBILE]: {
    display: "none",
  }
});

const ProfileFollowerListHeader = styled("div", () => {
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    fontSize: "1rem",
    fontWeight: "bold",
    lineHeight: "1.25rem",
    letterSpacing: "0.7px",

    fontFamily: "Roboto, Helvetica, sans-serif",

    // padding: "1rem 0 1rem 1.5rem",
    padding: "1rem 0 1rem 1.5rem",
    textAlign: "left",

    backgroundColor: white,

    border: "1px solid #efefef",
    borderRadius: "0.5rem 0.5rem 0 0",

    [DESKTOP]: {
      textAlign: "center"
    },
    [XS]: {
      padding: "1rem 0 1rem 1.25rem",
    }
  };
});


export {
  FollowerListWrapper,
  // FollowerListHeader,
  FollowerListSection,

  FollowerListCardContainer,

  FollowerName,

  ProfileFollowersContainer,
  ProfileImage,

  FollowButton,
  FollowButtonWrapper,

  FollowerListState,

  ProfileFollowerListHeader,
};