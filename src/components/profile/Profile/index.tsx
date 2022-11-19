import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import moment from "moment";

import { Avatar } from "baseui/avatar";

// import LocationOnIcon from "@material-ui/icons/LocationOn";

// https://material-ui.com/pt/api/tooltip/
import { Tooltip } from "@material-ui/core";

// import ShareIcon from "@material-ui/icons/Share";
import Settings from "@material-ui/icons/Settings";

import AccountBoxIcon from "@material-ui/icons/AccountBox";
// import Money from "@material-ui/icons/AttachMoneyTwoTone";
import Money from "@material-ui/icons/AttachMoneyRounded";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PublicIcon from "@material-ui/icons/Public";
import GitHubIcon from "@material-ui/icons/GitHub";

import Chip from "@material-ui/core/Chip";

import { ProfileSkill, ProfileSkillsWrapper } from "../ProfileSkillsCSS";

// import LinkedInIcon from "@material-ui/icons/LinkedIn";

// import GroupIcon from "@material-ui/icons/Group";

// import SecondaryWrapper from "../../SecondaryWrapper";

import {
  ProfileImage,

  // ShareProfileWrapper,
  SettingsWrapper,
  ProfileCard,
  ProfileName,
  // UserName,
  Bio,

  // ShowProfileDetailsButton,
  ProfileDetailsContainer,
  ProfileDetailWrapper,
  ProfileDetailLink,
  ProfileFollowersLink,
  ProfileJobDetailsGroupContainer,
  ProfileJobDetailsLabel,
  ProfileJobDetailsLabelText,
  ProfileUserSection,
} from "./ProfileCSS";

import Follow from "./Follow";
import Message from "./Message";

import ProfileShare from "../ProfileShare";

import NewPortfolioForm from "../../portfolio/NewPortfolioForm";
import PortfolioList from "../../portfolio/PortfolioList";

import { useAuth } from "../../../contexts/auth";
import {
  FULLTIME,
  PARTTIME,
  FREELANCE,
  CONTRACT,
  INTERNSHIP,
} from "../../../typeDefinitions/job";
import CentralizeChildren from "../../CentralizeChildren";
import { MainNFTImage } from "../../../crypto/MainNFTImage";
import { findUserMainNFTByUsername } from "../../../api/mainNFT";
import ExternalLink from "../../ExternalLink";
import ProfileMainNFT from "../ProfileMainNFT";
import { BsDiscord } from "react-icons/bs";
import { shortenAddress } from "../../../crypto/solana/metaplex/utils";
import SolanaImage from "../../../crypto/SolanaImage";

// import env from "../../../config/environment";
// const API = `${env.API}`;

const SettingLink = ({ isOwner }) => {
  if (isOwner) {
    return (
      <Link href="/settings/profile">
        <SettingsWrapper>
          <Tooltip title="Edit the profile" arrow>
            <Settings />
          </Tooltip>
        </SettingsWrapper>
      </Link>
    );
  } else {
    return null;
  }
};

const ProfileUserButton = ({
  followers,
  setFollowers,

  user,
  isOwner,
  username,

  profile_image,
}) => {
  if (isOwner) {
    return (
      <NewPortfolioForm username={username} profile_image={profile_image} />
    );
  } else {
    return (
      <>
        <Follow
          followers={followers}
          setFollowers={setFollowers}
          user={user}
          username={username}
        />
        {user && <Message username={username} />}
        {/* <Message username={username} /> */}
      </>
    );
  }
};

const ProfileJob = ({ job }) => {
  if (job) {
    return (
      <ProfileDetailWrapper>
        <AccountBoxIcon
          style={{
            fontSize: "1.1rem",
            marginLeft: "-0.1rem",
            marginRight: "0.25rem",
          }}
        />{" "}
        {job}
      </ProfileDetailWrapper>
    );
  } else {
    return null;
  }
};

const ProfileSalary = ({ salary }) => {
  if (salary) {
    return (
      <ProfileDetailWrapper>
        <Money
          style={{
            fontSize: "1rem",
            marginRight: "0.25rem",
            color: "white",
            backgroundColor: "rgb(37, 191, 161)",
          }}
        />{" "}
        {salary}
      </ProfileDetailWrapper>
    );
  } else {
    return null;
  }
};

const ProfileLocation = ({ location }) => {
  if (location) {
    return (
      <ProfileDetailWrapper>
        <LocationOnIcon style={{ fontSize: "1rem", marginRight: "0.25rem" }} />{" "}
        {location}
      </ProfileDetailWrapper>
    );
  } else {
    return null;
  }
};

const ProfileWebsite = ({ website }) => {
  if (website) {
    return (
      <ProfileDetailLink
        href={website}
        target="_blank"
        rel="noopener noreferrer"
      >
        <PublicIcon style={{ fontSize: "1rem", marginRight: "0.25rem" }} />
        Website
      </ProfileDetailLink>
    );
  } else {
    return null;
  }
};

const ProfileGitHub = ({ github_username }) => {
  if (github_username) {
    return (
      <ProfileDetailLink
        href={`https://github.com/${github_username}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubIcon style={{ fontSize: "1rem", marginRight: "0.25rem" }} />
        GitHub
      </ProfileDetailLink>
    );
  } else {
    return null;
  }
};

const ProfileDiscord = ({ discord_user_details }) => {
  if (discord_user_details !== null) {
    const { discord_id, discord_username, discriminator } =
      discord_user_details;
    return (
      <ProfileDetailLink
        // href={`https://github.com/${github_username}`}
        href={`https://discordapp.com/users/${discord_id}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsDiscord style={{ fontSize: "1rem", marginRight: "0.25rem" }} />
        {`${discord_username}#${discriminator}`}
      </ProfileDetailLink>
    );
  } else {
    return null;
  }
};

const ProfileSolanaWallet = ({ solana_wallet_user_public_key }) => {
  if (solana_wallet_user_public_key) {
    return (
      <ProfileDetailLink
        href={`https://solscan.io/account/${solana_wallet_user_public_key?.toString()}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* <GitHubIcon style={{ fontSize: "1rem", marginRight: "0.25rem" }} /> */}
        <img
          src="/static/solana.png"
          style={{
            width: "1rem",
            height: "1rem",
            marginRight: "0.25rem",
          }}
        />
        {shortenAddress(solana_wallet_user_public_key)}
      </ProfileDetailLink>
    );
  } else {
    return null;
  }
};

// const ProfileLinkedIn = ({ linkedin }) => {
//   if (linkedin) {
//     return (
//       <ProfileDetailLink
//         href={linkedin}
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <LinkedInIcon style={{ fontSize: "1rem", marginRight: "0.25rem" }} />
//             LinkedIn
//       </ProfileDetailLink>

//     );
//   } else {
//     return null;
//   };
// };

const ProfileUser = ({
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

  // isOwner,
  skills,

  job_types,

  solana_wallet_user_public_key,

  total_blog_votes,
}) => {
  // console.log("total_blog_votes");
  // console.log(total_blog_votes);
  // alert(total_blog_votes);
  // alert(typeof total_blog_votes);

  // alert(solana_wallet_user_public_key);

  // console.log("discord_user_details");
  // console.log(discord_user_details);

  // alert(skills);
  // alert(for_hire);

  // alert(job_types);
  // console.log("job_types");
  // console.log(job_types);

  // alert(job_types);

  const jobTypes = job_types === null ? "" : job_types.join(" ");

  const selectFullTime = jobTypes.includes(FULLTIME);
  const selectPartTime = jobTypes.includes(PARTTIME);
  const selectFreelance = jobTypes.includes(FREELANCE);
  const selectContract = jobTypes.includes(CONTRACT);
  const selectInternship = jobTypes.includes(INTERNSHIP);

  const selected =
    selectFullTime ||
    selectPartTime ||
    selectFreelance ||
    selectContract ||
    selectInternship;

  const [followers, setFollowers] = useState(total_followers);

  const joined = moment(created_at).format("MMMM Do YYYY");

  const {
    // @ts-ignore
    user,
  } = useAuth();

  const isOwner = user && user.username === username;

  const router = useRouter();

  return (
    <ProfileUserSection>
      <ProfileCard>
        <div
          style={{
            // background: "rgb(17, 160, 245)",
            background: "rgb(55, 66, 82)",
            height: "2rem",
            borderRadius: "0.5rem 0.5rem 0 0",

            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <ProfileShare username={username} profile_image={profile_image} />
          <SettingLink isOwner={isOwner} />
        </div>
        {/* Use withStyle instead? */}
        <CentralizeChildren
          style={{
            paddingBottom: "0.5rem",
            justifyContent: "flex-start",
            marginLeft: "1rem",
            marginRight: "1rem",
          }}
        >
          <Tooltip title={isOwner ? "Edit your profile image" : ""} arrow>
            <ProfileImage
              // @ts-ignore
              $isOwner={!!isOwner}
              onClick={(e) => {
                e.preventDefault();
                if (isOwner) {
                  router.push("/settings/profile");
                }
              }}
            >
              <Avatar
                // style={{
                //   border: "2px solid #efefef",
                // }}

                name={username}
                size="2.75rem"
                src={profile_image || ""}
                // src={profile_image ? `${API}/${profile_image}` : ""}
              />
            </ProfileImage>
          </Tooltip>

          <ProfileName>{profile_name || username}</ProfileName>
        </CentralizeChildren>

        <div
          style={{
            padding: "0 1rem 1rem 1rem",
          }}
        >
          {/* <ProfileName>{profile_name}</ProfileName> */}
          {/* <UserName>u/{username}</UserName> */}

          {/* Make this work with server */}
          <ProfileMainNFT username={username} isProfile={true} />

          <Bio>{bio}</Bio>

          {/* Decide where to put and how to show them */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              marginTop: "1rem",
            }}
          >
            <div
              style={{
                flex: "1 1 50%",
                marginBottom: "1rem",
              }}
            >
              <h5
                style={{
                  margin: 0,
                  fontSize: "1rem",
                }}
              >
                Followers
              </h5>
              <div
                style={{
                  fontSize: "0.85rem",
                  opacity: "0.7",
                  marginTop: "0.1rem",
                  display: "flex",
                }}
              >
                <Link href={`/user/${username}/followers`}>
                  <ProfileFollowersLink>{followers}</ProfileFollowersLink>
                </Link>
              </div>
            </div>

            <div
              style={{
                flex: "1 1 50%",
                marginBottom: "1rem",
              }}
            >
              <h5
                style={{
                  margin: 0,
                  fontSize: "1rem",
                }}
              >
                Joined
              </h5>
              <div
                style={{
                  fontSize: "0.85rem",
                  opacity: "0.7",
                  marginTop: "0.1rem",
                  display: "flex",
                }}
              >
                {joined}
              </div>
            </div>

            <div
              style={{
                flex: "1 1 50%",
                marginBottom: "1rem",
              }}
            >
              <h5
                style={{
                  margin: 0,
                  fontSize: "1rem",
                }}
              >
                For Hire
              </h5>
              <div
                style={{
                  fontSize: "1rem",
                  opacity: "0.7",
                  marginTop: "0.1rem",
                  display: "flex",
                }}
              >
                {for_hire ? "Yes" : "No"}
              </div>
            </div>

            <div
              style={{
                flex: "1 1 50%",
                marginBottom: "1rem",
              }}
            >
              <h5
                style={{
                  display: "flex",
                  alignItems: "center",

                  margin: 0,
                  fontSize: "1rem",
                }}
              >
                {/* Use crypto */}
                {/* <span style={{
                  color: "#F89B2C",
                  marginRight: "0.25rem",
                }}>₿</span> User */}
                {/* <span>₿</span> User

                {/* https://cryptologos.cc/ */}
                {/* Do you use Bitcoin or other cryptocurrencies? at profile form. */}
                <img
                  style={{
                    width: "1rem",
                    marginRight: "0.25rem",
                  }}
                  src="/static/logos/bitcoin.svg"
                />{" "}
                Pay
                {/* }} src="/static/logos/bitcoin.svg" /> Blockchain */}
                {/* <img style={{
                  width: "1rem",
                  marginRight: "0.25rem",
                }} src="/static/logos/bitcoin.svg" /> User */}
                {/* }}>₿</span> Crypto User */}
              </h5>
              <div
                style={{
                  fontSize: "1rem",
                  opacity: "0.7",
                  marginTop: "0.1rem",
                  display: "flex",
                }}
              >
                {/* Yes */}
                {use_cryptocurrency ? "Yes" : "No"}
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "1rem",
            }}
          >
            <img
              src="/static/logo.svg"
              style={{
                width: "1rem",
                height: "1rem",
              }}
            />
            <span
              style={{
                marginLeft: "0.25rem",
              }}
            >
              {!total_blog_votes ? 0 : total_blog_votes}
            </span>
          </div>

          <CentralizeChildren
            $style={
              {
                // marginTop: "0.5rem"
              }
            }
          >
            <ProfileUserButton
              setFollowers={setFollowers}
              followers={total_followers}
              user={user}
              isOwner={isOwner}
              username={username}
              profile_image={profile_image}
            />
          </CentralizeChildren>

          {/* Extract this? */}
          <ProfileJobDetailsGroupContainer
            role="group"
            aria-labelledby="checkbox-group"
            $selected={selected}
          >
            {selectFullTime && (
              <ProfileJobDetailsLabel>
                <input type="checkbox" checked />
                <ProfileJobDetailsLabelText>
                  {FULLTIME}
                </ProfileJobDetailsLabelText>
              </ProfileJobDetailsLabel>
            )}
            {selectPartTime && (
              <ProfileJobDetailsLabel>
                <input type="checkbox" checked />
                <ProfileJobDetailsLabelText>
                  {PARTTIME}
                </ProfileJobDetailsLabelText>
              </ProfileJobDetailsLabel>
            )}
            {selectContract && (
              <ProfileJobDetailsLabel>
                <input type="checkbox" checked />
                <ProfileJobDetailsLabelText>
                  {CONTRACT}
                </ProfileJobDetailsLabelText>
              </ProfileJobDetailsLabel>
            )}
            {selectFreelance && (
              <ProfileJobDetailsLabel>
                <input type="checkbox" checked />
                <ProfileJobDetailsLabelText>
                  {FREELANCE}
                </ProfileJobDetailsLabelText>
              </ProfileJobDetailsLabel>
            )}
            {selectInternship && (
              <ProfileJobDetailsLabel>
                <input type="checkbox" checked />
                <ProfileJobDetailsLabelText>
                  {INTERNSHIP}
                </ProfileJobDetailsLabelText>
              </ProfileJobDetailsLabel>
            )}
            {/* <input type="checkbox" checked={selectFullTime} />
              <ProfileJobDetailsLabelText>
                {FULLTIME}
              </ProfileJobDetailsLabelText>
            </ProfileJobDetailsLabel>
            <ProfileJobDetailsLabel>
              <input type="checkbox" checked={selectPartTime} />
              <ProfileJobDetailsLabelText>
                {PARTTIME}
              </ProfileJobDetailsLabelText>
            </ProfileJobDetailsLabel>
            <ProfileJobDetailsLabel>
              <input type="checkbox" checked={selectContract} />
              <ProfileJobDetailsLabelText>
                {CONTRACT}
              </ProfileJobDetailsLabelText>
            </ProfileJobDetailsLabel>
            <ProfileJobDetailsLabel>
              <input type="checkbox" checked={selectFreelance} />
              <ProfileJobDetailsLabelText>
                {FREELANCE}
              </ProfileJobDetailsLabelText>
            </ProfileJobDetailsLabel>
            <ProfileJobDetailsLabel>
              <input type="checkbox" checked={selectInternship} />
              <ProfileJobDetailsLabelText>
                {INTERNSHIP}
              </ProfileJobDetailsLabelText>
            </ProfileJobDetailsLabel> */}
          </ProfileJobDetailsGroupContainer>

          <ProfileDetailsContainer>
            <ProfileJob job={job} />
            <ProfileSalary salary={salary} />
            <ProfileLocation location={location} />
            <ProfileWebsite website={website} />
            <ProfileGitHub github_username={github_username} />
            <ProfileDiscord discord_user_details={discord_user_details} />
            <ProfileSolanaWallet
              solana_wallet_user_public_key={solana_wallet_user_public_key}
            />
            {/* Include joined here */}
            {/* <ProfileLinkedIn linkedin={linkedin} /> */}
          </ProfileDetailsContainer>

          {skills && skills.length > 0 && (
            <ProfileSkillsWrapper>
              {skills.map((skill) => {
                // skills.map((skill, index) => {
                // ["Rust", "Python", "Go", "Haskell", "JavaScript", "React", "AWS", "Heroku", "GitHub", "DevOps"].map((skill, index) => {
                return (
                  <ProfileSkill key={skill}>
                    <Chip
                      variant="outlined"
                      label={skill}
                      // color="secondary"
                    />
                  </ProfileSkill>
                );
              })}
            </ProfileSkillsWrapper>
          )}
        </div>
      </ProfileCard>

      <PortfolioList
        username={username}
        isOwner={isOwner}
        profile_image={profile_image}
      />
    </ProfileUserSection>
  );
};

export default ProfileUser;

// <ProfileName>{profile_name}</ProfileName>
// <UserName>u/{username}</UserName>
// <Bio>
//   {bio}
// </Bio>
// {/* <CentralizeChildren
//   $style={{
//     marginTop: "16px"
//   }}
// >
//   <ProfileUserButton user={user} isOwner={isOwner} username={username} />
// </CentralizeChildren> */}

// {/* <ShowProfileDetailsButton onClick={(e) => {
//   e.preventDefault();
//   setShowProfileDetails(!showProfileDetails);
// }} >
//   {showProfileDetails ? "Fewer Details" : "More Information"}
// </ShowProfileDetailsButton> */}

// <ProfileDetailsContainer
//   // @ts-ignore
//   $showProfileDetails={showProfileDetails}
// >
//   <ProfileJob job={job} />
//   <ProfileSalary salary={salary} />
//   <ProfileLocation location={location} />
//   <ProfileWebsite website={website} />
//   {/* <ProfileGitHub github_username={github_username} /> */}
//   {/* <ProfileLinkedIn linkedin={linkedin} /> */}
// </ProfileDetailsContainer>
