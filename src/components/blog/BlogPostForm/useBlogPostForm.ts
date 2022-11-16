// import { useState } from "react";
// import { useRouter } from "next/router";

import * as Yup from "yup";
import { useFormik } from "formik";

import {
  tagsValidator,
  blogPostBodyValidator,
} from "../../../validators";

import {
  createBlogPost, // createBlogPost
  updateBlogPost, // updateBlogPost
} from "../../../api/privateBlog";
// import { Title } from "@material-ui/icons";

const blogPostValidationSchema = Yup.object({
  // cover: Yup.mixed(),
  // // Job
  // title: blogTitleValidator,
  body: blogPostBodyValidator,
  // bodyMarkdown: blogPostBodyValidator,
  tags: tagsValidator,
});

const useBlogPostForm = (id) => {
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
    // initialValues: setInitialValues(data),
    initialValues: {
      cover: undefined,

      title: "",
      
      body: "",

      category: "Programming",
      tags: [],
    },
    validationSchema: blogPostValidationSchema,
    onSubmit: async (
      values,
      // actions
    ) => {
      console.log(values);
      
      // alert("internet working?");
      // console.log("values");
      // console.log(values);

      try {
        // const title = `${values.jobTitle} for ${values.name}`.replaceAll(" ", "-");
        const title = `${values.title}`.split(" ").join("-");

        // alert(id);

        if (id === null) {
          // alert("null");
          // console.log("createJobPost");
          const { data, error } = await createBlogPost(values);

          if (error) {
            // eslint-disable-next-line no-useless-return
            console.log("create blog post error");
            console.error(error);

            if (error.response) {
              const errorPoint = error.response.data.detail[0].loc[1];
              document.getElementById(errorPoint).focus();
            }

            return;
          }

          if (data) {
            // console.log("data");
            // console.log(data);

            // // Should I edit this?
            window.history.replaceState("", "", `/blog/post?&title=${title}&id=${data}`); // For <-
            // // router.replace(`/job/post?&id=${data}`);
            // // window.location.href = `/job/post/preview?&id=${data}`;
            window.location.href = `/blog/post/preview?&title=${title}&id=${data}`;
            // // router.push(`/job/post/preview?&id=${data}`);
          }
        } else {
          // console.log("updateJobPost");

          const title = `${values.title}`.split(" ").join("-");
          // alert(title);
          
          // Should make this work.
          const { data, error } = await updateBlogPost(id, values);

          if (error) {
            // alert(error);
            console.log("update blog post error");
            console.error(error);

            if (error.response) {
              const errorPoint = error.response.data.detail[0].loc[1];
              document.getElementById(errorPoint).focus();
            }

            // eslint-disable-next-line no-useless-return
            // window.location.reload();
            // return;
          }

          if (data) {
            // window.location.href = `/job/post/preview?&id=${data}`;
            window.location.href = `/blog/post/preview?&title=${title}&id=${data}`;
            // router.push(`/job/post/preview?&id=${data}`);
          }
        }
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
    setFieldError,

    isSubmitting,
    submitForm,
  };
};

export default useBlogPostForm;