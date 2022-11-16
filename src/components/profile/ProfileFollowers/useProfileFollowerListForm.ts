// import { useState } from "react";
// import { useRouter } from "next/router";

import { useRouter } from "next/router";

// import * as Yup from "yup";

import { useFormik } from "formik";
import { scrollToTop } from "../../../browser/scroll";

const useProfileFollowerListForm = ({
  username,
  // sort,
  // page,
}) => {
  // console.log(pay_in_cryptocurrency);
  // console.log(skill);

  const router = useRouter();

  // alert(category); // ""
  // alert(type); // ""

  // console.log(findJobCategoryLabelValue(category));

  const {
    setFieldValue,
    submitForm,
  } = useFormik({
    // initialValues: setInitialValues(data),

    // This solved the router rerender problem with router. 
    enableReinitialize: true,

    initialValues: {
      // sort: findProfileJobListNotOwnerSortOptionsLabelValue(sort),
      // page,
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
        // sort,

        // page,
      } = values;

      // alert(salary);
      // alert(location);

      try {
        // "" when absent

        const queries = new URLSearchParams(window.location.search);

        if (queries.get("page") !== null) {
          // alert(page);
          queries.delete("page");
          // queries.set("page", page);
        }

        // if (sort !== undefined) {
        //   queries.set("sort", sort.value);
        // } else {
        //   queries.delete("sort");
        // }

        // const redirect = `${window.location.pathname}?${queries.toString()}`;
        // alert(redirect);

        // @ts-ignore
        // window.location = redirect;
        // router.push(redirect);

        // router.push(`/user/${username}/followers?${queries.toString()}`);

        const query = Object.fromEntries(queries);
        router.push({
          pathname: window.location.pathname,
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
    setFieldValue,
    submitForm,
  };
};

export default useProfileFollowerListForm;