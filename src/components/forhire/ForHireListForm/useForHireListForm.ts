// import { useState } from "react";
// import { useRouter } from "next/router";

import * as Yup from "yup";
import { useFormik } from "formik";

import { useRouter } from "next/router";
import { returnYesOrNo } from "../../../typeDefinitions/select";
import { findForhireListSortOptionsLabelValue } from "../../../typeDefinitions/forhire";
import { scrollToTop } from "../../../browser/scroll";

const useForHireListForm = ({
  job,
  salary,
  location,

  skill,

  use_cryptocurrency,
  sort,
}) => {

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
      // cover: undefined,

      // These are from the path.
      job,
      salary,
      location,

      skill,
      use_cryptocurrency: returnYesOrNo(use_cryptocurrency),

      // sort: findForhireListSortOptionsLabelValue(sort),
      sort,
    },
    // validationSchema: blogPostValidationSchema,
    onSubmit: async (
      values,
      // actions
    ) => {
      // alert("internet working?");
      console.log("values");
      console.log(values);

      // These are from the form.
      const {
        job,
        salary,
        location,

        skill,
        use_cryptocurrency,

        sort,
      } = values;

      // alert(title);

      // alert(salary);
      // alert(location);

      // alert(use_cryptocurrency === undefined);

      try {

        const queries = new URLSearchParams(window.location.search);
        // queries.set("page", prevPage.toString());
        // @ts-ignore

        if (job !== "") {
          queries.set("job", job);
        } else {
          queries.delete("job");
        }

        if (salary !== "") {
          queries.set("salary", salary);
        } else {
          queries.delete("salary");
        }

        if (location !== "") {
          queries.set("location", location);
        } else {
          queries.delete("location");
        }

        if (skill !== "") {
          queries.set("skill", skill);
        } else {
          queries.delete("skill");
        }

        if (salary !== "") {
          queries.set("salary", salary);
        } else {
          queries.delete("salary");
        }
        
        if (use_cryptocurrency !== undefined) {
          // console.log(pay_in_cryptocurrency);
          queries.set("use_cryptocurrency", use_cryptocurrency.value.toString());
        }

        if (queries.get("page") !== null) {
          // alert(page);
          queries.delete("page");
          // queries.set("page", page);
        }

        // console.log("sort");
        // console.log(sort);

        // if (sort !== undefined) {
        if (sort !== "") {
          queries.set("sort", sort);
        } else {
          queries.delete("sort");
        }

        const query = Object.fromEntries(queries);
        router.push({
          pathname: window.location.pathname,
          query,
        });
        scrollToTop();

        // const redirect = `${window.location.pathname}?${queries.toString()}`;
        // // alert(redirect);

        // // @ts-ignore
        // window.location = redirect;

        // These doesn't work with current pagination system
        // "" when absent
        // const query = {};
        // if (job !== "") {
        //   query["job"] = job
        // }
        // if (salary !== "") {
        //   query["salary"] = salary
        // }
        // if (location !== "") {
        //   query["location"] = location
        // }
        // if (skill !== "") {
        //   query["skill"] = skill
        // }

        // // alert(use_cryptocurrency);
        // // alert(use_cryptocurrency.value);

        // // alert(use_cryptocurrency) // undefined

        // // use_cryptocurrency
        // // use_cryptocurrency = true
        // if (use_cryptocurrency !== undefined) {
        //   // alert(use_cryptocurrency);
        //   query["use_cryptocurrency"] = use_cryptocurrency.value
        // }

        // router.push({
        //   pathname: router.pathname,
        //   query
        // });

        // router.reload();

        // router.
        
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

export default useForHireListForm;