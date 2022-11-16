import React from "react";

import Head from "next/head";

import Layout from "../components/layouts";

import { 
  API, 
  COMPANY_LOGO_WHITE, COMPANY_NAME 
} from "../config/environment";

import useHiringListForm from "../components/hiring/HiringListForm/useHiringListForm";
import HiringList from "../components/hiring/HiringList";
import { formatPeopleListTitle } from "../title/people";
import ListBanner from "../components/SearchList/ListBanner";
import ListBySortOptionNavbar from "../components/ListBySortOptionNavbar";
import Metatags from "../components/Metatags";

const Hiring = ({
  data,

  job,
  salary,
  location,

  use_cryptocurrency,
  skill,

  page,

  sort,
}) => {
  // const [jobTitleInput, setJobTitleInput] = React.useState(title);

  // console.log("data");
  // console.log(data);

  const numberOfRecruiters = data ? data.length : 0;
  const hiringListTitle = formatPeopleListTitle(
    numberOfRecruiters,

    // job,
    // location,
    // salary,

    // skill,
  );


  const {
    handleSubmit,

    handleChange,
    handleBlur,

    values,

    setFieldValue,

    isSubmitting,
    submitForm,
  } = useHiringListForm({
    job,
    salary,
    location,

    skill,
    use_cryptocurrency,

    sort,
  });

  const meta_title = `${numberOfRecruiters} Hiring - ${COMPANY_NAME}`;
  const meta_description = `Find recruiters at ${COMPANY_NAME}.`;

  return (
    <>
      <Metatags
        title={meta_title}
        description={meta_description}
        image={COMPANY_LOGO_WHITE}
      />

      <Layout>
        <ListBanner />

        <ListBySortOptionNavbar
          includeTopOption={true}
        />
        
        <HiringList
          hiringList={data}
          
          hiringListTitle={hiringListTitle}
          numberOfRecruiters={numberOfRecruiters}

          setFieldValue={setFieldValue}
          submitForm={submitForm}

          skill={skill}

          page={parseInt(page)}

        // setJobTitleInput={setJobTitleInput}
        />
      </Layout>
    </>
  );
};

const hiringEndpointFromQueries = ({
  job,
  location,
  salary,

  use_cryptocurrency,

  skill,
  sort,
}) => {
  // console.log("company_name");
  // console.log(company_name);

  // Use .env later with API?
  // 'http://localhost:8000/api/v1/private/user/hiring/list'

  let target = `${API}/api/v1/user/hiring/list?`;
  if (job !== undefined) {
    target += `&job=${job}`;
  }

  if (location !== undefined) {
    target += `&location=${location}`;
  }

  if (salary !== undefined) {
    target += `&salary=${salary}`;
  }

  if (use_cryptocurrency !== undefined) {
    target += `&use_cryptocurrency=${use_cryptocurrency}`;
  }

  if (skill !== undefined) {
    target += `&skill=${encodeURIComponent(skill)}`;
    // target += `&skill=${skill}`;
  }

  if (sort !== undefined) {
    target += `&sort=${sort}`;
  }

  return target;
};

const unwrapOrElesString = (str?: string) => {
  return (str === undefined ? "" : str);
};

export async function getServerSideProps({
  query
}) {
  try {
    const {
      job,
      location,
      salary,

      use_cryptocurrency,

      skill,

      page,
      
      sort,
    } = query;

    const target = hiringEndpointFromQueries({
      job,
      location,
      salary,

      use_cryptocurrency,

      skill,
      sort,
    });

    // console.log(target);

    // eslint-disable-next-line no-undef
    const res = await fetch(target);
    const data = await res.json();

    // console.log(data);

    return {
      // Solve unserialable json problem with this.
      props: {
        data,

        job: unwrapOrElesString(job),
        location: unwrapOrElesString(location),
        salary: unwrapOrElesString(salary),

        use_cryptocurrency: unwrapOrElesString(use_cryptocurrency),

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

export default Hiring;
