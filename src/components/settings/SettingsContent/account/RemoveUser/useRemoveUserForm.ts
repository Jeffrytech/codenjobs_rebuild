// import { useState } from "react";
// import { useRouter } from "next/router";

import * as Yup from "yup";
import { useFormik } from "formik";

import {
  nameValidator,
  passwordValidator,
} from "../../../../../validators";

import { useAuth } from "../../../../../contexts/auth";
import { deleteAccount } from "../../../../../api/auth";

// import {
//   createJobPost,
//   updateJobPost,
// } from "../../../../api/job";

const changePasswordValidationSchema = Yup.object({
  // Company

  username: nameValidator,
  password: passwordValidator,

  // newPassword: passwordValidator,
  // confirmPassword: passwordValidator,
});

const useRemoveUserForm = (
  setRemoveUser
) => {
  const {
    // @ts-ignore
    logout,
  } = useAuth;

  // const router = useRouter();

  const {
    handleSubmit,

    handleChange,
    handleBlur,

    values,
    errors,
    touched,

    // setFieldValue,
    // setValues,

    isSubmitting,
    submitForm,

    resetForm,
  } = useFormik({
    // initialValues: setInitialValues(data),
    initialValues: {
      username: "",
      password: "",

      // newPassword: "",
      // confirmPassword: "",
    },
    validationSchema: changePasswordValidationSchema,
    onSubmit: async (values, actions) => {
      // console.log("values");
      // console.log(values);

      try {
        const {
          username,
          password,
        } = values;

        const {
          data: deleteAccountResult,
          error,
        } = await deleteAccount(username, password);

        if (deleteAccountResult === true) {
          resetForm();
          setRemoveUser(false);
          // logout();
          // window.location.assign("/signin");
          window.location.reload();
          
          return;
        }

        if (deleteAccountResult === false) {
          actions.setErrors({
            username: "Something went wrong while we delete this account",
          });

          return;
        }

        if (error.response.data.detail === "no_username") {
          actions.setErrors({
            username: "The username is not correct",
          });

          return;
        }

        if (error.response.data.detail === "username") {
          actions.setErrors({
            username: "The username is not correct",
          });

          return;
        }

        if (error.response.data.detail === "password") {
          actions.setErrors({
            password: "The password is not correct",
          });
          return;
        }

        // Should handle this better
        // alert("")
        actions.setErrors({
          password: "Something went wrong",
        });

        console.log("Unhandled error");
        console.error(error.response);
      } catch (error) {
        console.log("Error from the server");
        console.error(error);
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

    // setFieldValue,
    // setValues,
    // setFieldTouched,

    isSubmitting,
    submitForm,

    resetForm,
  };
};

export default useRemoveUserForm;