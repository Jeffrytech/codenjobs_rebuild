import { useState } from "react";

import { useRouter } from "next/router";

import * as Yup from "yup";
import { useFormik } from "formik";

import {
  emailValidator,
} from "../../../validators";

import { resetPassword } from "../../../api/auth";

// Email - Verify at server to see email exists
const resetPasswordValidationSchema = Yup.object({
  email: emailValidator,
});

const useSignInForm = () => {
  const router = useRouter();

  const [emailSent, setEmailSent] = useState(false);

  const handleClose = () => {
    setEmailSent(false);
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
      email: ""
    },
    validationSchema: resetPasswordValidationSchema,
    onSubmit: async (values, actions) => {
      // console.log("values");
      // console.log(values);

      try {
        const {
          email
        } = values;

        const {
          // @ts-ignore
          // data: resetPasswordEmailSent, // Don't use it because of the security reason?
          error,
        } = await resetPassword(email);

        if (error) {
          actions.setErrors({ email: "Something went wrong" });
          return;
        }

        setEmailSent(true);
      } catch (error) {
        actions.setErrors({ email: "Something went wrong" });
      }
    }
  });

  if (submitCount > 10) {
    router.push("/register");
  }

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
    
    emailSent,
    handleClose,

  };
};

export default useSignInForm;