import { styled } from "baseui";
import { DESKTOP, MOBILE } from "../../../design/breakpoints";
import { white } from "../../../design/colors";

const BlockchainListSection = styled("section", {
  // height: "3.75rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  // backgroundColor: white,

  // borderTop: "1px solid #efefef",

  [DESKTOP]: {
    justifyContent: "space-between",
    // justifyContent: "center",
  },
});

const BlockchainListLogo = styled("img", {
  margin: "0 1.5rem",
});

export { BlockchainListSection, BlockchainListLogo };
