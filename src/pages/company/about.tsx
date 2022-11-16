import React from "react";

import dynamic from "next/dynamic";
import Head from "next/head";
import { useRouter } from "next/router";

import Layout from "../../components/layouts";
import { COMPANY_NAME } from "../../config/environment";
import About from '../../components/about';

// eslint-disable-next-line no-empty-pattern
const AboutPage = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>About {COMPANY_NAME}</title>
      </Head>

      <Layout showFooter={true} >
        <section>
          <About />
        </section>
      </Layout>
    </>
  );
};


export default AboutPage;