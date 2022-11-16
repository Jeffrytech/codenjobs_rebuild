import { useRouter } from "next/router";

import * as Yup from "yup";
import { useFormik } from "formik";

import {
  nameValidator,
  bioValidator,
} from "../../../../../validators";

// import { useAuth } from "../../../../../../contexts/auth";
import { updateProfileUserInformation } from "../../../../../api/privateProfile";

const profileInformationValidationSchema = Yup.object({
  name: nameValidator,
  bio: bioValidator,
});

const useProfileInformationForm = (user, setUser) => {
  const router = useRouter();

  const {
    username,
    profile_name,
    profile_bio,
  } = user;

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      // null to ""
      name: profile_name || "",
      bio: profile_bio || "",
    },
    validationSchema: profileInformationValidationSchema,
    onSubmit: async (values) => {
      console.log("values");
      console.log(values);

      const {
        data,
        error,
      } = await updateProfileUserInformation(values);

      if (error) {
        console.error("error");
        console.error(error);
      }

      if (data) {
        // console.log("data");
        // console.log(data);

        const {
          name: profile_name,
          bio: profile_bio,
        } = data;

        setUser({
          ...user,
          profile_name,
          profile_bio,
        });

        // Find a better option than this.
        router.push(`/user/${username}`);
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
  };
};

export default useProfileInformationForm;