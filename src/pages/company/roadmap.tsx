import React from "react";

import Head from "next/head";
import { useRouter } from "next/router";

import Layout from "../../components/layouts";
import { useAuth } from "../../contexts/auth";

import CenteredInPage from "../../components/CenteredInPage";
import PrimarySpinner from "../../components/spinners/PrimarySpinner";

// @ts-ignore
import Policy from "../../components/Policy";

import markdown from "../../../posts/policies/code-of-conduct.md";
import { COMPANY_NAME } from "../../config/environment";

// eslint-disable-next-line no-empty-pattern
const Roadmap = () => {
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

  return (
    <>
      <Head>
        <title>{COMPANY_NAME} Whitepaper</title>
      </Head>

      <Layout showFooter={true} >
        <Policy input={markdown} />
      </Layout>
    </>
  );
};

// https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
// export async function getServerSideProps({ query }) {
//   const {
//     id
//   } = query;

//   return {
//     props: {
//       id: id || null,
//     }
//   };
// }

export default Roadmap;