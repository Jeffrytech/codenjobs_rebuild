// This implementation only workws well with dynamic render
import React from "react";

import LoginTopNav from "../../components/layouts/LoginTopNav";

import {
  COMPANY_NAME,
  LOGIN_DESCRIPTION,
} from "../../config/environment";
import RegisterWithTwitterForm from "../../components/auth/RegisterWithTwitterForm";
import Metatags from "../../components/Metatags";

const RegisterWithTwitter = ({
  email,
  username,
  password,
  error,
}) => {
  const meta_title = `Register an account with Twitter - ${COMPANY_NAME}`;
  const meta_description = LOGIN_DESCRIPTION;

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
        <RegisterWithTwitterForm
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

export default RegisterWithTwitter;