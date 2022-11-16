import { styled } from "baseui";
import { MOBILE, XS } from "../../../design/breakpoints";
import { white } from "../../../design/colors";
import { hover } from "../../../design/common";

const ListPaginationButtonsContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  // justifyContent: "flex-end",
  // padding: "1rem",
  padding: "0.5rem",

  borderTop: "2px solid rgb(247, 248, 250)",

  // marginBottom: "1rem",

  backgroundColor: white,

  // border: "1px solid #efefef",
  border: "1px solid #efefef",
  borderRadius: "0 0 0.5rem 0.5rem",

  [MOBILE]: {
    // padding: "1rem 2.5rem"
    padding: "1rem",
  }
});

const ListPaginationPrevButton = styled("button", {
  // color: "rgb(17, 160, 245)",
  // background: "rgb(37, 191, 161)",
  background: "rgb(17, 160, 245)",
  color: "white",
  padding: "0.5rem 2rem",
  border: "2px solid #efefef",
  borderRadius: "0.5rem",

  ":hover": hover,
  // ":focus": {
  //   outline: "none",
  // },
  marginRight: "0.5rem",

  // [MOBILE]: {
  //     // padding: "1rem 2.5rem",
  //     // fontSize: "1.25rem",
  //     // marginRight: "1.25rem",
  //     marginRight: "1rem",
  // },
});

const ListPaginationNextButton = styled("button", {
  // color: "rgb(17, 160, 245)",
  // background: "rgb(37, 191, 161)",
  background: "rgb(17, 160, 245)",
  color: "white",
  padding: "0.5rem 2rem",
  border: "2px solid #efefef",
  borderRadius: "0.5rem",

  ":hover": hover,
    
  // [MOBILE]: {
  //     padding: "1rem 2.5rem",
  //     fontSize: "1.25rem",
  // }

  // [XS]: {
  //     marginLeft: "auto",
  // }
});

export {
  ListPaginationButtonsContainer,
  ListPaginationPrevButton,
  ListPaginationNextButton,
};