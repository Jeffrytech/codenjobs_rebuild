// import { useState } from "react";
// import { useRouter } from "next/router";

// import * as Yup from "yup";
import { useFormik } from "formik";

import { uploadFile } from "../../api/privateFile";

const useUploadImageForm = () => {
  // const router = useRouter();

  const {
    handleSubmit,

    handleChange,
    handleBlur,

    values,
    errors,
    touched,

    setFieldValue,
    setValues,

    setFieldError,

    isSubmitting,
    submitForm,
  } = useFormik({
    enableReinitialize: true,
    // initialValues: setInitialValues(data),
    initialValues: {
      imageFile: null,
      imagePath: null,
      imageId: null,
    },
    // validationSchema: jobPostValidationSchema,
    onSubmit: async (
      values,
      // actions
    ) => {
      try {
        const {
          imageFile
        } = values;

        // console.log(imageFile)
        const { data, error: uploadMediaError } = await uploadFile(imageFile);

        if (data) {
          // ![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ldfp9juuff0m267jiv7x.png)
          // setFieldValue("imagePath", useMarkdown ? `![Alt text](${data.media})` : data.media);
          setFieldValue("imagePath", data.path_to_file);
          setFieldValue("imageId", data.id);
          return;
        }

        if (uploadMediaError && uploadMediaError.response.data.detail) {
          console.log("error");
          console.error(uploadMediaError.response.data.detail);

          setFieldError("imageFile", `${uploadMediaError.response.data.detail} is not supported`);
                    
          return;
        }
                
      } catch (error) {
        // alert(error);
        console.log("catch error");
        console.error(error);

        // setFieldError("imageFile", `${uploadMediaError.response.data.detail} is not supported`);
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
    setFieldError,

    isSubmitting,
    submitForm,
  };
};

export default useUploadImageForm;