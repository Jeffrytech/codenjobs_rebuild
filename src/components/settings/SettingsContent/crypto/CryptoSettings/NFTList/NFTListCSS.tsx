import { styled } from "baseui";
import { MOBILE, XS } from "../../../../../../design/breakpoints";
import { solana } from "../../../../../../design/colors";

const NFTListContainer = styled("section", {
  // display: "flex",
  // flexFlow: "row wrap",
  // gap: "1rem",
  // justifyContent: "space-around",

  display: "flex",
  flexWrap: "wrap",
  justifyContent: "flex-start",
  gap: "1rem",

  paddingBottom: "1rem",
  // marginLeft: "0.5rem",
  marginLeft: "1rem",

  ":after": {
    content: "",
    flexBasis: "19rem",
  },

  [MOBILE]: {
    flexBasis: "100%",
    ":after": {
      content: "",
      flexBasis: "100%",
    },
  }
});

const NFTListHeader = styled("h2", {
  margin: "0",
  padding: "1.5rem 0.8rem",
  fontSize: "1.25rem",
  // fontWeight: "normal",

  // [MOBILE]: {
  //   marginTop: "4rem",
  // }
});

// const NFTLabel = styled("label", {
const NFT = styled("div", {
  // display: "block",

  // flexBasis: "20rem",
  flexBasis: "19rem",

  // minWidth: "8rem",
  // minHeight: "8rem",

  borderRadius: "0.5rem",
  border: "1px solid #efefef",
  padding: "0.5rem 0.5rem 0 0.5rem",
  position: "relative",
  
  [MOBILE]: {
    flexBasis: "100%",
    marginRight: "1rem",
  }
});

const NFTImage = styled("img", {
  display: "flex",

  width: "100%",
  maxHeight: "16rem",
  heigth: "16rem",

  marginBottom: 0,
  paddingBottom: 0,

  cursor: "pointer",
  transition: "all 0.2s",
  ":hover": {
    opacity: 0.7,
  },

  [XS]: {
    heigth: "8rem",
    maxHeight: "8rem",
  }
});

const NFTDetails = styled("div", {
  display: "flex",
  flexFlow: "column",
  padding: "1rem 0.5rem",
});

const NFTName = styled("span", {
  fontWeight: "bold",
  marginBottom: "0.25rem",
});

const NFTProject = styled("span", {
  opacity: "0.5",
  fontSize: "0.85rem",
  marginBottom: "0.25rem",
});

const NFTLink = styled("div", {
  display: "flex",
  alignItems: "center",
  color: solana,

  cursor: "pointer",
  transition: "all 0.2s",
  ":hover": {
    opacity: 0.7,
  },
});



// const MainNFTPreviewEditButton = styled("div", {
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",

//   position: "absolute",
//   top: "13.8rem",
//   right: "1rem",

//   padding: "0.5rem",

//   background: "white",
//   color: "rgb(17, 160, 245)",
//   border: "1px solid rgb(17, 160, 245)",

//   borderRadius: "50%",

//   [MOBILE]: {
//     top: "5.8rem",
//   }
// });

export {
  NFTListContainer,
  NFTListHeader,
  
  NFT,
  NFTImage,
  NFTDetails,
  NFTName,
  NFTProject,
  NFTLink,
  // MainNFTPreviewEditButton,
};