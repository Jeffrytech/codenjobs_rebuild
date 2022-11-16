import { useRouter } from "next/router";

import * as Yup from "yup";
import { useFormik } from "formik";

import {
// profileJobValidator,
// salaryValidator,
// locationValidator,
// websiteValidator,
// skillsValidator,
// profileJobTypesValidator,
} from "../../../../validators";

// import { useAuth } from "../../../../../../contexts/auth";
import { updateProfileJobDetails } from "../../../../../api/privateProfile";

// Use it later?
// const profileJobDetialsValidationSchema = Yup.object({
//   job_types: profileJobTypesValidator,
//   // skills: skillsValidator,

// });

// const useProfileJobDetailsForm = (user, setUser) => {
const useProfileJobDetailsForm = (user, setUser) => {
  const router = useRouter();

  const {
    username,
    job_types,
  } = user;

  const {
    handleSubmit,
    // handleChange,
    // handleBlur,
    values,
    // errors,
    // touched,

    // setFieldValue,
    submitForm,

    // setFieldError,
  } = useFormik({
    initialValues: {
      job_types, 
    },
    // validationSchema: profileJobDetialsValidationSchema,
    onSubmit: async (values) => {
      console.log("values");
      console.log(values);

      // const {
      //   data,
      //   error,
      // } = await updateProfileJobDetails(values);

      // if (error) {
      //   console.error("error");
      //   console.error(error);
      // }

      // if (data) {
      //   // console.log("data");
      //   // console.log(data);

      //   const {
      //     job_types
      //   } = data;

      //   setUser({
      //     ...user,
      //     job_types,
      //   });

      //   // Find a better option than this.
      //   router.push(`/user/${username}`);
      // }
    },
  });

  return {
    handleSubmit,
    // handleChange,
    // handleBlur,
    values,
    // errors,
    // touched,

    // setFieldValue,
    submitForm,

    // setFieldError,
  };
};

export default useProfileJobDetailsForm;