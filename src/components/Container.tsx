import { styled } from "baseui";
import { DESKTOP } from "../design/breakpoints";

const Container = styled("section", {
  // padding: "4rem 2rem",
  padding: "2rem 2rem 0 2rem",
  // padding: "2rem 1.5rem",
  backgroundColor: "#f7f8fa",

  [DESKTOP]: {
    padding: 0,
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

export default Container;