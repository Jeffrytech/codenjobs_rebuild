import { styled } from "baseui";
import { MOBILE, XS } from "../../../../../design/breakpoints";

const MainNFTPreviewLabel = styled("label", {
  display: "block",

  borderRadius: "0.5rem",
  border: "1px solid #efefef",
  // width: "7rem",
  padding: "0.5rem",
  margin: "1rem 2rem 1.5rem 1rem",
  // margin: "1.5rem 0",
  cursor: "pointer",
  position: "relative",

  height: "16rem",

  [MOBILE]: {
    height: "8rem",
    marginRight: "2rem",
  }
});

// settings/
const MainNFTPreviewImage = styled("img", {
  width: "100%",
  maxHeight: "16rem",
  // height: "100%",
  // backgroundColor: "black",
  // marginBottom: 0,
  // marginBottom: "2rem",
  paddingBottom: 0,
  display: "flex",

  ":hover": {
    cursor: "pointer",
    opacity: 0.7,
    transition: "all 0.2s",
  },

  [XS]: {
    // maxHeight: "8rem",
    maxHeight: "8rem",
  }
});

const MainNFTPreviewEditButton = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  position: "absolute",
  top: "13.8rem",
  right: "1rem",

  padding: "0.5rem",

  background: "white",
  color: "rgb(17, 160, 245)",
  border: "1px solid rgb(17, 160, 245)",

  borderRadius: "50%",

  [MOBILE]: {
    top: "6rem",
    // top: "10rem",
  }
});

export {
  MainNFTPreviewLabel,

  MainNFTPreviewImage,
  MainNFTPreviewEditButton,
};