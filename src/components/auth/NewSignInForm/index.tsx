import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

import { Grid } from "@material-ui/core";

import ErrorIcon from "@material-ui/icons/Error";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import Button from "@material-ui/core/Button";
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

import PasswordFieldErrorMessage from "../Error/PasswordFieldErrorMessage";

import LinkToResetPassword from "../LinkToResetPassword";
import LinkToRegister from "../LinkToRegister";

import LoginSpinner from "../../spinners/LoginSpinner";
import { COMPANY_NAME, ReCAPTCHA_PUBLIC } from "../../../config/environment";
import { LoginCompanyLogo, LoginFormInputWrapper, LoginFormLabel, LoginFormTextInput, Submit, } from "../login/LoginCSS";
import Required from "../../form/Required";
import { shadowBlue } from "../../../design/colors";
import { SignInDesktop, Frame, Vector, SignInFormContainer, SignInFormWrapper, SignInForm, SignInLogoWrapper, SignInFormPrimary, SignInFormSecondary, SignInSection, SignInFormSecondaryIllustration, SignInFormSecondaryDescription, SignInFormSecondaryDescriptionButton } from "./NewSignInFormCSS";
import ExternalLink from "../../ExternalLink";
// import CompanyLogo from "../../company/CompanyLogo";
// import { useEffect } from "react";

const NewSignInForm = ({
  from,
}) => {
  const recaptchaRef = React.createRef();

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
    <SignInDesktop>
      <Frame>
        <Vector 
          src="/static/design/vector.svg" 
        />
      </Frame>

      <SignInFormContainer>
        <SignInFormWrapper>
          <SignInFormPrimary>
            <SignInSection>
              <SignInLogoWrapper>
                <LoginCompanyLogo 
                  src="/static/logo.png"
                />
              </SignInLogoWrapper>

              <SignInForm
                onSubmit={handleSubmit}
              >
                <h1
                  style={{
                    // margin: "1rem 0 1rem 0",
                    margin: "2.5rem 0 1rem 0",
                  }}
                >
                  {COMPANY_NAME}
                </h1>

                <div style={{
                  display: "flex",
                  flexFlow: "column",
                }}>
                  <LoginFormLabel htmlFor="username" >
                    Username
                    <Required />
                  </LoginFormLabel>
                  <LoginFormInputWrapper>
                    <LoginFormTextInput
                      id="username"
                      name="username"
                      type="text"

                      required

                      placeholder={"username"}

                      minLength={usernameMinLength}
                      maxLength={usernameMaxLength}

                      onChange={handleChange}
                      onBlur={handleBlur}
                      // value={username}
                      value={username.toLowerCase().replace(/\s/g, "")}
                    />
                  </LoginFormInputWrapper>
                  {/* <UsernameFieldErrorMessage
                    formValue={username.toLowerCase().replace(/\s/g, "")}
                    formError={errors.username}
                    formTouch={touched.username}
                  /> */}

                  <LoginFormLabel htmlFor="password" >
                    Password
                    <Required />
                  </LoginFormLabel>
                  <LoginFormInputWrapper>
                    <LoginFormTextInput
                      id="password"
                      name="password"
                      type="password"

                      placeholder={"••••••••••••"}

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

                  <div style={{
                    marginTop: "0.5rem",
                  }} >
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
                </div>
              </SignInForm>

              <Dialog
                open={serverError}
                onClose={handleClose}
                aria-labelledby="SignIn form error"
                aria-describedby="SignIn form error"
              >
                <DialogTitle id="signin-error">
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    color: "#ff1676",
                  }}>
                    <ErrorIcon /> <span style={{ marginLeft: "0.25rem" }}>Error</span>
                  </div>
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="signin-form-error-description">
                    Something went wrong at your login attempt, the server or Internet connection.
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

            </SignInSection>
          </SignInFormPrimary>

          <SignInFormSecondary>
            <SignInFormSecondaryIllustration
              src="/static/design/login_illustration.svg"
            />
            <SignInFormSecondaryDescription>
              <h2
                style={{
                  color: shadowBlue,
                  margin: "1rem 0 1rem 0",
                  fontSize: "1.5rem",
                }}
              >
                Be a part of the worldwide cryptocurrency network
                {/* Be a part of the worldwide cryptocurrency user network */}
                {/* The crypto user network */}
              </h2>
              <p
                style={{
                  margin: 0,
                  opacity: 0.5,
                  lineHeight: "1.5rem",
                }}
              >
                {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget eros suscipit purus consequat aliquet at a lectus.  */}
                Show your skills with your portfolios and blog posts. Find job seekers and recruiters and pay and earn cryptocurrency.
              </p>
              <ExternalLink
                href={`https://docs.codenjobs.com/en`}
              >
                <SignInFormSecondaryDescriptionButton>
                  <span
                    style={{
                      marginRight: "0.25rem",
                    }}
                  >
                    Learn More
                  </span>
                  <img src="/static/design/link.svg" />
                </SignInFormSecondaryDescriptionButton>
              </ExternalLink>
              
            </SignInFormSecondaryDescription>
          </SignInFormSecondary>
        </SignInFormWrapper>
      </SignInFormContainer>

    </SignInDesktop>
   
  );
};

export default NewSignInForm;