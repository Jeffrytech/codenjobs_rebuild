import React, { useState, useEffect } from "react";

import Link from "next/link";

import { Avatar } from "baseui/avatar";

// import moment from "moment";

import NoFollower from "./NoFollower";

import AccountBoxIcon from "@material-ui/icons/AccountBox";
// import Money from "@material-ui/icons/AttachMoneyTwoTone";
// import Money from "@material-ui/icons/AttachMoneyRounded";
// import LocationOnIcon from "@material-ui/icons/LocationOn";
// import PublicIcon from "@material-ui/icons/Public";
// import GitHubIcon from "@material-ui/icons/GitHub";

import {
  FollowerListCardContainer,

  FollowerName,
  ProfileFollowerListHeader,
  ProfileImage,
} from "./ProfileFollowersCSS";

// import Skill from "../../Skill";
// import { API } from "../../../../config/environment";

// import ProfileFollowersOwnerButtons from "./ProfileFollowersForOwnerButtons";

// import { findFollowerListByOwner } from "../../../../api/privateFollower";
import ProfileFollowerSkeleton from "./ProfileFollowerSkeleton";

import { findFollowersForNotUsers } from "../../../api/user";
import { findFollowersForUsers } from "../../../api/privateUser";

import Follow from "./Follow";
import { useAuth } from "../../../contexts/auth";
import ProfileList from "../ProfileList";
import CentralizeChildren from "../../CentralizeChildren";
import useProfileFollowerListForm from "./useProfileFollowerListForm";
import { ListPaginationButtonsContainer, ListPaginationPrevButton, ListPaginationNextButton } from "../../job/ListPagination/ListPaginationCSS";
import { useRouter } from "next/router";
import { scrollToTop } from "../../../browser/scroll";

const formatProfileFollowerListTitle = (
  numberOfFollowers: Number,
  currentPage: Number,
  totalPage: Number,
) => {
  // const prefix = "Code";

  let suffix = "Followers";
  // let suffix = "Followers";
  if (numberOfFollowers < 2) {
    suffix = "Follower";
  }

  // const jobListTitle = `${numberOfJobs} ${prefix} ${suffix}`;
  // const jobListTitle = `${numberOfJobs} ${suffix} (${currentPage} / ${totalPage})`;
  const followerListTitle = `${numberOfFollowers} ${suffix}`;
  // const followerListState = `(${currentPage} / ${totalPage})`;

  return <div>
    {/* {followerListTitle} <FollowerListState>{followerListState}</FollowerListState> */}
    {followerListTitle}
  </div>;
};


// Should include edit and delete.
const ProfileFollowers = ({
  isOwner,
  username,

  // sort,
  page,
  // user,
}) => {
  const router = useRouter();
  const {
    // @ts-ignore
    user,
  } = useAuth();

  // alert(user);
  
  const [followerList, setFollowerList] = useState(null);
  const [totalFollowerList, setTotalFollowerList] = useState(null);

  const followerPerPage = 50;
  // const followerPerPage = 10;
  // const followerPerPage = 5;
  const totalPage = Math.ceil(totalFollowerList / followerPerPage);

  let currentPage;
  if (page === null || page === 1) {
    currentPage = 1;
  } else {
    currentPage = page;
  }

  // if (currentPage > totalPage) {
  //   if (currentPage !== 1) {
  //     router.push({
  //       pathname: window.location.pathname,
  //     })
  //   }
  // }

  useEffect(() => {
    // alert(isOwner);
    const skip = (currentPage - 1) * followerPerPage;
    const limit = followerPerPage;

    // alert(skip);
    // alert(limit);
    
    if (user === null) {
      // findFollowersForNotUsers(username, sort, skip, limit)
      findFollowersForNotUsers(username, skip, limit)
        .then(({ data, error }) => {
          
          if (error) {
            console.log("findFollowersForNotUsers server error");
            console.error(error);

            return;
          }

          if (data) {
            const { followerList, totalFollowerList } = data;

            // console.log("followerList");
            // console.log(followerList);

            // setFollowerList(followerList);
            setFollowerList(followerList);
            setTotalFollowerList(totalFollowerList);
          }

        }).catch(error => {
          console.log("findFollowersForNotUsers catch error");
          console.error(error);
        });
    } else {
      // if (isOwner === true) {
      // findFollowersForUsers(username, sort, skip, limit)
      findFollowersForUsers(username, skip, limit)
        .then(({ data, error }) => {

          // alert(data);

          // alert("users");

          if (error) {
            console.log("findFollowersForUsers server error");
            console.error(error);

            return;
          }

          if (data) {
            const { followerList, totalFollowerList } = data;
            setFollowerList(followerList);
            setTotalFollowerList(totalFollowerList);
          }
          
        }).catch(error => {
          console.log("findFollowersForUsers catch error");
          console.error(error);
        });
    }

  }, [
    user, 
    // sort,
    page
  ]);

  const {
    setFieldValue,
    submitForm,
  } = useProfileFollowerListForm({
    username,
    // sort,
  });

  // No data from server
  if (followerList === null) { 
    return <ProfileList>
      <ProfileFollowerSkeleton />
      <ProfileFollowerSkeleton />
      <ProfileFollowerSkeleton />
      <ProfileFollowerSkeleton />
      <ProfileFollowerSkeleton />
      <ProfileFollowerSkeleton />
      <ProfileFollowerSkeleton />
      <ProfileFollowerSkeleton />
      <ProfileFollowerSkeleton />
      <ProfileFollowerSkeleton />
      <ProfileFollowerSkeleton />
      <ProfileFollowerSkeleton />
      <ProfileFollowerSkeleton />
    </ProfileList>;
  }

  if (followerList.length === 0) {
    return (<ProfileList>
      <NoFollower username={username} isOwner={isOwner} />
      <ProfileFollowerSkeleton />
      <ProfileFollowerSkeleton />
      <ProfileFollowerSkeleton />
      <ProfileFollowerSkeleton />
      <ProfileFollowerSkeleton />
      <ProfileFollowerSkeleton />
      <ProfileFollowerSkeleton />
      <ProfileFollowerSkeleton />
      <ProfileFollowerSkeleton />
      <ProfileFollowerSkeleton />
      <ProfileFollowerSkeleton />
      <ProfileFollowerSkeleton />
      <ProfileFollowerSkeleton />
    </ProfileList>);
  }

  return (
    <ProfileList>
      <ProfileFollowerListHeader $isFollow={true} >
        <CentralizeChildren>
          <span
            style={{
              padding: "0.5rem 0 0.5rem 0",
            }}
          >
            {formatProfileFollowerListTitle(totalFollowerList, currentPage, totalPage)}
          </span>
        </CentralizeChildren>
      </ProfileFollowerListHeader>

      {followerList.map(({
        username,
        profile_name,
        profile_image,
        profile_job,
        // profile_location,
        following,
      }) => {
        // alert(following);
        return (
          <FollowerListCardContainer key={username} >
            <Link
              href={`/user/${username}`}
            >
              <ProfileImage>
                <Avatar
                  name={username}
                  size="2.75rem"
                  src={profile_image || ""}
                  // src={profile_image ? `${API}/${profile_image}` : ""}
                />
              </ProfileImage>
            </Link>
                
            <div>
              <Link
                href={`/user/${username}`}
              >
                <FollowerName>
                  {profile_name || username}
                </FollowerName>
              </Link>
                  
              {profile_job && <div style={{
                margin: "0.25rem",
                display: "flex",
                alignItems: "center"
              }}>
                <AccountBoxIcon /> <span style={{
                  marginLeft: "0.25rem",
                }}>{profile_job}</span>
                {/* <LocationOnIcon /> <span>New York, USA</span> */}
              </div>}
            </div>

            <Follow 
              user={user} 
              username={username} 
              following={following} 

              // setFollowerList={setFollowerList}
              // setTotalFollowerList={setTotalFollowerList}
            />
          </FollowerListCardContainer>
        );
      })
      }

      {followerList.length > 0 && totalPage > 1 && <ListPaginationButtonsContainer>
        {currentPage.toString() !== "1" && <ListPaginationPrevButton
          onClick={(e) => {
            e.preventDefault();

            const prevPage = +(new Number(currentPage)) - 1;

            const queries = new URLSearchParams(window.location.search);
            queries.set("page", prevPage.toString());

            const query = Object.fromEntries(queries);
            router.push({
              pathname: window.location.pathname,
              query,
            });
            scrollToTop();
          }}
        >
          Prev
        </ListPaginationPrevButton>}
        {currentPage.toString() !== totalPage.toString() && <ListPaginationNextButton
          onClick={(e) => {
            e.preventDefault();

            const nextPage = +(new Number(currentPage)) + 1;

            const queries = new URLSearchParams(window.location.search);
            queries.set("page", nextPage.toString());

            const query = Object.fromEntries(queries);
            router.push({
              pathname: window.location.pathname,
              query,
            });
            scrollToTop();

          }}
        >
          Next
        </ListPaginationNextButton>}
      </ListPaginationButtonsContainer>}
    </ProfileList>
  );
};

export default ProfileFollowers;

// {/* <div style={{
//   marginLeft: "0.5rem",
//   // minWidth: "8rem",
//   marginRight: "1rem",
// }}>
//   <Select
//     id="profile_jobs_not_owner_sort_options"
//     name="profile_jobs_not_owner_sort_options"

//     styles={{
//       control: (provided) => ({
//         ...provided,
//         // none of react-select's styles are passed to <Control />
//         border: "2px solid rgb(239, 239, 239)",
//         borderRadius: "0.5rem",

//         // padding: "0.25rem",
//         fontFamily: "roboto",

//         minWidth: "10rem",
//         // opacity: "0.7",
//       }),
//       placeholder: (provided) => ({
//         ...provided,
//         // backgroundColor: "red",
//         marginLeft: "1.75rem",
//         opacity: "0.7"
//       }),
//       input: (provided) => ({
//         ...provided,
//         // backgroundColor: "blue",
//         backgroundImage: "url('/static/logo.png')",
//         backgroundRepaet: "no-repeat",
//         backgroundSize: "cover",

//         width: "1.25rem",
//         height: "1.25rem",

//         marginRight: "1rem",
//       }),
//       singleValue: (provided) => ({
//         ...provided,
//         marginLeft: "1.75rem",
//       }),
//     }}

//     onChange={(e) => {
//       // console.log("e");
//       // console.log(e);
//       // console.log(e.label);
//       // console.log(e.value);

//       // alert(e);

//       if (e === null) {
//         // setFieldValue("page", "");
//         setFieldValue("sort", undefined);
//       } else {
//         // setFieldValue("page", "");
//         setFieldValue("sort", e);
//       }

//       submitForm();
//     }}
//     isClearable={false}
//     // isSearchable={false}
//     placeholder="Sort"
//     value={findProfileFollowerListSortOptionsLabelValue(sort)}
//     // Same for owner and not owners
//     options={profileFollowerListOptions}
//   />
// </div> */}
