import React, { useEffect, useState }from "react";
// import CreatableSelect from 'react-select/creatable';

// import {
//   // nameMaxLength,
//   // bioMaxLength,
//   profileJobMaxLength,
//   salaryMaxLength,
//   locationMaxLength,
//   urlMaxLength,
//   skillMaxLength,
//   skillsValidatorError,
// } from "../../../../validators";

// import useProfileInformationForm from "./useProfileJobDetailsForm";

// import { useAuth } from "../../../../../contexts/auth";

import {
  SettingsContentHeader,

  // SettingsContentDetailWrapper,

  SettingsContentDetail,
  SettingsContentDetailLabel,
  SettingsContentDetailText,

  SettingsContentInputDetaillWrapper,

  SettingsContentInputWrapper,
  // SettingsContentTextInput,
  // SettingsContentTextarea,

  // CharactersLeftWrapper,
  // ErrorMessageWrapper,

  // SettingsContentButton,

  UpdateButtonWrapper,
  UpdateButton,
  // SettingsSkill,
  // SettingsSkillsWrapper,
  // SkillsLeftWrapper,
  // SettingsContentSkillInput,
  // SettingsContentErrorDetaillWrapper,
} from "../../SettingsContentCSS";

// import { updateProfileInformation } from "../../../../../api/profile";
// import { charactersLeft, skillsLeft } from "../../../../form";
import { useAuth } from "../../../../../contexts/auth";

// import { Formik, Field, Form } from 'formik';
import { Formik, Field, Form } from 'formik';
import { updateProfileJobDetails } from "../../../../../api/privateProfile";
// import { useRouter } from "next/router";

import {
  JobDetailsGroupContainer,
  JobDetailsGroupTitle,
  JobDetailsLabel,
  JobDetailsLabelText
} from "./DetailsCSS";
import { FULLTIME, PARTTIME, CONTRACT, FREELANCE, INTERNSHIP } from "../../../../../typeDefinitions/job";

const Details = () => {
  const {
    // @ts-ignore
    user,
    // @ts-ignore
    setUser,
  } = useAuth();

  // console.log("user");
  // console.log(user);

  // const FULLTIME = "Full-Time";
  // const PARTTIME = "Part-Time";
  // const FREELANCE = "Freelance";
  // const CONTRACT= "Contract";
  // const INTERNSHIP = "Internship";

  // const router = useRouter();

  return (
    <Formik
      initialValues={{
        // job_types: user.job_types[0] === null ? [] : user.job_types,
        job_types: user.job_types === null ? [] : user.job_types,
      }}
      onSubmit={async (values) => {
        // await updateProfileJobDetails(values);

        const {
          data,
          error,
        } = await updateProfileJobDetails(values);

        // alert(data);

        if (error) {
          console.error("error");
          console.error(error);
        }

        if (data) {
          const {
            job_types
          } = data;

          // setUser({
          //   ...user,
          //   job_types,
          // });

          // Find a better option than this.
          window.location.href = `/user/${user.username}`;
          // router.push(`/user/${user.username}`);
        }
      }}
    >
      {({ values }) => {
        // alert(values);
        // console.log("values");
        // console.log(values);
        const {
          job_types
        } = values;

        // const selectFullTime = FULLTIME in job_types;
        // const selectPartTime = PARTTIME in job_types;
        // const selectFreelance = FREELANCE in job_types;
        // const selectContract= CONTRACT in job_types;
        // const selectInternship = INTERNSHIP in job_types;

        return (
          <Form>
            <SettingsContentHeader >
              Details
            </SettingsContentHeader>

            <SettingsContentInputDetaillWrapper>
              <SettingsContentDetail>
                <SettingsContentDetailLabel>
                  What type of job do you want or offer?
                </SettingsContentDetailLabel>
                <SettingsContentDetailText>
                  {"You can select multiple options"}
                </SettingsContentDetailText>
              </SettingsContentDetail>
            </SettingsContentInputDetaillWrapper>
            {/* 
            Multiple checkboxes with the same name attribute, but different
            value attributes will be considered a "checkbox group". Formik will automagically
            bind the job_types values to a single array for your benefit. All the add and remove
            logic will be taken care of for you.
          */}
            <SettingsContentInputWrapper>
              <JobDetailsGroupTitle
                id="checkbox-group"
              >
                Types
              </JobDetailsGroupTitle>

              <JobDetailsGroupContainer
                role="group" 
                aria-labelledby="checkbox-group"
              >
                <JobDetailsLabel>
                  {/* This is handled by Formik */}
                  {/* <Field type="checkbox" name="job_types" value={FULLTIME} checked={selectFullTime} /> */}
                  <Field type="checkbox" name="job_types" value={FULLTIME} />
                  <JobDetailsLabelText>
                    {FULLTIME}
                  </JobDetailsLabelText>
                </JobDetailsLabel>
                <JobDetailsLabel>
                  <Field type="checkbox" name="job_types" value={PARTTIME} />
                  <JobDetailsLabelText>
                    {PARTTIME}
                  </JobDetailsLabelText>
                </JobDetailsLabel>
                <JobDetailsLabel>
                  <Field type="checkbox" name="job_types" value={CONTRACT} />
                  <JobDetailsLabelText>
                    {CONTRACT}
                  </JobDetailsLabelText>
                </JobDetailsLabel>
                <JobDetailsLabel>
                  <Field type="checkbox" name="job_types" value={FREELANCE} />
                  <JobDetailsLabelText>
                    {FREELANCE}
                  </JobDetailsLabelText>
                </JobDetailsLabel>
                <JobDetailsLabel>
                  <Field type="checkbox" name="job_types" value={INTERNSHIP} />
                  <JobDetailsLabelText>
                    {INTERNSHIP}
                  </JobDetailsLabelText>
                </JobDetailsLabel>
              </JobDetailsGroupContainer>
            </SettingsContentInputWrapper>

            <UpdateButtonWrapper>
              <UpdateButton
                type="submit"
              >
                Update
              </UpdateButton>
            </UpdateButtonWrapper>

            {/* <button type="submit">Submit</button> */}
          </Form>
        );
      }}
    </Formik>
  );

};

export default Details;