import React from "react";

import Head from "next/head";
import { useRouter } from "next/router";
// import dynamic from "next/dynamic";

import Layout from "../../../components/layouts";

import { useAuth } from "../../../contexts/auth";

import CenteredInPage from "../../../components/CenteredInPage";
import PrimarySpinner from "../../../components/spinners/PrimarySpinner";

import JobRepostPayment from "../../../components/job/JobRepostPayment";
import SolanaWalletConnection from "../../../crypto/SolanaWalletConnection";

// eslint-disable-next-line no-empty-pattern
const Payment = ({
  id, // Use this to see the post is already paid later with backend endpoint to verify that.
  title,
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
        <title>Repost your job ad</title>
      </Head>

      {/* <Layout useScrollToTop={false} > */}
      <Layout showFooter={false} >
        <SolanaWalletConnection>
          {id &&
            <JobRepostPayment
              jobId={id}
              title={title}
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
  } = query;

  return {
    props: {
      id: id || null,
      title: title || null,
    }
  };
}

export default Payment;