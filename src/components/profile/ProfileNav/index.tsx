import React from "react";

import Link from "next/link";

import {
  ProfileNavContainer,
  ProfileNavListWrapper,
  ProfileNavLinkWrapper,
  ProfileNavLink,
} from "./ProfileNavCSS";

const ProfileNav = ({
  isOwner,
  username,
  lastPath,
}) => {
  // alert(lastPath);

  const isProfile = lastPath === username;

  // Username can be simialr to one of below.
  const isPost = !isProfile && lastPath.includes("posts");
  const isJob = !isProfile && lastPath.includes("jobs");
  const isFollower = !isProfile && lastPath.includes("followers");
  const isCompnay = !isProfile && lastPath.includes("companies");
  const isFile = !isProfile && lastPath.includes("files");

  return (
    <ProfileNavContainer>
      <ProfileNavListWrapper>
        <ProfileNavLinkWrapper
          $style={{
            marginLeft: "2rem",
          }}
          // @ts-ignore
          $activeLink={isProfile}
        >
          <Link href={`/user/${username}`} >
            <ProfileNavLink
              // @ts-ignore
              $activeLink={isProfile}
            >
              Profile
            </ProfileNavLink>
          </Link>
        </ProfileNavLinkWrapper>

        <ProfileNavLinkWrapper
          $style={{
            marginLeft: "2rem",
          }}
          // @ts-ignore
          $activeLink={isPost}
          // $activeLink={lastPath === "posts"}
        >
          <Link href={`/user/${username}/posts`} >
            <ProfileNavLink
              // @ts-ignore
              $activeLink={isPost}
              // $activeLink={lastPath === "posts"}
            >
              Posts
            </ProfileNavLink>
          </Link>
        </ProfileNavLinkWrapper>
 
        <ProfileNavLinkWrapper
          $style={{
            marginLeft: "2rem",
          }}
          // @ts-ignore
          // $activeLink={lastPath === "jobs"}
          $activeLink={isJob}
        >
          <Link href={`/user/${username}/jobs`} >
            <ProfileNavLink
              // @ts-ignore
              // $activeLink={lastPath === "jobs"}
              $activeLink={isJob}
            >
              Jobs
            </ProfileNavLink>
          </Link>
        </ProfileNavLinkWrapper>

        <ProfileNavLinkWrapper
          $style={{
            marginLeft: "2rem",
          }}
          // @ts-ignore
          $activeLink={isFollower}
        >
          <Link href={`/user/${username}/followers`} >
            <ProfileNavLink
              // @ts-ignore
              $activeLink={isFollower}
            >
              Followers
            </ProfileNavLink>
          </Link>
        </ProfileNavLinkWrapper>

        {/* <ProfileNavLinkWrapper
          $style={{
            marginLeft: "2rem",
          }}
          // @ts-ignore
          $activeLink={isFollower}
        >
          <Link href={`/user/${username}/nfts`} >
            <ProfileNavLink
              // @ts-ignore
              $activeLink={isFollower}
            >
              NFTs
            </ProfileNavLink>
          </Link>
        </ProfileNavLinkWrapper> */}

        {isOwner && <ProfileNavLinkWrapper
          
          // @ts-ignore
          // $activeLink={lastPath === "companies"}
          $activeLink={isCompnay}
        >
          <Link href={`/user/${username}/companies`} >
            <ProfileNavLink
              // @ts-ignore
              $activeLink={isCompnay}
            >
              Companies
            </ProfileNavLink>
          </Link>
        </ProfileNavLinkWrapper>}

        {isOwner && <ProfileNavLinkWrapper
          
          // @ts-ignore
          // $activeLink={lastPath === "companies"}
          $activeLink={isFile}
        >
          <Link href={`/user/${username}/files`} >
            <ProfileNavLink
              // @ts-ignore
              $activeLink={isFile}
            >
              Files
            </ProfileNavLink>
          </Link>
        </ProfileNavLinkWrapper>}

      </ProfileNavListWrapper>
    </ProfileNavContainer>
  );
};

export default ProfileNav;