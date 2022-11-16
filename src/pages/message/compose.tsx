
// This should show the different features if the user is the author of the app.

import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import Layout from "../../components/layouts";

import MessageNav from "../../components/message/MessageNav";
import MessageCompose from "../../components/message/MessageCompose";

import { useAuth } from "../../contexts/auth";

const Compose = ({
  to,
  // notFound,
}) => {
  const router = useRouter();
  const lastPath = router.asPath.split("/").pop();

  const {
    // @ts-ignore
    user,
  } = useAuth();

  // alert(user);

  // console.log("user");
  // console.log(user);

  const messageComposeTitle = "Send a message - Code&Jobs";

  return (
    <>
      <Head>
        <title>{messageComposeTitle}</title>
      </Head>

      <Layout showFooter={false} whiteatmobile={true} >
        {/* <MessageNav lastPath={lastPath} /> */}
        {user && <MessageNav lastPath={lastPath} />}

        <MessageCompose
          to={to}
          user={user}

          messageComposeTitle={"Send a message"}
        />

        {/* <section style={{
          padding: "2rem",
        }} /> */}
      </Layout>
    </>
  );
};

export async function getServerSideProps({
  query
}) {
  const {
    to
  } = query;

  return {
    // Solve unserialable json problem with this.
    props: {
      to: to === undefined ? "" : to,
    }
  };
}

export default Compose;