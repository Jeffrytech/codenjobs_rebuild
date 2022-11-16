import { styled } from "baseui";
import { 
  DESKTOP,
  MOBILE, 
  // XS 
} from "../../design/breakpoints";
import { boxShadow } from "../../design/common";

const CompanyLogoSide = styled("img", {
  top: "calc(50% - 20px)",
  left: "-20px",
  width: "40px",
  height: "40px",
  position: "absolute",
  boxShadow,
  borderRadius: "40px",
  backgroundColor: "#fff",

  transition: "all 0.2s",
  cursor: "pointer",
  ":hover": {
    opacity: 0.7,
  },

  [DESKTOP]: {
    display: "none",
  },
  // [MOBILE]: {
  //   display: "none",
  // },
  
  // [XS]: {
  //   display: "none",
  // }
});

export default CompanyLogoSide;