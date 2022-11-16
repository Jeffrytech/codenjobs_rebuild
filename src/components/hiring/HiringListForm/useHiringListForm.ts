// import { useState } from "react";
// import { useRouter } from "next/router";

import * as Yup from "yup";
import { useFormik } from "formik";

import { useRouter } from "next/router";
import { returnYesOrNo } from "../../../typeDefinitions/select";

const useHiringListForm = ({
  job,
  salary,
  location,

  skill,

  use_cryptocurrency,

  sort,
}) => {
  // console.log(skill);

  // console.log(use_cryptocurrency);
  // console.log(returnYesOrNo(use_cryptocurrency))

  const router = useRouter();

  // alert(category); // ""
  // alert(type); // ""
  
  // console.log(findJobCategoryLabelValue(category));

  // alert(use_cryptocurrency);

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

      // sort: findBlogListSortOptionsLabelValue(sort),
    },
    // validationSchema: blogPostValidationSchema,
    onSubmit: async (
      values,
      // actions
    ) => {
      // alert("internet working?");
      // console.log("values");
      // console.log(values);

      // These are from the form.
      const {
        job,
        salary,
        location,

        skill,
        use_cryptocurrency,
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
        }

        if (salary !== "") {
          queries.set("salary", salary);
        }

        if (location !== "") {
          queries.set("location", location);
        }

        if (skill !== "") {
          queries.set("skill", skill);
        } else {
          queries.delete("skill");
        }

        if (skill !== "") {
          queries.set("skill", skill);
        } else {
          queries.delete("skill");
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

        if (sort !== undefined && sort !== null) {
          queries.set("sort", sort.value);
        }

        const redirect = `${window.location.pathname}?${queries.toString()}`;
        // alert(redirect);

        // @ts-ignore
        window.location = redirect;

        // These doen't work for the current pagination system
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

export default useHiringListForm;