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
  // To have equal width on error
  return (<ErrorMessageWrapper>{(formValue && formValue.length > 2 && formTouch && formError) ? formError : ""}</ErrorMessageWrapper>);
};

export default PasswordFieldErrorMessage;

// if (formValue && formValue.length > 2 && formTouch && formError) {
//   return (<ErrorMessageWrapper>{formError} </ErrorMessageWrapper>);
// } else {
//   return (<ErrorMessageWrapper></ErrorMessageWrapper>);
// }