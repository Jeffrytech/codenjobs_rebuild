// This should be protected.

// Refer to these.
// https://github.com/settings/profile
// https://www.reddit.com/settings/profile

import React from "react";

import Head from "next/head";
import { useRouter } from "next/router";

// import { styled, withStyle } from "baseui";

import Layout from "../../components/layouts";

import { useAuth } from "../../contexts/auth";

import CenteredInPage from "../../components/CenteredInPage";
import PrimarySpinner from "../../components/spinners/PrimarySpinner";

import SettingsNav from "../../components/settings/SettingsNav";
import SettingsContent from "../../components/settings/SettingsContent";

import Preferences from "../../components/settings/SettingsContent/email-and-message/Preferences";
import { COMPANY_NAME } from "../../config/environment";
// import SolanaWallet from "../../crypto/SolanaWalletConnection";

const Conversation = () => {
  // Extract with Settings with SettingsNav and SettingsContent etc?

  const router = useRouter();
  const lastPath = router.asPath.split("/").pop();

  const {
    // @ts-ignore
    user,
    // @ts-ignore
    loading,
  } = useAuth();

  // This should be first to use router in user===null below.
  if (loading) {
    return (<CenteredInPage>
      <PrimarySpinner />
    </CenteredInPage>);
  }

  if (user === null) {
    router.replace(`/signin?&from=${router.asPath}`);
    return null;
  }

  const {
    allow_message,
    newsletter_subscription,
  } = user;

  return (
    <>
      <Head>
        <title>{COMPANY_NAME} Settings</title>
      </Head>

      <Layout 
        showFooter={false} 
        fullHeigth={false} 
        whiteatmobile={true} 
      >
        <SettingsNav lastPath={lastPath} />
        <SettingsContent>
          <Preferences
            allow_message={allow_message}
            newsletter_subscription={newsletter_subscription}
          />
        </SettingsContent>
      </Layout>
    </>
  );
};

export default Conversation;