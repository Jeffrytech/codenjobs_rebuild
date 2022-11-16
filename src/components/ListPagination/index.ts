import { styled } from "baseui";
import { XS } from "../../design/breakpoints";
import { blue, white } from "../../design/colors";
import { hover } from "../../design/common";

const ProfileFileListPaginationButtonsContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: "0.5rem",

  borderTop: "2px solid rgb(247, 248, 250)",

});

const ProfileFileListPaginationPrevButton = styled("button", {
  background: "rgb(17, 160, 245)",
  color: white,
  padding: "0.5rem 2rem",
  // border: "2px solid #efefef",
  border: `1px solid ${blue}`,
  borderRadius: "0.5rem",

  marginRight: "0.25rem",

  ":hover": hover,
});

const ProfileFileListPaginationCurrentButton = styled("button", {
  background: "white",
  color: "black",
  padding: "0.5rem 2rem",
  border: "2px solid #efefef",
  borderRadius: "0.5rem",

  marginRight: "0.25rem",
  ":hover": hover,

  // [XS]: {
  //     // outline: '2px solid red',
  //     width: '2rem',
  //     textalign: 'center',
  //     display: 'flex',
  //     alignItems: 'center',
  //     justifyContent: 'center',
  // }

});


const ProfileFileListPaginationNextButton = styled("button", {
  background: "rgb(17, 160, 245)",
  color: white,
  padding: "0.5rem 2rem",
  border: `1px solid ${blue}`,
  borderRadius: "0.5rem",

  ":hover": hover,
});

export {
  ProfileFileListPaginationButtonsContainer,
  ProfileFileListPaginationPrevButton,
  ProfileFileListPaginationCurrentButton,
  ProfileFileListPaginationNextButton,
};