import React, { useState } from "react";

import { BsLinkedin } from "react-icons/bs";
import Cookies from "js-cookie";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import ErrorIcon from "@material-ui/icons/Error";
import Button from "@material-ui/core/Button";

import { LoginForm, LoginFormInputWrapper, LoginFormLabel, LoginFormTextInput, Submit } from "../login/LoginCSS";
import CenteredInPage from "../../CenteredInPage";
import { blue } from "../../../design/colors";
import { login, userInformation } from "../../../api/auth";
import { apiRequest } from "../../../api/requests";
import { NO_DUPLICATE_EMAIL, NO_DUPLICATE_USERNAME, NO_REFERENCER, NO_REFERENCER_CREATED, NO_USER_REGISTER_REFERRAL, USERNAME_LENGTH_LIMIT, USERNAME_NOT_ALLOWED } from "../Error/Errors";
import { useRouter } from "next/router";
import { Tooltip } from "@mui/material";
import { RegisterWithOauthTextInput, RegisterWithOautInputWrapper } from "../RegisterForm/RegisterFormCSS";
import copyToClipboard from "../../../browser/copyToClipboard";
import SavedLinkToClipboard from "../../SavedLinkToClipboard";
import { useSavedLinkToClipboard } from "../../../contexts/savedLinkToClipboard";

const RegisterWithLinkedInForm = ({
  email,
  username,
  password,
  error,
}) => {
  const router = useRouter();

  // @ts-ignore
  const { setSnackbarOpen } = useSavedLinkToClipboard();

  // alert("error");
  // alert(error);

  const [registerWithLinkedInError, setRegisterWithLinkedInError] = useState(error);
  let registerWithLinkedInErrorMessage = "";
  if (registerWithLinkedInError === NO_DUPLICATE_EMAIL) {
    registerWithLinkedInErrorMessage = "The email was already registered.";
  } else if (registerWithLinkedInError === NO_DUPLICATE_USERNAME) {
    registerWithLinkedInErrorMessage = "The username was already registered."; 
  } else if (registerWithLinkedInError === USERNAME_LENGTH_LIMIT) {
    registerWithLinkedInErrorMessage = "The username was longer than our website."; 
  } else if (registerWithLinkedInError === USERNAME_NOT_ALLOWED) {
    registerWithLinkedInErrorMessage = "The username is not allowed. Please, use another option";
  } else if (registerWithLinkedInError === NO_REFERENCER) {
    registerWithLinkedInErrorMessage = "Your account was created but there was no referencer.";
  } else if (registerWithLinkedInError === NO_REFERENCER_CREATED) {
    registerWithLinkedInErrorMessage = "Your account was created but the referencer was not created";
  } else if (registerWithLinkedInError === NO_USER_REGISTER_REFERRAL) {
    registerWithLinkedInErrorMessage = "Your account was created but there was no user register referral";
  } else {
    registerWithLinkedInErrorMessage = "Something went wrong";
    // return;
  }

  const handleClose = () => {
    setRegisterWithLinkedInError("");
    
    if (registerWithLinkedInError === NO_DUPLICATE_EMAIL) {
      window.location.href = "/register";
      // router.push("/register");
    } else if (registerWithLinkedInError === NO_DUPLICATE_USERNAME) {
      window.location.href = "/register";
      // setRegisterWithLinkedInError("");

      window.location.href = "/register";
    } else if (registerWithLinkedInError === USERNAME_LENGTH_LIMIT) {
      // router.push("/register");
      // setRegisterWithLinkedInError("");

      window.location.href = "/register";
    } else if (registerWithLinkedInError === USERNAME_NOT_ALLOWED) {
      // router.push("/register");
      // setRegisterWithLinkedInError("");

      window.location.href = "/register";
    } else if (registerWithLinkedInError === NO_REFERENCER) {
      setRegisterWithLinkedInError("");
    } else if (registerWithLinkedInError === NO_REFERENCER_CREATED) {
      setRegisterWithLinkedInError("");
    } else if (registerWithLinkedInError === NO_USER_REGISTER_REFERRAL) {
      setRegisterWithLinkedInError("");
    } else {
      // router.push("/register");
      window.location.href = "/register";
    }
  };

  return (
    <>
    
      <CenteredInPage>
        <div style={{
          maxWidth: "21rem",
          minHeight: "100vh",

          paddingTop: "4rem",
          paddingBottom: "4rem",
        }}>
          <LoginForm>
            <div
              style={{
                display: "flex",
                alignItems: "cetner",
                justifyContent: "center",
                width: "100%",
                color: blue
              // fontSize: "2rem",
              }}
            >
              <BsLinkedin style={{
                fontSize: "1.75rem"
              }} />

              <span
                style={{
                  fontSize: "1.5rem",
                  marginLeft: "0.5rem",
                }}
              >
              LinkedIn
              </span>
            </div>
            <span
              style={{
                marginTop: "0.5rem",
                marginBottom: "0.25rem",
                opacity: 0.5,
              }}
            >
            Use your new account details to sign in
            </span>

            <LoginFormLabel htmlFor="email" >
            Email
            </LoginFormLabel>
            <LoginFormInputWrapper>
              <LoginFormTextInput
                disabled 

                id="email"
                name="email"
                type="email"

                // placeholder={"email@codenjobs.com"}

                autoComplete="email"

                required

                value={email.toLowerCase().replace(/\s/g, "")}
              />
            </LoginFormInputWrapper>

            <LoginFormLabel htmlFor="username" >
              Username
            </LoginFormLabel>
            <LoginFormInputWrapper>
              <LoginFormTextInput
                disabled
                id="username"
                name="username"
                type="username"

                required

                value={username}
              />
            </LoginFormInputWrapper>

          
            <LoginFormLabel htmlFor="password" >
              <div style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
              }}>
                Password
              </div>
            </LoginFormLabel>
            <Tooltip
              title="Copy the password to the clipboard"
              arrow
            >
              <RegisterWithOautInputWrapper
                onClick={(e) => {
                  e.preventDefault();
                  // alert(password);
                  copyToClipboard(password);
                  setSnackbarOpen(true);
                }}
              >
                <RegisterWithOauthTextInput
                  disabled
                  id="password"
                  name="password"

                  type={"text"}

                  required

                  value={password}
                />
              </RegisterWithOautInputWrapper>
            </Tooltip>


            <Submit
              type="button"
              onClick={async () => {
              // alert(username);
              // alert(password);
              
                const {
                // @ts-ignore
                  data: access_token,
                  error: loginError,
                } = await login(username, password);
              
                // alert(access_token);

                // if (loginError) {
                //   if (loginError.response.data.detail === "username") {
                //     actions.setErrors({ username: `The username is not registered(${submitCount - 1})` });
                //     return;
                //   }

                //   if (loginError.response.data.detail === "unconfirmed") {
                //     actions.setErrors({ username: `Confirm your account with your email first(${submitCount - 1})` });
                //     return;
                //   }

                //   if (loginError.response.data.detail === "password") {
                //     actions.setErrors({ password: `The password is not correct(${submitCount - 1})` });
                //     return;
                //   }

                //   if (loginError.response.data.detail === "this_ip_is_not_allowed") {
                //     setServerError(true);
                //     return;
                //   }

                //   // Unhandled error happened at the server
                //   setServerError(true);
                //   return;
                // }

                if (access_token) {
                  const week = 7; // 10080 minutes,
                  Cookies.set("access_token", access_token, { expires: week });
                  apiRequest.defaults.headers.Authorization = `Bearer ${access_token}`;

                  const {
                    data: user,
                    error: userError, // No user
                  } = await userInformation();

                  if (userError) {
                    Cookies.remove("access_token");
                    delete apiRequest.defaults.headers.Authorization;

                    return;
                  }

                  if (user) {
                    window.location.pathname = "/settings/account"; 
                  
                    return;
                  }
                }

              }}
            >
              Sign In
            </Submit>

            {registerWithLinkedInError.length !== 0 && <Dialog
              open={registerWithLinkedInError.length !== 0}
              onClose={handleClose}
              aria-labelledby="Register with LinkedIn error"
              aria-describedby="Register form error"
            >
              <DialogTitle id="Register with LinkedIn error">
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  color: "#ff1676",
                }}>
                  <ErrorIcon /> <span style={{ marginLeft: "0.25rem" }}>Error</span>
                </div>
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="register-with-linkedin-error-description">
                  {registerWithLinkedInErrorMessage}
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button
                  onClick={handleClose}
                  color="primary"
                >
                  Close
                </Button>
              </DialogActions>
            </Dialog>}

          </LoginForm>
        </div>
      </CenteredInPage>

      <SavedLinkToClipboard />
    </>
    
  );
};

export default RegisterWithLinkedInForm;