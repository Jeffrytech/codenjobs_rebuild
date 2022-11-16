// This should show the different features if the user is the author of the app.

import React from "react";

import { useRouter } from "next/router";
import Head from "next/head";

import { useAuth } from "../../../contexts/auth";

import Layout from "../../../components/layouts";
import MessageNav from "../../../components/message/MessageNav";

import InboxMessageList from "../../../components/message/inbox";

import { PaginationBottom } from "../../../components/message/MessageListCSS";
import { COMPANY_NAME } from "../../../config/environment";

const Inbox = ({
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
        <title>Inbox - {COMPANY_NAME}</title>
      </Head>

      <Layout showFooter={false} whiteatmobile={true} >
        {user && <MessageNav lastPath={lastPath} />}

        <InboxMessageList
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

export default Inbox;