import React from "react";
import { ErrorMessageWrapper } from "./ErrorCSS";

const SkillErrorMessage = ({
  formValue,
  formError,
  // formTouch,
}) => {
  // let errorMessageText = "";

  // alert(formValue);
  // alert(formError);
  // alert(formTouch)

  if (formValue && formError) {
    return (<ErrorMessageWrapper>{formError} </ErrorMessageWrapper>);
  } else {
    return null;
  }

};

export default SkillErrorMessage;