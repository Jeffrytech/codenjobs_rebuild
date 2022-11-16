// This should show the different features if the user is the author of the app.

import React from "react";

import { useRouter } from "next/router";
import Head from "next/head";

import { useAuth } from "../../../contexts/auth";

import Layout from "../../../components/layouts";
import MessageNav from "../../../components/message/MessageNav";

import MessagesWithResponsesList from "../../../components/message/inbox/MessagesWithResponsesList";
import { PaginationBottom } from "../../../components/message/MessageListCSS";

import { COMPANY_NAME } from "../../../config/environment";

const Messages = ({
  id,
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
        <title>Messages - {COMPANY_NAME}</title>
      </Head>

      <Layout showFooter={false} whiteatmobile={true} >
        {user && <MessageNav lastPath={lastPath} />}

        <MessagesWithResponsesList
          // <MessageListSentWithNoSSR
          user={user}
          id={id}

          page={parseInt(page)}
        />

        <PaginationBottom />

      </Layout>
    </>
  );
};

export async function getServerSideProps({ query }) {
  const {
    id,
    page,
  } = query;

  return {
    props: {
      id: id === undefined ? "" : id,
      page: page || 1,
    }
  };
}

export default Messages;