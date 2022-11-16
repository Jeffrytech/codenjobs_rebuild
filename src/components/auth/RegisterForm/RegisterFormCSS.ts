import { styled } from "baseui";
import { hover } from "../../../design/common";

const RegisterWithOauthContainer = styled("div", {
  margin: "0.5rem 0 0 0",
  display: "flex",
  alignItems: "center",
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
  RegisterWithOauthContainer,
  RegisterWithOauthButtonWrapper,

  RegisterWithOautInputWrapper,
  RegisterWithOauthTextInput
};