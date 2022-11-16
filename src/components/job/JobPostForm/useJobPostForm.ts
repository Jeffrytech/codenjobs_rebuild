// import { useState } from "react";
// import { useRouter } from "next/router";

import * as Yup from "yup";
import { useFormik } from "formik";

import {
  nameValidator,
  companyDescriptionValidator,
  locationValidator,
  websiteValidator,

  jobTitleValidator,
  jobDescriptionValidator,
  jobTypeValidator,
  salaryValidator,

  urlOrEmailValidator,

  skillsValidator,
} from "../../../validators";

import {
  createJobPost,
  updateJobPost,
} from "../../../api/privateJob";
import { no, returnYesOrNo } from "../../../typeDefinitions/select";
// import { Title } from "@material-ui/icons";

const jobPostValidationSchema = Yup.object({
  // Company
  name: nameValidator,
  companyDescription: companyDescriptionValidator,
  companyLocation: locationValidator,
  // logo: Yup.mixed(),
  website: websiteValidator,
  // // Job
  // jobTitle: jobTitleValidator,
  jobDescription: jobDescriptionValidator,
  jobLocation: locationValidator,
  type: jobTypeValidator,
  
  salary: salaryValidator,
  // Make validator for this?
  // pay_in_cryptocurrency: 

  howToApply: urlOrEmailValidator,

  skills: skillsValidator,
});

const useJobPostForm = (id, jobStatus) => {
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
      // Should be company name
      name: "",
      companyDescription: "",
      companyLocation: "",
      logo: undefined,
      website: "",

      jobTitle: "",
      // jobDescription: "<p>Describe the job. You can also paste html here.</p>",
      jobDescription: "",
      jobDescriptionMarkdown: "",
      
      jobLocation: "",
      type: "Full-Time",
      // category: "Programming",
      category: "Programming",
      // category: { value: "Programming", label: "Programming" },
      salary: "",
      pay_in_cryptocurrency: false,

      howToApply: "",
      skills: [], // jobSkills?

      job_updated_at: null,
    },
    validationSchema: jobPostValidationSchema,
    onSubmit: async (
      values,
      // actions
    ) => {
      // alert("internet working?");
      // console.log("values");
      // console.log(values);

      try {
        // const title = `${values.jobTitle} for ${values.name}`.replaceAll(" ", "-");
        const title = `${values.jobTitle}`.split(" ").join("-");

        // alert(id);

        if (id === null) {
          // alert("null");
          // console.log("createJobPost");
          const { data, error } = await createJobPost(values);

          if (error) {
            // eslint-disable-next-line no-useless-return
            console.log("create job post error");
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

            // Should I edit this?
            window.history.replaceState("", "", `/job/post?&title=${title}&id=${data}`); // For <-
            // router.replace(`/job/post?&id=${data}`);
            // window.location.href = `/job/post/preview?&id=${data}`;
            window.location.href = `/job/post/preview?&title=${title}&id=${data}`;
            // router.push(`/job/post/preview?&id=${data}`);
          }
        } else {
          // console.log("updateJobPost");

          const title = `${values.jobTitle}`.split(" ").join("-");
          // alert(title);
          
          const { data, error } = await updateJobPost(id, values);

          if (error) {
            // alert(error);
            console.log("update job post error");
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
            window.location.href = jobStatus === "Hold" ? `/job/repost/preview?&title=${title}&id=${data}` : `/job/post/preview?&title=${title}&id=${data}`;
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

export default useJobPostForm;

// Use this for the file that doesn't require authorization token.
// const setInitialValues = (data) => {
//   let initialValues;
//   if (!data) {
//     initialValues = {
//       name: "",
//       companyDescription: "",
//       companyLocation: "",
//       logo: undefined,
//       website: "",

//       jobTitle: "",
//       // jobDescription: "<p>Describe the job. You can also paste html here.</p>",
//       jobDescription: "",
//       jobLocation: "",
//       type: "Full-Time",
//       salary: "",
//       howToApply: "",
//       tags: [], // jobSkills?
//     };
//   } else {
//     const {
//       company_name,
//       company_description,
//       company_location,
//       company_logo,
//       company_website,
//       job_title,
//       job_description,
//       job_location,
//       job_type,
//       job_salary_range, // Should be salary range to salary
//       job_how_to_apply,
//       job_tags,
//     } = data;

//     initialValues = {
//       name: company_name,
//       companyDescription: company_description,
//       companyLocation: company_location,
//       logo: company_logo,
//       website: company_website,

//       jobTitle: job_title,
//       jobDescription: job_description || "",
//       jobLocation: job_location,
//       type: job_type,
//       salary: job_salary_range, // Should be salary range to salary
//       howToApply: job_how_to_apply,
//       tags: job_tags || [],
//     };
//   }

//   return initialValues;
// };