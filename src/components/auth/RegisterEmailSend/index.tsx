import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import EmailIcon from "@material-ui/icons/Email";

// import useRegisterConfirmationForm from "./useRegisterConfirmationForm";

import { useStyles } from "./RegisterEmailSendCSS";

import { isUserUnconfirmed } from "../../../api/user";
import { registerEmailResend, deleteUnconfirmedUser } from "../../../api/auth";
import { LoginCompanyLogo } from "../login/LoginCSS";

const RegisterEmailSend = ({ username, email, ref_username }) => {
  const [emailSent, setEmailSent] = useState(false);

  const handleClose = () => {
    setEmailSent(false);
  };

  const router = useRouter();

  useEffect(() => {
    isUserUnconfirmed(username)
      .then(({ data: userUnconfirmed, error }) => {
        if (userUnconfirmed === false) {
          // The user already have passed the email verification
          router.replace("/signin");
        }

        if (error && error.response.data.detail === "no_user") {
          router.replace("/register");
        }
      })
      .catch((error) => {
        console.log("error");
        console.error(error);
      });
  }, []);

  const classes = useStyles();

  return (
    <form
      className={classes.form}
      // onSubmit={handleSubmit}
    >
      <LoginCompanyLogo
        src="/static/logo.svg"
        alt="logo"
        style={{
          marginLeft: "-0.5rem",
        }}
      />
      <h1
        style={{
          textAlign: "center",
          margin: "0.5rem 0 0.5rem -0.15rem",
          fontSize: "1.5rem",

          display: "flex",
          alignItems: "center",
          // justifyContent: "center",
        }}
      >
        {/* Welcome! */}
        Code&Jobs
        {/* Welcome to Code&Jobs */}
      </h1>

      <div>
        <span>{username !== "" ? `${username}, ` : ""}</span> we will send you a
        verification email in a few minutes. Please, confirm it first before you
        login to your account.
      </div>

      <Button
        // disabled={isSubmitting}
        onClick={async (e) => {
          // Should handle error better
          e.preventDefault();

          const {
            // @ts-ignore
            data,
            // @ts-ignore
            error,
          } = await registerEmailResend(username);

          if (data === true) {
            // alert(data);
            setEmailSent(data);
          }

          // console.log(error);
          // console.log(error.response);

          // if (error && error.response.data.detail === "no_user") {
          //   router.replace("/register");
          //   return;
          // }

          // if (error && error.response.data.detail === "not_unconfirmed") {
          //   router.replace("/signin");
          // }
        }}
        type="button"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.resend}
      >
        SEND EMAIL AGAIN
      </Button>

      <Button
        onClick={async (e) => {
          // Should handle error better

          e.preventDefault();
          // @ts-ignore
          // eslint-disable-next-line no-undef
          const confirmed = confirm(
            `${email} was used for sign up. Do you want to register again with another email?`
          );

          if (confirmed) {
            const {
              // @ts-ignore
              data,
              // @ts-ignore
              error,
            } = await deleteUnconfirmedUser(username);

            if (data === true) {
              if (ref_username === "") {
                router.replace("/register");
              } else {
                router.replace(`/register?ref_username=${ref_username}`);
              }
              // return;
            }

            // if (data === false) {
            //   alert("false");
            //   router.replace("/register");
            //   return;
            // }

            // if (error) {
            //   alert("Something went wrong");
            // }

            // router.replace("/register");
            // // removeToken at the server
          }
        }}
        type="button"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.reregister}
      >
        I MISTYPED EMAIL OR USERNAME
      </Button>

      <Dialog
        open={emailSent}
        onClose={handleClose}
        aria-labelledby="Register form error"
        aria-describedby="Register form error"
      >
        <DialogTitle id="regitser-email-resent-title">
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
          <DialogContentText id="register-email-resent-description">
            The account confirmation email was sent again. Please, verify your
            email <b>{email}</b> in a few minutes.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </form>
  );
};

export default RegisterEmailSend;
