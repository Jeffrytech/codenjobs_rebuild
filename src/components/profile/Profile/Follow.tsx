import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
// import Email from "@material-ui/icons/Email";

import { Tooltip } from "@material-ui/core";

import {
  FollowButton,
  FollowButtonText,
} from "./ProfileCSS";

import { useLoginRequired } from "../../../contexts/loginRequired";

import { follow, unfollow, followOrNot } from "../../../api/privateUser";
import { findTotalFollowers } from "../../../api/user";
import CentralizeChildren from "../../CentralizeChildren";

const Follow = ({
  followers,
  setFollowers,

  user,

  username,

  // is_following,
}) => {
  // @ts-ignore
  const { setLoginRequired } = useLoginRequired();
  
  const router = useRouter();

  const [following, setFollowing] = useState(null);

  useEffect(() => {
    // if (user !== null) {
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
    <Tooltip title={!following ? `When ${username} post a new job, we will notify you.` : ""}>
      <FollowButton $following={following} onClick={async (e) => {
        e.preventDefault();

        if (user === null) {
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
          // router.push(`/signin?&from=${router.asPath}`); // Make it work with from query
        }

        if (following) {
          const { data, error } = await unfollow(username);

          if (data === true) {
            setFollowing(false);
            const { data, error } = await findTotalFollowers(username);

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
        <CentralizeChildren>
          {/* <FollowButtonText>
            {following ? "Unfollow" : "Follow"}
          </FollowButtonText> */}
          
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
        </CentralizeChildren>
      </FollowButton>
    </Tooltip>
  );
};

export default Follow;