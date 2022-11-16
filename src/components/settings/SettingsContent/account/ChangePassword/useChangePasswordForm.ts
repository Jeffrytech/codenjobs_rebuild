// import { useState } from "react";
// import { useRouter } from "next/router";

import * as Yup from "yup";
import { useFormik } from "formik";

import {
  passwordValidator,
} from "../../../../../validators";

import { useAuth } from "../../../../../contexts/auth";
import { changePassword } from "../../../../../api/auth";

// import {
//   createJobPost,
//   updateJobPost,
// } from "../../../../api/job";

const changePasswordValidationSchema = Yup.object({
  // Company
  oldPassword: passwordValidator,

  newPassword: passwordValidator,
  confirmPassword: passwordValidator,
});

const useChangePasswordForm = (
  setChangePassword
) => {
  const {
    // @ts-ignore
    logout,
  } = useAuth();
  
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
      oldPassword: "",

      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: changePasswordValidationSchema,
    onSubmit: async (values, actions) => {
      // console.log("values");
      // console.log(values);

      try {
        const {
          oldPassword,

          newPassword,
          confirmPassword
        } = values;

        if (newPassword !== confirmPassword) {
          actions.setErrors({
            confirmPassword: "Passwords should be equal",
          });
          return;
        }

        const {
          data: changePasswordResult,
          error
        } = await changePassword(oldPassword, newPassword);

        if (changePasswordResult) {
          actions.resetForm();
          setChangePassword(false);

          logout();
        } else {
          actions.setErrors({
            oldPassword: "Use the correct current password."
          });
        }

        if (error) {
          console.log("Unhandled error");
          console.error(error);
        }
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

export default useChangePasswordForm;