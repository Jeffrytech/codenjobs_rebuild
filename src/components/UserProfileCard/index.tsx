import React, { useState, useEffect } from "react";

import AccountBoxIcon from "@material-ui/icons/AccountBox";
import LocationOnIcon from "@material-ui/icons/LocationOn";

import ErrorIcon from "@material-ui/icons/Error";

import { Avatar } from "baseui/avatar";

import moment from "moment";

import {
  UserProfileCardContainer,
  UsernameWrapper,
  ProfileImage,
  UserProfileCardDetailWrapper,
  FollowersWrapper,
  FollowersText,
  JobPostsText,
  JobPostsWrapper,
} from "./UserProfileCardCSS";

import { findUserProfileByUsername } from "../../api/profile";
// import { API } from "../../config/environment";
import Link from "next/link";
import ProfileMainNFT from "../profile/ProfileMainNFT";
import UserProfileCardMainNFT from "./UserProfileCardMainNFT";
import { COMPANY_LOGO_WHITE } from "../../config/environment";

const formatFollowers = (totalFollowers: number) => {
  if (!totalFollowers) {
    return "0 Follower";
  }

  if (totalFollowers === 0 || totalFollowers === 1) {
    return `${totalFollowers} Follower`;
  }

  return `${totalFollowers} Followers`;
};

const formatJobPosts = (totalJobPosts: number) => {
  if (!totalJobPosts) {
    return "0 Job Post";
  }

  if (totalJobPosts === 0 || totalJobPosts === 1) {
    return `${totalJobPosts} Job Post`;
  }

  return `${totalJobPosts} Job Posts`;
};

const UserProfileCard = ({ username }) => {
  const [profile, setProfile] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    findUserProfileByUsername(username)
      .then(({ data, error }) => {
        setLoading(false);

        if (data) {
          // It can be null if there is no user
          setProfile(data);
          // console.log("data");
          // console.log(data);
        }

        if (error) {
          console.log("api error");
          console.error(error);
        }
      })
      .catch((error) => {
        console.log("catch error");
        console.error(error);
      });
  }, []);

  if (profile === null) {
    // return null;
    return (
      <UserProfileCardContainer>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <ErrorIcon
            style={{
              color: "rgb(17, 160, 245)",
            }}
          />
          <span
            style={{
              marginLeft: "0.25rem",
            }}
          >
            {loading ? "Loading..." : "Something went wrong"}
          </span>
        </div>
      </UserProfileCardContainer>
    );
  }

  const {
    profile_image,
    created_at,

    job,
    location,
    use_cryptocurrency,

    total_followers,
    total_jobs = 0,

    total_blog_votes,
  } = profile;

  // alert(total_blog_votes);

  // alert(created_at);

  return (
    <UserProfileCardContainer>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexFlow: "row",
        }}
      >
        <Link href={`/user/${username}`}>
          <ProfileImage>
            <Avatar
              size="2rem"
              name={username}
              // src={profile_image || ""}
              src={profile_image || COMPANY_LOGO_WHITE}
              // src={`${API}/${profile_image}`}
            />
          </ProfileImage>
        </Link>
        <div
          style={{
            display: "flex",
            flexFlow: "column",
            marginLeft: "0.5rem",
          }}
        >
          <Link href={`/user/${username}`}>
            <UsernameWrapper
              style={{
                fontSize: "1rem",
                fontWeight: "bold",
                wordBreak: "break-all",
              }}
            >
              u/{username}
            </UsernameWrapper>
          </Link>
          <span
            style={{
              opacity: 0.7,
              fontSize: "0.8rem",
            }}
          >
            {moment.utc(created_at).fromNow()}
            {/* {moment.utc(new Date(created_at)).fromNow()} */}
          </span>
        </div>
      </div>

      <UserProfileCardMainNFT username={username} isUserProfileCard={true} />

      <div
        style={{
          marginTop: "0.25rem",
          // marginTop: "0.5rem",
          display: "flex",
          flexFlow: "column",
          // borderTop: "2px solid black",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Link href={`/user/${username}/followers`}>
            <FollowersWrapper>
              <FollowersText>{formatFollowers(total_followers)}</FollowersText>
            </FollowersWrapper>
          </Link>

          <span>|</span>

          <Link href={`/user/${username}/jobs`}>
            <JobPostsWrapper>
              <JobPostsText>{formatJobPosts(total_jobs)}</JobPostsText>
            </JobPostsWrapper>
          </Link>

          {/* <div style={{
            display: "flex",
            alignItems: "center",
            marginLeft: "0.25rem",
          }}>
            <img src="/static/logo.svg" style={{
              width: "1rem",
              height: "1rem"
            }} />
            <span style={{
              marginLeft: "0.25rem",
            }} >
              {!total_blog_votes ? 0 : total_blog_votes}
            </span>
          </div> */}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: "0.1rem",
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

        {/* <UserProfileCardDetailWrapper>
          <Link href={`/user/${username}/jobs`}>
            <FollowersWrapper>
              <FollowersText>
                {formatJobPosts(total_jobs)}
              </FollowersText>
            </FollowersWrapper>
          </Link>
        </UserProfileCardDetailWrapper> */}

        {job && (
          <UserProfileCardDetailWrapper>
            <AccountBoxIcon
              style={{
                fontSize: "1.25rem",
              }}
            />
            <span
              style={{
                marginLeft: "0.1rem",
                // opacity: 0.7,
              }}
            >
              {job}
            </span>
          </UserProfileCardDetailWrapper>
        )}

        {location && (
          <UserProfileCardDetailWrapper>
            <LocationOnIcon
              style={{
                // backgroundColor: "green",
                // color: "white",
                fontSize: "1rem",
                marginLeft: "0.1rem",
              }}
            />
            <span
              style={{
                marginLeft: "0.25rem",
                // opacity: 0.7,
              }}
            >
              {location}
            </span>
          </UserProfileCardDetailWrapper>
        )}

        {use_cryptocurrency && (
          <UserProfileCardDetailWrapper>
            <img
              src="/static/bitcoin.svg"
              style={{
                width: "1rem",
                marginLeft: "0.1rem",
              }}
            />
            <span
              style={{
                marginLeft: "0.25rem",
                // opacity: 0.7,
              }}
            >
              {/* Pay */}
              {/* Pay (Yes) */}
              {/* Pay | Yes */}
              {/* Pay | No */}
              Yes
            </span>
          </UserProfileCardDetailWrapper>
        )}
      </div>
    </UserProfileCardContainer>
  );
};

export default UserProfileCard;
