import React from "react";

import TextField from "@material-ui/core/TextField";

import UsernameFieldErrorMessage from "../Error/UsernameFieldErrorMessage";
import PasswordFieldErrorMessage from "../Error/PasswordFieldErrorMessage";
import {
  usernameMinLength, usernameMaxLength,
  passwordMinLength, passwordMaxLength,
} from "../../../../../validators";

const RemoveUserForm = ({
  handleSubmit,
  handleChange,
  handleBlur,

  values,
  touched,
  errors,
}) => {
  const {
    username,
    password,
    // newPassword,
    // confirmPassword,
  } = values;

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        // autoFocus
        autoComplete="off"
        required

        error={(!!(username && username.length > 2 && touched.username && errors.username))}

        id="username"
        label="Username"
        type="username"

        onChange={handleChange}
        onBlur={handleBlur}
        value={username}

        inputProps={{
          minLength: usernameMinLength,
          maxLength: usernameMaxLength
        }}

        margin="dense"
        fullWidth
        variant="outlined"
      />
      <UsernameFieldErrorMessage
        formValue={username}
        formError={errors.username}
        formTouch={touched.username}
      />

      <TextField
        // autoFocus
        autoComplete="off"
        required

        error={(!!(password && password.length > 2 && touched.password && errors.password))}

        id="password"
        label="Password"
        type="password"

        onChange={handleChange}
        onBlur={handleBlur}
        value={password}

        inputProps={{
          minLength: passwordMinLength,
          maxLength: passwordMaxLength,
        }}

        margin="dense"
        fullWidth
        variant="outlined"
      />
      <PasswordFieldErrorMessage
        formValue={password}
        formError={errors.password}
        formTouch={touched.password}
      />
    </form>
  );
};

export default RemoveUserForm;