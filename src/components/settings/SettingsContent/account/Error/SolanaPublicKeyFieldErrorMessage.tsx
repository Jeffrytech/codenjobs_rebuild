import React from "react";

import {
  ErrorMessageWrapper,
} from "./ErrorCSS";

// Send server side request for email and username and show error.
const SolanaPublicKeyFieldErrorMessage = ({
  formValue,
  formError,
  formTouch,
}) => {
  if (!formValue || formValue.length < 10) {
    return null;
  }

  if (formError) {
    return (<ErrorMessageWrapper>{(formValue && formTouch) ? formError : ""}</ErrorMessageWrapper>);
  }

  return null;
};

export default SolanaPublicKeyFieldErrorMessage;