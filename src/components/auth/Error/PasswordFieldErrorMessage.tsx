import React from "react";

import {
  ErrorMessageWrapper,
} from "./ErrorCSS";

// Send server side request for email and username and show error.
const PasswordFieldErrorMessage = ({
  formValue,
  formError,
  formTouch,
}) => {
  if (formValue && formValue.length > 2 && formTouch && formError) {
    return (<ErrorMessageWrapper>{formError} </ErrorMessageWrapper>);
  } else {
    return null;
  }
};

export default PasswordFieldErrorMessage;