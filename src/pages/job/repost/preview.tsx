import React from "react";

import Head from "next/head";
import { useRouter } from "next/router";

// import dynamic from "next/dynamic";

import Layout from "../../../components/layouts";

import { useAuth } from "../../../contexts/auth";

import CenteredInPage from "../../../components/CenteredInPage";
import PrimarySpinner from "../../../components/spinners/PrimarySpinner";

import JobPostPreview from "../../../components/job/JobPostPreview";

// export const JobPostPreviewWithNoSSR = dynamic(
//   () => import("../../../components/job/JobPostPreview"), {
//     ssr: false,
//     // ssr: true,
//     // eslint-disable-next-line react/display-name
//     loading: () => <CenteredInPage>
//       <PrimarySpinner style={{
//         borderTopColor: "rgb(37, 191, 161)"
//       }} />
//     </CenteredInPage>
//   }
// );

// eslint-disable-next-line no-empty-pattern
const Preview = ({
  id,
  title,
}) => {
  const router = useRouter();

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
    router.replace("/signin");
    return null;
  }

  return (
    <>
      <Head>
        <title>Preview your job post</title>
      </Head>

      {/* <Layout useScrollToTop={false} > */}
      <Layout showFooter={false} >
        {/* {id && <JobPostPreviewWithNoSSR id={id} user={user} title={title} />} */}
        {id && <JobPostPreview id={id} user={user} title={title} />}
      </Layout>
    </>
  );
};

// https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
export async function getServerSideProps({ query }) {
  const {
    id,
    title,
  } = query;

  return {
    props: {
      id: id || null,
      title: title || null,
    }
  };
}

export default Preview;

// { /* <div class="__debug-24 cu cv" style="
//     max-width: 18rem;
// "><section class="__debug-25 cw cx cy bs cz bh d0 b6"><form><h2 class="__debug-26 d1 d2" style="
//     text-align: center;
//     color: black;
//     margin-bottom: 0.5rem;
// ">Payment</h2><label class="__debug-27 d3 d4" style="
//     text-align: center;
//     display: flex;
//     width: 100%;
//     align-items: center;
//     justify-content: center;
//     font-size: 1rem;
//     opacity: 0.5;
// ">Your total price is $299</label><button type="button" class="__debug-44 dz d6 e0 e1 db d8 d9 bm bn bo e2" style="
//     margin-top: 1rem;
// ">PayPal</button><button type="button" class="__debug-44 dz d6 e0 e1 db d8 d9 bm bn bo e2" style="
//     margin-top: 1rem;
//     background: black;
// ">BitPay</button><img src="https://design.mybabysketch.com/static/badges.png" style="
//     margin-top: 1rem;
//     width: 12rem;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     margin-left: 1.5rem;
//     filter: grayscale(100%);
//     margin-bottom: 1rem;
// "></img> */ }