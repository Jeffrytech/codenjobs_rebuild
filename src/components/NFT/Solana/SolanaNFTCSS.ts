import { styled } from "baseui";
import { MOBILE, XS, XXS } from "../../../design/breakpoints";
import { black, blue, green, shadowBlue, white } from "../../../design/colors";
import { boxShadow, hover } from "../../../design/common";

const card = {
  boxShadow,
  color: shadowBlue,

  flexShrink: 0,
  borderRadius: "0.5rem",
  backgroundColor: "white",

  // TODO
  // Remove this?
  // [XS]: {
  //     marginBottom: "1rem",
  // }
};

const SolanaNFTContainer = styled("section", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  // justifyContent: "center",

  // @ts-ignore
  // width: "100vw",
  // height: "100vh",

  padding: "3.75rem 2rem 0 2rem",
  // padding: "2rem 2rem 0 2rem",

  // padding: "3.75rem 2rem 0 2rem",

  minHeight: "100vh",

  // backgroundColor: "#efefef",

  // backgroundColor: "rgb(247, 248, 250)",
  // background: "url(/static/tokens.png)", // background: url(/static/background.png);
  // backgroundSize: "contain", // background-size: contain;
  // minHeight: "100vh",

  backgroundColor: white,
  backgroundImage: "url(/static/tokens.png)",
  backgroundSize: "contain",

  [XS]: {
    background: "#efefef",
  }
});

const SolanaNFTDetails = styled("div", {
  ...card,

  // padding: "2rem",

  outline: "1px solid #efefef",

  // marginTop: "3.75rem",
  // marginTop: "2rem",
  // marginTop: "2rem",
  // width: "64rem",
  width: "25rem",
  // margin: "0 auto"

  display: "flex",
  flexFlow: "column",
  // flexWrap: "wrap",

  // margin: "0rem 1rem 2rem 1rem",
  margin: "2rem 1rem 2rem 1rem",

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

// const SolanaNFTExternalLink = styled("a", ({ $cover }) => {
//     return {
//         // margin: "1rem",

//         display: "flex",
//         alignItems: "flex-end",
//         justifyContent: "center",

//         background: `url(${$cover})`,
//         backgroundPosition: "center center",
//         backgroundRepeat: "no-repeat",
//         backgroundSize: "cover",

//         borderRadius: "0.5rem",

//         height: "12rem",

//         ":hover": hover,
//     }
// });

// TODO
// Include Project to the name later?
const SolanaNFTCoverLink = styled("a", {
  textDecoration: "none",
  ":hover": hover,
});

const SolanaNFTCover = styled("img", () => {
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

const SolanaNFTName = styled("h1", {
  display: "flex",
  alignItems: "center",

  margin: "0.5rem 0 0 0.5rem",

  wordBreak: "break-all",
  // }

});

const SolanaNFTStartText = styled("span", {
  marginLeft: "0.25rem",

  [XS]: {
    display: "none",
  }
});

const SolanaNFTLogo = styled("img", {
  width: "2rem",
  height: "2rem",
  marginRight: "0.5rem",
  borderRadius: "50%",
});

const SolanaNFTDescription = styled("p", {
  opacity: 0.8,
  // marginLeft: "0.25rem",
  // marginBottom: 0,

  margin: "1rem 0.75rem 0.5rem 0.75rem"
  
  //   margin- bottom: 0.5rem;
  // }

// .de {
//   margin - right: 0.75rem;
// }
// .dd {
//   margin - left: 0.75rem;
});

const SolanaNFTStart = styled("span", {
  // color: white,
  // width: "100%",
  // textAlign: "center",
  // background: "rgba(0,0,0,0.75)",

  // borderRadius: "0 0 0.5rem 0.5rem",
  // padding: "0.25rem",

  color: white,
  width: "100%",
  textAlign: "center",
  background: "rgba(0,0,0,0.75)",

  // borderRadius: "0 0 0.5rem 0.5rem",
  borderRadius: "0",
  padding: "0.25rem 0",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  marginTop: "-1.75rem",

  fontSize: "1.1rem",
});

const SellCurrentNFTButton = styled("button", {
  width: "100%",
  borderRadius: "0.5rem",

  // backgroundColor: green,
  // color: white,
  backgroundColor: blue,
  color: white,

  fontSize: 16,
  fontWeight: 700,
  // padding: "1.5rem",
  padding: "1rem",
  // padding: "0.5rem 1rem",
  border: "none",

  ":hover": {
    cursor: "pointer",
    opacity: "0.8",
    transition: "all 0.2s",
  },

  ":disabled": {
    cursor: "not-allowed",
    opacity: 1,
    backgroundColor: "#efefef",
    color: black,

    border: "1px solid black",
  }
});

export {
  SolanaNFTContainer,
  SolanaNFTDetails,

  SolanaNFTCoverLink,
  SolanaNFTCover,

  // SolanaNFTExternalLink,
  SolanaNFTStart,
  SolanaNFTStartText,

  SolanaNFTLogo,

  SolanaNFTName,
  SolanaNFTDescription,

  SellCurrentNFTButton,

};