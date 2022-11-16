import { styled } from "baseui";
import { DESKTOP, XS } from "../../../design/breakpoints";
import { hover } from "../../../design/common";

const RegisterFormContainer = styled("div", {
  display: "flex",
  width: "100vw",
  height: "100vh",
  overflowY: "hidden",

  [DESKTOP]: {
    overflowY: "auto",
    flexFlow: "column",
    height: "auto",
  }
});

const RegisterFormWrapper = styled("div", {
  display: "flex",
  flexBasis: "100%",
  padding: "3.75rem 12.75rem 0 12.75rem",
  // padding: "3.75rem 10rem 0 10rem",

  [DESKTOP]: {
    padding: "0.875rem 1rem 1rem 1.25rem",
  }
});

const RegisterForm = styled("form", {
  width: "100%",
  minWidth: "18rem",
  maxWidth: "33.75rem",

  height: "100vh",

  display: "flex",
  flexFlow: "column",

  [DESKTOP]: {
    maxWidth: "100%",
    width: "100%",

    height: "inherit",

    minWidth: "16rem",
  },
});

const RegisterFormTitle = styled("h1", {
  fontSize: "1.75rem",
  marginTop: "2rem",
  marginBottom: "0",

  [DESKTOP]: {
    marginTop: "1rem",
  }
});

const RegisterFormDesktopImage = styled("img", {
  [DESKTOP]: {
    display: "none",
  }
});

const RegisterFormMobileImage = styled("img", {
  display: "none",
  [DESKTOP]: {
    display: "block",
    marginTop: "1rem",
    width: "100%"
  }
});

const RegisterWithOauthContainer = styled("div", {
  margin: "0.5rem 0 0 0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const RegisterWithOauthButtonWrapper = styled("span", {
  marginRight: "0.5rem",
  ":hover": hover,
});

const RegisterWithOautInputWrapper = styled("div", {
  marginTop: "0.5rem",
  marginBottom: "0.5rem",

});

const RegisterWithOauthTextInput = styled("input", {
  width: "100%",
  // marginTop: "1rem",
  boxSizing: "border-box",
  borderRadius: "0.25rem",
  fontSize: "1rem",
  padding: "0.5rem",
  backgroundColor: "#fff",
  border: "1px solid #121212",

  ":hover": hover,
  // border: "2px solid #efefef",

});

export {
  RegisterFormContainer,
  RegisterFormWrapper,
  RegisterForm,
  RegisterFormTitle,

  RegisterFormDesktopImage,
  RegisterFormMobileImage,

  RegisterWithOauthContainer,
  RegisterWithOauthButtonWrapper,

  RegisterWithOautInputWrapper,
  RegisterWithOauthTextInput,
};