import React, { useEffect, useRef } from "react";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import EmailIcon from "@material-ui/icons/Email";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
// import Container from "@material-ui/core/Container";

import useResetPasswordForm from "./useResetPasswordForm";

// import { useStyles } from "./ResetPasswordEmailSendCSS";

// import {
//   nameMaxLength,
//   passwordMaxLength,
// } from "../../validators";

import EmailFieldErrorMessage from "../Error/EmailFieldErrorMessage";
import {
  LoginCompanyLogo,
  LoginForm,
  LoginFormInputWrapper,
  LoginFormLabel,
  LoginFormTextInput,
  Submit,
} from "../login/LoginCSS";
import { Grid, Typography } from "@material-ui/core";
import LinkToRegister from "../LinkToRegister";
import LinkToResetPassword from "../LinkToResetPassword";
import LoginSpinner from "../../spinners/LoginSpinner";
import Required from "../../Required";

const ResetPasswordForm = ({ resetPasswordTitle }) => {
  // const classes = useStyles();

  const {
    handleSubmit,

    handleChange,
    handleBlur,

    values,

    errors,
    touched,

    // setFieldValue,
    // setFieldTouched,
    // setValues,

    isSubmitting,
    // submitForm, // Should use this?

    emailSent,
    handleClose,
  } = useResetPasswordForm();

  // Didn't work
  // https://stackoverflow.com/questions/38619762/how-to-prevent-ios-keyboard-from-pushing-the-view-off-screen-with-css-or-js
  // const inputElement = useRef(null);
  // useEffect(() => {
  //   inputElement.current.onfocus = () => {
  //     window.scrollTo(0, 0);
  //     document.body.scrollTop = 0;
  //   };
  // });

  const {
    email,

    // serverError,
  } = values;

  return (
    <LoginForm
      // className={classes.form}
      onSubmit={handleSubmit}
    >
      <LoginCompanyLogo
        src="/static/logo.svg"
        alt="logo"
        style={{
          alignSelf: "center",
        }}
      />
      <Typography
        style={{
          marginTop: "0.25rem",
          alignSelf: "center",
        }}
        component="h1"
        variant="h5"
      >
        {resetPasswordTitle}
      </Typography>

      <TextField
        error={!!(email && email.length > 4 && touched.email && errors.email)}
        variant="outlined"
        margin="normal"
        fullWidth
        required
        id="email"
        label="Email"
        name="email"
        autoComplete="email"
        // autoFocus

        onChange={handleChange}
        onBlur={handleBlur}
        value={email.toLowerCase().replace(/\s/g, "")}

        // ref={inputElement}
      />

      {/* <LoginFormLabel htmlFor="email" >
        Email
        <Required />
      </LoginFormLabel>
      <LoginFormInputWrapper>
        <LoginFormTextInput
          id="email"
          name="email"
          type="email"

          placeholder={"email@codenjobs.com"}

          autoComplete="email"

          required

          // minLength={passwordMinLength}
          // maxLength={passwordMaxLength}

          onChange={handleChange}
          onBlur={handleBlur}
          value={email}
        />
      </LoginFormInputWrapper> */}

      <EmailFieldErrorMessage
        formValue={email}
        formError={errors.email}
        formTouch={touched.email}
      />

      <Submit disabled={isSubmitting} type="submit">
        {isSubmitting && <LoginSpinner />}
        Submit
      </Submit>

      {/* <Button
        disabled={isSubmitting}

        style={{
          marginTop: "1rem",
          marginBottom: "0.5rem",
          backgroundColor: "rgb(17, 160, 245)"
        }}

        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        // className={classes.submit}
      >
        Submit
      </Button> */}

      {/* <Grid container> */}
      {/* <LinkToResetPassword /> */}
      {/* <LinkToRegister /> */}
      {/* </Grid> */}

      {/* Should edit this after you build a support page? */}
      <Dialog
        open={emailSent}
        onClose={handleClose}
        aria-labelledby="Reset Password error"
        aria-describedby="Reset Password error"
      >
        {/* Extract this and reuse RegisterEmailSend/index.tsx? */}
        <DialogTitle id="support-email">
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <EmailIcon
              style={{
                marginTop: "0.15rem",
              }}
            />
            <span
              style={{
                marginLeft: "0.25rem",
              }}
            >
              support@codenjobs.com
            </span>
          </div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="reset-password-error-description">
            {/* Something went wrong at the server. <a style={{
              // color: "#08c",
            }} href="https://material-ui.com/pt/components/text-fields/" >If this continues, please contact us.</a> */}
            {/* Something went wrong at the server. Please try again. If this continues, please report to us. */}
            {/* Something went wrong at the server. */}
            If <b>{email}</b> exists, you’ll receive an email with a link to
            reset your password in a few minutes. Use it to{" "}
            <a
              style={{
                textDecoration: "none",
                color: "rgb(17, 160, 245)",
              }}
              href="/signin"
              target="_blank"
              rel="noopener noreferrer"
            >
              login
            </a>{" "}
            again.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </LoginForm>
  );
};

export default ResetPasswordForm;
