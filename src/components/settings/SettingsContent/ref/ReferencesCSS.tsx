import { styled, withStyle } from "baseui";
import { black } from "../../../../design/colors";
// import { MOBILE, XS } from "../../../design/breakpoints";

const ReferenceLinkContainer = styled("div", {
  display: "flex",
  alignItems: "center",

  ":hover": {
    cursor: "pointer",
    transition: "all 0.2s",
    opacity: 0.7,
  }
});

const UserRefrenceListContainer = styled("section", {
  display: "flex",
  flexFlow: "column",
  marginBottom: "1rem",
  // marginRight: "0.25rem",
  // border: `2px solid ${black}`,
  outline: `2px solid #efefef`,
  borderRadius: "0.5rem",
  padding: "0.5rem 1rem 0.5rem 0.5rem",
});

const UserReferenceListHeader = styled("h2", {
  margin: "0",
  padding: "1.5rem 0.8rem",
  fontSize: "1.25rem",
  // fontWeight: "normal",
});


export {
  ReferenceLinkContainer,
  UserRefrenceListContainer,
  UserReferenceListHeader,
};