import React from "react";

import Head from "next/head";

import CssBaseline from "@material-ui/core/CssBaseline";
import LoginTopNav from "../../../components/layouts/LoginTopNav";
import CenteredInPage from "../../../components/CenteredInPage";

import RegisterEmailSend from "../../../components/auth/RegisterEmailSend";

import { useStyles } from "../../../components/auth/RegisterEmailSend/RegisterEmailSendCSS";

const Send = ({
  username,
  email,
  ref_username,
}) => {
  const classes = useStyles();

  return (
    <>
      <Head>
        <title>Read your email</title>
      </Head>

      <LoginTopNav>
        {/* <CenteredInPageAuth style={{
          // marginTop: "-5rem",
        }}> */}
        <CenteredInPage
          style={{
            background: "url(/static/tokens.png)",
            backgroundSize: "contain",
          }}
        >
          <CssBaseline />
          <div className={classes.paper}>
            {/* <Avatar className={classes.avatar}>
              <EmailIcon />
            </Avatar> */}
            <RegisterEmailSend username={username} email={email} ref_username={ref_username} />
          </div>
        </CenteredInPage>
        {/* </CenteredInPageAuth> */}
      </LoginTopNav>
    </>
  );
};

export async function getServerSideProps({
  query
}) {
  const {
    username,
    email,
    ref_username,
  } = query;

  return {
    // Solve unserialable json problem with this.
    props: {
      username: username === undefined ? "" : username,
      email: email === undefined ? "" : email,
      ref_username: ref_username || "",
      // error,
    }
  };
}

export default Send;