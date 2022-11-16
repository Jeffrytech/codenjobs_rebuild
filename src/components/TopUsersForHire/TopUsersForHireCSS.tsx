import { styled } from "baseui";
import { XS } from "../../design/breakpoints";
import { shadowBlue } from "../../design/colors";
import { boxShadow } from "../../design/common";

// import { MOBILE } from "../../breakpoints";

// 1. Container to give a background color
// 2. Primary (panel)
// 3. Secondary (panel)

// const card = {
//   color: "#374252",
//   boxShadow: "0 2px 4px 0 rgba(0,0,0,.1)",
//   flexShrink: 0,
//   borderRadius: "0.5rem",
//   marginBottom: "2rem",
//   backgroundColor: "white"
// };

const TopUsersForHireCard = styled("div", ({ $list }) => {
  return {
    boxShadow,
    color: shadowBlue,

    flexShrink: 0,
    borderRadius: "0.5rem",
    // marginBottom: $list === undefined ? "2rem" : "1rem",
    marginBottom: "2rem",
    backgroundColor: "white",

    [XS]: {
      marginBottom: "1rem",
      // marginBottom: $list === undefined ? "0" : "1rem",
    }
  };
  // ...card,

  // padding: "1rem"
});

const TopUsersForHireTitle = styled("h5", {
  fontSize: "1.25rem",
  margin: 0,
  padding: "1rem",
  textAlign: "center",

  borderBottom: "1px solid #efefef",

  marginBottom: "1.5rem",

  transition: "all 0.2s",
  ":hover": {
    color: "rgb(17, 160, 245)",
    opacity: 0.7,
  }
});

const TopUsersForHireContainer = styled("ul", {
  listStyle: "none",
  margin: 0,
  padding: "0 1rem 0.5rem 1rem",
});

const TopUsersForHireList = styled("li", {
  display: "flex",
  alignItems: "center",

  marginBottom: "1rem",
  transition: "all 0.2s",
  ":hover": {
    cursor: "pointer",
    opacity: "0.7",
  }
});

export {
  TopUsersForHireCard,
  TopUsersForHireContainer,
  TopUsersForHireTitle,
  TopUsersForHireList,
};