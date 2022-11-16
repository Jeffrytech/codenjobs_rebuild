import React from "react";

import Head from "next/head";

import Layout from "../../components/layouts";
import Container from "../../components/Container";
import Content from "../../components/Content";

import JobPostPrimary from "../../components/job/JobPostView/JobPostPrimary";
import JobPostSecondary from "../../components/job/JobPostView/JobPostSecondary";

import { API, COMPANY_COVER, COMPANY_NAME } from "../../config/environment";
import PrimaryContainer from "../../components/PrimaryContainer";
import MoreJobsByCategory from "../../components/job/MoreJobsByCategory";
import moment from "moment";
import Metatags from "../../components/Metatags";

const Job = ({
  data,
  id,
}) => {
  // console.log("data");
  // console.log(data);

  // Handle it better later.
  // This was stopping the metadats read by social media crawlers?
  if (!data || data.detail) {
    // Should handle this better
    return <div>Verify there is correct id for the job in the path.</div>;
  }

  const {
    company_name,
    company_logo,
    company_description,
    company_website,
    company_location,

    username, // Just use user_username,

    job_title,
    // job_id,
    job_location,
    job_how_to_apply,

    job_category,

    job_salary,
    job_pay_in_cryptocurrency,

    job_published_at,
    // job_created_at,
    // job_updated_at,
    job_description,
    job_type,
    job_skills,

    job_status,
  } = data;

  const format = "YYYY-MM-DD hh:mm:ss";

  const currentTime = moment.utc();

  const jobPostDuration = 28; // 'd', 28 days (4 weeks)
  const jobPostStartTime = moment.utc(job_published_at).format(format);
  const jobPostEndTime = moment.utc(job_published_at).add(jobPostDuration, 'd').format(format);
  // alert(currentTime);
  // alert(jobPublishedTime);
  // alert(jobEndTime);

  const jobPostValid = currentTime.isBetween(jobPostStartTime, jobPostEndTime);

  const job_meta_image = company_logo || COMPANY_COVER;

  return (
    <>
      {/* <Head>
        <title>{job_title}</title>

        <meta property="og:title" content={job_title} />
        <meta name="twitter:title" content={job_title} />

        <meta name="description" content={company_description} />
        <meta property="og:description" content={company_description} />
        <meta name="twitter:description" content={company_description} />

        <meta property="og:image" content={job_meta_image} />
        <meta name="twitter:image" content={job_meta_image} />
        <meta name="image" content={job_meta_image} />
        <meta name="twitter:card" content="summary_large_image" />

        <meta property="og:type" content="article" />

        <meta name="keywords" content={job_skills && job_skills.length > 0 && job_skills.join(", ")} key="keywords" />
      </Head> */}

      <Metatags 
        title={job_title}
        description={company_description}
        image={job_meta_image}
        keywords={job_skills && job_skills.length > 0 && job_skills.join(", ")}
      />

      <Layout>
        <Container>
          <Content>
            <PrimaryContainer>
              <JobPostPrimary
                company_name={company_name}
                company_website={company_website}

                username={username}

                job_id={id}

                job_title={job_title}
                job_category={job_category}
                job_location={job_location}
                job_how_to_apply={job_how_to_apply}

                job_salary={job_salary}
                job_pay_in_cryptocurrency={job_pay_in_cryptocurrency}
                // job_created_at={job_created_at}
                // job_updated_at,
                job_published_at={job_published_at}

                job_description={job_description}
                job_type={job_type}
                job_skills={job_skills}

                job_status={job_status}

                jobPostValid={jobPostValid}
              />

              {/* {jobPostValid && (job_status === "Paid" || job_status === "Confirmed") && <> */}
              {/* {(job_status === "Paid" || job_status === "Confirmed") && <>
                <JobShare
                  title={job_title}
                  url={`https://${COMPANY_WEBSITE}/job?&title=${job_title.split(" ").join("-")}&id=${id}`}
                />

              </>} */}
              
              <MoreJobsByCategory category={job_category} job_id={id} />
            </PrimaryContainer>

            {/* {jobPostValid && <JobPostSecondary */}
            <JobPostSecondary
              company_logo={company_logo}
              company_website={company_website}
              company_name={company_name}
              company_location={company_location}
              company_description={company_description}
              job_how_to_apply={job_how_to_apply}

              job_status={job_status}

              job_id={id}
              username={username}
            />
            {/* />} */}
          </Content>
        </Container>
      </Layout>
    </>
  );
};

// https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
export async function getServerSideProps({ query }) {
  const {
    id
  } = query;

  if (!id) {
    return {
      props: {
        notFound: true
      }
    };
  }

  // Use .env later with API?
  const target = `${API}/api/v1/job?id=${id}`;

  // TODO
  // Use axios instead later?.
  // eslint-disable-next-line no-undef
  const res = await fetch(target);
  const data = await res.json();

  return {
    props: {
      data,
      id,
    }
  };
}

export default Job;