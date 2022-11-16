import React from "react";

import Head from "next/head";

import Layout from "../../../components/layouts";

import { useAuth } from "../../../contexts/auth";

import CenteredInPage from "../../../components/CenteredInPage";
import PrimarySpinner from "../../../components/spinners/PrimarySpinner";
import { COMPANY_NAME } from "../../../config/environment";
import Policy from "../../../components/Policy";

// @ts-ignore
import markdown from "../../../../posts/policies/terms-of-use.md";

// eslint-disable-next-line no-empty-pattern
const Terms = () => {
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

  // Should read from Next js API
  // const page = "terms-of-use";
  // const file = `public/static/pages/${page}.md`;
  // const text = readFileSync(file, 'utf8');
  // console.log(text);

  return (
    <>
      <Head>
        <title>Terms of Use for {COMPANY_NAME} Community</title>
      </Head>

      <Layout showFooter={true} >
        <Policy 
          input={markdown}
        />
      </Layout>
    </>
  );
};

export default Terms;