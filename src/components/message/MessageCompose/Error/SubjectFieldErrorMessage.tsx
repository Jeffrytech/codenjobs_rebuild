import React from "react";

import {
  ErrorMessageWrapper,
} from "./ErrorCSS";

// Send server side request for email and username and show error.
const SubjectFieldErrorMessage = ({
  formValue,
  formError,
  formTouch,
}) => {
  return (<ErrorMessageWrapper>{(formValue && formTouch && formError) ? formError : ""}</ErrorMessageWrapper>);
};

export default SubjectFieldErrorMessage;