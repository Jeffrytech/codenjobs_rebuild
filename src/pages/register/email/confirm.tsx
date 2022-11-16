import React from "react";

import Head from "next/head";

// import TopNav from "../components/codeit/layouts/TopNav";
import LoginTopNav from "../../../components/layouts/LoginTopNav";

// import Copyright from "../../../components/codeit/auth/Copyright";

import RegisterEmailConfirmation from "../../../components/auth/RegisterEmailConfirmation";
import { COMPANY_NAME } from "../../../config/environment";

const RegisterConfirm = ({
  token,
}) => {
  return (
    <>
      <Head>
        <title>{COMPANY_NAME}</title>
      </Head>
      
      <LoginTopNav confirm={true} >
        <RegisterEmailConfirmation token={token} />
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

export default RegisterConfirm;