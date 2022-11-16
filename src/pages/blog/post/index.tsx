import React from "react";

import Head from "next/head";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

import Layout from "../../../components/layouts";

import { useAuth } from "../../../contexts/auth";

import CenteredInPage from "../../../components/CenteredInPage";
import PrimarySpinner from "../../../components/spinners/PrimarySpinner";

export const BlogPostFormWithNoSSR = dynamic(() => import("../../../components/blog/BlogPostForm"), {
  ssr: false
});

// eslint-disable-next-line no-empty-pattern
const Index = ({
  id,
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
    router.replace(`/signin?&from=${router.asPath}`);
    return null;
  }

  return (
    <>
      <Head>
        <title>{id ? "Edit the blog post" : "Create a new blog post"}</title>
      </Head>

      {/* <Layout useScrollToTop={false} > */}
      <Layout showFooter={false} >
        <BlogPostFormWithNoSSR id={id} user={user} />
      </Layout>
    </>
  );
};

// https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
export async function getServerSideProps({ query }) {
  const {
    id
  } = query;

  return {
    props: {
      id: id || null,
    }
  };
}

export default Index;