import React from "react";

import Head from "next/head";
import { useRouter } from "next/router";

import Layout from "../../../components/layouts";

import { useAuth } from "../../../contexts/auth";

import CenteredInPage from "../../../components/CenteredInPage";
import PrimarySpinner from "../../../components/spinners/PrimarySpinner";

import BlogPostPreview from "../../../components/blog/BlogPostPreview";

// eslint-disable-next-line no-empty-pattern
const Preview = ({
  id,
  title,
  // new_blog,
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
        <title>Preview</title>
        {/* <title>Preview your draft</title> */}
      </Head>

      {/* <Layout useScrollToTop={false} > */}
      <Layout showFooter={false} >
        {/* {id && <JobPostPreviewWithNoSSR id={id} user={user} title={title} />} */}
        {id && <BlogPostPreview id={id} user={user} title={title} />}
      </Layout>
    </>
  );
};

// https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
export async function getServerSideProps({ query }) {
  const {
    id,
    title, 
    // new_blog,
  } = query;

  return {
    props: {
      id: id || null,
      title: title || null,
      // new_blog: new_blog || null,
    }
  };
}

export default Preview;
