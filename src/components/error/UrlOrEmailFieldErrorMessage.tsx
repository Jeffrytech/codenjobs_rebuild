import React from "react";
import { ErrorMessageWrapper } from "./ErrorCSS";

const UrlOrEmailFieldErrorMessage = ({
  formValue,
  formError,
  formTouch,
}) => {
  let errorMessageText = "";

  if (formValue && (formValue.length > 6) && formError && formTouch) {
    errorMessageText = formError;
  }

  return (<ErrorMessageWrapper>{errorMessageText} </ErrorMessageWrapper>);
};

export default UrlOrEmailFieldErrorMessage;