// This should show the different features if the user is the author of the app.

// import { useContext, useEffect, useState } from "react";
// import { useRouter } from 'next/router'
import React from "react";

import { useRouter } from "next/router";
import Head from "next/head";
// import dynamic from "next/dynamic";

import { useAuth } from "../../../contexts/auth";

import Layout from "../../../components/layouts";
import MessageNav from "../../../components/message/MessageNav";

import UnreadMessageList from "../../../components/message/inbox/UnreadMessageList";
import { PaginationBottom } from "../../../components/message/MessageListCSS";
import { COMPANY_NAME } from "../../../config/environment";

// export const MessageListSentWithNoSSR = dynamic(() => import("../../components/codeit/message/MessageListSent"), {
//   ssr: false
// });

const Unread = () => {
  const router = useRouter();
  const lastPath = router.asPath.split("/").pop();

  const {
    // @ts-ignore
    user,
  } = useAuth();

  return (
    <>
      <Head>
        <title>Unread messages - {COMPANY_NAME}</title>
      </Head>

      <Layout showFooter={false} whiteatmobile={true} >
        {user && <MessageNav lastPath={lastPath} />}

        <UnreadMessageList
          // <MessageListSentWithNoSSR
          user={user}
          // page={parseInt(page)}
        />

        <PaginationBottom />
      </Layout>
    </>
  );
};

// export async function getServerSideProps({
//   query
// }) {
//   const {
//     page
//   } = query;

//   return {
//     props: {
//       page: page || 1,
//     }
//   };
// }


export default Unread;