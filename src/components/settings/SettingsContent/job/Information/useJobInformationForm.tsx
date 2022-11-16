import { useRouter } from "next/router";

import * as Yup from "yup";
import { useFormik } from "formik";

import {
  profileJobValidator,
  salaryValidator,
  locationValidator,
  websiteValidator,
  skillsValidator,
} from "../../../../../validators";
import { updateProfileJobInformation } from "../../../../../api/privateProfile";

const profileJobInformationValidationSchema = Yup.object({
  job: profileJobValidator,
  salary: salaryValidator,
  location: locationValidator,
  website: websiteValidator,

  skills: skillsValidator,
});

const useProfileInformationForm = (user, setUser) => {
  const router = useRouter();

  // Uncomment this
  let {
    username,
    profile_job,
    profile_salary,
    profile_location,
    profile_website,

    skills,
  } = user;

  // console.log("skills"); null
  // console.log(skills);

  // When a user make an account first time, it is null
  // if (skills === null) {
  //   skills = [];
  // }

  // console.log("skills"); [] here
  // console.log(skills);

  // alert(typeof skills); // Null

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    touched,

    setFieldValue,
    submitForm,

    setFieldError,
  } = useFormik({
    // When a new user comes, it is null
    initialValues: {
      // Remove them
      // job: "",
      // salary: "",
      // location: "",
      // website: "",
      job: profile_job === null ? "" : profile_job,
      salary: profile_salary === null ? "" : profile_salary,
      location: profile_location === null ? "" : profile_location,
      website: profile_website === null ? "" : profile_website,

      skills: skills === null ? [] : skills,

      // 18446741403709
      //    10000000000
      //            100

      // null to ""
      // job: profile_job || "",
      // salary: profile_salary || "",
      // location: profile_location || "",
      // website: profile_website || "",

      // skills: skills || [],
    },
    validationSchema: profileJobInformationValidationSchema,
    onSubmit: async (values) => {
      // alert("form")
      // console.log("form values");
      // console.log(values);

      const {
        data,
        error,
      } = await updateProfileJobInformation(values);

      if (error) {
        console.error("error");
        console.error(error);
      }

      if (data) {
        // console.log("data");
        // console.log(data);

        const {
          job: profile_job,
          salary: profile_salary,
          location: profile_location,
          website: profile_website,

          skills,
        } = data;

        setUser({
          ...user,
          profile_job,
          profile_salary,
          profile_location,
          profile_website,

          skills,
        });

        // router.push(`/user/${username}`);
        // Find a better option than this.
        // @ts-ignore
        window.location = `/user/${username}`;
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
    submitForm,

    setFieldError,
  };
};

export default useProfileInformationForm;