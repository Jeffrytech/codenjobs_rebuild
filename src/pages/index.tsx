import React, { useCallback, useEffect, useState } from "react";

import dynamic from "next/dynamic";

import Layout from "../components/layouts";

import IndexMain from "../components/Homepage/Main";
import BlockchainList from "../components/Homepage/BlockchainList";
import JoinTheCommunity from "../components/Homepage/JoinTheCommunity";
import FeatureList from "../components/Homepage/FeatureList";
import Metatags from "../components/Metatags";

import {
  // API,
  COMPANY_DESCRIPTION,
  // COMPANY_LOGO,
  COMPANY_LOGO_WHITE,
  COMPANY_NAME,
  COMPANY_WEBSITE_HTTPS,
} from "../config/environment";
import { findJobs } from "../components/job/JobList";
import Spotlight from "../components/Homepage/Spotlight";

export const IndexJobListWithNoSSR = dynamic(
  () => import("../components/job/IndexJobList"),
  {
    ssr: false,
  }
);

export type JobResponse = {
  username: string;
  company_name: string;
  company_logo: string;
  job_id: string;
  job_title: string;
  job_location: string;
  job_type: string;
  job_category: string;
  job_skills: string[];
  job_salary: string;
  job_pay_in_cryptocurrency: boolean;
  job_created_at: string;
  job_updated_at: string;
  job_published_at: string;
};

const Index = () => {
  const [jobList, setJobList] = useState<JobResponse[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchJobs = useCallback(async () => {
    const [jobs, pages] = await findJobs({
      currentPage: 1,
      jobsPerPage: 25,
      title: "",
      category: "",
      type: "",
      location: "",
      salary: "",
      pay_in_cryptocurrency: "",
      skill: "",
      company_name: "",
      sort: "",
    });
    if (jobs !== false) {
      setJobList(jobs.slice(0, 3));
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  return (
    <>
      <Metatags
        title={COMPANY_NAME}
        description={COMPANY_DESCRIPTION}
        image={COMPANY_LOGO_WHITE}
        url={COMPANY_WEBSITE_HTTPS}
        keywords={"Job, NFTs, Blog"}
      />

      <Layout>
        <IndexMain />
        <BlockchainList />
        {!loading && <Spotlight jobs={jobList} />}
        <JoinTheCommunity />
        <FeatureList />
      </Layout>
    </>
  );
};

export default Index;
