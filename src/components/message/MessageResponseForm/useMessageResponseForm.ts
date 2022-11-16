import { useState } from "react";
// import { useRouter } from "next/router";

import * as Yup from "yup";
import { useFormik } from "formik";

import {
  privateMessageTextValidator,
} from "../../../validators";
import { sendPrivateMessageResponse } from "../../../api/privateMessageResponse";

const messageComposetValidationSchema = Yup.object({
  text: privateMessageTextValidator, // Use text here because table name is messages. Should improve this?
});

const useMessageResponseForm = (
  messageId,
  setResponseListSent,
) => {
  // const router = useRouter();

  const [sent, setSent] = useState(false);

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
    // submitForm,
  } = useFormik({
    // initialValues: setInitialValues(data),
    initialValues: {
      text: "",
    },
    validationSchema: messageComposetValidationSchema,
    onSubmit: async (values, actions) => {
      // console.log("values");
      // console.log(values);

      const {
        text,
      } = values;

      const {
        data: response,
        error,
      } = await sendPrivateMessageResponse(messageId, text);

      if (response === true) {
        actions.resetForm();

        setResponseListSent(responseListSent =>[{
          text,
          created_at: new Date(),
        }, ...responseListSent] );

        if (!sent) {
          setSent(true);
        }
      }

      if (response === false) {
        // Should improve this?
        if (sent) {
          setSent(false);
        }

        actions.setErrors({
          text: "Something went wrong", // message was absent, user or server problem
        });
      }

      if (error) {
        if (sent) {
          setSent(false);
        }
        // Should improve this?
        actions.setErrors({
          text: "Something went wrong", // The server couldn't send the response;
        });
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
    // submitForm,

    sent,
    setSent,
  };
};

export default useMessageResponseForm;