import { useState } from "react";

// import { useRouter } from "next/router";
import { useRouter } from "next/router";

import * as Yup from "yup";
import { useFormik } from "formik";

import Cookies from "js-cookie";
import { apiRequest } from "../../../api/requests";
import { login, loginRecaptcha, userInformation } from "../../../api/auth";

import {
  usernameValidator,
  passwordValidator,
  recaptchaValidator,
} from "../../../validators";

// Email - Verify at server to see email exists
const signinValidationSchema = Yup.object({
  username: usernameValidator, // Use usernameValidator instead?
  password: passwordValidator,
  recaptcha: recaptchaValidator,
});

const useSignInForm = (from) => {
  const router = useRouter();

  const [serverError, setServerError] = useState(false);

  const handleClose = () => {
    setServerError(false);
    window.location.reload();
  };

  const {
    handleSubmit,

    handleChange,
    handleBlur,

    values,
    errors,
    touched,

    setFieldValue,
    setValues,

    isSubmitting,
    submitForm,

    submitCount,
  } = useFormik({
    // initialValues: setInitialValues(data),
    initialValues: {
      username: "",
      password: "",

      recaptcha: "",

      // serverError: "",
    },
    validationSchema: signinValidationSchema,
    onSubmit: async (values, actions) => {
      // console.log("values");
      // console.log(values);

      // alert(submitCount);

      try {
        const {
          username,
          password,
          recaptcha,
        } = values;

        const {
          // @ts-ignore
          data: access_token,
          error: loginError,
        } = submitCount >= 6 ? await loginRecaptcha(recaptcha, username, password) : await login(username, password);
        // 5

        if (access_token) {
          // https://github.com/js-cookie/js-cookie
          // Should be same to the server to expire.
          // const inHalfHour = 1 / 48; // 30 mnutes,
          const week = 7; // 10080 minutes,
          Cookies.set("access_token", access_token, { expires: week });
          apiRequest.defaults.headers.Authorization = `Bearer ${access_token}`;

          const {
            data: user,
            error: userError, // No user
          } = await userInformation();

          // if (userError.response.data.detail === "user") {
          if (userError) {
            // TODO
            // Reanme this to user_token or user_access_token etc
            Cookies.remove("access_token");
            delete apiRequest.defaults.headers.Authorization;

            setServerError(true); // The server couldn't find the user
            return;
          }

          if (user) {
            // router.replace("/");

            if (from) {
              const redirect = window.location.search.split("from=")[1];
              window.location.assign(redirect);
              return;
            }
            
            window.location.pathname = "/"; // Should use this instead of router api.
            return;
          }
        }

        if (loginError) {
          if (loginError.response.data.detail === "username") {
            actions.setErrors({ username: `The username is not registered(${submitCount - 1})` });
            return;
          }

          if (loginError.response.data.detail === "unconfirmed") {
            actions.setErrors({ username: `Confirm your account with your email first(${submitCount - 1})` });
            return;
          }

          if (loginError.response.data.detail === "password") {
            actions.setErrors({ password: `The password is not correct(${submitCount - 1})` });
            return;
          }

          // if (submitCount <= 5) {
          //   return;
          // }

          if (submitCount >= 5) {
            if (loginError.response.data.detail === "recaptcha") {
              // actions.setErrors({ password: "Something is wrong at your login attempt" });
              setServerError(true);
              return;
            }
          }


          // if (submitCount == 10) {
          //   setServerError(true);
          // }

          // if (submitCount >= 5) {
          //   router.push("/reset-password");
          // }

          // if (loginError.response.data.detail === "server") {
          //   actions.setErrors({ password: "Something went wrong at your login attempt" });
          //   return;
          // }

          if (loginError.response.data.detail === "this_ip_is_not_allowed") {
            setServerError(true);
            return;
          }

          // Unhandled error happened at the server
          setServerError(true);
          return;
        }

        setServerError(true);
      } catch (error) {
        console.log("error");
        console.error(error);
        // Server is not running.
        setServerError(true);
        return;
      }
    }
  });

  // if (submitCount > 10) {
  //   router.push("/reset-password");
  // }

  return {
    handleSubmit,

    handleChange,
    handleBlur,

    values,
    errors,
    touched,

    setFieldValue,
    setValues,
    // setFieldTouched,

    isSubmitting,
    submitForm,
    
    submitCount,
    
    serverError,
    handleClose,

  };
};

export default useSignInForm;