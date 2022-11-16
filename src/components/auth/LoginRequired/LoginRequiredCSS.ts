import { styled, withStyle } from "baseui";
import { blue, green, white } from "../../../design/colors";

const SignInButton = styled("a", {
  // width: "100%",
  
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  padding: "0.5rem 1rem",
  fontSize: "1rem",
  textAlign: "center",
  lineHeight: "1rem",
  borderRadius: "0.5rem",
  letterSpacing: "0.7px",
  textDecoration: "none",

  // Use theme instead?
  // color: "#fff",
  color: green,
  // backgroundColor: blue,
  // border: `1px solid ${blue}`,
  backgroundColor: white,
  border: `1px solid ${green}`,

  transition: "all 0.2s",
  cursor: "pointer",
  ":hover": {
    opacity: 0.7
  }
});

const SignUpButton = styled("a", {
  // width: "100%",
  marginTop: "1rem",
  
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  padding: "0.5rem 1rem",
  fontSize: "1rem",
  textAlign: "center",
  lineHeight: "1rem",
  borderRadius: "0.5rem",
  letterSpacing: "0.7px",
  textDecoration: "none",

  // Use theme instead?
  color: "#fff",
  // backgroundColor: "rgb(37, 191, 161)",
  backgroundColor: green,
  border: `1px solid ${green}`,
  // backgroundColor: "rgb(17, 160, 245)",
  // border: "1px solid rgb(17, 160, 245)",

  transition: "all 0.2s",
  cursor: "pointer",
  ":hover": {
    opacity: 0.7
  }
});

export {
  SignInButton,
  SignUpButton,
};