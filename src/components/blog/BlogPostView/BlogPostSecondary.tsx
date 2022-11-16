import React, { useEffect } from "react";

import MoreBlogsFromTheUser from "../MoreBlogsFromTheUser";
import { findUserProfileByUsername } from "../../../api/profile";
import MoreJobsFromTheUser from "../../job/MoreJobsFromTheUser";
import Community from "../../Community";
import TopUsersForHire from "../../TopUsersForHire";
import TopBlogs from "../TopBlogs";
import { useSolanaCodeTokenDetails } from "../../../contexts/solanaCodeToken";
import BlogPostSecondaryWrapper from "../../BlogPostSecondaryWrapper";
import ProfileUserSecondary from "../../profile/ProfileUserSecondary";

const BlogPostSecondary = ({
  status,

  // company_logo,
  // company_name,
  // company_location,
  // company_description,
  // company_website,

  // job_how_to_apply,
  
  id, // blog id
  username,

  userProfile,
  setUserProfile,
}) => {
  // @ts-ignore
  const { solanaCodeTokenPrice } = useSolanaCodeTokenDetails();
  // const router = useRouter();
  
  if (status === "Draft") {
    return null;
  }
  // if (status === "Hold") {
  //   return null;
  // }
  // if (status === "Review") {
  //   return null;
  // }
  // if (status === "Cancelled") {
  //   return null;
  // }
  // if (status === "Closed") {
  //   return null;
  // }

  // const [userProfile, setUserProfile] = useState(null);

  // const user_profile_endpoint= `${API}/api/v1/profile?username=${username}`;

  useEffect(() => {
    findUserProfileByUsername(username)
      .then(({ data }) => {
        // console.log("data");
        // console.log(data);

        setUserProfile(data);
      })
      .catch(error => {
        console.log("error");
        console.error(error);
      });
  }, []);

  return (
    <BlogPostSecondaryWrapper id="test" >  
      {userProfile && <ProfileUserSecondary
        username={username}

        profile_name={userProfile.profile_name}
        bio={userProfile.bio}

        job={userProfile.job}
        salary={userProfile.salary}
        location={userProfile.location}
        website={userProfile.website}

        github_username={userProfile.github_username}
        discord_user_details={userProfile.discord_user_details}
        // linkedin={linkedin}
        profile_image={userProfile.profile_image}

        created_at={userProfile.created_at}

        total_followers={userProfile.total_followers}

        for_hire={userProfile.for_hire}

        skills={userProfile.skills}

        page="blog"

        job_types={userProfile.job_types} 
        use_cryptocurrency={userProfile.use_cryptocurrency}  
        
        solana_wallet_user_public_key={userProfile.solana_wallet_user_public_key}

        total_blog_votes={userProfile.total_blog_votes}
      />}

      <MoreBlogsFromTheUser 
        id={id}
        username={username}
      />

      <MoreJobsFromTheUser 
        job_id={null}
        username={username}
      />

      {/* <Telegram /> */}
      <Community />
      {/* <CodePriceCard codePrice={solanaCodeTokenPrice} /> */}

      <TopBlogs limit={5} />
      <TopUsersForHire limit={5} />

      {/* TODO */}
      {/* Use another referral instead of FTX */}
      {/* <ExternalLink
        href={FTX_RFERRAL}
      >        
        <div style={{
          // marginBottom: "1rem",
          marginBottom: "0.75rem",
          padding: "0.5rem",
          background: "white",
          borderRadius: "0.5rem",
          boxShadow: "rgb(0 0 0 / 10%) 0px 1px 1px 0px",
        }}>
          <img 
            style={{
              width: "100%",
              // background: "#efefef",
              background: "white",
              // borderRadius: "0.5rem",
            }}
            src="/static/FTX_ALT.png" 
            alt="FTX logo" 
          />
        </div>
      </ExternalLink> */}

    </BlogPostSecondaryWrapper>
  );
};

export default BlogPostSecondary;

// {/* <CompanyCard>
//   <CentralizeChildren $style={{
//     paddingBottom: "1rem",
//   }}>
//     <CompanyLogo
//       href={company_website}
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       <Avatar
//         name={company_name}
//         size="5rem"
//         src={company_logo || ""} // Should use this instead.
//       // src={`${API}/${company_logo}`} // Should use this instead.
//       />
//     </CompanyLogo>
//   </CentralizeChildren>
//   <CompanyName
//     href={company_website}
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     {company_name}
//   </CompanyName>
//   {/* <Spacer h="a" /> */}
//   <CentralizeChildren>
//     <LocationOnIcon style={{ fontSize: "1.5rem" }} /> {company_location}
//   </CentralizeChildren>
//   {/* <Spacer h="a" /> */}
//   <CompanyDescription>
//     {company_description}
//   </CompanyDescription>
//   <CentralizeChildren
//     $style={{
//       marginTop: "16px"
//     }}
//   >
//     <JobLinkButton
//       href={validateEmail(job_how_to_apply) ? `mailto:${job_how_to_apply}` : job_how_to_apply}
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       APPLY HERE
//     </JobLinkButton >
//   </CentralizeChildren>
// </CompanyCard> */}