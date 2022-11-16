import React from "react";

import { useRouter } from "next/router";
import Head from "next/head";

import { useAuth } from "../../contexts/auth";

import Layout from "../../components/layouts";

// import { PaginationBottom } from "../../components/message/MessageListCSS";
import { COMPANY_NAME } from "../../config/environment";
import NotificationNav from "../../components/notificaiton/NotificationNav";
import NotificationList from "../../components/notificaiton/NotificationList";

const AllNotification = ({
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
        <title>Notifications - {COMPANY_NAME}</title>
      </Head>

      <Layout showFooter={false} whiteatmobile={true} >
        {user && <NotificationNav lastPath={lastPath} />}

        {user && <NotificationList
          user={user}
          page={parseInt(page)}
          read={null}
        />}

        {/* <PaginationBottom /> */}
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

export default AllNotification;