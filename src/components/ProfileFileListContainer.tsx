import { styled } from "baseui";
import { XS } from "../design/breakpoints";

const ProfileFileListContainer = styled("section", {
  // padding: "4rem 2rem",
  // padding: "2rem 2rem 0 2rem",
  padding: "1rem 2rem 0 2rem",
  // padding: "2rem 1.5rem",
  backgroundColor: "#f7f8fa",

  

  [XS]: {
    padding: "1rem 1rem 0 1rem"
  }

  // [XS]: {
  //   // padding: "2rem 1.5rem",
  //   // padding: "0",
  //   // padding: "1rem 1rem 0 1rem",
  //   padding: "1rem",
  // },
  // [XXS]: {
  //   padding: "0",
  // }
});

export default ProfileFileListContainer;