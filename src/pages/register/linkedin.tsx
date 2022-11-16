// This implementation only workws well with dynamic render
import React from "react";

import Head from "next/head";

import LoginTopNav from "../../components/layouts/LoginTopNav";

import {
  COMPANY_LOGO,
  COMPANY_NAME,
  LOGIN_DESCRIPTION,
} from "../../config/environment";
import RegisterWithLinkedInForm from "../../components/auth/RegisterWithLinkedInForm";
import Metatags from "../../components/Metatags";

const RegisterWithLinkedIn = ({
  email,
  username,
  password,
  error,
}) => {
  const meta_title = `Register an account with LinkedIn - ${COMPANY_NAME}`;
  const meta_description = LOGIN_DESCRIPTION;
  // const meta_description = `Be a part of the worldwide network to help you find jobs.`;

  return (
    <>
      {/* <Head>
        <title>{meta_title}</title>
        <meta property="og:title" content={meta_title} />
        <meta name="twitter:title" content={meta_title} />

        <meta name="description" content={LOGIN_DESCRIPTION} />
        <meta property="og:description" content={LOGIN_DESCRIPTION} />
        <meta name="twitter:description" content={LOGIN_DESCRIPTION} />

        <meta property="og:image" content={COMPANY_LOGO} />
        <meta name="twitter:image" content={COMPANY_LOGO} />
        <meta name="image" content={COMPANY_LOGO} />

        <meta name="twitter:card" content="summary_large_image" />
        
      </Head> */}

      <Metatags
        title={meta_title}
        description={meta_description}
      />
      
      <LoginTopNav register={true} >
        <RegisterWithLinkedInForm
          email={email}
          username={username}
          password={password}
          error={error}
        />
      </LoginTopNav>
      {/* <Footer /> */}
    </>
  );
};

export async function getServerSideProps({
  query
}) {
  //  
  const {
    email,
    username,
    password,
    error,
  } = query;

  return {
    // Solve unserialable json problem with this.
    props: {
      email : email || "",
      username : username || "",
      password : password || "",
      error : error || "",
    }
  };
}

export default RegisterWithLinkedIn;