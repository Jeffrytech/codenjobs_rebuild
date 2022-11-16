import React from "react";

import Layout from "../components/layouts";

import JobList from "../components/job/JobList/index";

import { COMPANY_LOGO_WHITE, COMPANY_NAME } from "../config/environment";

import useJobListForm from "../components/job/JobListForm/useJobListForm";
import Metatags from "../components/Metatags";
import unwrapOrElesString from "../unwrapOrElseString";
import Head from "next/head";

const Jobs = ({
  title,
  category,
  type,

  company_name,

  salary,
  pay_in_cryptocurrency,

  location,

  skill,
  // company_name,

  page,

  sort,
}) => {

  const {
    handleSubmit,

    handleChange,
    handleBlur,

    values,

    setFieldValue,

    isSubmitting,
    submitForm,
  } = useJobListForm({
    title,
    category,
    type,

    company_name,

    salary,
    pay_in_cryptocurrency,
    
    location,

    skill,
    page,

    sort,
  });

  const meta_title = `Find a job - ${COMPANY_NAME}`;
  const meta_description = `Search the latest job posts at ${COMPANY_NAME}`;

  return (
    <>
      <Metatags
        title={meta_title}
        description={meta_description}
        image={COMPANY_LOGO_WHITE}
      />
      
      <Layout>

        <JobList
          title={title}
          category={category}
          type={type}

          location={location}

          salary={salary}
          pay_in_cryptocurrency={pay_in_cryptocurrency}

          skill={skill}
          company_name={company_name}

          sort={sort}
          page={parseInt(page)}

        />
      </Layout>
    </>
  );
};

export async function getServerSideProps({
  query
}) {
  try {
    const {
      title,
      category,
      type,

      location,
      
      salary,
      pay_in_cryptocurrency,

      skill,
      company_name,
      
      sort,
      page,
    } = query;

    return {
      // Solve unserialable json problem with this.
      props: {
        title: unwrapOrElesString(title),
        category: unwrapOrElesString(category),
        type: unwrapOrElesString(type),

        company_name: unwrapOrElesString(company_name),
        location: unwrapOrElesString(location),
        
        salary: unwrapOrElesString(salary),
        pay_in_cryptocurrency: unwrapOrElesString(pay_in_cryptocurrency),

        skill: unwrapOrElesString(skill),

        page: page || 1,

        sort: unwrapOrElesString(sort),
      }
    };
  } catch (error) {
    return {
      // Solve unserialable json problem with this.
      props: {
        data: null,
        // error,
      }
    };
  }
}

export default Jobs;