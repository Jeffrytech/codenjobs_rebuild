import React from "react";

import TextField from "@material-ui/core/TextField";
import EmailFieldErrorMessage from "../Error/EmailFieldErrorMessage";
// import { emailMaxLength } from "../../../../validators";

const ChangeEmailForm = ({
  handleSubmit,
  handleChange,
  handleBlur,

  values,
  touched,
  errors,
}) => {
  const {
    email,
  } = values;

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        // Don't use this for mobile devices
        // autoFocus 
        autoComplete="off"
        required

        error={(!!(email && email.length > 4 && touched.email && errors.email))}

        id="email"
        label="New Email"
        type="email"

        onChange={handleChange}
        onBlur={handleBlur}
        value={email}

        // inputProps={{ maxLength: passwordMaxLength }}

        margin="dense"
        fullWidth
        variant="outlined"
        style={{
          background: "rgb(247, 248, 250)",
          // background: "#efefef",
        }}
      />
      <EmailFieldErrorMessage
        formValue={email}
        formError={errors.email}
        formTouch={touched.email}
      />
    </form>
  );
};

export default ChangeEmailForm;