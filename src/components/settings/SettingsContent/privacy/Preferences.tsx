
// This should be protected.

// Refer to these.
// https://github.com/settings/profile
// https://www.reddit.com/settings/profile

import React, { useEffect, useState } from "react";
import Link from "next/link";

import { styled } from "baseui";

// import { Avatar } from "baseui/avatar";
import Avatar from "@material-ui/core/Avatar";
import ErrorIcon from "@material-ui/icons/Error";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

import { makeStyles } from "@material-ui/core/styles";

import {
  SettingsContentPreferencesHeader,
  // SettingsContentHeader,
  
  SettingsContentPreferencesDetailWrapper,
  // SettingsContentDetailWrapper,
  
  SettingsContentDetail,
  SettingsContentDetailLabel,
  
  SettingsContentDetailText,
  // SettingsContentButton,
  // SettingsContentDeleteButton,
} from "../SettingsContentCSS";
import { findBlockedUserList, unblock } from "../../../../api/privateUser";

// import moment from "moment";

// eslint-disable-next-line no-undef
const useStyles = makeStyles(() => ({
  avatar: {
    // width: theme.spacing(3),
    // height: theme.spacing(3),
    width: "1.5rem",
    height: "1.5rem",
  },
}));

const BlockedUserDetailWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  
  padding: "0.25rem 0.5rem 0.25rem 0.25rem",
  transition: "all 0.2s",

  ":hover": {
    backgroundColor: "#efefef",
  }
});

const UnblockButton = styled("button", {
  marginLeft: "auto",
  marginRight: "1rem",
  color: "#ff1676",
  border: "none",
  background: "none",

  cursor: "pointer",
  transition: "all 0.2s",

  ":hover": {
    opacity: 0.7,
  },
});

const NoBlockedUser = styled("div", {
  display: "flex",
  alignItems: "center",
});

const Preferences = () => {
  const [blockedUserList, setBlockedUserList] = useState(null);

  const classes = useStyles();

  useEffect(() => {
    findBlockedUserList()
      .then(({ data, error }) => {
        if (data) {
          // console.log("data");
          // console.log(data);
          // alert(data);
          setBlockedUserList(data);
          // alert(blockedUserList);
          return;
        }

        if (error) {
          console.log("error");
          console.error(error);
        }
      }).catch(error => {
        console.log("error");
        console.error(error);
      });
  }, []);

  // Should set default data from the database
  const [showBlockedUserList, setShowBlockedUserList] = useState(false);

  const handleShowBlockedUserList = async (e) => {
    e.preventDefault();
    // Include api request here
    setShowBlockedUserList(!showBlockedUserList);
  };

  return (
    <>
      <SettingsContentPreferencesHeader>People You Blocked</SettingsContentPreferencesHeader>
      <SettingsContentPreferencesDetailWrapper>
        <SettingsContentDetail>
          <SettingsContentDetailLabel>
            Do you want to see the list?
          </SettingsContentDetailLabel>
          <SettingsContentDetailText>
            {/* The chat will be included later */}
            {!showBlockedUserList ? "Blocked people can’t send you a message or follow you" : "You can unblock a user with remove button"}
            {/* {!showBlockedUserList ? "We will show you who you blocked when it is yes" : "You can unblock a user with remove button"} */}
          </SettingsContentDetailText>
        </SettingsContentDetail>
        {/* Include it later if necessary */}
        <div style={{
          marginRight: "0.25rem",
        }}>
          <FormControlLabel
            control={
              <Switch
                style={{
                  color: showBlockedUserList ? "rgb(17, 160, 245)" : "#efefef",
                }}
                checked={showBlockedUserList}
                onChange={handleShowBlockedUserList}
                color="primary"
              />
            }
            label={showBlockedUserList ? "Yes" : "No"}
          />
        </div>
      </SettingsContentPreferencesDetailWrapper>

      {showBlockedUserList && <div style={{
        margin: "0 1rem 1.5rem"
      }}>
        {/* blockedUserList */}
        {blockedUserList ? blockedUserList.map(({ username }) => {
          return (
            <div key={username} style={{
              display: "flex",
              marginBottom: "1rem",
            }}>
              <Link href={`/user/${username}`} >
                <BlockedUserDetailWrapper>
                  <Avatar className={classes.avatar} />
                  <span style={{
                    marginLeft: "0.5rem",
                  }}>
                    {username}
                  </span>
                </BlockedUserDetailWrapper>
              </Link>
              {/* {moment.utc(new Date(blocked_at)).fromNow()} */}
              <UnblockButton onClick={async (e) => {
                e.preventDefault();

                const { data, error } = await unblock(username);
                
                if (data === true) {
                  setBlockedUserList(blockedUserList.filter(blockedUser => {
                    return blockedUser.username !== username;
                  }));
                  
                  return;
                }

                if (data === false) {
                  // Should handle it better
                  alert("Couldn't unblock the user");
                }

                if (error) {
                  // Should handle it better
                  alert("Something went wrong");

                  console.log("error");
                  console.error(error);
                }
              }}>
                REMOVE
              </UnblockButton>
            </div>
          );
        }) : <NoBlockedUser>
          <ErrorIcon style={{
            color: "rgb(17, 160, 245)",
          }} />
          <span style={{
            color: "rgb(17, 160, 245)",
            marginLeft: "0.25rem",
          }}>
            {"You don't have any blocked user"}
          </span>
        </NoBlockedUser>}
      </div>}
    </>
  );
};

export default Preferences;

// <SettingsContentPreferencesDetailWrapper>
//   <SettingsContentDetail>
//     <SettingsContentDetailLabel>
//       Do you want to receive our email notificaitons?
//             {/* Who can send you a chat or private message? */}
//     </SettingsContentDetailLabel>
//     <SettingsContentDetailText>
//       {/* The chat will be included later */}
//             We will still send you account relevant emails.
//           </SettingsContentDetailText>
//   </SettingsContentDetail>
//   {/* Include it later if necessary */}
//   <SettingsContentButton
//     // @ts-ignore
//     $color={showBlockedUserList === false && "#ff1676"}
//     onClick={handleNewsletterSubscription}
//   >
//     {showBlockedUserList ? "Subscribe" : "Unsubscribe"}
//   </SettingsContentButton>
// </SettingsContentPreferencesDetailWrapper>