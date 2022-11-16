import React from "react";

import Head from "next/head";
import { useRouter } from "next/router";
// import dynamic from "next/dynamic";

import Layout from "../../../components/layouts";

import { useAuth } from "../../../contexts/auth";

import CenteredInPage from "../../../components/CenteredInPage";
import PrimarySpinner from "../../../components/spinners/PrimarySpinner";

// import JobPostPayment from "../../../components/job/JobPostPayment";
import SolanaWalletConnection from "../../../crypto/SolanaWalletConnection";
import JobPostPayment from "../../../components/job/JobPostPayment";

// eslint-disable-next-line no-empty-pattern
const Payment = ({
  id, // Use this to see the post is already paid later with backend endpoint to verify that.
  title,
  method,
}) => {
  const router = useRouter();

  const {
    // @ts-ignore
    user,
    // @ts-ignore
    loading,
  } = useAuth();

  // This should be first to use router in user===null below.
  if (loading) {
    return (<CenteredInPage>
      <PrimarySpinner />
    </CenteredInPage>);
  }

  if (user === null) {
    router.replace("/signin");
    return null;
  }

  return (
    <>
      <Head>
        <title>Pay your job post with {method === "code" ? "CODE" : "Solana"}</title>
        {/* <title>Pay your job post with a cryptocurreny</title> */}
        {/* <title>Publish your job post for {JOB_POST_PRICE}</title> */}
      </Head>

      {/* <Layout useScrollToTop={false} > */}
      <Layout showFooter={false} >
        <SolanaWalletConnection>
          {id &&
            <JobPostPayment
              jobId={id}
              title={title}
              method={method}
              user={user}
            />
          }
        </SolanaWalletConnection>
      </Layout>
    </>
  );
};

// https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
export async function getServerSideProps({ query }) {
  const {
    id,
    title,
    method, // solana || code
  } = query;

  return {
    props: {
      id: id || null,
      title: title || null,
      method: method || null,
    }
  };
}

export default Payment;