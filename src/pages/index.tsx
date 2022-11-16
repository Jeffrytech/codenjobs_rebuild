import React from "react";

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

export const IndexJobListWithNoSSR = dynamic(() => import("../components/job/IndexJobList"), {
  ssr: false
});

const Index = () => {
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
        <JoinTheCommunity />
        <FeatureList />
      </Layout>
    </>
  );
};

export default Index;
