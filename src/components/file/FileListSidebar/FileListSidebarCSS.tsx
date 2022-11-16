import { styled } from "baseui";
import { animated } from "react-spring";
import { shadowBlue } from "../../../design/colors";

import { boxShadow, hover } from "../../../design/common";

const FileListSidebarContainer = styled(
  animated.nav,
  (
    {
      // $showFileList
    }
  ) => {
    return {
      top: "3.75rem",
      // right: 0,
      bottom: 0,

      position: "fixed",
      background: "white",
      zIndex: 5,
      // width: "25rem",
      width: "27rem",
      maxWidth: "100%",

      bordeLeft: "1px solid rgba(0, 0, 0, 0.2)",

      boxShadow,

      overflowY: "scroll",
      // visibility: "visible",
      opacity: "1",
      display: "flex",
      flexFlow: "column",

      color: "#374252",
    };
  }
);

const FileListSidebarHeader = styled(
  "div",
  (
    {
      // $showFileList
    }
  ) => {
    return {
      // outline: "1px solid blue",
      display: "flex",
      alignItems: "center",
      padding: "1rem 1rem",
    };
  }
);

const FileListSidebarResponses = styled("h2", {
  fontSize: "1.25rem",
  fontWeight: "normal",
  margin: 0,

  ":hover": hover,
});

const FileListSidebarClose = styled("div", {
  display: "flex",
  marginLeft: "auto",
  marginRight: "0.5rem",

  ":hover": hover,
});

const FileListInputContainer = styled("div", {
  display: 'flex',
  alignItems: 'center',
});

const FileListTitleSearchInput = styled("input", {
  width: "100%",
  margin: "0 1rem",
  padding: "0.5rem",
  border: `2px solid #efefef`,
  borderRadius: "0.5rem",
  fontSize: "1rem",
});

const FileListSidebarViewTitle = styled("div", {
  cursor: 'pointer',
  fontWeight: 'bold',
  height: '2rem',
  display: 'flex',
  alignItems: 'center',
});

const FileListContainer = styled("ul", {
  margin: "1rem",
  padding: 0,
  listStyle: "none",
});

const FileList = styled("li", ({ $isLastFile }) => {

  return {
    padding: "0.5rem 0.5rem 0.5rem 0.5rem",

    boxShadow,
    color: shadowBlue,

    flexShrink: 0,
    borderRadius: "0.5rem",
    marginBottom: ($isLastFile) ? "0" : "1rem",
    backgroundColor: "white",

    display: "flex",
    alignItems: "center",
    border: `1px solid #efefef`,

    ":hover": hover,
  };
});

const NoFileList = styled("li", {

  padding: "0.5rem 0.5rem 0.5rem 0.25rem",

  boxShadow,
  color: shadowBlue,

  flexShrink: 0,
  borderRadius: "0.5rem",
  backgroundColor: "white",

  display: "flex",
  alignItems: "center",
  border: `1px solid #efefef`,

});

const FileListImage = styled("img", {
  width: "2.5rem",
  height: "2.5rem",

  marginRight: "0.5rem",
  borderRadius: "50%",

});

const FileListTitle = styled("span", {
  wordBreak: "break-all",
});

export {
  FileListSidebarContainer,
  FileListSidebarHeader,
  FileListSidebarResponses,
  FileListSidebarClose,
  FileListInputContainer,
  FileListTitleSearchInput,
  FileListSidebarViewTitle,

  FileListContainer,
  FileList,
  FileListImage,
  FileListTitle,
  NoFileList,
};