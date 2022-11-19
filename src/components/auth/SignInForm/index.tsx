import React from // useState
"react";
import ReCAPTCHA from "react-google-recaptcha";

import { Grid, Typography } from "@material-ui/core";

import ErrorIcon from "@material-ui/icons/Error";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
// import Container from "@material-ui/core/Container";

import useRegisterForm from "./useSignInForm";

// import { useStyles } from "./SignInFormCSS";

import {
  // nameMaxLength,
  usernameMinLength,
  usernameMaxLength,
  passwordMinLength,
  passwordMaxLength,
} from "../../../validators";

import UsernameFieldErrorMessage from "../Error/UsernameFieldErrorMessage";
import PasswordFieldErrorMessage from "../Error/PasswordFieldErrorMessage";

import LinkToResetPassword from "../LinkToResetPassword";
import LinkToRegister from "../LinkToRegister";

import LoginSpinner from "../../spinners/LoginSpinner";
import {
  COMPANY_NAME,
  LOGIN_DESCRIPTION,
  ReCAPTCHA_PUBLIC,
} from "../../../config/environment";
import { styled } from "baseui";
import {
  LoginCompanyLogo,
  LoginDescription,
  LoginForm,
  LoginFormInputWrapper,
  LoginFormLabel,
  LoginFormTextInput,
  Submit,
} from "../login/LoginCSS";
import Required from "../../form/Required";
// import { useEffect } from "react";

const SignInForm = ({ from }) => {
  const recaptchaRef = React.createRef();

  // alert(from);

  // useEffect(() => {
  //   console.log(recaptchaRef);
  //   setTimeout(() => {
  //     if (!recaptchaRef.current) {
  //       window.grecaptcha.render('recaptcha-login', {
  //         sitekey: ReCAPTCHA_PUBLIC,
  //         callback: function (resp) { }
  //       });
  //     }
  //   }, 1000);
  // }, []);

  // alert(from);

  // const classes = useStyles();

  const {
    handleSubmit,

    handleChange,
    handleBlur,

    values,

    errors,
    touched,

    setFieldValue,
    // setFieldTouched,
    // setValues,

    isSubmitting,
    submitForm, // Should use this?

    serverError,
    handleClose,
  } = useRegisterForm(from);

  const {
    username,
    password,

    // serverError,
  } = values;

  return (
    <LoginForm onSubmit={handleSubmit}>
      <LoginCompanyLogo src="/static/logo.svg" alt="logo" />
      <Typography
        style={{
          marginTop: "0.25rem",
          alignSelf: "center",
        }}
        component="h1"
        variant="h5"
      >
        {COMPANY_NAME}
      </Typography>

      <Grid container>
        <LoginDescription>{LOGIN_DESCRIPTION}</LoginDescription>
      </Grid>

      <div
        style={{
          display: "flex",
          flexFlow: "column",
        }}
      >
        <LoginFormLabel htmlFor="username">
          Username
          <Required />
        </LoginFormLabel>
        <LoginFormInputWrapper>
          <LoginFormTextInput
            id="username"
            name="username"
            type="text"
            required
            // placeholder={"codenjobs"}

            minLength={usernameMinLength}
            maxLength={usernameMaxLength}
            onChange={handleChange}
            onBlur={handleBlur}
            // value={username}
            value={username.toLowerCase().replace(/\s/g, "")}
          />
        </LoginFormInputWrapper>
        <UsernameFieldErrorMessage
          formValue={username.toLowerCase().replace(/\s/g, "")}
          formError={errors.username}
          formTouch={touched.username}
        />

        <LoginFormLabel htmlFor="password">
          Password
          <Required />
        </LoginFormLabel>
        <LoginFormInputWrapper>
          <LoginFormTextInput
            id="password"
            name="password"
            type="password"
            // placeholder={"encrypted"}

            required
            minLength={passwordMinLength}
            maxLength={passwordMaxLength}
            onChange={handleChange}
            onBlur={handleBlur}
            value={password}
          />
        </LoginFormInputWrapper>
        <PasswordFieldErrorMessage
          formValue={password}
          formError={errors.password}
          formTouch={touched.password}
        />
      </div>

      {/* <input
        // error={!!(username && errors.username && touched.username)}

        // variant="outlined"
        // margin="normal"
        // fullWidth
        required={true}

        // inputProps={{
        //   minLength: usernameMinLength,
        //   maxLength: usernameMaxLength,

        //   // pattern: "[a-zA-Z_]+",

        //   // position: "absolute",
        // }}

        id="username"
        // label="Username"
        name="username"

        autoComplete="username"

        onChange={handleChange}
        onBlur={handleBlur}

        value={username.toLowerCase().replace(/\s/g, "")}
      /> */}

      <Submit
        // <Button
        disabled={isSubmitting}
        // style={{
        //   marginTop: "1rem",
        //   marginBottom: "0.5rem",
        //   backgroundColor: "rgb(17, 160, 245)"
        // }}

        //         width: 100%;
        // padding: 0.5rem;
        // border-radius: 0.5rem;
        // border: none;
        // color: white;

        type="submit"
        // type="button"
        onClick={() => {
          // @ts-ignore
          recaptchaRef.current.execute();
        }}

        // fullWidth
        // variant="contained"
        // color="primary"
        // className={classes.submit}
      >
        {isSubmitting && <LoginSpinner />}
        Sign In
      </Submit>

      <Grid container>
        <LinkToResetPassword />
        <LinkToRegister />
      </Grid>

      <div
        style={{
          marginTop: "0.5rem",
        }}
      >
        <ReCAPTCHA
          // id="recaptcha-login"

          ref={recaptchaRef}
          sitekey={ReCAPTCHA_PUBLIC}
          size="invisible"
          onChange={(value) => {
            // console.log("Captcha value from ReCAPTCHA:", value);
            // SetFieldValue here
            setFieldValue("recaptcha", value);

            submitForm();
          }}
          onErrored={(errors) => {
            // Show error at frontend?
            console.log("errors");
            console.log(errors);
          }}
        />
      </div>

      {/* <Grid container>
        <div style={{
          opacity: 0.5,
          fontSize: "0.8rem",
          marginTop: "0.5rem",
          textAlign: "center",
        }}> 
          Please, contact <a href="mailto:support@codenjobs.com" >our support team</a> if you have any issue
        </div>
      </Grid> */}

      {/* Should edit this after you build a support page? */}
      <Dialog
        open={serverError}
        onClose={handleClose}
        aria-labelledby="SignIn form error"
        aria-describedby="SignIn form error"
      >
        <DialogTitle id="signin-error">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              color: "#ff1676",
            }}
          >
            <ErrorIcon /> <span style={{ marginLeft: "0.25rem" }}>Error</span>
          </div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="signin-form-error-description">
            {/* Something went wrong at the server. <a style={{
              // color: "#08c",
            }} href="https://material-ui.com/pt/components/text-fields/" >If this continues, please contact us.</a> */}
            {/* Something went wrong at the server. Please try again. If this continues, please report to us. */}
            Something went wrong at your login attempt, the server or Internet
            connection.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            color="primary"
            // autoFocus
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </LoginForm>
  );
};

export default SignInForm;
