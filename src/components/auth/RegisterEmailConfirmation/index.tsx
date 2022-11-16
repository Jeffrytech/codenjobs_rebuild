import React, {
  useState,
  useEffect,
} from "react";

import CssBaseline from "@material-ui/core/CssBaseline";

import Cookies from "js-cookie";

import { userInformation, registerEmailConfirm } from "../../../api/auth";
import CenteredInPage from "../../CenteredInPage";

import { useStyles } from "./RegisterEmailConfirmationCSS";
import { apiRequest } from "../../../api/requests";

const RegisterEmailConfirmation = ({
  token,
}) => {
  const classes = useStyles();
  
  const [emailConfirmationError, setEmailConfirmationError] = useState(null);

  useEffect(() => {
    registerEmailConfirm(token)
      .then(async ({ data: access_token, error }) => {
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

            setEmailConfirmationError("Couldn't find your account"); // The server couldn't find the user
          }

          if (user) {
            // Should use widnow.location.assign instead of router api.
            
            // Welcome page instead of this?
            // window.location.assign("/");
            window.location.assign("/settings/profile"); // Should use this instead of router api.
          }
        }

        if (error.response.data.detail === "user_status") {
          setEmailConfirmationError("You already confirmed your email. Please, login.");
          return;
        }

        if (error.response.data.detail === "no_user_register_token") {
          setEmailConfirmationError("The token doesn't exist");
          return;
        }

        if (error.response.data.detail === "jwt_expired") {
          setEmailConfirmationError("The token has expired. Please, use the latest one from your email or request a token again.");
          return;
        }
        
        if (error.response.data.detail === "jwt_claim_error") {
          setEmailConfirmationError("The token is not correct");
          return;
        }

        if (error.response.data.detail === "jwt_error") {
          setEmailConfirmationError("The token has an error. Please verify it or reqeust email again.");
          return;
        }

        setEmailConfirmationError("Something went wrong");
      }).catch(error => {
        console.log("error");
        console.error(error);
      });
  }, []);

  if (emailConfirmationError === null) {
    return null;
  }

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
          {emailConfirmationError}
        </p>
      </div>
    </CenteredInPage>
  );
};

export default RegisterEmailConfirmation;