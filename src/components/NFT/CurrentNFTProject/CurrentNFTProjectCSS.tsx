import { styled } from "baseui";
import { DESKTOP, MOBILE, XS, XXS } from "../../../design/breakpoints";
import { shadowBlue, white } from "../../../design/colors";
import { boxShadow, hover } from "../../../design/common";

const CurrentNFTProjectDetails = styled("div", {
  // ...card,

  boxShadow,
  color: shadowBlue,

  flexShrink: 0,
  borderRadius: "0.5rem",
  marginBottom: "2rem",
  backgroundColor: "white",


  // padding: "1rem",

  // marginTop: "3.75rem",
  // marginTop: "2rem",
  // marginTop: "2rem",
  width: "64rem",
  // margin: "0 auto"

  display: "flex",
  flexFlow: "column",
  // flexWrap: "wrap",

  margin: "2rem 1rem 2rem 1rem",
  // margin: "2rem 1rem 2rem 1rem",

  // border: "2px solid #efefef",
  outline: "1px solid #efefef",


  // ":hover": {
  //     // ...hover,
  //     opacity: 0.8,
  //     transition: "all 0.2s",
  //     cursor: "pointer",
  //     color: black,
  // },

  // [DESKTOP]: {
  //   width: "auto",
  // },

  [DESKTOP]: {
    width: "48rem",
  },

  [MOBILE]: {
    width: "28rem",
  },

  [XS]: {
    width: "21rem",
  },

  [XXS]: {
    width: "18rem",
  },
});

const CurrentNftProjectCoverLink = styled("a", {
  ":hover": hover,
  textDecoration: "none",
});

const CurrentNFTProjectCover = styled("img", () => {
  return {
    // margin: "1rem",

    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",

    // background: `url(${$cover})`,
    // backgroundPosition: "center center",
    // backgroundRepeat: "no-repeat",
    // backgroundSize: "cover",

    // https://blog.logrocket.com/how-create-responsive-image-gallery-css-flexbox/
    objectFit: "fill",

    borderRadius: "0.5rem 0.5rem 0 0",

    width: "100%",
    height: "12rem",
  };
});

const CurrentNFTProjectName = styled("h1", {
  display: "flex",
  alignItems: "center",

  marginTop: "0.5rem",
  marginBottom: "0",
  // marginBottom: "0.5rem",
  marginLeft: "0.5rem",
  wordBreak: "break-all"
});

const CurrentNFTProjectLogo = styled("img", {
  width: "2rem",
  height: "2rem",
  marginRight: "0.5rem",
  borderRadius: "50%",
});

const CurrentNFTProjectDescription = styled("p", {
  opacity: 0.8,

  marginLeft: "0.75rem",
  marginRight: "0.75rem",
  // marginTop: "0.5rem",
  marginBottom: "0.5rem",
  wordBreak: "break-all"
});

const CurrentNFTProjectStart = styled("span", {
  color: white,
  width: "100%",
  textAlign: "center",
  background: "rgba(0,0,0,0.75)",

  // borderRadius: "0 0 0.5rem 0.5rem",
  borderRadius: "0",
  padding: "0.5rem 0",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  marginTop: "-2.25rem",

  fontSize: "1.1rem",
});

const CurrentNFTProjectStartText = styled("span", {
  marginLeft: "0.25rem",
  
  [XS]: {
    display: "none",
  }
});

export {
  CurrentNFTProjectDetails,

  CurrentNftProjectCoverLink,
  CurrentNFTProjectCover,
  CurrentNFTProjectStart,
  CurrentNFTProjectStartText,

  CurrentNFTProjectLogo,

  CurrentNFTProjectName,
  CurrentNFTProjectDescription,
};