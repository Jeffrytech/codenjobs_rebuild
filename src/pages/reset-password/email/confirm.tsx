import React from "react";

import Head from "next/head";

import LoginTopNav from "../../../components/layouts/LoginTopNav";

// import Copyright from "../../../components/codeit/auth/Copyright";

import ResetPasswordConfirmation from "../../../components/auth/ResetPasswordConfirmation";
import { COMPANY_NAME } from "../../../config/environment";

const ResetPasswordConfirm = ({
  token,
}) => {
  return (
    <>
      <Head>
        <title>{COMPANY_NAME}</title>
      </Head>
      <LoginTopNav>
        <ResetPasswordConfirmation token={token} />
      </LoginTopNav>
    </>
  );
};

// https://nextjs.org/docs/basic-features/pages#static-generation
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

export default ResetPasswordConfirm;