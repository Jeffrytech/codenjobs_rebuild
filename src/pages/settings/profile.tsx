import React, { useEffect } from "react";

import Head from "next/head";
import { useRouter } from "next/router";

// import { styled } from "baseui";

import Layout from "../../components/layouts";

import { useAuth } from "../../contexts/auth";

import CenteredInPage from "../../components/CenteredInPage";
import PrimarySpinner from "../../components/spinners/PrimarySpinner";

import SettingsNav from "../../components/settings/SettingsNav";
import ProfileImage from "../../components/settings/SettingsContent/profile/Profileimage";
import Information from "../../components/settings/SettingsContent/profile/Information";

import SettingsContent from "../../components/settings/SettingsContent";//   .max(160, "Must be 160 characters or less");
import { COMPANY_NAME } from "../../config/environment";

import { scrollToTop } from "../../browser/scroll";
// import SolanaWalletConnection from "../../crypto/SolanaWalletConnection";

const Profile = () => {
  useEffect(() => {
    scrollToTop();
  }, []);
  // Extract with Settings with SettingsNav and SettingsContent etc?
  
  const router = useRouter();
  const lastPath = router.asPath.split("/").pop();

  const {
    // @ts-ignore
    user,
    // @ts-ignore
    // setUser,
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

  return (
    <>
      <Head>
        <title>{COMPANY_NAME} Settings</title>
      </Head>

      <Layout showFooter={false} useScrollToTop={false} whiteatmobile={true} >
        <SettingsNav lastPath={lastPath} />
        <SettingsContent>
          <ProfileImage />
          <Information />
        </SettingsContent>
      </Layout>
    </>
  );
};

export default Profile;