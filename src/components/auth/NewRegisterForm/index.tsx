import React, {
  useEffect,
  useState
} from "react";
import ReCAPTCHA from "react-google-recaptcha";

// TODO
// Use svg similar to the other options
import { BsTwitter } from "react-icons/bs";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import ErrorIcon from "@material-ui/icons/Error";
import Button from "@material-ui/core/Button";

// import TextField from "@material-ui/core/TextField";
// import Container from "@material-ui/core/Container";

import { 
  Tooltip} from "@material-ui/core";

import { blue, red } from "../../../design/colors";

// import { VisibilityOff } from "@material-ui/icons";
// import Visibility from "@material-ui/icons/Visibility";

import useRegisterForm from "./useRegisterForm";

// import { useStyles } from "./RegisterFormCSS";

import {
  // usernameMinLength,
  // usernameMaxLength,

  passwordMinLength,
  passwordMaxLength,
  usernameMaxLength,
  usernameMinLength,
} from "../../../validators";

import EmailFieldErrorMessage from "../Error/EmailFieldErrorMessage";
import UsernameFieldErrorMessage from "../Error/UsernameFieldErrorMessage";
import PasswordFieldErrorMessage from "../Error/PasswordFieldErrorMessage";

import LoginSpinner from "../../spinners/LoginSpinner";
import { COMPANY_NAME, ReCAPTCHA_PUBLIC } from "../../../config/environment";
import { LoginCompanyLogo, LoginFormInputWrapper, LoginFormLabel, LoginFormTextInput, Submit } from "../login/LoginCSS";
// import Required from "../../Required";
import ControlPasswordVisiblity from "../login/ControlPasswordVisibility";
import Required from "../../form/Required";
import { 
  findUserRegisterReferral,
  // findRefUsername, 
  // validateUserRegisterReference 
} from "../../../api/user";
import { discordRegister } from "../../../api/discord";
import { RegisterForm, RegisterFormContainer, RegisterFormDesktopImage, RegisterFormMobileImage, RegisterFormTitle, RegisterFormWrapper, RegisterWithOauthButtonWrapper, RegisterWithOauthContainer } from "./RegisterFormCSS";
import { githubRegister } from "../../../api/github";
import { twitterRegister } from "../../../api/twitter";
import { linkedinRegister } from "../../../api/linkedin";
import Link from "next/link";

const NewRegisterForm = ({
  ref_username
}) => {
  // const classes = useStyles();

  const [useReferral, setUseReferral] = useState(null);

  const findUserRegisterReferralByUsername = async (ref_username) => {
    try {
      const { data, error } = await findUserRegisterReferral(ref_username);

      if (error) {
        console.log("Something went wrong at the server");
        console.error(error);
        return;
      }
    
      setUseReferral(data);
      
    } catch (error) {
      console.log("findRefUsername catch error");
      console.error(error);
    }

  };

  useEffect(() => {
    if (ref_username !== "") {
      findUserRegisterReferralByUsername(ref_username);
    }
  }, []);

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

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
  } = useRegisterForm({
    ref_username,
  });

  const {
    email,
    username,
    password,

    recaptcha,

    // serverError,
  } = values;

  // alert(ref_username);

  return (
    <>
      <RegisterFormContainer>
        <RegisterFormWrapper>
          <RegisterForm
            // className={classes.form}
            onSubmit={handleSubmit}
          >
            {/* <LoginCompanyLogo
              src="/static/logo.png" alt="logo"
              style={{
                marginLeft: "-0.25rem",
              }}
            /> */}
            <LoginCompanyLogo 
              src="/static/logo.png"
            />
            {/* <img
              src="/static/logo.png"
              style={{
                width: "2rem",
                marginLeft: "-0.25rem",
              }}
            /> */}
            {/* <Typography style={{
              marginTop: "2rem",
            }}
              component="h1"
              variant="h5"
            >
              {COMPANY_NAME}
            </Typography> */}
            <RegisterFormTitle>
              {COMPANY_NAME}
              {/* Sign Up */}
            </RegisterFormTitle>
            <span
              style={{
                marginTop: "0.25rem",
                marginLeft: "0.1rem",

                marginBottom: "1rem",
              }}
            >
              <span
                style={{
                  opacity: 0.5,
                }}
              >
                Create an account or
              </span>
              <Link
                href="/signin"
              >
                <span
                  style={{
                    marginLeft: "0.25rem",
                    color: blue,
                    opacity: 1,
                    cursor: "pointer"
                  }}
                >
                  login
                </span>
              </Link>
            </span>

            {ref_username !== "" && useReferral !== null && (useReferral === true ? <div
              style={{
                background: "#efefef",
                padding: "0.5rem",
                fontSize: "0.85rem",
                marginTop: "0.25rem",
                marginBottom: "0.5rem",
                // opacity: "0.7",
                borderRadius: "0.25rem",
                lineHeight: "1.25rem",
                wordBreak: "break-all",

                // color: blue,
              }}
            >
              Your referencer username is <span style={{ fontWeight: "bold", }}>{ref_username}</span> and we will send the user 5% referral fee when you post the first job at our website
            </div> : <div
              style={{
                background: "#efefef",
                padding: "0.5rem",
                fontSize: "0.85rem",
                marginTop: "0.25rem",
                // opacity: "0.7",
                borderRadius: "0.25rem",
                lineHeight: "1.25rem",
                wordBreak: "break-all",
                color: red,
              }}
            >
              The referencer doesn't want to use our reference system or the ref_username doesn't exist
            </div>)}

            <LoginFormLabel htmlFor="email" >
              Email
              <Required />
            </LoginFormLabel>
            <LoginFormInputWrapper>
              <LoginFormTextInput
                id="email"
                name="email"
                type="email"

                placeholder={"youremail@codenjobs.com"}

                autoComplete="email"

                required

                // minLength={passwordMinLength}
                // maxLength={passwordMaxLength}

                onChange={handleChange}
                onBlur={handleBlur}
                value={email.toLowerCase().replace(/\s/g, "")}
              />
            </LoginFormInputWrapper>
            <EmailFieldErrorMessage
              formValue={email}
              formError={errors.email}
              formTouch={touched.email}
            />

            <LoginFormLabel htmlFor="username" >
              Username
              <Required />
            </LoginFormLabel>
            <LoginFormInputWrapper>
              <LoginFormTextInput
                id="username"
                name="username"
                type="username"

                placeholder={"username"}
                // placeholder={"Type username"}

                // autoComplete="email"

                required

                minLength={usernameMinLength}
                maxLength={usernameMaxLength}

                onChange={handleChange}
                onBlur={handleBlur}
                value={username.toLowerCase().replace(/\s/g, "")}
              />
            </LoginFormInputWrapper>
            <UsernameFieldErrorMessage
              formValue={username}
              formError={errors.username}
              formTouch={touched.username}
            />

            <LoginFormLabel htmlFor="password" >
              <div style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
              }}>
                Password
                <Required />

                <ControlPasswordVisiblity
                  handleClickShowPassword={handleClickShowPassword}
                  showPassword={showPassword}
                />
              </div>
            </LoginFormLabel>
            <LoginFormInputWrapper>
              <LoginFormTextInput
                id="password"
                name="password"

                // type="password"
                type={showPassword ? "text" : "password"}

                placeholder={"••••••••••••"}

                // autoComplete="email"

                required

                minLength={passwordMinLength}
                maxLength={passwordMaxLength}

                onChange={handleChange}
                onBlur={handleBlur}
                value={password.toLowerCase().replace(/\s/g, "")}
              />
            </LoginFormInputWrapper>
            <PasswordFieldErrorMessage
              formValue={password}
              formError={errors.password}
              formTouch={touched.password}
            />

            {/* useRegisterForm later */}

            {/* https://www.npmjs.com/package/react-google-recaptcha#invisible-recaptcha */}
            {/* https://codesandbox.io/s/1y4zzjq37l?file=/src/index.js */}

            {/* Use button from submti and call execute() to make onChange of  */}
            {/* ReCAPTCHA setFieldValue of recapcha and submit form atfer that. */}

            <div style={{
              marginTop: "0.5rem",
              marginBottom: "0.5rem",
              // opacity: "0.5",
              fontSize: "0.7rem",
              lineHeight: "1.1rem",
            }}>
              <span style={{ opacity: 0.5 }} >By creating an account, you agree to the</span> <a
                style={{
                  textDecoration: "underline",
                  // color: "rgb(17, 160, 245)",
                  color: blue,
                  fontWeight: "bold",
                  // opacity: 1,
                }}
                href="/company/policies/terms"
                target="_blank"
              > Terms</a> <span style={{ opacity: 0.5 }} >of our services and have read our</span> <a
                style={{
                  textDecoration: "underline",
                  // color: "rgb(17, 160, 245)",
                  color: blue,
                  fontWeight: "bold",
                  // opacity: 1,
                }}
                href="/company/policies/privacy"
                target="_blank"
              >Privacy Statement</a>
              {/* By creating an account, you agree to our Terms and have read and acknowledge the Global Privacy Statement. */}
            </div>

            {/* <div style={{
          marginTop: "0.5rem",
          marginBottom: "0.5rem",
          opacity: "0.5",
          fontSize: "0.7rem",
        }}>
          By sumitting this form, you agree to the <a style={{
            textDecoration: "underline",
            // color: "rgb(17, 160, 245)",
            color: "#121212",
            fontWeight: "bold",
            // opacity: 1,
          }} 
          href="/company/policies/terms" 
          target="_blank" 
        > terms and conditions</a> of our services
        </div> */}

            <Submit
              disabled={isSubmitting || (ref_username !== "" && useReferral === false)}
              // disabled={isSubmitting}

              type="submit"
              onClick={() => {
                // @ts-ignore
                recaptchaRef.current.execute();
              }}
            >
              {isSubmitting && <LoginSpinner />}
              Sign Up
              {/* <img 
            src="/static/design/link.svg"
            style={{
              color: white,
            }}
          /> */}
            </Submit>

            <div
              style={{
                width: "calc(100% - 0.25rem)",
                border: "1px solid #efefef",
                marginTop: "0.5rem",
                marginBottom: "0.5rem",
              }}
            >

            </div>

            <RegisterWithOauthContainer>
              {/* <LinkToSignIn /> */}

              <Tooltip
                title="Create an account with your Discord email and username"
                arrow
              >
                <RegisterWithOauthButtonWrapper
                  onClick={async (e) => {
                    e.preventDefault();

                    const { data: redirect, error } = await discordRegister(ref_username);

                    if (error) {
                      console.log("Discord login response error");
                      console.error(error);
                      const errorDetail = error.response.data.detail;
                      console.error(errorDetail);

                      return;
                    }

                    if (redirect) {
                      window.location.href = redirect;
                    }

                  }}
                >
                  {/* <BsDiscord style={{
                fontSize: "1.5rem",
                color: discord
              }} /> */}
                  <img
                    src="/static/design/discord.svg"
                    style={{
                      width: "2rem",
                    }}
                  />
                </RegisterWithOauthButtonWrapper>
              </Tooltip>

              <Tooltip
                title="Create an account with your LinkedIn email and username"
                arrow
              >
                <RegisterWithOauthButtonWrapper
                  onClick={async (e) => {
                    e.preventDefault();

                    const { data: redirect, error } = await linkedinRegister(ref_username);

                    if (error) {
                      console.log("LinkedIn login response error");
                      console.error(error);
                      const errorDetail = error.response.data.detail;
                      console.error(errorDetail);

                      return;

                      // setGithubEndpointError(errorDetail);
                    }

                    if (redirect) {
                      window.location.href = redirect;
                    }

                  }}
                >
                  {/* <BsLinkedin style={{
                fontSize: "1.25rem",
                marginBottom: "0.1rem",
                // color: shadowBlue,
                // color: black,
                color: blue,
              }} /> */}
                  <img
                    src="/static/design/linkedin.svg"
                    style={{
                      width: "2rem",
                    }}
                  />
                </RegisterWithOauthButtonWrapper>
              </Tooltip>

              <Tooltip
                title="Create an account with your GitHub email and username"
                arrow
              >
                <RegisterWithOauthButtonWrapper
                  onClick={async (e) => {
                    e.preventDefault();

                    const { data: redirect, error } = await githubRegister(ref_username);

                    if (error) {
                      console.log("GitHub login response error");
                      console.error(error);
                      const errorDetail = error.response.data.detail;
                      console.error(errorDetail);

                      return;

                      // setGithubEndpointError(errorDetail);
                    }

                    if (redirect) {
                      window.location.href = redirect;
                    }

                  }}
                >
                  {/* <GitHubIcon style={{
                fontSize: "1.25rem",
                marginBottom: "0.1rem",
                color: black,
              }} /> */}
                  <img
                    src="/static/design/github.svg"
                    style={{
                      width: "2rem",
                    }}
                  />
                </RegisterWithOauthButtonWrapper>
              </Tooltip>

              {!ref_username && <Tooltip
                title="Create an account with your Twitter email and username"
                arrow
              >
                <RegisterWithOauthButtonWrapper
                  onClick={async (e) => {
                    e.preventDefault();

                    const { data: redirect, error } = await twitterRegister();

                    if (error) {
                      console.log("Twitter login response error");
                      console.error(error);
                      const errorDetail = error.response.data.detail;
                      console.error(errorDetail);

                      return;

                      // setGithubEndpointError(errorDetail);
                    }

                    if (redirect) {
                      window.location.href = redirect;
                    }

                  }}
                >
                  <BsTwitter style={{
                    fontSize: "1rem",
                    // marginBottom: "0.1rem",
                    color: blue,
                    // border: "1px solid #efefef",
                    border: "1px solid #eeefef",
                    padding: "7px",
                    borderRadius: "5px",
                    // color: black,
                  }} />
                </RegisterWithOauthButtonWrapper>
              </Tooltip>}

            </RegisterWithOauthContainer>

            <div style={{
              marginTop: "0.5rem",
            }} >
              <ReCAPTCHA
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

            {/* <RegisterFormMobileImage
              src="/static/design/register_mobile.svg"
            /> */}

            <Dialog
              open={serverError}
              onClose={handleClose}
              aria-labelledby="Register form error"
              aria-describedby="Register form error"
            >
              <DialogTitle id="reigster-error">
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  color: "#ff1676",
                }}>
                  <ErrorIcon /> <span style={{ marginLeft: "0.25rem" }}>Error</span>
                </div>
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="register-form-error-description">
                  {/* Something went wrong at the server. <a style={{
                // color: "#08c",
              }} href="https://material-ui.com/pt/components/text-fields/" >If this continues, please contact us.</a> */}
                  {/* Something went wrong at the server. Please try again. If this continues, please report to us. */}
                  Something went wrong at the server or Internet connection.
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

          </RegisterForm>
        </RegisterFormWrapper>
        <RegisterFormDesktopImage
          src="/static/design/register_desktop.svg"
        />

      </RegisterFormContainer>

      <RegisterFormMobileImage
        src="/static/design/register_mobile.svg"
      />

    </>

    
  );
};

export default NewRegisterForm;