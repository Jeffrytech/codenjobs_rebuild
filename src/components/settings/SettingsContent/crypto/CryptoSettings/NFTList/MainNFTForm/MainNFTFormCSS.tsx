import { styled } from "baseui";
import { MOBILE } from "../../../../../../../design/breakpoints";

const MainNFTPreviewLabel = styled("label", {
  display: "block",

  borderRadius: "0.5rem",
  border: "1px solid #efefef",
  // width: "7rem",
  padding: "0.5rem",
  margin: "1rem 2rem 1.5rem 1rem",
  // margin: "1rem 2rem 1.5rem 1rem",
  // margin: "1.5rem 0",
  cursor: "pointer",
  position: "relative",

  [MOBILE]: {
    flexBasis: "100%",
    marginRight: "1rem",
  }
});

const MainNFTPreviewImage = styled("img", {
  width: "100%",
  maxHeight: "16rem",
  height: "16rem",
  // height: "100%",
  // backgroundColor: "black",
  marginBottom: 0,
  paddingBottom: 0,
  display: "flex",

  [MOBILE]: {
    maxHeight: "8rem",
    height: "8rem",
  }
});

export {
  MainNFTPreviewLabel,

  MainNFTPreviewImage,
};