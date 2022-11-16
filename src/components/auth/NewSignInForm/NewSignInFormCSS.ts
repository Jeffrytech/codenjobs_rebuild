import { styled } from "baseui";
import { DESKTOP, MOBILE, XS } from "../../../design/breakpoints";
import { shadowBlue } from "../../../design/colors";
import { hover } from "../../../design/common";

const SignInDesktop = styled("div", {
  // width: "100%",
  // height: "100%",
  width: "100vw",
  height: "100vh",
  padding: "0",

  display: "flex",
  flexDirection: "column",
  flexWrap: "nowrap",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",

  backgroundColor: "#272927",

  [DESKTOP]: {
    backgroundColor: "#ffffff",
  }
});

const Frame = styled("div", {
  width: "100%", // 120rem
  height: "100%", // 67.5rem
  padding: "0",

  [DESKTOP]: {
    display: "none",
  }
});

const Vector = styled("img", {
  width: "100%", // 131rem,
  height: "100%", // 67.5rem
  // left: "83.9375rem", // 83.9375rem, 84rem,
  // right: "24rem", // 83.9375rem, 84rem,
  // right: "23.6rem", // 83.9375rem, 84rem,
  top: "0",
  position: "absolute",
});

const SignInFormContainer = styled("div", {
  position: "absolute",
});

const SignInFormWrapper = styled("div", {
  // width: "72rem",
  // height: "40rem",
  width: "calc(100vw - 15rem)",
  height: "calc(100vh - 7.5rem)",
  backgroundColor: "#ffffff",

  display: "flex",

  [DESKTOP]: {
    flexFlow: "column",
    width: "100vw",
    height: "100vh",      
  }
});

const SignInSection = styled("section", {
  width: "100%",
  // minWidth: "18rem",
  // minWidth: "16rem",

  // minHeight: "100vh",
  // height: "100%",
  // height: "100vh",
  // position: "fixed",

  display: "flex",
  flexFlow: "column",
  justifyContent: "center",

  // overflow: "visible",

  // [XS]: {
  //     minWidth: "16rem",
  //     width: "16rem",
  // },
});

const SignInFormPrimary = styled("div", {
  display: "flex",
  flexFlow: "column",
  flexBasis: "100%",
  padding: "2rem",

  // [XS]: {
  //     padding: "1rem",
  // }
  [DESKTOP]: {
    padding: "0.875rem 1rem 1rem 1.25rem",
  }
});

const SignInForm = styled("form", {
  height: "50%",

  [DESKTOP]: {
    height: "inherit",
  }
});

const SignInFormSecondary = styled("div", {
  display: "flex",
  flexFlow: "column",
  // background: "red",
  flexBasis: "100%",
  border: "1px solid #ebf4f6",
  padding: "2rem",

  [DESKTOP]: {
    border: "none",
  },

  [XS]: {
    padding: "1rem",
  }
});

const SignInFormSecondaryIllustration = styled("img", {
  width: "100%",
  maxWidth: "100%",
  flexBasis: "50%",
  marginLeft: "-2.5rem",

  height: "50%",

  [XS]: {
    marginLeft: "-1rem",
  }
});

const SignInFormSecondaryDescription = styled("div", {
  flexBasis: "50%",
  display: "flex",
  flexFlow: "column",
  alignItems: "center",
  width: "25rem",
  margin: "0 auto",

  [XS]: {
    width: "16rem",
  }
});

const SignInFormSecondaryDescriptionButton = styled("button", {
  color: shadowBlue,
  margin: "1rem 0 1rem 0",
  padding: "0.75rem 1rem",
  border: "none",

  display: "flex",
  alignItems: "center",
  borderRadius: "0.25rem",

  ":hover": hover,
});

const SignInLogoWrapper = styled("div", {
  height: "50%",

  [DESKTOP]: {
    height: "inherit"
  }
});

export {
  SignInDesktop,
  Frame,
  Vector,

  SignInFormContainer,
  SignInFormWrapper,
  SignInSection,
  SignInFormPrimary,
  SignInForm,
    
  SignInFormSecondary,
  SignInFormSecondaryIllustration,
  SignInFormSecondaryDescription,
  SignInFormSecondaryDescriptionButton,

  SignInLogoWrapper,
};
