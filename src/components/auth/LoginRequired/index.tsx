import React from "react";

import Avatar from "@material-ui/core/Avatar";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import Button from "@material-ui/core/Button";
import { useLoginRequired } from "../../../contexts/loginRequired";
import { SignInButton, SignUpButton } from "./LoginRequiredCSS";
// import Container from "@material-ui/core/Container";

// import useRegisterForm from "./useSignInForm";

const LoginRequired = () => {
  // @ts-ignore
  const { loginRequired, setLoginRequired } = useLoginRequired();

  const handleClose = () => {
    setLoginRequired({
      show: false,
      title: loginRequired.title,
      description: loginRequired.description,
      from: null,
    });
  };

  const loginRedirect =
    loginRequired.from === null
      ? "/signin"
      : `/signin?from=${loginRequired.from}`;

  return (
    <Dialog
      open={loginRequired.show}
      onClose={handleClose}
      aria-labelledby="Login required modal"
      aria-describedby="Login required modal"
    >
      <DialogTitle id="login-required-modal">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            // color: red,
            // color: blue,
            marginLeft: "-0.25rem",
          }}
        >
          <div>
            <Avatar
              // alt={username}
              src={"/static/logo.svg"}
            />
          </div>
          <span style={{ marginLeft: "0.25rem" }}>{loginRequired.title}</span>
          {/* <ErrorIcon /> <span style={{ marginLeft: "0.25rem" }}>Login Required</span> */}
        </div>
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="login-required-modal-description">
          {loginRequired.description}
        </DialogContentText>

        <div
          style={{
            display: "flex",
            flexFlow: "column",
          }}
        >
          <SignInButton href={loginRedirect}>
            {/* <CodeIcon /> */}
            <span
              style={{
                marginLeft: "0.25rem",
              }}
            >
              Sign In
            </span>
          </SignInButton>

          <SignUpButton href="/register">
            {/* <MonetizationOnIcon /> */}
            <span
              style={{
                marginLeft: "0.25rem",
              }}
            >
              Sign Up
            </span>
          </SignUpButton>
        </div>
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
  );
};

export default LoginRequired;
