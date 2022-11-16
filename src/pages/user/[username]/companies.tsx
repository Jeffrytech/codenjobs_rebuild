// The content of it should be shown to its owner only.

import React from "react";

import Head from "next/head";
import { useRouter } from "next/router";

import Layout from "../../../components/layouts";
import Content from "../../../components/Content";

import ProfileNav from "../../../components/profile/ProfileNav";
import ProfileUser from "../../../components/profile/ProfileUser";

import { useAuth } from "../../../contexts/auth";
import { API, COMPANY_NAME } from "../../../config/environment";
import ProfileCompanies from "../../../components/company/ProfileCompanies";
import ProfileSecondaryWrapper from "../../../components/ProfileSecondaryWrapper";
import ProfileContainer from "../../../components/ProfileContainer";

const Companies = ({
  userProfile,
  company_name,
  sort,
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

  // console.log("data[1]");
  // console.log(data[1]);

  const isOwner = (user && user.username === username);

  // return null;

  if (isOwner) {
    return <>
      <Head>
        <title>Companies (u/{username}) - {COMPANY_NAME}</title>
      </Head>

      <Layout>
        <ProfileNav 
          isOwner={isOwner} 
          username={username} 
          lastPath={lastPath} 
        />

        <ProfileContainer 
          // style={{
          //   minHeight: isOwner ? "inherit" : "calc(100vh - 10rem)"
          // }}
        >
          {isOwner && <Content style={{
            // justifyContent: "center",
          }}>
            <ProfileCompanies 
              company_name={company_name} 
              sort={sort}
              page={page}
              username={username}
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

                page="job"

                job_types={job_types}

                solana_wallet_user_public_key={solana_wallet_user_public_key}

                total_blog_votes={total_blog_votes}
              />
            </ProfileSecondaryWrapper>
          </Content>}
        </ProfileContainer>
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
    company_name,
    sort,
    page,
  } = query;

  // Use axios and API instead?
  const user_profile_endpoint = `${API}/api/v1/profile?username=${username}`;
  // const company_list_endpoint = "http://localhost:8000/api/v1/private/company/list";

  // Use axios instead later?.
  // eslint-disable-next-line no-undef
  const userProfileResponse = await fetch(user_profile_endpoint);
  const userProfile = await userProfileResponse.json();

  // eslint-disable-next-line no-undef
  // const companyListResponse = await fetch(company_list_endpoint);
  // const companyList = await companyListResponse.json();

  return {
    props: {
      userProfile,
      company_name: company_name === undefined ? null : company_name,
      sort: sort === undefined ? null : sort,
      page: page === undefined ? null : page,
    }
  };
}

export default Companies;