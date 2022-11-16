import React from "react";

import { useRouter } from "next/router";

import Layout from "../../../components/layouts";
import Content from "../../../components/Content";

import ProfileNav from "../../../components/profile/ProfileNav";

import { useAuth } from "../../../contexts/auth";
import { API, COMPANY_LOGO, COMPANY_NAME } from "../../../config/environment";

import Community from "../../../components/Community";
import ProfileBlogPostsForOwner from "../../../components/blog/ProfileBlogPostsForOwner";
import ProfileBlogPostsForNotOwner from "../../../components/blog/ProfileBlogPostsForNotOwner";
import ProfileContainer from "../../../components/ProfileContainer";
import ProfileSecondaryWrapper from "../../../components/ProfileSecondaryWrapper";
import ProfileUserSecondary from "../../../components/profile/ProfileUserSecondary";
import Metatags from "../../../components/Metatags";

// Should be BlogPosts later.
const Posts = ({
  userProfile,
  status,

  sort,
  page,
  // jobList
}) => {
  // alert(status);
  
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

  const meta_title = `Posts (u/${username}) - ${COMPANY_NAME}`;
  const meta_description = `See the blog posts from ${username}.`;
  const meta_image = profile_image || COMPANY_LOGO;

  return (
    <>
      <Metatags 
        title={meta_title}
        description={meta_description}
        image={meta_image}
        keywords={skills && skills.length > 0 && skills.join(", ")}
      />

      <Layout>
        <ProfileNav isOwner={isOwner} username={username} lastPath={lastPath} />

        <ProfileContainer>
          <Content>
            {isOwner 
              ? <ProfileBlogPostsForOwner username={username} status={status} /> 
              : <ProfileBlogPostsForNotOwner username={username} sort={sort} page={page} />
            }
            
            <ProfileSecondaryWrapper>
              <ProfileUserSecondary
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
            {/* <ProfileJobs
              isOwner={isOwner}
              username={username}
            /> */}
            {/* <ProfileUser
              username={username}

              profile_name={profile_name}
              bio={bio}

              job={job}
              salary={salary}
              location={location}
              website={website}

              github_username={github_username}
              // linkedin={linkedin}

              profile_image={profile_image}

              created_at={created_at}

              total_followers={total_followers}

              for_hire={for_hire}

              skills={skills}

              page="blog"
            /> */}
          </Content>
        </ProfileContainer>
      </Layout>
    </>
  );
};

// const jobListEndpointFromQueries = ({
//   sort,
// }) => {
//   // console.log("company_name");
//   // console.log(company_name);

//   // Use .env later with API?
//   // Update this with this?
//   // https://usefulangle.com/post/81/javascript-change-url-parameters
//   // https://www.npmjs.com/package/url-parse
//   let target = `${API}/api/v1/job/list?`;

//   if (sort !== undefined) {
//     target += `&sort=${sort}`;
//   }

//   // if (page !== undefined) {
//   //   target += `&page=${page}`;
//   // }

//   return target;
// };

// https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
export async function getServerSideProps({ params, query }) {
  // https://nextjs.org/docs/routing/dynamic-routes

  const {
    username
  } = params;

  const {
    status,

    sort,
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
      // Should use unwrapOrString later.
      status: status === undefined ? null : status,
      // jobList,
      sort: sort === undefined ? null : sort,
      page: page === undefined ? null : page,
    }
    // props: {
    //   data: [userProfile, jobList]
    // }
  };
}

export default Posts;