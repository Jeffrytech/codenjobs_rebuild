// This implementation only workws well with dynamic render
import React from "react";

import Head from "next/head";
import dynamic from "next/dynamic";

import CenteredInPage from "../../components/CenteredInPage";
import PrimarySpinner from "../../components/spinners/PrimarySpinner";

import {
  COMPANY_LOGO,
  // API,
  COMPANY_NAME,
  LOGIN_DESCRIPTION,
} from "../../config/environment";

import NewRegisterForm from "../../components/auth/NewRegisterForm";
import Metatags from "../../components/Metatags";

// https://nextjs.org/docs/advanced-features/dynamic-import
export const RegisterFormWithNoSSR = dynamic(
  () => import("../../components/auth/RegisterForm"), {
    // ssr: false, // This is fast at production
    ssr: true, // Should test with this at production also
    // eslint-disable-next-line react/display-name
    loading: () => <CenteredInPage style={{
      alignItems: "center",
      height: "100vh",
      width: "100vw"
    }}>
      <PrimarySpinner style={{
        borderTopColor: "rgb(37, 191, 161)"
      }}/>
    </CenteredInPage>
  }
);

const Register = ({
  ref_username
}) => {
  const meta_title = `Sign up to ${COMPANY_NAME}`;
  const meta_description = LOGIN_DESCRIPTION;
  // const meta_description = `Be a part of the worldwide network to help you find jobs.`;

  // It doesn't work
  // useEffect(() => {
  //   const viewport = document.querySelector("meta[name=viewport]");
  //   // @ts-ignore
  //   viewport.setAttribute("content", viewport.content + ", height=" + window.innerHeight);
  // })

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

      <NewRegisterForm 
        ref_username={ref_username}
      />
    </>
  );
};

export async function getServerSideProps({
  query
}) {
  //  
  const {
    ref_username
  } = query;

  return {
    // Solve unserialable json problem with this.
    props: {
      ref_username: ref_username || "",
    }
  };
}

export default Register;