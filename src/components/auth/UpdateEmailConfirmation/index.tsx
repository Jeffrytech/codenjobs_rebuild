import React, {
  useState,
  useEffect,
} from "react";

import CssBaseline from "@material-ui/core/CssBaseline";

import CenteredInPage from "../../CenteredInPage";

import { useStyles } from "./UpdateEmailConfirmationCSS";

import { updateEmailConfirm } from "../../../api/auth";

const UpdateEmailConfirmation = ({
  token,
}) => {
  const classes = useStyles();
  
  const [newEmail, setNewEmail] = useState(null);
  const [updateEmailConfirmationError, setUpdateEmailConfirmationError] = useState(null);

  useEffect(() => {
    updateEmailConfirm(token)
      .then(async ({ data, error }) => {
        if (data) {
          setNewEmail(data);
          return;
        }

        if (error.response.data.detail === "unconfirmed") {
          setUpdateEmailConfirmationError("You should confirm your email first");
          return;
        }

        if (error.response.data.detail === "no_user_update_email_token") {
          setUpdateEmailConfirmationError("The token doesn't exist. Please reqeust a email to update email again.");
          return;
        }

        if (error.response.data.detail === "email_update") {
          setUpdateEmailConfirmationError("Couldn't update email");
          return;
        }

        if (error.response.data.detail === "jwt_expired") {
          setUpdateEmailConfirmationError("The token has expired. Please, use the latest one from your email or reqeust a email to reset password again.");
          return;
        }
        
        if (error.response.data.detail === "jwt_claim_error") {
          setUpdateEmailConfirmationError("The token is not correct");
          return;
        }

        if (error.response.data.detail === "jwt_error") {
          setUpdateEmailConfirmationError("The token has an error. Please verify it or reqeust a email to reset password again.");
          return;
        }

        setUpdateEmailConfirmationError("Something went wrong");
      }).catch(error => {
        console.log("error");
        console.error(error);
      });
  }, []);

  if (newEmail) {
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
            New Email
          </h1>
          <p style={{
            // color: "#ff1676",
            margin: "0.5rem 0",
            wordBreak: "break-all",
          }}>
            We could update your email to <b>{newEmail}</b>. {
              " "
            }
            You can {
              " "
            }
            <a style={{
              textDecoration: "none",
              color: "rgb(17, 160, 245)",
            }} href="/signin" target="_blank" rel="noopener noreferrer" >login</a> {
              " "
            } to your account again.
          </p>

          {/* <span style={{
            fontSize: "0.8rem",
            opacity: "0.7"
          }}>
            You will not be able to see this page again.
          </span> */}
        </div>
      </CenteredInPage>
    );
  }

  if (updateEmailConfirmationError) {
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
            Error
          </h1>
          <p style={{
            color: "#ff1676",
            margin: "0.5rem 0",
          }}>
            {updateEmailConfirmationError}
          </p>
        </div>
      </CenteredInPage>
    );
  }

  return null;
};

export default UpdateEmailConfirmation;