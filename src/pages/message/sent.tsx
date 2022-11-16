// This should show the different features if the user is the author of the app.

import React from "react";

import { useRouter } from "next/router";
import Head from "next/head";

import { useAuth } from "../../contexts/auth";

import Layout from "../../components/layouts";
import MessageNav from "../../components/message/MessageNav";

import MessageListSent from "../../components/message/sent/MessageListSent";
import { PaginationBottom } from "../../components/message/MessageListCSS";

import { COMPANY_NAME } from "../../config/environment";

const Sent = ({
  page,
}) => {
  const router = useRouter();
  const lastPath = router.asPath.split("/").pop();

  const {
    // @ts-ignore
    user,
  } = useAuth();

  return (
    <>
      <Head>
        <title>{COMPANY_NAME}</title>
      </Head>

      <Layout showFooter={false} whiteatmobile={true} >
        {user && <MessageNav lastPath={lastPath} />}

        <MessageListSent
        // <MessageListSentWithNoSSR
          user={user}
          page={parseInt(page)}
        />

        <PaginationBottom />
      </Layout>
    </>
  );
};

export async function getServerSideProps({
  query
}) {
  const {
    page
  } = query;

  return {
    props: {
      page: page || 1,
    }
  };
}

export default Sent;