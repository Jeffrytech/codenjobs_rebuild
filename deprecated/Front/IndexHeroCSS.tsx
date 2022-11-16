// import { styled } from "baseui";
// import { MOBILE, XS } from "../../design/breakpoints";
// import { white, shadowBlue, green } from "../../design/colors";
// import { buttonPad, mobileButtonPad } from "../../design/common";
// import { desktopWidth } from "../../design/width";

// // const principal = "/static/job-list-demo.png";

// const IndexHeroContainer = styled("div", {
//   // backgroundImage: `url(${principal})`,
//   color: white,
//   // padding: "88px 32px 144px 32px",
//   padding: "5rem 2rem 5rem 2rem",
  
//   backgroundColor: shadowBlue,

//   background: "url('/static/homepage_cover.jpg')",
//   // background: "url('/static/cover.png')",
//   backgroundSize: "cover",
//   backgroundRepeat: "no-repeat",
//   backgroundPosition: "center",

//   [MOBILE]: {
//     transition: "background-image 0.2s"
//   }
// });

// const IndexHeroContentWrapper = styled("div", {
//   maxWidth: desktopWidth,
//   margin: "auto"
// });

// const IndexHeroWebsite = styled("div", {
//   fontWeight: "bold",
//   paddingBottom: "1.5rem",
//   fontSize: "1.5rem",

//   [XS]: {
//     fontSize: "1.5rem",
//   }
// });

// const IndexHeroTitle = styled("h1", {
//   marginTop: 0,
//   marginBottom: "4rem",
//   fontWeight: "normal",
//   // fontSize: "2.75rem",
//   fontSize: "4rem",

//   [MOBILE]: {
//     fontSize: "2.75rem",
//   },

//   [XS]: {
//     fontSize: "2rem",
//     marginBottom: "2rem",
//   }
// });

// const IndexHeroButtonWrapper = styled("div", {
//   display: "flex",

//   [XS]: {
//     alignItems: "center",
//     justifyContent: "center",
//   }
// });

// // Call to action
// const GetStartedButton = styled("div", {
//   backgroundColor: green,
//   // backgroundColor: "rgb(37, 191, 161)",

//   transition: "all 0.2s",
//   fontWeight: "bold",
//   borderRadius: "8px",

//   marginRight: "1.5rem",
//   padding: buttonPad,
//   fontSize: "1rem",
  
//   [MOBILE]: {
//     marginRight: "1rem",
//     padding: mobileButtonPad,
//     // fontSize: "15px"
//   },

//   cursor: "pointer",
//   ":hover": {
//     opacity: "0.7"
//   },

//   [XS]: {
//     width: "100%",
//     textAlign: "center",

//     padding: "0.75rem 0.75rem",
//     // padding: "0.75rem 0.5rem",
//     fontSize: "1.25rem",
//   }
// });

// const FindJobButton = styled("a", {
//   backgroundColor: "rgb(247, 248, 250)",
//   color: shadowBlue,

//   transition: "all 0.2s",
//   fontWeight: "bold",
//   borderRadius: "8px",

//   marginRight: "1.5rem",
//   padding: buttonPad,
//   fontSize: "1rem",

//   [MOBILE]: {
//     marginRight: "1rem",
//     padding: mobileButtonPad,
//     // fontSize: "15px"
//   },

//   cursor: "pointer",
//   ":hover": {
//     opacity: "0.7"
//   },

//   [XS]: {
//     display: "none",
//     // padding: "0.75rem 0.75rem",
//     // // padding: "0.75rem 0.5rem",
//     // fontSize: "12px",
//   }
// });

// export {
//   IndexHeroContainer,
//   IndexHeroContentWrapper,
//   IndexHeroWebsite,
//   IndexHeroTitle,
//   IndexHeroButtonWrapper,
  
//   GetStartedButton,
//   FindJobButton
// };