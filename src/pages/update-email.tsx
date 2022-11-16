import React from "react";

import Head from "next/head";

import LoginTopNav from "../components/layouts/LoginTopNav";

import UpdateEmailConfirmation from "../components/auth/UpdateEmailConfirmation";

import { COMPANY_NAME } from "../config/environment";

const UpdateEmailConfirm = ({
  token,
}) => {
  return (
    <>
      <Head>
        <title>{COMPANY_NAME}</title>
      </Head>
      <LoginTopNav>
        <UpdateEmailConfirmation token={token} />
      </LoginTopNav>
    </>
  );
};

export async function getServerSideProps({
  query
}) {
  const {
    token
  } = query;

  return {
    // Solve unserialable json problem with this.
    props: {
      token: token === undefined ? "" : token,
      // error,
    }
  };
}

export default UpdateEmailConfirm;