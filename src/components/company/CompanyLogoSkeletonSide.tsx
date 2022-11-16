import { styled } from "baseui";
import { MOBILE } from "../../design/breakpoints";
import { boxShadow } from "../../design/common";

const CompanyLogoSkeletonSide = styled("div", {
  top: "calc(50% - 20px)",
  left: "-20px",
  width: "40px",
  height: "40px",
  position: "absolute",
  boxShadow,
  borderRadius: "40px",
  backgroundColor: "#efefef",

  [MOBILE]: {
    display: "none",
    // top: "calc(50% - 25px)",
    // left: "-15px",
    // width: "25px",
    // height: "25px"
  }
});

export default CompanyLogoSkeletonSide;