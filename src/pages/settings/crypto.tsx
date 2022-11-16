import React, { useEffect } from "react";

import Head from "next/head";
import { useRouter } from "next/router";

import Layout from "../../components/layouts";

import { useAuth } from "../../contexts/auth";

import CenteredInPage from "../../components/CenteredInPage";
import PrimarySpinner from "../../components/spinners/PrimarySpinner";

import SettingsNav from "../../components/settings/SettingsNav";

import { COMPANY_NAME } from "../../config/environment";

import { scrollToTop } from "../../browser/scroll";
import CryptoSettings from "../../components/settings/SettingsContent/crypto/CryptoSettings";
import BackgroundColor from "../../components/BackgroundColor";
import { CryptoSettingsWrapper, SettingsContentContainer } from "../../components/settings/SettingsContent/SettingsContentCSS";

const Crypto = () => {
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

  // if (wallet === null) {
  //   connect prompt
  // }

  return (
    <>
      <Head>
        <title>{COMPANY_NAME} Settings</title>
      </Head>

      <Layout showFooter={false} useScrollToTop={false} whiteatmobile={true} >
        {/* <SolanaWallet> */}
        <SettingsNav lastPath={lastPath} />
        <BackgroundColor $background={"white"} >
          <SettingsContentContainer>
            <CryptoSettingsWrapper>
              <CryptoSettings />
            </CryptoSettingsWrapper>
          </SettingsContentContainer>
        </BackgroundColor>
        {/* </SolanaWallet> */}
      </Layout>
    </>
  );
};

export default Crypto;