import React from "react";

import {
  ErrorMessageWrapper,
} from "./ErrorCSS";

// Send server side request for email and username and show error.
const LinkFieldErrorMessage = ({
  formValue,
  formError,
  formTouch,
}) => {
  if (formValue && formValue.length > 4 && formTouch && formError) {
    return (<ErrorMessageWrapper>{formError} </ErrorMessageWrapper>);
  } else {
    return <ErrorMessageWrapper />;
  }
};

export default LinkFieldErrorMessage;