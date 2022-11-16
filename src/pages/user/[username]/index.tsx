import React from "react";

import Head from "next/head";
import { useRouter } from "next/router";

import Layout from "../../../components/layouts";
import Container from "../../../components/Container";
import Content from "../../../components/Content";

import ProfileNav from "../../../components/profile/ProfileNav";
import Profile from "../../../components/profile/Profile";

import { useAuth } from "../../../contexts/auth";
import { 
  API, 
  COMPANY_NAME
} from "../../../config/environment";
import ProfileContainer from "../../../components/ProfileContainer";
import Metatags from "../../../components/Metatags";

// const Meta = ({
//   username,
//   profile_name,
//   bio,
//   profile_image,
// }) => {
//   return (
//     <Head>
//       {/* <title>Profile (u/{username}) - {COMPANY_NAME}</title> */}
//       <title>Profile (u/{username}) - {COMPANY_NAME}</title>

//       <meta property="og:title" content={`${profile_name} at ${COMPANY_NAME}`} />
//       <meta name="twitter:title" content={`${profile_name} at ${COMPANY_NAME}`} />

//       <meta name="description" content={bio} />
//       <meta property="og:description" content={bio} />
//       <meta name="twitter:description" content={bio} />

//       <meta property="og:image" content={profile_image} />
//       <meta name="twitter:image" content={profile_image} />
//       <meta name="image" content={profile_image} />

//       <meta name="twitter:card" content="summary_large_image" />
//     </Head>
//   );
// };

const Jobs = ({
  userProfile,
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
    return <div>{"The user doesn't exist."}</div>;
  }

  // console.log("userProfile");
  // console.log(userProfile);

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

  // alert(discord_user_details);

  // alert(job_types);

  const isOwner = (user && user.username === username);

  return (
    <>
      <Metatags
        title={`${profile_name} (u/${username}) - ${COMPANY_NAME}`}
        // title={`u/${username} at ${COMPANY_NAME}`}
        description={bio}
        image={profile_image}
        // profile_name={profile_name}
      />
      
      <Layout>
        <ProfileNav isOwner={isOwner} username={username} lastPath={lastPath} />

        <ProfileContainer>
          <Content style={{
            justifyContent: "center",
          }}>
            <Profile
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

              job_types={job_types}

              solana_wallet_user_public_key={solana_wallet_user_public_key}

              total_blog_votes={total_blog_votes}

              // Should use this here and remove from Profile later
              // isOwner={isOwner}
            />
          </Content>
        </ProfileContainer>
      </Layout>
    </>
  );
};

// https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
export async function getServerSideProps({ params }) {
  // https://nextjs.org/docs/routing/dynamic-routes
  const {
    username
  } = params;

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
      // jobList,
    }
    // props: {
    //   data: [userProfile, jobList]
    // }
  };
}

export default Jobs;