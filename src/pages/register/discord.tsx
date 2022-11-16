// This implementation only workws well with dynamic render
import React from "react";

import Head from "next/head";
import dynamic from "next/dynamic";

import LoginTopNav from "../../components/layouts/LoginTopNav";
import CenteredInPage from "../../components/CenteredInPage";
import PrimarySpinner from "../../components/spinners/PrimarySpinner";

import {
  COMPANY_LOGO,
  COMPANY_NAME,
  LOGIN_DESCRIPTION,
} from "../../config/environment";
import { useEffect } from "react";
import RegisterWithDiscordForm from "../../components/auth/RegisterWithDiscordForm";
import Metatags from "../../components/Metatags";

// import RegisterWithDiscordForm from "../../components/auth/RegisterWithDiscordForm";

const RegisterWithDiscord = ({
  email,
  username,
  password,
  error,
}) => {
  const meta_title = `Register an account with Discord - ${COMPANY_NAME}`;
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
        <RegisterWithDiscordForm
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

// https://www.codenjobs.com/register/discord?&email=codenjobs@gmail.com?&username=codenjobsdev?&password=codenjobsdevcodenjobs@gmail.com?&error=
// http://localhost:3000/register/discord?&email=codenjobs@gmail.com&username=codenjobsdev&password=codenjobsdevcodenjobs@gmail.com
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

export default RegisterWithDiscord;