// import { useState } from "react";
// import { useRouter } from "next/router";

import * as Yup from "yup";
import { useFormik } from "formik";

import { useRouter } from "next/router";
import { scrollToTop } from "../../../browser/scroll";

const useMainJobSearchForm = () => {
  const router = useRouter();

  const {
    handleSubmit,

    handleChange,
    handleBlur,

    values,
    errors,
    touched,

    setFieldValue,
    setValues,

    resetForm,

    isSubmitting,
    submitForm,
  } = useFormik({
    // initialValues: setInitialValues(data),

    // This solved the router rerender problem with router. 
    enableReinitialize: true,

    initialValues: {
      jobTitle: "",
      jobLocation: "",
    },
    onSubmit: async (
      values,
      // actions
    ) => {
      const {
        jobTitle,
        jobLocation
      } = values;

      try {
        const queries = new URLSearchParams(window.location.search);

        if (jobTitle !== "") {
          queries.set("title", jobTitle);
        } else {
          queries.delete("title");
        }

        if (jobLocation !== "") {
          queries.set("location", jobLocation);
        } else {
          queries.delete("location");
        }        

        const query = Object.fromEntries(queries);

        router.push({
          pathname: "/jobs",
          query,
        });

        scrollToTop();

      } catch (error) {
        // alert(error);
        console.log("catch error");
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
    resetForm,

    isSubmitting,
    submitForm,

  };
};

export default useMainJobSearchForm;