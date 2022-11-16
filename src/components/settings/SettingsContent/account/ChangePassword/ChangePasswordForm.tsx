import React from "react";

import TextField from "@material-ui/core/TextField";
import PasswordFieldErrorMessage from "../Error/PasswordFieldErrorMessage";
import { passwordMinLength, passwordMaxLength } from "../../../../../validators";

const ChangePasswordForm = ({
  handleSubmit,
  handleChange,
  handleBlur,

  values,
  touched,
  errors,
}) => {
  const {
    oldPassword,
    newPassword,
    confirmPassword,
  } = values;

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        // autoFocus
        autoComplete="off"
        required

        error={(!!(oldPassword && oldPassword.length > 2 && touched.oldPassword && errors.oldPassword))}

        id="oldPassword"
        label="Old Password"
        type="password"

        onChange={handleChange}
        onBlur={handleBlur}
        value={oldPassword}

        inputProps={{
          minLenght: passwordMinLength,
          maxLength: passwordMaxLength,
        }}

        margin="dense"
        fullWidth
        variant="outlined"
        style={{
          background: "rgb(247, 248, 250)",
          // background: "#efefef",
        }}
      />
      <PasswordFieldErrorMessage
        formValue={oldPassword}
        formError={errors.oldPassword}
        formTouch={touched.oldPassword}
      />

      <TextField
        autoComplete="new-password"
        required

        error={(!!(newPassword && newPassword.length > 2 && touched.newPassword && errors.newPassword))}

        id="newPassword"
        label="New Password"
        type="password"

        onChange={handleChange}
        onBlur={handleBlur}
        value={newPassword}

        inputProps={{ maxLength: passwordMaxLength }}

        margin="dense"
        fullWidth
        variant="outlined"
        style={{
          marginTop: "1rem",
        }}
      />
      <PasswordFieldErrorMessage
        formValue={newPassword}
        formError={errors.newPassword}
        formTouch={touched.newPassword}
      />

      <TextField
        autoComplete="new-password"
        required

        id="confirmPassword"
        label="Confirm Password"
        type="password"

        onChange={handleChange}
        onBlur={handleBlur}
        value={confirmPassword}

        inputProps={{ maxLength: passwordMaxLength }}

        margin="dense"
        fullWidth
        variant="outlined"
        style={{
          marginTop: "1rem",
        }}
      />
      <PasswordFieldErrorMessage
        formValue={confirmPassword}
        formError={errors.confirmPassword}
        formTouch={touched.confirmPassword}
      />

    </form>
  );
};

export default ChangePasswordForm;