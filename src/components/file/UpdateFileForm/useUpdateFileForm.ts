import { useFormik } from "formik";

import * as Yup from "yup";
import { updateFileDetails } from "../../../api/privateFile";
import { fileTitleValidator, fileDescriptionValidator } from "../../../validators";

const fileDetailsValidationSchema = Yup.object({
  title: fileTitleValidator,
  description: fileDescriptionValidator,
});

const useUpdateFileForm = (
  // setShowUpdateFileForm,
  fileIdToUpdate,
  setFileList,
  // setFileIdToUpdate,
) => {
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

    resetForm,
  } = useFormik({
    initialValues: {
      title: "",
      description: "",
    },
    validationSchema: fileDetailsValidationSchema,
    onSubmit: async (values, actions) => {
      // console.log("values");
      // console.log(values);

      try {
        // alert("updateFileDetails");

        const { data, error } = await updateFileDetails(fileIdToUpdate, values);

        if (error) {
          // TODO 
          // Show error message here
          alert("Something went wrong");

          return;
        }

        
        if (data) {

          setFileList(fileList => {
            const updatedFileList = fileList.map((file => {
              if (file.id === fileIdToUpdate) {
                return {
                  ...file,
                  title: data.title,
                  description: data.description,
                };
              } else {
                return file;
              }
            }));

            return updatedFileList;
          });
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

    setFieldValue,
    setValues,
    // setFieldTouched,

    isSubmitting,
    submitForm,

    resetForm,
  };
};

export default useUpdateFileForm;