import { styled } from "baseui";
import { MOBILE, XS } from "../../../design/breakpoints";

// import { flex } from "../../flex";
// import { fullWidthPercent } from "../../design";
import { card } from "../../../design/common";

// 1. Container to give a background color
// 2. Primary (panel)
// 3. Secondary (panel)

const JobPreviewContainer = styled("div", {
  color: "#374252",
  boxShadow: "0 2px 4px 0 rgba(0,0,0,.1)",
  flexShrink: 0,
  borderRadius: "0.5rem",
  backgroundColor: "white",

  border: "1px solid #efefef",

  minHeight: 0,

  width: "100%",

  wordBreak: "break-word",
});

const JobHeader = styled("div", {
  padding: "2rem 2.5rem",
  position: "relative",

  [MOBILE]: {
    // padding: "1rem 2rem"
    padding: "1.5rem"
  }
});

const JobTitle = styled("h1", {
  fontSize: "2rem",
  fontWeight: 800,
  lineHeight: "2.5rem",

  margin: "0.5rem 0 0.25rem 0",

  // [XS]: {
  //   fontSize: "1.25rem",
  //   lineHeight: "inherit",
  // },
});

const JobDescription = styled("div", {
  padding: "2rem 2.5rem",
  borderTop: "1px solid #eee",

  [MOBILE]: {
    // padding: "1rem 2rem"
    padding: "1.5rem"
  }
});

// const JobLink = styled("a", {
//     marginTop: "8px",
//     color: "rgb(17, 160, 245)",
//     textDecoration: "none",
// });

// Refer to this to update.
// https://baseweb.design/blog/responsive-web
// https://www.styletron.org/concepts#media-queries-and-pseudo-classes

export {
  JobPreviewContainer,

  JobHeader,
  JobTitle,
  JobDescription,
};