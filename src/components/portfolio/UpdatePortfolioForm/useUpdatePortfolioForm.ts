import { useFormik } from "formik";

import * as Yup from "yup";
import { updatePortfolio } from "../../../api/privatePortfolio";
import { portfolioTitleValidator, websiteValidator, portfolioDescriptionValidator } from "../../../validators";

const portfolioValidationSchema = Yup.object({
  title: portfolioTitleValidator,
  link: websiteValidator,
  description: portfolioDescriptionValidator,
});

const useUpdatePortfolioForm = (
  // setChangeEmail,

  // setShowUpdatePortfolioForm,
  // setPortfolioIdToUpdate,

  // showUpdatePortfolioForm,

  setShowUpdatePortfolioForm,
  portfolioIdToUpdate,
  setPortfolioIdToUpdate,
) => {
  // alert(portfolioIdToUpdate);

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
    // initialValues: setInitialValues(data),
    initialValues: {
      image: null,
      title: "",
      link: "",
      description: "",
    },
    validationSchema: portfolioValidationSchema,
    onSubmit: async (values, actions) => {
      // console.log("values");
      // console.log(values);

      try {
        const { data, error } = await updatePortfolio(portfolioIdToUpdate, values);

        if (error) {
          // eslint-disable-next-line no-useless-return
          console.log("update portfolio error");
          console.error(error);

          // if (error.response) {
          //   const errorPoint = error.response.data.detail[0].loc[1];
          //   document.getElementById(errorPoint).focus();
          // }

          return;
        }

        if (data) {
          resetForm();
          setShowUpdatePortfolioForm(false);
          
          window.location.reload();
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

export default useUpdatePortfolioForm;