import React, {
  useState,
  useEffect,
} from "react";

import CssBaseline from "@material-ui/core/CssBaseline";

import CenteredInPage from "../../CenteredInPage";

import { useStyles } from "./ResetPasswordConfirmationCSS";

import { resetPasswordConfirm } from "../../../api/auth";

const ResetPasswordConfirmation = ({
  token,
}) => {
  const classes = useStyles();
  
  const [newPassword, setNewPassword] = useState(null);
  const [resetPasswordConfirmationError, setResetPasswordConfirmationError] = useState(null);

  useEffect(() => {
    resetPasswordConfirm(token)
      .then(async ({ data, error }) => {
        if (data) {
          setNewPassword(data);
          return;
        }

        if (error.response.data.detail === "unconfirmed") {
          setResetPasswordConfirmationError("You should confirm your email first");
          return;
        }

        if (error.response.data.detail === "no_user_register_token") {
          setResetPasswordConfirmationError("The token doesn't exist. Please reqeust a email to reset password again.");
          return;
        }

        if (error.response.data.detail === "password_reset") {
          setResetPasswordConfirmationError("Couldn't reset password");
          return;
        }

        if (error.response.data.detail === "jwt_expired") {
          setResetPasswordConfirmationError("The token has expired. Please, use the latest one from your email or reqeust a email to reset password again.");
          return;
        }
        
        if (error.response.data.detail === "jwt_claim_error") {
          setResetPasswordConfirmationError("The token is not correct");
          return;
        }

        if (error.response.data.detail === "jwt_error") {
          setResetPasswordConfirmationError("The token has an error. Please verify it or reqeust a email to reset password again.");
          return;
        }

        setResetPasswordConfirmationError("Something went wrong");
      }).catch(error => {
        console.log("error");
        console.error(error);
      });
  }, []);

  if (newPassword) {
    return (
      <CenteredInPage style={{
        marginTop: "-5rem",
      }}>
        <CssBaseline />
        <div className={classes.paper}>
          <h1 style={{
            textAlign: "center",
            margin: 0,
            // margin: "0 0 0.5rem 0",
          }}>
            New Password
          </h1>
          <p style={{
            // color: "#ff1676",
            margin: "0.5rem 0",
            wordBreak: "break-all",
          }}>
            Please, use <b>{newPassword}</b> to {
              " "
            }
            <a style={{
              textDecoration: "none",
              color: "rgb(17, 160, 245)",
            }} href="/signin" target="_blank" rel="noopener noreferrer" >login</a> {
              " "
            } to your account again.
          </p>

          <span style={{
            fontSize: "0.8rem",
            opacity: "0.7"
          }}>
            You will not be able to see this password again. Please, save it first.
          </span>
        </div>
      </CenteredInPage>
    );
  }

  if (resetPasswordConfirmationError) {
    return (
      <CenteredInPage style={{
        // marginTop: "-5rem",
      }}>
        <CssBaseline />
        <div className={classes.paper}>
          <h1 style={{
            textAlign: "center",
            margin: 0,
            // margin: "0 0 0.5rem 0",
          }}>
            Error
          </h1>
          <p style={{
            color: "#ff1676",
            margin: "0.5rem 0",
          }}>
            {resetPasswordConfirmationError}
          </p>
        </div>
      </CenteredInPage>
    );
  }

  return null;
};

export default ResetPasswordConfirmation;