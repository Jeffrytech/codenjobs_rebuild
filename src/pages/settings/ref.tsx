// This should be protected.

// Refer to these.
// https://github.com/settings/profile
// https://www.reddit.com/settings/profile

import React from "react";

import Head from "next/head";
import { useRouter } from "next/router";

import Layout from "../../components/layouts";

import { useAuth } from "../../contexts/auth";

import CenteredInPage from "../../components/CenteredInPage";
import PrimarySpinner from "../../components/spinners/PrimarySpinner";

import SettingsNav from "../../components/settings/SettingsNav";
import SettingsContent from "../../components/settings/SettingsContent";

import References from "../../components/settings/SettingsContent/ref/References";

import { COMPANY_NAME } from "../../config/environment";

const Job = () => {

  const router = useRouter();
  const lastPath = router.asPath.split("/").pop();

  const {
    // @ts-ignore
    user,
    // @ts-ignore
    loading,
  } = useAuth();

  if (loading) {
    return (<CenteredInPage>
      <PrimarySpinner />
    </CenteredInPage>);
  }

  // Uncomment this
  if (user === null) {
    router.replace(`/signin?&from=${router.asPath}`);
    return null;
  }

  // console.log("user");
  // console.log(user);
  // console.log(user.image);
  // console.log(user.allow_message);
  // console.log(user.use_cryptocurrency);
  // alert(user.use_cryptocurrency);

  // Uncomment this
  const {
    for_hire,
    use_cryptocurrency, // Can't select this.

    job_types,
  } = user;

  return (
    <>
      <Head>
        <title>{COMPANY_NAME} Settings</title>
      </Head>

      <Layout showFooter={false} fullHeigth={false} >
        {/* <SolanaWallet> */}
        <SettingsNav lastPath={lastPath} />
        <SettingsContent>
          <References />
        </SettingsContent>
      </Layout>
    </>
  );
};

export default Job;