import { useState } from "react";

// import { useRouter } from "next/router";
import { useRouter } from "next/router";

import * as Yup from "yup";
import { useFormik } from "formik";

import {
  // nameValidator,
  usernameValidator,
  emailValidator,
  passwordValidator,

  recaptchaValidator
} from "../../../validators";

import { register } from "../../../api/auth";

// Username - Verify at server also to see email was taken
// Email - Verify at server also to see email was taken
const registerValidationSchema = Yup.object({
  // Company
  email: emailValidator,
  username: usernameValidator, // Use usernameValidator instead?
  password: passwordValidator,

  recaptcha: recaptchaValidator,
  // recapcha: string, required here?
});

const useRegisterForm = ({
  ref_username
}) => {
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
  } = useFormik({
    // initialValues: setInitialValues(data),
    initialValues: {
      email: "",
      username: "",
      password: "",

      recaptcha: "",
      // recaptcha: null,

      // serverError: "",
    },
    validationSchema: registerValidationSchema,
    onSubmit: async (values, actions) => {
      // recaptchaRef.current.execute();
      // console.log("values");
      // console.log(values);
      // alert(values);
      // return;

      try {
        const {
          email,
          username,
          password,

          recaptcha,
        } = values;

        // console.log("recapcha onSubmit");
        // console.log(recaptcha);

        // console.log(email, username, password, recaptcha);

        if (username === ref_username) {
          // actions.setErrors({ username: "The username should be different from ref_username" });
          actions.setErrors({ username: "It should be different from ref_username" });
          return;
        }

        const {
          // @ts-ignore
          data: registered,
          // @ts-ignore
          error,
        } = await register(
          // email, username.toLocaleLowerCase(), password, recaptcha
          email, username.toLocaleLowerCase(), password, recaptcha, ref_username,
        );

        if (error) {
          if (error.response.data.detail === "email") {
            actions.setErrors({ email: "The email was already registered" });
            return;
          }

          if (error.response.data.detail === "username") {
            actions.setErrors({ username: "The username was already registered" });
            return;
          }

          if (error.response.data.detail === "username_exceptions") {
            actions.setErrors({ username: "The username is preserved" }); // Or instead of this, allow only accounts in the list.
            return;
          }

          if (error.response.data.detail === "this_ip_is_not_allowed") {
            setServerError(true);
            return;
          }
          
          if (error.response.data.detail === "this_email_hostname_is_not_allowed") {
            setServerError(true);
            return;
          }

          if (error.response.data.detail === "this_email_is_not_allowed") {
            setServerError(true);
            return;
          }

          if (error.response.data.detail === "no_referencer") {
            actions.setErrors({ username: "There was no referencer with the username" });
            // setServerError(true);
            // actions.setErrors({ recaptcha: "Something wrong with recaptcha" });
            return;
          }

          if (error.response.data.detail === "no_referencer_was_created") {
            actions.setErrors({ username: "The server didn't create a reference" });
            // setServerError(true);
            // actions.setErrors({ recaptcha: "Something wrong with recaptcha" });
            return;
          }

          if (error.response.data.detail === "not_in_user_register_referencer_list") {
            actions.setErrors({ username: "The ref_username is not in the user register referencer list" });
            // setServerError(true);
            // actions.setErrors({ recaptcha: "Something wrong with recaptcha" });
            return;
          }

          if (error.response.data.detail === "recaptcha") {
            setServerError(true);
            // actions.setErrors({ recaptcha: "Something wrong with recaptcha" });
            return;
          }

          setServerError(true);

          // actions.setFieldValue("serverError", "Something went wrong at the server");
          // setServerError("Something went wrong at the server");

          // Show modal or something here.
          // console.log("error.response.data.detail");
          // console.log(error.response.data.detail);

          // alert(error.response.data.message);
          // Should improve this with server.
          // Set error message

          // console.log("error");
          // console.error(error);
          // console.error(typeof (error));
        }

        if (registered === true) {
          // router.push("/signin") With email, it should be another page with link to signin and help message.
          // router.push("/signin");
          if (ref_username !== "") {
            router.push(`/register/email/send?&username=${username}&email=${email}&ref_username=${ref_username}`);
          } else {
            router.push(`/register/email/send?&username=${username}&email=${email}`);
          }
        }

      } catch (error) {
        setServerError(true);
        // Server is not working
        // alert("The server is not working correctly, please report");
        // actions.setFieldValue("serverError", "Something went wrong at the server");

        // setServerError("The server is not working correctly, please report");
      }
    }
  });

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

    serverError,
    handleClose,
  };
};

export default useRegisterForm;

// if (id === null) {
//   const { data, error } = await register(values);

//   if (error) {
//     // eslint-disable-next-line no-useless-return
//     return;
//   }

//   if (data) {
//     // console.log("data");
//     // console.log(data);

//     // Send to something else?
//     window.history.replaceState("", "", `/job/post?&id=${data}`);
//     // router.replace(`/job/post?&id=${data}`);
//     router.push(`/job/post/preview?&id=${data}`);
//   }
// } else {
//   const { data, error } = await updateJobPost(id, values);

//   if (error) {
//     console.error(error);
//     // eslint-disable-next-line no-useless-return
//     return;
//   }

//   if (data) {
//     router.push(`/job/post/preview?&id=${data}`);
//   }
// }