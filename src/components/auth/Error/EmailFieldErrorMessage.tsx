import React from "react";

import {
  ErrorMessageWrapper,
} from "./ErrorCSS";

// Send server side request for email and username and show error.
const EmailFieldErrorMessage = ({
  formValue,
  formError,
  formTouch,
}) => {
  if (formValue && formValue.length > 4 && formTouch && formError) {
    return (<ErrorMessageWrapper>{formError} </ErrorMessageWrapper>);
  } else {
    return null;
  }
};

export default EmailFieldErrorMessage;