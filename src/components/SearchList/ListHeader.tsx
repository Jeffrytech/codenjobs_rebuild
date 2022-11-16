import { styled } from "baseui";
import { DESKTOP, MOBILE } from "../../design/breakpoints";
import { white } from "../../design/colors";

const ListHeader = styled("div", ({ $isFollow }) => {
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    fontSize: "1rem",
    fontWeight: "bold",
    lineHeight: "1.25rem",
    letterSpacing: "0.7px",

    fontFamily: "Roboto, Helvetica, sans-serif",

    // padding: "1rem 2rem",
    // padding: $isFollow ? "1rem 0 1rem 1.5rem" : "1rem 1rem 1rem 2.5rem",
    padding: $isFollow ? "1rem 0 1rem 1.25rem" : "1rem 0.5rem 1rem 1.75rem",
    // padding: $isFollow ? "1rem 0 1rem 1.25rem" : "1rem 0.5rem 1rem 2rem",
    // padding: $isFollow ? "1rem 0 1rem 1.5rem" : "1rem 0 1rem 2.5rem",
    // padding: "1rem",
    textAlign: "left",

    backgroundColor: white,

    border: "1px solid #efefef",
    // borderRadius: "0.5rem 0.5rem 0 0",
    // borderRadius: "0.5rem",

    // marginBottom: "1rem",

    // [MOBILE]: {
    [DESKTOP]: {
      // padding: "16px 20px 16px 20px",
      // padding: $isFollow ? "1rem 0 1rem 1.5rem" : "1rem 0 1rem 1.5rem",
      padding: $isFollow ? "1rem 0 1rem 1.25rem" : "1rem 0 1rem 1.25rem",
      // padding: "1rem 0 1rem 1.5rem",
      textAlign: "center"
    },
    // [XS]: {
    //   padding: "1rem",
    // }
  };
});

export default ListHeader;