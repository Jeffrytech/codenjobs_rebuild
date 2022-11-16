// The content of it should be shown to its owner only.

import React from "react";

import Head from "next/head";
import { useRouter } from "next/router";

import Layout from "../../../components/layouts";
import Content from "../../../components/Content";

import ProfileNav from "../../../components/profile/ProfileNav";

import { useAuth } from "../../../contexts/auth";
import { API, COMPANY_NAME } from "../../../config/environment";
import ProfileFileList from "../../../components/file/ProfileFileList";
import ProfileFileListContainer from "../../../components/ProfileFileListContainer";

const Files = ({
  userProfile,
  file_id,
  title,
  sort,
  reuse,
  page,
}) => {
  const {
    // @ts-ignore
    user,
  } = useAuth();

  const router = useRouter();
  const lastPath = router.asPath.split("/").pop();
  // console.log("data");
  // console.log(data);

  if (!userProfile) {
    return <div>{"The user doesn't exist."}</div>;
  }

  const {
    username,

    // profile_name,
    // bio,

    // job,
    // salary,
    // location,
    // website,

    // github_username,
    // discord_user_details,
    // // linkedin,

    // profile_image,

    // created_at,

    // total_followers,

    // for_hire,
    // use_cryptocurrency,

    // skills,

    // job_types,

    // solana_wallet_user_public_key,

    // total_blog_votes,
  } = userProfile;

  // console.log("data[1]");
  // console.log(data[1]);

  const isOwner = (user && user.username === username);

  // return null;

  if (isOwner) {
    return <>
      <Head>
        {/* <title>Companies by u/{username}</title> */}
        <title>Files (u/{username}) - {COMPANY_NAME}</title>
      </Head>

      <Layout>
        <ProfileNav 
          isOwner={isOwner} 
          username={username} 
          lastPath={lastPath} 
        />

        <ProfileFileListContainer
          // style={{
          //   minHeight: isOwner ? "inherit" : "calc(100vh - 10rem)"
          // }}
        >
          {isOwner && <Content style={{
            // justifyContent: "center",
          }}>
            <ProfileFileList
              // file_id={file_id} 
              title={title}
              file_id={file_id}
              sort={sort}
              page={page}
              reuse={reuse}
            />
          </Content>}
        </ProfileFileListContainer>
      </Layout>
    </>;
  } else {
    // Should handle this better
    return (
      // @ts-ignore
      <Layout />
    );
  }
};

// https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
export async function getServerSideProps({ params, query }) {
  // https://nextjs.org/docs/routing/dynamic-routes
  const {
    username,
  } = params;

  const {
    file_id,
    title,
    sort,
    reuse,
    page,
  } = query;

  const user_profile_endpoint = `${API}/api/v1/profile?username=${username}`;

  // eslint-disable-next-line no-undef
  const userProfileResponse = await fetch(user_profile_endpoint);
  const userProfile = await userProfileResponse.json();

  return {
    props: {
      userProfile,
      file_id: file_id === undefined ? null : file_id,
      title: title === undefined ? null : title,
      sort: sort === undefined ? null : sort,
      reuse: reuse === undefined ? null : reuse,
      page: page === undefined ? null : page,
    }
  };
}

export default Files;

