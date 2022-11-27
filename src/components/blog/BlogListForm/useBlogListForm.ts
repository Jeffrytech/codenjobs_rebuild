// import { useState } from "react";
// import { useRouter } from "next/router";

import * as Yup from "yup";
import { useFormik } from "formik";

// import {
//   tagsValidator,
//   blogPostBodyValidator,
// } from "../../validators";

import { useRouter } from "next/router";
import {
  findBlogListSortOptionsLabelValue,
  findBlogPostCategoryLabelValue,
  // findJobTypeLabelValue
} from "../../../typeDefinitions/blog";
import { scrollToTop } from "../../../browser/scroll";
import { findBlogList } from "../../../api/blog";

const useBlogListForm = ({ title, category, tag, sort }) => {
  // alert(category);

  const router = useRouter();

  // alert(category); // undefined
  // alert(type); // ""

  // console.log(findJobCategoryLabelValue(category));
  // console.log("findBlogPostCategoryLabelValue(category)");
  // console.log(findBlogPostCategoryLabelValue(category));

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
      title,
      category,
      // category: findBlogPostCategoryLabelValue(category), // Use findBlogCategoryLabelValue instead.
      tag,
      sort,
      // sort: findBlogListSortOptionsLabelValue(sort),
      // {
      //   label: "Programming",
      //   value: "Programming",
      // },

      // body: "", // html
      // bodyMarkdown: "",

      // category: "Programming",
      // tags: [],
    },
    // validationSchema: blogPostValidationSchema,
    onSubmit: async (
      values
      // actions
    ) => {
      // alert("internet working?");

      // These are from the form.
      const { title, category, tag, sort } = values;

      try {
        const queries = new URLSearchParams(window.location.search);

        if (title !== undefined && title !== "") {
          queries.set("title", title);
        } else {
          queries.delete("title");
        }

        if (category !== undefined && category !== "") {
          queries.set("category", category);
        } else {
          queries.delete("category");
        }

        if (tag !== undefined && tag !== "") {
          queries.set("tag", tag);
        } else {
          queries.delete("tag");
        }

        if (queries.get("page") !== undefined) {
          // alert(page);
          queries.delete("page");
          // queries.set("page", page);
        }

        if (sort !== undefined && sort !== "") {
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
      } catch (error) {
        // alert(error);
        console.log("catch error");
        console.error(error);
      }
    },
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

export default useBlogListForm;
