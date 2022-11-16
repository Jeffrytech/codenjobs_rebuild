import React from "react";

import Layout from "../components/layouts";
import { 
  COMPANY_LOGO_WHITE,
  COMPANY_NAME 
} from "../config/environment";

import ForHireList from "../components/forhire/ForHireList";
import Metatags from "../components/Metatags";

const ForHire = ({
  job,
  salary,
  location,

  use_cryptocurrency,
  skill,

  page,
  sort,
}) => {
  const meta_title = `For Hire - ${COMPANY_NAME}`;
  const meta_description = `Find candidates at ${COMPANY_NAME}.`;

  return (
    <>
      <Metatags
        title={meta_title}
        description={meta_description}
        image={COMPANY_LOGO_WHITE}
      />

      <Layout>
        <ForHireList
          job={job}
          salary={salary}
          location={location}
          skill={skill}

          use_cryptocurrency={use_cryptocurrency}
          sort={sort}
          page={parseInt(page)}
        />
      </Layout>
    </>
  );
};

const unwrapOrElesString = (str?: string) => {
  return (!str ? "" : str);
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

    return {
      props: {

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

export default ForHire;
