import { useState } from "react";
// import { useRouter } from "next/router";

import * as Yup from "yup";
import { useFormik } from "formik";

import {
  usernameValidator,
  subjectValidator,
  privateMessageTextValidator,
  // companyDescriptionValidator,
  // locationValidator,
  // websiteValidator,

  // jobTitleValidator,
  // jobDescriptionValidator,
  // jobTypeValidator,
  // salaryValidator,

  // urlOrEmailValidator,

  // skillsValidator,
} from "../../../validators";
import { sendPrivateMessage } from "../../../api/privateMessage";

// import {
//   createJobPost,
//   updateJobPost,
// } from "../../../../api/job";

const messageComposeValidationSchema = Yup.object({
  to: usernameValidator, // username
  subject: subjectValidator,
  text: privateMessageTextValidator, // Use text here because table name is messages. Should improve this?
});

const useMessageComposeForm = (to) => {
  // const router = useRouter();

  const [sent, setSent] = useState(false);

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
      to,
      subject: "",
      text: "",
    },
    validationSchema: messageComposeValidationSchema,
    onSubmit: async (values, actions) => {
      // console.log("values");
      // console.log(values);

      const { data, error } = await sendPrivateMessage(values);

      if (data) {
        actions.resetForm();

        if (!sent) {
          setSent(true);
        }
        
        return;
      }

      // console.log(error.response);
      if (error.response.data.detail === "username") {
        actions.setErrors({
          to: "The user doesn't exist"
        });
      }

      if (error.response.data.detail === "allow_message") {
        actions.setErrors({
          to: "Please, allow others to send you a new message also before you do"
          // to: "The user doesn't want to receive a message from anybody."
        });
      }

      if (error.response.data.detail === "blocked") {
        actions.setErrors({
          to: "The user doesn't want to receive a message"
          // to: "The user doesn't want to receive a message from anybody."
        });
      }

      if (error.response.data.detail === "receipient_allow_message") {
        actions.setErrors({
          to: "The user doesn't want to receive a message"
          // to: "The receipient doesn't want to receive a message"
          // to: "The user doesn't want to receive a message from anybody."
        });
      }

      if (sent) {
        setSent(false);
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

    sent,
    setSent,
  };
};

export default useMessageComposeForm;