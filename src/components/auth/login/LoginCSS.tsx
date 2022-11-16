import { styled } from "baseui";
import { XS } from "../../../design/breakpoints";
import { blue, green } from "../../../design/colors";

const LoginCompanyLogo = styled("img", {
  // width: "2.5rem",
  width: "2rem",
  marginLeft: "-0.25rem",
  // alignSelf: "center",
});

const LoginFormContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  maxWidth: "21rem",
  // height: "100vh",
  // minHeight: "100vh",
  height: "100%",
  overflowY: "hidden",

  position: "fixed",
});

// Extract this.
const LoginDescription = styled("h2", {
  // margin: "0.5rem 0 0 0.1rem",
  opacity: 0.5,
  fontWeight: "normal",
  fontSize: "1rem",

  // margin: "0.5rem 0.5rem 0 0.1rem",
  margin: "0.5rem 0.5rem 0.5rem 0.1rem",

  [XS]: {
    display: "none",
  }
});

// form: {
//   width: "100%", // Fix IE 11 issue.
//     // marginTop: theme.spacing(1),
//     minWidth: "18rem",

//       [XS]: {
//     minWidth: "16rem",
//       width: "16rem",
//     },
// },
// submit: {
//   backgroundColor: "rgb(17, 160, 245)",
//     margin: "1rem 0 1rem 0"
// },

const LoginForm = styled("form", {
  width: "100%",
  minWidth: "18rem",

  // minHeight: "100vh",
  // height: "100%",
  height: "100vh",
  // position: "fixed",

  display: "flex",
  flexFlow: "column",
  justifyContent: "center",

  // overflow: "visible",


  [XS]: {
    minWidth: "16rem",
    width: "16rem",
  },
});

const LoginFormLabel = styled("label", {
  fontSize: "1rem",
  // marginTop: "1rem",
  marginTop: "0.5rem",
  // marginBottom: "0.5rem",
  // fontWeight: "bold",
});

const LoginFormInputWrapper = styled("div", {
  marginTop: "0.5rem",
  marginBottom: "0.5rem",
});

const LoginFormTextInput = styled("input", {
  width: "100%",
  // marginTop: "1rem",
  boxSizing: "border-box",
  borderRadius: "0.25rem",
  fontSize: "1rem",
  padding: "0.5rem",
  backgroundColor: "#fff",
  border: "1px solid #121212",
  // border: "2px solid #efefef",

  [XS]: {
    // fontSize: "0.8rem",
  }
});

const Submit = styled("button", {
  marginTop: "0.5rem",
  marginBottom: "0.5rem",
  // marginBottom: "0.5rem",
  // backgroundColor: "rgb(17, 160, 245)"

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  // background: "rgb(37, 191, 161)",
  background: blue,
  // background: green,
  width: "100%",
  // width: "8rem",
  color: "white",
  // padding: "0.8rem 1.8rem",
  padding: "0.5rem",
  border: "none",
  borderRadius: "0.5rem",
  fontSize: "1rem",

  transition: "all 0.2s",
  cursor: "pointer",
  ":hover": {
    opacity: 0.7,
  },
  ":focus": {
    outline: "none",
  },

  [XS]: {
    // padding: "0.8rem",
    // fontSize: "1rem",
  }
});

const ControlPasswordVisiblityWrapper = styled("div", ({ 
  // $showPasswrod 
}) => {
  return {
    marginLeft: "auto",
    display: "flex",

    cursor: "pointer",
    transition: "all 0.2s",
    
    ":hover": {
      opacity: 0.7,
    }
  };
});

export {
  LoginCompanyLogo,
  LoginFormContainer,
  LoginDescription,

  // NewLoginForm,

  LoginForm,
  LoginFormLabel,
  LoginFormInputWrapper,
  LoginFormTextInput,

  Submit,

  ControlPasswordVisiblityWrapper,
};