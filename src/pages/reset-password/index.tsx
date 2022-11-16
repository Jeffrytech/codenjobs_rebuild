import React from "react";

import Head from "next/head";

import LoginTopNav from "../../components/layouts/LoginTopNav";
import CenteredInPage from "../../components/CenteredInPage";

import ResetPasswordForm from "../../components/auth/ResetPasswordEmailSend";

import PrimarySpinner from "../../components/spinners/PrimarySpinner";
import dynamic from "next/dynamic";
import Footer from "../../components/layouts/Footer";

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
      }} />
    </CenteredInPage>
  }
);

const ResetPassword = () => {
  // const classes = useStyles();

  const resetPasswordTitle = "Reset Password";

  return (
    <>
      <Head>
        <title>{resetPasswordTitle}</title>
      </Head>
      <LoginTopNav>
        <CenteredInPage>
          <div>
            <ResetPasswordForm resetPasswordTitle="Reset Password" />
          </div>
          
        </CenteredInPage>
      </LoginTopNav>
      <Footer />
    </>
  );
};

export default ResetPassword;