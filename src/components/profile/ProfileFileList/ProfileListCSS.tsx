import { styled } from "baseui";
import { DESKTOP, MOBILE, XS } from "../../../design/breakpoints";
import { white } from "../../../design/colors";
import { boxShadow } from "../../../design/common";
import { desktopWidth } from "../../../design/width";

const ProfileListContainer = styled("div", {
  width: "44rem",
  minHeight: 0,

  // borderTop: "1px solid #efefef",

  marginBottom: "2rem",
  // marginBottom: "0",

  // background: white,

  // [MOBILE]: {
  [DESKTOP]: {
    width: "100%",
    // marginBottom: "0",
  },

  [XS]: {
    marginBottom: "1rem",
  }
});

const ProfileListWrapper = styled("div", {
  margin: "auto",
  maxWidth: desktopWidth,
});

const ProfileListSection = styled("section", {
  // boxShadow,
  // marginTop: "-64px",
  // borderRadius: "0.5rem",
  // backgroundColor: "white",
  width: "100%"
});

const ProfileListCardContainer = styled("div", ({ 
  // $first, 
  $last 
}) => {
  let borderRadius;
  if ($last) {
    borderRadius = "0 0 0.5rem 0.5rem";
  } else {
    borderRadius =0;
  }

  return {
    color: "#374252",
    border: "1px solid #eee",
    display: "block",
    // padding: "32px 40px 32px 40px",
    // padding: "2rem 2.5rem",
    padding: "2rem",
    position: "relative",
    // transition: "all 0.2s",
    textDecoration: "none",
    backgroundColor: "white",

    borderRadius,

    // borderRadius: "0.5rem",

    // marginBottom: "2rem",

    // cursor: "pointer",
    // ":hover": {
    //     opacity: "0.8",
    // }
    // [XS]: {
    [XS]: {
      padding: "1.25rem",
      // marginBottom: "1rem",
      // padding: "1.5rem",
    }
  };
});

// Include JobHeader later?

const CompanyName = styled("a", {
  color: "black",
  opacity: "0.7",
  // textDecoration: "none",

  transition: "all 0.2s",
  cursor: "pointer",
  ":hover": {
    textDecoration: "underline",
  }
});

const Title = styled("div", ({ $inherit }) => {
  return {
    fontSize: "1.5rem",
    fontWeight: 700,
    lineHeight: "25px",

    marginTop: "0.5rem",

    transition: "all 0.2s",
    cursor: $inherit ? "inherit" : "pointer",

    ":hover": {
      opacity: $inherit ? "inherit" : "0.8",
      color: $inherit ? "inherit" : "rgb(17, 160, 245)"
    },

    [XS]: {
      fontSize: "1.2rem",
    }
  };

  // [XS]: {
  //   fontSize: "1.25rem",
  // }
});


// Tag for blog and skill for job are the same just use duplciate
const ProfileListSkillContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",

  marginTop: "0.25rem",
  // marginBottom: "0.5rem",
});

const ProfileListSkill = styled("div", {
  marginTop: "0.25rem",
  marginRight: "0.25rem",
  // marginRight: "0.5rem",
  // marginBottom: "0.5rem",

  transition: "all 0.2s",
  cursor: "pointer",
  ":hover": {
    opacity: "0.7",
  }
});

const ProfileListTagContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",

  marginTop: "0.25rem",
  // marginBottom: "0.5rem",
});

const ProfileListTag = styled("div", {
  marginTop: "0.25rem",
  marginRight: "0.25rem",
  // marginRight: "0.5rem",
  // marginBottom: "0.5rem",

  transition: "all 0.2s",
  cursor: "pointer",
  ":hover": {
    opacity: "0.7",
  }
});



export {
  ProfileListContainer,
  ProfileListWrapper,
  ProfileListSection,

  ProfileListCardContainer,

  CompanyName,
  Title,

  ProfileListSkillContainer,
  ProfileListSkill,

  ProfileListTagContainer,
  ProfileListTag,
};