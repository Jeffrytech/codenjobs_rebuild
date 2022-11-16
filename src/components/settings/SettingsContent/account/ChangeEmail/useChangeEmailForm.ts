
// import { useState } from "react";
// import { useRouter } from "next/router";

import * as Yup from "yup";
import { useFormik } from "formik";

import {
  emailValidator,
} from "../../../../../validators";

// import { updateEmail } from "../../../../api/auth";
import { useAuth } from "../../../../../contexts/auth";
import { updateEmail } from "../../../../../api/auth";

// import {
//   createJobPost,
//   updateJobPost,
// } from "../../../../api/job";

const changePasswordValidationSchema = Yup.object({
  email: emailValidator,
});

const useChangePasswordForm = (
  currentEmail,
  setChangeEmail,
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
      email: currentEmail,
    },
    validationSchema: changePasswordValidationSchema,
    onSubmit: async (values, actions) => {
      console.log("values");
      console.log(values);

      try {
        const {
          email,
        } = values;

        if (email === currentEmail) {
          actions.setErrors({
            email: "It should be different from the current one",
          });
          return;
        }

        const {
          data: updateEmailResult,
          error
        } = await updateEmail(email);

        if (updateEmailResult === true) {
          actions.resetForm();
          setChangeEmail(false);

          logout();
          
          return;
        }

        if (error.response.data.detail === "this_email_host_is_not_allowed") {
          actions.setErrors({
            email: "You are not allowed to use this email host",
          });
          return;
        }

        if (error.response.data.detail === "duplicate_email") {
          actions.setErrors({
            email: "The email was already registered",
          });
          return;
        }

        actions.setErrors({
          email: "Something went wrong",
        });
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