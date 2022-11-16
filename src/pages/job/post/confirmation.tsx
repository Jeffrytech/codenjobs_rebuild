import React from "react";

import Head from "next/head";
import { useRouter } from "next/router";
// import dynamic from "next/dynamic";

import Layout from "../../../components/layouts";

import { useAuth } from "../../../contexts/auth";

import CenteredInPage from "../../../components/CenteredInPage";
import PrimarySpinner from "../../../components/spinners/PrimarySpinner";

import JobPostConfirmation from "../../../components/job/JobPostConfirmation";

// eslint-disable-next-line no-empty-pattern
const Confirmation = ({
  title,
  id,
  payment_method,
  pay_job_post_tx,
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
        <title>Confirm your job post payment</title>
        {/* <title>Confirm your job post</title> */}
      </Head>

      {/* <Layout useScrollToTop={false} > */}
      <Layout showFooter={false} >
        {id && <JobPostConfirmation 
          id={id} 
          user={user} 
          title={title} 
          payment_method={payment_method} 
          pay_job_post_tx={pay_job_post_tx} 
        />}
      </Layout>
    </>
  );
};

// https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
export async function getServerSideProps({ query }) {
  const {
    title,
    id,
    payment_method, // code || solana
    pay_job_post_tx,
  } = query;

  return {
    props: {
      id: id || null,
      title: title || null,
      payment_method: payment_method || null,
      pay_job_post_tx: pay_job_post_tx || null,
    }
  };
}

export default Confirmation;