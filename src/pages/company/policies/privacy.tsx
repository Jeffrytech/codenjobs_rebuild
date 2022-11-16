import React from "react";

import Head from "next/head";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

import Layout from "../../../components/layouts";

import { useAuth } from "../../../contexts/auth";

import CenteredInPage from "../../../components/CenteredInPage";
import PrimarySpinner from "../../../components/spinners/PrimarySpinner";
import { COMPANY_NAME } from "../../../config/environment";
import Policy from "../../../components/Policy";

// @ts-ignore
import markdown from "../../../../posts/policies/privacy-policy.md";

// eslint-disable-next-line no-empty-pattern
const Privacy = () => {
  const router = useRouter();

  const {
    // @ts-ignore
    // user,
    // @ts-ignore
    loading,
  } = useAuth();

  // This should be first to use router in user===null below.
  if (loading) {
    return (<CenteredInPage>
      <PrimarySpinner />
    </CenteredInPage>);
  }

  // if (user === null) {
  //   router.replace(`/signin?&from=${router.asPath}`);
  //   return null;
  // }

  return (
    <>
      <Head>
        <title>Privacy Policy for {COMPANY_NAME} Community</title>
      </Head>

      {/* <Layout useScrollToTop={false} > */}
      <Layout showFooter={true} >
        <Policy 
          input={markdown}
        />
        {/* <BlogPostFormWithNoSSR id={id} user={user} /> */}
      </Layout>
    </>
  );
};

export default Privacy;