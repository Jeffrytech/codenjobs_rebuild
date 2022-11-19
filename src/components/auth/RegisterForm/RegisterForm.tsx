import React, { useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

import GitHubIcon from "@material-ui/icons/GitHub";
import { BsDiscord, BsLinkedin, BsTwitter } from "react-icons/bs";

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
  Tooltip,
  // InputAdornment, IconButton, Grid,
  Typography,
} from "@material-ui/core";

import { black, blue, discord, red, shadowBlue } from "../../../design/colors";

// import { VisibilityOff } from "@material-ui/icons";
// import Visibility from "@material-ui/icons/Visibility";

import useRegisterForm from "./useRegisterForm";

// import { useStyles } from "./RegisterFormCSS";
import LinkToSignIn from "../LinkToSignIn";

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
import {
  COMPANY_NAME,
  LOGIN_DESCRIPTION,
  ReCAPTCHA_PUBLIC,
} from "../../../config/environment";
import { sub } from "date-fns";
import {
  LoginCompanyLogo,
  LoginDescription,
  LoginForm,
  LoginFormInputWrapper,
  LoginFormLabel,
  LoginFormTextInput,
  Submit,
} from "../login/LoginCSS";
// import Required from "../../Required";
import ControlPasswordVisiblity from "../login/ControlPasswordVisibility";
import Required from "../../form/Required";
import { findUserProfileByUsername } from "../../../api/profile";
import {
  findUserRegisterReferral,
  // findRefUsername,
  // validateUserRegisterReference
} from "../../../api/user";
import { discordRegister } from "../../../api/discord";
import {
  RegisterWithOauthButtonWrapper,
  RegisterWithOauthContainer,
} from "./RegisterFormCSS";
import { githubRegister } from "../../../api/github";
import { twitterRegister } from "../../../api/twitter";
import { linkedinRegister } from "../../../api/linkedin";

// const ControlPasswordVisiblity = ({
//   handleClickShowPassword,
//   handleMouseDownPassword,
//   showPassword,
// }) => {
//   return (
//     <InputAdornment position="end">
//       <IconButton
//         aria-label="toggle password visibility"
//         onClick={handleClickShowPassword}
//         onMouseDown={handleMouseDownPassword}
//         edge="end"
//       >
//         {showPassword ? <Visibility /> : <VisibilityOff />}
//       </IconButton>
//     </InputAdornment>
//   );
// };

// const ControlPasswordVisiblity = ({
//   handleClickShowPassword,
//   // handleMouseDownPassword,
//   showPassword,
// }) => {
//   return (
//     // <IconButton
//     //   aria-label="toggle password visibility"
//       // onClick={handleClickShowPassword}
//       // onMouseDown={handleMouseDownPassword}
//     //   edge="end"
//     // >
//     <div
//       style={{
//         marginLeft: "auto",
//         display: "flex",
//       }}
//       onClick = { handleClickShowPassword }
//     >
//       {showPassword ? <Visibility /> : <VisibilityOff />}
//     </div>
//       // {showPassword ? <Visibility /> : <VisibilityOff />}

//     // </IconButton>
//   );
// };

const RegisterForm = ({ ref_username }) => {
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

  // const handleMouseDownPassword = (event) => {
  //   event.preventDefault();
  // };

  // useRegisterForm instead later.
  // Set formik field after execution?
  // function onChange(value) {
  //   // alert(`Captcha value:${value}`);
  //   console.log("Captcha value:", value);
  //   // Captcha value: 03AGdBq26rvPjsQWFTdzBwMuVtWZhILuivgs0OrmXXhy35WMCCd6htUK0B704HQqdkNOJCxtqNQNaNEGOOV3BICO013jn6sXhIZvVnjroYs5PslkoZkSOiHxFBvperv6Hkr5sDFttg0zdQRngPOOjYP0X6CSTrc2osua7oYj8ezJ7Vj0uu2cJd6ykq3ka5dtqrQ5qV7Q__QwWe1_ogmOC8gMic9uqkU9Z26S4Sla8ZGBhgTXYdV7of375wtw-OOvOYq5Ng9qmrj7zjN0LMsw7GHuaVFqM8G4S1axcMlfg2lHRKIpI-xs9LQI_y6c7jF8JTLPRNQY5YBtUIFro3T48ahfUrVNgYA9_w__erfpiRTB6UWpDVglb-_hsdi7Op3E1Cuw9tqRgRc3A0MavSh1fGJe5LmHVVJeoSPl1f4cLy-L1uzhiGllMbiwSvImxRfPSSPouu_7O7_Ibg
  // }
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

  return (
    <LoginForm
      // className={classes.form}
      onSubmit={handleSubmit}
    >
      <LoginCompanyLogo src="/static/logo.svg" alt="logo" />
      <Typography
        style={{
          marginTop: "0.25rem",
          alignSelf: "center",
        }}
        component="h1"
        variant="h5"
      >
        {/* {registerTitle} */}
        {COMPANY_NAME}
      </Typography>

      {ref_username !== "" &&
        useReferral !== null &&
        (useReferral === true ? (
          <div
            style={{
              background: "#efefef",
              padding: "0.5rem",
              fontSize: "0.85rem",
              marginTop: "0.25rem",
              // opacity: "0.7",
              borderRadius: "0.25rem",
              lineHeight: "1.25rem",
              wordBreak: "break-all",
              // color: blue,
            }}
          >
            Your referencer username is{" "}
            <span style={{ fontWeight: "bold" }}>{ref_username}</span> and we
            will send the user 5% referral fee when you post the first job at
            our website
          </div>
        ) : (
          <div
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
            The referencer doesn't want to use our reference system or the
            ref_username doesn't exist
            {/* please use the correct one to sign up */}
            {/* The referencer is not allowed to use our reference system or doesn't exist, please use correct ref_username to sign up */}
          </div>
        ))}

      {/* <Grid container >
        <LoginDescription>
          {LOGIN_DESCRIPTION}
        </LoginDescription>
      </Grid> */}

      {/* <div style={{
        display: "flex",
        flexFlow: "column",
      }}>
        <label>Email*</label>
        <input type="text" />
      </div>
       */}

      {/* <TextField
        // autoFocus
        autoComplete="email"

        error={!!((email && email.length > 4 && touched.email && errors.email))}

        // inputProps={{
        //   // autocomplete: 'new-password',
        //   form: {
        //     autocomplete: 'off',
        //   },
        // }}

        variant="outlined"
        margin="normal"
        fullWidth
        required

        id="email"
        label="Email"
        name="email"

        onChange={handleChange}
        onBlur={handleBlur}

        value={email.toLowerCase().replace(/\s/g, "")}
      // value={email}
      /> */}
      <LoginFormLabel htmlFor="email">
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
          value={email.toLowerCase().replace(/\s/g, "")}
        />
      </LoginFormInputWrapper>
      <EmailFieldErrorMessage
        formValue={email}
        formError={errors.email}
        formTouch={touched.email}
      />

      {/* <TextField
        autoComplete="username"

        error={!!(username && errors.username && touched.username)}

        variant="outlined"
        margin="normal"
        fullWidth
        required

        inputProps={{
          minLength: usernameMinLength,
          maxLength: usernameMaxLength,

          pattern: "[a-zA-Z_]+",
        }}

        id="username"
        label="Username"
        name="username"

        onChange={handleChange}
        onBlur={handleBlur}

        value={username.toLowerCase().replace(/\s/g, "")}
      /> */}

      <LoginFormLabel htmlFor="username">
        Username
        <Required />
      </LoginFormLabel>
      <LoginFormInputWrapper>
        <LoginFormTextInput
          id="username"
          name="username"
          type="username"
          // placeholder={"codenjobs"}

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

      {/* <TextField
        autoComplete="new-password"

        error={(!!(password && password.length > 2 && touched.password && errors.password))}

        variant="outlined"
        margin="normal"
        fullWidth
        required

        inputProps={{
          minLength: passwordMinLength,
          maxLength: passwordMaxLength,
        }}

        InputProps={{
          endAdornment: <ControlPasswordVisiblity
            handleClickShowPassword={handleClickShowPassword}
            handleMouseDownPassword={handleMouseDownPassword}
            showPassword={showPassword}
          />
        }}

        name="password"
        label="Password"
        id="password"
        type={showPassword ? "text" : "password"}

        onChange={handleChange}
        onBlur={handleBlur}

        value={password}
      /> */}
      <LoginFormLabel htmlFor="password">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
          }}
        >
          Password
          <Required />
          <ControlPasswordVisiblity
            handleClickShowPassword={handleClickShowPassword}
            // handleMouseDownPassword={handleMouseDownPassword}
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
          // placeholder={"codenjobs"}

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

      <div
        style={{
          marginTop: "0.5rem",
          marginBottom: "0.5rem",
          opacity: "0.5",
          fontSize: "0.7rem",
        }}
      >
        By sumitting this form, you agree to the{" "}
        <a
          style={{
            textDecoration: "underline",
            // color: "rgb(17, 160, 245)",
            color: "#121212",
            fontWeight: "bold",
            // opacity: 1,
          }}
          href="/company/policies/terms"
          target="_blank"
        >
          {" "}
          terms and conditions
        </a>{" "}
        of our services
      </div>

      <Submit
        disabled={
          isSubmitting || (ref_username !== "" && useReferral === false)
        }
        // disabled={isSubmitting}

        type="submit"
        onClick={() => {
          // @ts-ignore
          recaptchaRef.current.execute();
        }}
      >
        {isSubmitting && <LoginSpinner />}
        Sign Up
      </Submit>

      {/* <Button
        disabled={isSubmitting}

        type="submit"
        style={{
          marginTop: "1rem",
          marginBottom: "0.5rem",
          backgroundColor: "rgb(17, 160, 245)"
        }}
        // type="button"
        onClick={() => {
          recaptchaRef.current.execute();
        }}

        fullWidth
        variant="contained"
        color="primary"
      // className={classes.submit}
      >
        {isSubmitting && <LoginSpinner />}
        Sign Up
      </Button> */}

      <RegisterWithOauthContainer>
        <LinkToSignIn />

        <Tooltip
          title="Create an account with your Discord email and username"
          arrow
        >
          <RegisterWithOauthButtonWrapper
            onClick={async (e) => {
              e.preventDefault();

              const { data: redirect, error } = await discordRegister(
                ref_username
              );

              if (error) {
                console.log("Discord login response error");
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
            <BsDiscord
              style={{
                // marginLeft: "0.25rem",
                fontSize: "1.5rem",
                color: discord,
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

              const { data: redirect, error } = await linkedinRegister(
                ref_username
              );

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
            <BsLinkedin
              style={{
                fontSize: "1.25rem",
                marginBottom: "0.1rem",
                // color: shadowBlue,
                // color: black,
                color: blue,
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

              const { data: redirect, error } = await githubRegister(
                ref_username
              );

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
            <GitHubIcon
              style={{
                fontSize: "1.25rem",
                marginBottom: "0.1rem",
                color: black,
              }}
            />
          </RegisterWithOauthButtonWrapper>
        </Tooltip>

        {!ref_username && (
          <Tooltip
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
              <BsTwitter
                style={{
                  fontSize: "1.25rem",
                  marginBottom: "0.1rem",
                  color: blue,
                  // color: black,
                }}
              />
            </RegisterWithOauthButtonWrapper>
          </Tooltip>
        )}
      </RegisterWithOauthContainer>

      <div
        style={{
          marginTop: "0.5rem",
        }}
      >
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

          // onloadCallback={() => { console.log("ReCAPTCHA did load."); }}

          // style={{
          //   width: "100%",
          //   display: "inline-lbock",
          // }}
        />
      </div>

      <Dialog
        open={serverError}
        onClose={handleClose}
        aria-labelledby="Register form error"
        aria-describedby="Register form error"
      >
        <DialogTitle id="reigster-error">
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
    </LoginForm>
  );
};

export default RegisterForm;
