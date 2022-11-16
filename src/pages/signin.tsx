import React from "react";

import { 
  COMPANY_LOGO_WHITE, LOGIN_DESCRIPTION 
} from "../config/environment";
import NewSignInForm from "../components/auth/NewSignInForm";
import Metatags from "../components/Metatags";

const SignIn = ({
  from,
}) => {
  const meta_title = "Sign in to Code&Jobs";
  const meta_description = LOGIN_DESCRIPTION;
  
  return (
    <>
      <Metatags
        title={meta_title}
        description={meta_description}
        image={COMPANY_LOGO_WHITE}
      />

      <NewSignInForm 
        from={from}
      />

    </>
  );
};

export async function getServerSideProps({
  query
}) {
  const {
    from
  } = query;

  return {
    // Solve unserialable json problem with this.
    props: {
      // from: from === undefined ? "" : from,
      from: from || "",
      // error,
    }
  };
}

export default SignIn;
