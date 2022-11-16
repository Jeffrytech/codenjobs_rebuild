import React, { useState } from "react";
import { useRouter } from "next/router";
// import Email from "@material-ui/icons/Email";

import { FollowButtonWrapper, FollowButton } from "./ProfileFollowersCSS";
import { follow, unfollow } from "../../../api/privateUser";
import FollowSpinner from "../../spinners/FollowSpinner";

const Follow = ({
  user,
  username,

  // following = false,
  following,

  // setFollowerList,
  // setTotalFollowerList,
}) => {
  const router = useRouter();

  const [profileFollowing, setProfileFollowing] = useState(following);

  const [loadFollowing, setLoadFollowing] = useState(false);

  if (user && user.username === username) {
    return null;
  }

  return (
    <FollowButtonWrapper>
      <FollowButton
        // $following={following}
        disabled={loadFollowing}
        $following={profileFollowing}
        onClick={async (e) => {
          if (!user) {
            router.push(`/signin?&from=${router.asPath}`); // Make it work with from query
            // router.push("/signin"); // Make it work with from query
          }

          // No self follow


          try {
            setLoadFollowing(true);

            if (following) {
              // alert(username);

              const { data, error } = await unfollow(username);

              if (error) {
                console.log("unfollow error");
                console.error(error);
                setLoadFollowing(false);

                return;
              }

              if (data === true) {
                // alert("unfollow");

                // setProfileFollowing(false);
                // setFollowerList(followerList => {
                //   const newFollowerList = followerList.filter(follower => {
                //     if (follower.username === username) {
                //       return {
                //         ...follower,
                //         following: false,
                //       } 
                //     } else {
                //       return follower;
                //     }
                //   });

                //   return newFollowerList;
                // });
                // window.location.reload();
                // setTotalFollowerList(totalFollowerList => {
                //   return totalFollowerList - 1
                // })

                setProfileFollowing(false);
                setLoadFollowing(false);
              }

            } else {
              // alert(username);

              const { data, error } = await follow(username);

              if (error) {
                console.log("follow error");
                console.error(error);
                setLoadFollowing(false);

                return;
              }

              if (data === true) {
                // alert("follow");

                // setFollowerList(followerList => {
                //   const newFollowerList = followerList.filter(follower => {
                //     if (follower.username === username) {
                //       return {
                //         ...follower,
                //         following: true,
                //       }
                //     } else {
                //       return follower;
                //     }
                //   });

                //   return newFollowerList;
                // });
                // setProfileFollowing(true);

                // window.location.reload();
                // setTotalFollowerList(totalFollowerList => {
                //   return totalFollowerList + 1
                // })

                setProfileFollowing(true);

                setLoadFollowing(false);
              }


            }
          } catch (error) {
            console.log("profile/followers catch follow or unfollow error");
            console.error(error);
          } finally {
            if (loadFollowing === true) {
              setLoadFollowing(false);
            }
          }

        }} >

        {loadFollowing && <FollowSpinner />}

        {/* {following */}
        {profileFollowing
          ? "Unfollow"
          : "Follow"
        }
      </FollowButton>
    </FollowButtonWrapper>
  );
};
    
export default Follow;