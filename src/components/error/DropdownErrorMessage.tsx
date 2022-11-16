import React from "react";
import { DropdownErrorMessageWrapper } from "./ErrorCSS";

const DropdownErrorMessage = ({
  isProfile = false,
  formValue,
  formError,
  // formTouch,
}) => {
  // let errorMessageText = "";

  // alert(formValue);
  // alert(formError);
  // alert(formTouch)

  if (formValue && formError) {
    return (<DropdownErrorMessageWrapper style={{
      // margin: isProfile ? "1rem" : "1rem 0 0 0"
      margin: isProfile ? "1rem" : "1rem 0 0 0"
    }}>{formError} </DropdownErrorMessageWrapper>);
  } else {
    return null;
  }

};

export default DropdownErrorMessage;