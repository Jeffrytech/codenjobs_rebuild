import React from "react";

import Head from "next/head";
import { useRouter } from "next/router";

import Layout from "../../../components/layouts";

import { useAuth } from "../../../contexts/auth";

import CenteredInPage from "../../../components/CenteredInPage";
import PrimarySpinner from "../../../components/spinners/PrimarySpinner";

import JobRepostConfirmation from "../../../components/job/JobRepostConfirmation";

// eslint-disable-next-line no-empty-pattern
const Confirmation = ({
  title,
  id,
  edit_job_post_tx,
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
        <title>Confirm your edited job post</title>
      </Head>

      {/* <Layout useScrollToTop={false} > */}
      <Layout showFooter={false} >
        {id && <JobRepostConfirmation id={id} user={user} title={title} edit_job_post_tx={edit_job_post_tx} />}
      </Layout>6`
    </>
  );
};

// https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
export async function getServerSideProps({ query }) {
  const {
    title,
    id,
    edit_job_post_tx,
  } = query;

  return {
    props: {
      id: id || null,
      title: title || null,
      edit_job_post_tx: edit_job_post_tx || null,
    }
  };
}

export default Confirmation;