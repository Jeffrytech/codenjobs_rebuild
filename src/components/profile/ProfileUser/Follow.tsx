import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
// import Email from "@material-ui/icons/Email";

import {
  FollowButton,
  FollowButtonText,
} from "./ProfileUserCSS";

import { follow, unfollow, followOrNot } from "../../../api/privateUser";
import { findTotalFollowers } from "../../../api/user";
import { Tooltip } from "@material-ui/core";
import CentralizeChildren from "../../CentralizeChildren";
import { useLoginRequired } from "../../../contexts/loginRequired";

const Follow = ({
  // followers,
  setFollowers,

  user,

  username,

  // is_following,
}) => {
  const router = useRouter();
  // @ts-ignore
  const { loginRequired, setLoginRequired } = useLoginRequired(); 

  // console.log("router");
  // console.log(router);

  const [following, setFollowing] = useState(null);

  useEffect(() => {
    followOrNot(username)
      .then(({ data }) => {
        // console.log("data");
        // console.log(data);
        setFollowing(data);
      }).catch(error => {
        console.log("error");
        console.error(error);
      });
    // }
  }, []);

  return (
    <FollowButton $following={following} onClick={async (e) => {
      e.preventDefault();

      if (!user) {
        setLoginRequired({
          show: true,
          title: "Login Required",
          description: `Login first before you follow the user`,
          // description: `Login first before you follow u/${username}`,
          // description: "Login first before you follow the user.",
          // description: "Login or register to the website first.",
          from: router.asPath,
        });
        
        return;

        // return;
        // router.push("/signin"); // Make it work with from query
        // router.push(`/signin?&from=${router.asPath}`); // Make it work with from query
        
      }
      // if (user === null) {
      //   router.push("/signin"); // Make it work with from query
      // }

      if (following) {
        const { data, error } = await unfollow(username);

        if (data === true) {
          setFollowing(false);
          const { data, error } = await findTotalFollowers(username);
          
          const lastPath = router.route.split("/").pop();

          if (lastPath === "followers") {
            window.location.reload();
          }

          setFollowers(data);

          if (error) {
            console.log("error");
            console.error(error);
          }
        }

        if (error) {
          console.log("error");
          console.error(error);
        }

        return;
      }

      if (!following) {
        const { data, error } = await follow(username);

        if (data === true) {
          setFollowing(true);
          const { data, error } = await findTotalFollowers(username);

          const lastPath = router.route.split("/").pop();

          if (lastPath === "followers") {
            window.location.reload();
          }

          setFollowers(data);

          if (error) {
            console.log("error");
            console.error(error);
          }
        }

        if (error) {
          console.log("error");
          console.error(error);
        }
      }

      // follow(username);
    }}>
      <Tooltip title={!following ? `When ${username} post a new job, we will notify you.` : ""}>
        <CentralizeChildren>
          <FollowButtonText>
            {following
              ? "Unfollow"
              : <span>
                Follow
              </span>
            }
          </FollowButtonText>
        </CentralizeChildren>
      </Tooltip>
    </FollowButton>
  );
};

export default Follow;