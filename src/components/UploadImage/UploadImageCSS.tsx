import { styled } from "baseui";
import { hover } from "../../design/common";
// import { XS } from "../breakpoints";

// const UploadImageContainer = styled("div", {
const UploadImageContainer = styled("form", {
  marginTop: "1rem",
  background: "#efefef",
  padding: "0.5rem",
  marginRight: "1rem",
  borderRadius: "0.1rem",

  display: "flex",

  top: "3.75rem",
  position: "sticky",
  zIndex: 2,
});

const UploadImageLabel = styled("label", {
  display: "flex",
  alignItems: "center",

  paddingLeft: "0.25rem",

  minWidth: "5rem",
  marginRight: "auto",

  // marginRight: "auto",

  transition: "all 0.2s",
  ":hover": {
    cursor: "pointer",
    opacity: "0.7",
    // backgroundColor: "white",
  }
});

const UploadImageInput = styled("input", {
  marginLeft: "0.5rem",
  width: "100%",
  padding: "0.25rem",

  // borderRadius: "0.1rem",
});

const ToClipboard = styled("div", {
  display: "flex",
  alignItems: "center",
  marginLeft: "0.5rem",
  // marginRight: "auto",

  transition: "all 0.2s",
  ":hover": {
    cursor: "pointer",
    opacity: "0.7",
    // backgroundColor: "white",
  }
});

const PreviewTheImage = styled("div", {
  marginLeft: "0.25rem",
  display: "flex",
  alignItems: "center",
  height: "100%",

  transition: "all 0.2s",
  ":hover": {
    cursor: "pointer",
    opacity: "0.7",
    // backgroundColor: "white",
  }
});

const FileListButton = styled("span", {
  display: "flex",
  alignItems: "center",
    
  ":hover": hover, 
});

export {
  UploadImageContainer,
  UploadImageLabel,
  UploadImageInput,

  ToClipboard,
  PreviewTheImage,

  FileListButton,
};

//   <div style={{
//     marginTop: "1rem",
//     background: "#efefef",
//     padding: "0.5rem",
//     marginRight: "1rem",
//     borderRadius: "0.1rem",

//     top: "60px",
//     position: "sticky",
//     zIndex: 1,
//   }}>
//     <label style={{
//       display: "flex",
//       alignItems: "center",
//       cursor: "pointer",
//     }}
//       htmlFor="upload-image"
//     >
//       {/* <AiTwotoneFileImage /> */}
//       {/* <BsCardImage /> */}
//       <RiImageFill />
//       <span style={{
//         marginLeft: "0.25rem",
//       }} >
//         Upload image
//       </span>
//     </label>

//     <input 
//       id="upload-image"
//       name="upload-image"

//       type="text"

//       style={{
//         marginLeft: "0.5rem",
//         // flex: "8",
//         width: "100%",
//         padding: "0.25rem 0",
//       }}
//     />
//   </div>