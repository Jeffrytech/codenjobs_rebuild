import React from "react";

import {
  ErrorMessageWrapper,
} from "./ErrorCSS";

// Send server side request for email and username and show error.
const UsernameFieldErrorMessage = ({
  formValue,
  formError,
  formTouch,
}) => {
  if (formValue && formTouch && formError) {
    return (<ErrorMessageWrapper>{formError} </ErrorMessageWrapper>);
  } else {
    return null;
  }
};

export default UsernameFieldErrorMessage;