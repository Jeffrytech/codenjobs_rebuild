import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import {
  EditorState,
  // convertToRaw,
  ContentState,
  convertFromHTML,
} from "draft-js";

import useJobPostForm from "./useJobPostForm";

import CompanyForm from "./CompanyForm";
import JobForm from "./JobForm";

import JobPostFormHeader from "../JobPostFormHeader";

import { findJobCompanyByIdForOwner } from "../../../api/privateJob";

import {
  FormIntro,

  ContinueButton,
  ContinueButtonWrapper,

  JobPostFormContainer,
  JobPostFormWrapper,
  JobPostFormSection,
} from "./JobPostFormCSS";
import { findJobStatusById } from "../../../api/job";
// import { ButtonSpinner } from "../../spinners/LoginSpinner";
import ContinueToPreivewSpinner from "../../spinners/ContinueToPreivewSpinner";

// import { decorator, decorators } from "../../markdown/customDecorators";

import moment from "moment";
import { decorator, decorators } from "../../markdown/customDecorators";
// import { Category } from "@material-ui/icons";

const JobPostForm = ({
  id,
  user,
}) => {
  const router = useRouter();

  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );

  const [jobStatus, setJobStatus] = useState(null);

  const {
    handleSubmit,

    handleChange,
    handleBlur,

    values,
    errors,
    touched,

    setFieldValue,
    // setFieldTouched,
    setValues,

    setFieldError,

    isSubmitting,
    submitForm,
  } = useJobPostForm(id, jobStatus);

  useEffect(() => {
    if (id !== null) {
      findJobStatusById(id)
        .then(({ data: status, error }) => {
        // Handle error later
        
          if (status === "Draft") {
            setJobStatus(status);
            return;
          } else if (status === "Hold") {
            setJobStatus(status);
            return;
          } else if (status === "Review") {
            window.location.href = "/job/post";
          } else if (status === "Paid") {
          // router.replace(`/job?&id=${id}`);
            window.location.href = "/job/post";
          } else if (status === "Confirmed") {
          // router.replace(`/job/post/confirmation?&id=${id}`);
            window.location.href = `/job/post/confirmation?&id=${id}`;
          } else if (status === "Closed") {
          // router.replace("/job/post");
            window.location.href = "/job/post";
          } else {
          // router.replace("/job/post");
            window.location.href = "/job/post";
          }

          // return;

          // Should include more here for job status

        // if (error.response.data.detail === "no_job") {
        //   router.replace("/job/post");
        // }
        });
    }
  }, []);

  // Use this here because in /pages there is no auth token at apiRequest yet if this is used at /pages(server).
  // (Unauthorized error)
  if (id !== null) {
    useEffect(() => {
      findJobCompanyByIdForOwner(id)
        .then(({
          data,
          // Should handle this correctly.
          error
        }) => {
          if (error) {
            console.log(error);
          }

          // console.log("data");
          // console.log(data);

          if (data !== null) {
            const {
              company_name,
              company_description,
              company_location,
              company_logo,
              company_website,

              username,

              job_title,
              job_description,
              job_location,

              job_type,
              job_category,

              job_salary, // Should be salary range to salary
              job_pay_in_cryptocurrency,

              job_how_to_apply,
              job_skills,

              job_updated_at,
            } = data;

            const isOwner = user.username === username;
            if (isOwner) {
              const initialValues = {
                name: company_name,
                companyDescription: company_description,
                companyLocation: company_location,
                logo: company_logo,
                website: company_website,

                jobTitle: job_title,
                jobDescription: job_description || "",
                jobLocation: job_location,

                type: job_type,
                category: job_category,

                salary: job_salary, // Should be salary range to salary
                pay_in_cryptocurrency: job_pay_in_cryptocurrency,

                howToApply: job_how_to_apply,
                skills: job_skills || [],

                job_updated_at,
              };

              setEditorState(
                EditorState.createWithContent(ContentState.createFromBlockArray(
                  convertFromHTML(job_description)
                ), decorator
                  // {
                  //   decorator:
                  // }
                  // new CompositeDecorator(decorators)
                ));

              setValues({
                ...initialValues,
                jobDescriptionMarkdown: "",
              });
            } else {
              router.replace("/job/post");
            }
          }
        })
        .catch(e => {
          console.log(e);
        });
    }, []);
  }

  const {
    name,
    companyDescription,
    companyLocation,
    logo,
    website,

    jobTitle,

    jobDescription,
    jobDescriptionMarkdown,

    jobLocation,
    type,
    category,
    salary,
    pay_in_cryptocurrency,

    howToApply,
    skills,

    job_updated_at,
  } = values;

  return (
    <>
      <JobPostFormHeader activeStep={0} jobId={id} jobStatus={jobStatus} />

      <JobPostFormContainer>
        <JobPostFormWrapper>
          <JobPostFormSection>
            <form onSubmit={handleSubmit} >
              {job_updated_at && <div style={{
                // marginBottom: "-0.25rem",
                marginBottom: "1rem",
                marginLeft: "0.1rem",
                opacity: "0.7",
              }} >
                Edited {moment.utc(job_updated_at).fromNow()}
              </div>}
              {/* {job_updated_at} */}
              <FormIntro>
                {/* {job_updated_at === null && "First, tell us about your company"} */}
                {/* {job_updated_at === null ? "First, tell us about your company" : "Your Company"} */}
                First, tell us about your company
              </FormIntro>
              <CompanyForm
                job_id={id}

                handleChange={handleChange}
                handleBlur={handleBlur}
                errors={errors}
                touched={touched}
                setFieldValue={setFieldValue}

                name={name}
                companyDescription={companyDescription}
                companyLocation={companyLocation}
                logo={logo}
                website={website}
              />

              <FormIntro>
                {/* {job_updated_at === null ? "Then, please describe the job" : "Your Job"} */}
                {/* {job_updated_at === null && "Then, please describe the job"} */}
                Then, please describe the job
              </FormIntro>
              <JobForm
                handleChange={handleChange}
                handleBlur={handleBlur}
                setFieldValue={setFieldValue}
                // setFieldTouched={setFieldTouched}
                // setValues={setValues}
                errors={errors}
                touched={touched}

                jobTitle={jobTitle}

                jobDescription={jobDescription}
                jobDescriptionMarkdown={jobDescriptionMarkdown}

                jobLocation={jobLocation}
                type={type}
                category={category}

                salary={salary}
                pay_in_cryptocurrency={pay_in_cryptocurrency}

                setFieldError={setFieldError}
                howToApply={howToApply}
                skills={skills}

                editorState={editorState}
                setEditorState={setEditorState}

                decorators={decorators}
              />

              {/* Disable this when sending request. */}
              {/* Width 100% at mobile? */}
              <ContinueButtonWrapper>
                <ContinueButton
                  disabled={isSubmitting}
                  type="button"
                  onClick={() => {
                    submitForm();
                  }}
                >
                  {isSubmitting && <ContinueToPreivewSpinner />}
                  {/* {!isSubmitting ? "Continue to preview" : "Please, wait"} */}
                  Continue to preview
                </ContinueButton>
              </ContinueButtonWrapper>
            </form>
          </JobPostFormSection>
        </JobPostFormWrapper>
      </JobPostFormContainer>
    </>
  );

  
};

export default JobPostForm;

// {/* <JobPostFormLabel>
//         How to apply
//         <Required />
//       </JobPostFormLabel>
//       <JobPostFormInputWrapper>
//         <JobPostFormTextInput
//           id="howToApply"
//           name="howToApply"
//           type="text"

//           placeholder={"Email or an webpage to apply(required)"}

//           onChange={handleChange}
//           onBlur={handleBlur}
//           value={howToApply}
//         />
//       </JobPostFormInputWrapper> */}
// {/* This should be for url and email later. */ }
// {/* <UrlErrorMessage
//         url={website}
//         urlError={errors.website}
//         urlTouch={touched.website}
//       /> */}

// {/* sa.Column('title', sa.Unicode(80), index=True, nullable=False),
//       sa.Column('description', sa.Unicode(10000), nullable=False),
//       sa.Column('location', sa.Unicode(25), nullable=False), # Remote, USA only etc.
//       # Should be enum later Freelance, Contract etc
//       # https://sqlalchemy-utils.readthedocs.io/en/latest/data_types.html#module-sqlalchemy_utils.types.choice
//       sa.Column('type', sa.String(), nullable=False),
//       sa.Column("how_to_apply", sa.String(), nullable=False), # It will be enum of a webpage(URLType) or email(EmailType).
//       sa.Column("salary_range", sa.String(80), nullable=False),
//       sa.Column("tags", sa.ARRAY(sa.Unicode(25)), nullable=True), */}

// {/*
//         jobDescription should use markdown editor
//         type should allow only one of this enum values (Contract, Freelance, Part-Time etc)
//         how to apply should allow only email or url
//         jobTags should use tag selector
//       */}