import React from "react";

import Head from "next/head";
import { useRouter } from "next/router";

import Layout from "../../../components/layouts";
import Content from "../../../components/Content";

import ProfileNav from "../../../components/profile/ProfileNav";
import ProfileFollowers from "../../../components/profile/ProfileFollowers";
import ProfileUser from "../../../components/profile/ProfileUser";

import { useAuth } from "../../../contexts/auth";
import { API, COMPANY_LOGO, COMPANY_NAME } from "../../../config/environment";
import Community from "../../../components/Community";
import ProfileSecondaryWrapper from "../../../components/ProfileSecondaryWrapper";
import ProfileContainer from "../../../components/ProfileContainer";

const Followers = ({
  userProfile,
  // sort,
  page
  // jobList
}) => {
  const {
    // @ts-ignore
    user,
  } = useAuth();

  const router = useRouter();
  const lastPath = router.asPath.split("/").pop();

  // Should return username also and compare with the username from userProfile to decide to show edit button or not.
  // console.log("jobList");
  // console.log(jobList);

  // console.log("data");
  // console.log(data);

  if (!userProfile) {
    return <div>Verify there is correct username in the path.</div>;
  }

  const {
    username,

    profile_name,
    bio,

    job,
    salary,
    location,
    website,

    github_username,
    discord_user_details,
    // linkedin,

    profile_image,

    created_at,

    total_followers,

    for_hire,
    use_cryptocurrency,
    
    skills,

    job_types,

    solana_wallet_user_public_key,

    total_blog_votes,
  } = userProfile;

  const isOwner = (user && user.username === username);

  const meta_title = `Followers (u/${username}) - ${COMPANY_NAME}`;
  const meta_description = `See the followers of ${username}.`;
  const meta_image = profile_image || COMPANY_LOGO;

  return (
    <>
      <Head>
        <title>{isOwner ? `Your Followers - ${COMPANY_NAME}` : `Followers (u/${username}) - ${COMPANY_NAME}`}</title>
        <meta property="og:title" content={meta_title} />
        <meta name="twitter:title" content={meta_title} />

        <meta name="description" content={meta_description} />
        <meta property="og:description" content={meta_description} />
        <meta name="twitter:description" content={meta_description} />

        <meta property="og:image" content={meta_image} />
        <meta name="twitter:image" content={meta_image} />
        <meta name="image" content={meta_image} />

        <meta name="twitter:card" content="summary_large_image" />

        <meta name="keywords" content={skills && skills.length > 0 && skills.join(", ")} key="keywords" />
      </Head>

      <Layout>
        <ProfileNav isOwner={isOwner} username={username} lastPath={lastPath} />

        <ProfileContainer>
          <Content>
            <ProfileFollowers
              isOwner={isOwner}
              username={username}

              // sort={sort}
              page={page}

              // user={user}
            />
            <ProfileSecondaryWrapper>
              <ProfileUser
                username={username}

                profile_name={profile_name}
                bio={bio}

                job={job}
                salary={salary}
                location={location}
                website={website}

                github_username={github_username}
                discord_user_details={discord_user_details}
                // linkedin={linkedin}

                profile_image={profile_image}

                created_at={created_at}

                total_followers={total_followers}

                for_hire={for_hire}
                use_cryptocurrency={use_cryptocurrency}

                skills={skills}

                page="blog"

                job_types={job_types}

                solana_wallet_user_public_key={solana_wallet_user_public_key}

                total_blog_votes={total_blog_votes}
              />

              <Community />
            </ProfileSecondaryWrapper>

          </Content>
        </ProfileContainer>
      </Layout>
    </>
  );
};

// https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
export async function getServerSideProps({ params, query }) {
  // https://nextjs.org/docs/routing/dynamic-routes
  const {
    username
  } = params;

  const {
    // sort,
    page,
  } = query;

  // Use axios instead?
  const user_profile_endpoint = `${API}/api/v1/profile?username=${username}`;
  // Make it to private?
  // const job_list_endpoint = `http://localhost:8000/api/v1/job/list/user?username=${username}`;

  // Use axios instead later?.
  // eslint-disable-next-line no-undef
  const userProfileResponse = await fetch(user_profile_endpoint);
  const userProfile = await userProfileResponse.json();

  // eslint-disable-next-line no-undef
  // const jobListResponse = await fetch(job_list_endpoint);
  // const jobList = await jobListResponse.json();

  return {
    props: {
      userProfile,
      // sort: sort === undefined ? null : sort,
      page: page === undefined ? null : page,
      // jobList,
    }
    // props: {
    //   data: [userProfile, jobList]
    // }
  };
}

export default Followers;