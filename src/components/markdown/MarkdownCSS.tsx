import { styled } from "baseui";
import { XS } from "../../design/breakpoints";

const MarkdownLabelWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
});

// const EditPreviewSwitch = styled("div", ({ $useMarkdown }) => {
//     return {
//         display: "flex",
//         marginLeft: "auto",
//         marginRight: "1rem",

//         backgroundColor: $useMarkdown ? "inherit" : "rgb(17, 160, 245)",
//         // color: "white",
//         color: $useMarkdown ? "rgb(17, 160, 245)" : "white",

//         transition: "all 0.2s",
//         cursor: "pointer",

//         ":hover": {
//             opacity: 0.7,
//         }
//     }
// });

// Blog 
const EditPreviewSwitch = styled("div", ({ $useMarkdown }) => {
  return {
    display: "flex",
    marginLeft: "auto",
    marginRight: "1rem",

    // backgroundColor: $useMarkdown ? "inherit" : "rgb(17, 160, 245)",
    // color: "white",
    // color: $useMarkdown ? "rgb(17, 160, 245)" : "white",
    color:"rgb(17, 160, 245)",

    transition: "all 0.2s",
    cursor: "pointer",

    ":hover": {
      opacity: 0.7,
    }
  };
});

// Job
const MarkdownSwitch = styled("div", ({ $useMarkdown }) => {
  return {
    display: "flex",
    marginLeft: "auto",
    marginRight: "1rem",

    backgroundColor: $useMarkdown ? "inherit" : "rgb(17, 160, 245)",
    // color: "white",
    color: $useMarkdown ? "rgb(17, 160, 245)" : "white",
    // color: "rgb(17, 160, 245)",

    transition: "all 0.2s",
    cursor: "pointer",

    ":hover": {
      opacity: 0.7,
    }
  };
});

const MarkdownFormWrapper = styled("div", ({ $useMarkdown }) => {
  return {
    // marginTop: "0.5rem",
    marginRight: $useMarkdown ? "2rem" : "1rem",
  };
});

// const MarkdownForm = styled("textarea", {
//     // padding: "0 1rem",
//     // padding: "0.5rem",
//     padding: "1rem",
//     // padding: "0.75rem",
//     border: "1px solid #efefef",
//     // marginTop: "0.5rem",
//     marginTop: "1rem",
//     minHeight: "10rem",

//     marginRight: "1rem",
//     width: "100%",

//     borderRadius: "0.5rem",
//     // fontWeight: "normal",
//     opacity: "0.8",

//     // Use CSS file instead with editorClassName?
//     fontSize: "1.25rem", // 1rem at mobile?
//     // fontSize: "1.1rem", // 1rem at mobile?

//     fontFamily: "Roboto, Helvetica, sans-serif",
//     resize: "both",

//     [XS]: {
//         fontSize: "1rem",
//     }
// });

const MarkdownForm = styled("textarea", {
  // padding: "0 1rem",
  padding: "0.5rem",
  // padding: "1rem 0.5rem",
  // padding: "0.75rem",
  border: "1px solid #efefef",
  // marginTop: "0.5rem",
  marginTop: "1rem",
  minHeight: "10rem",
  width: "100% !important",
  borderRadius: "0.5rem",
  // fontWeight: "normal",
  opacity: "0.8",

  // Use CSS file instead with editorClassName?
  fontSize: "1.25rem", // 1rem at mobile?
  // fontSize: "1.1rem", // 1rem at mobile?

  fontFamily: "Roboto, Helvetica, sans-serif",
  resize: "both",

  [XS]: {
    fontSize: "1rem",
  }
});

const MarkdownPreviewWrapper = styled("div", {
  // padding: "2rem 2.5rem",
  padding: "0 1rem 0 1rem",
  // padding: "0 0.5rem 0 0.5rem",
  // padding: "2rem",
  borderRadius: "0.5rem",
  // margin: 0,
  // borderTop: "1px solid #efefef",

  minHeight: "17.5rem",
  // width: "100%",

  marginTop: "1rem",
    
  border: "1px solid rgb(239, 239, 239)",

  wordBreak: "break-word",

  // [MOBILE]: {
  //     // padding: "1rem 2rem"
  //     // padding: "1.5rem"
  //     padding: "1rem"
  // },
});


export {
  MarkdownLabelWrapper,
  MarkdownSwitch,

  EditPreviewSwitch,

  MarkdownFormWrapper,
  MarkdownForm,

  MarkdownPreviewWrapper,
};