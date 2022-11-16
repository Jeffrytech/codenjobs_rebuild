import { styled } from "baseui";

// import { flex } from "../../../design/flex";

import { 
  // MOBILE, 
  XS 
} from "../../../design/breakpoints";
import { desktopWidth } from "../../../design/width";
// import BackgroundColor from "../BackgroundColor";
// import BackgroundColor from "../BackgroundColor";

const FooterNav = styled("nav", {
  display: "flex",
  maxWidth: desktopWidth,
  margin: "0 auto",
  // padding: "2rem",
  padding: "1rem",
  justifyContent: "space-between",

  [XS]: {
    // flexFlow: "column",
    // padding: "1rem",

    flexFlow: "row wrap",
    // flexWrap: "wrap",
  }
}); 

const FooterLinkListContainer = styled("div", {
  display: "flex",
  flexFlow: "column",

  margin: "0.5rem",
});

const FooterLinkListSection = styled("ul", {
  listStyle: "none",
  padding: 0,
  margin: 0,
});

const FooterLinkListLabel = styled("h4", {
  margin: 0,
  color: "rgb(37, 191, 161)",
  fontSize: "1.25rem",
});

const FooterList = styled("li", {
  display: "flex",
  alignItems: "center",
  // justifyContent: "center"

  margin: "1rem 0",
  color: "white",
  textDecoration: "none",

  transition: "all 0.2s",
  ":hover": {
    cursor: "pointer",
    opacity: "0.7",
  }
});

const Copyright = styled("section", ({ $theme }) => ({
  display: "flex",
  // ...flex.col,
  // ...flex.centerXY,
  // paddingTop: "36px",

  margin: "auto",
  maxWidth: desktopWidth,
  padding: "0rem 1rem",
  // padding: "0rem 1.25rem",

  // padding: "64px 16px 128px",
  // color: "rgb(55, 66, 82)",
  fontSize: "1rem",
  lineHeight: "60px",
  alignItems: "center",
  flexWrap: "wrap",
  justifyContent: "space-between"
}));

const Contact = styled("a", {
  display: "flex",

  textDecoration: "none",
  color: "rgb(55, 66, 82)",
  // color: "white",
  // color: "rgb(17, 160, 245)",
  marginLeft: "0.5rem",
  // marginRight: "0.5rem",
  ":hover": {
    cursor: "pointer",
    opacity: "0.7"
  },
  // Temporary solution, should update footer similar to weworkremotely
  // [XS]: {
  //   display: "none",
  // }
});

export {
  FooterNav,
  FooterLinkListContainer,
  FooterLinkListLabel,
  FooterLinkListSection,
  FooterList,

  Copyright,
  Contact,
};

// const Twitter = styled("a", {
//   display: "flex",

//   textDecoration: "none",
//   // color: "rgb(55, 66, 82)",
//   // color: "rgb(17, 160, 245)",
//   color: "white",
//   backgroundColor: "rgb(17, 160, 245)",
//   padding: "0.25rem",

//   marginLeft: "1rem",
//   borderRadius: "0.5rem",
//   // borderRadius: "50%",

//   ":hover": {
//     cursor: "pointer",
//     opacity: "0.7"
//   }
// });

// const LinkedIn = styled("a", {
//   display: "flex",

//   textDecoration: "none",
//   // color: "rgb(55, 66, 82)",
//   // color: "rgb(17, 160, 245)",
//   color: "white",
//   backgroundColor: "rgb(17, 160, 245)",
//   padding: "0.25rem",

//   marginLeft: "1rem",
//   borderRadius: "0.5rem",
//   // borderRadius: "50%",

//   ":hover": {
//     cursor: "pointer",
//     opacity: "0.7"
//   }
// });

// const LinkedIn = styled("a", {
//   display: "flex",

//   textDecoration: "none",
//   color: "rgb(55, 66, 82)",
//   // color: "rgb(17, 160, 245)",
//   marginLeft: "1rem",
//   ":hover": {
//     cursor: "pointer",
//     opacity: "0.7"
//   }
// });

// const itemProps = {
//   backgroundColor: 'mono300',
//   height: 'scale1000',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   width: "100%",
// };
