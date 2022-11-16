
// This should be protected.

// Refer to these.
// https://github.com/settings/profile
// https://www.reddit.com/settings/profile

import React, { useEffect, useState } from "react";

import moment from "moment";

// import { 
//   // RiImageFill, 
//   RiFileCopy2Fill 
// } from "react-icons/ri";
// import ShareIcon from "@material-ui/icons/Share";
import LinkIcon from "@material-ui/icons/Link";
import Link from "next/link";
import Tooltip from '@material-ui/core/Tooltip';

import { styled } from "baseui";

// import { Avatar } from "baseui/avatar";
import Avatar from "@material-ui/core/Avatar";
import ErrorIcon from "@material-ui/icons/Error";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

import { makeStyles } from "@material-ui/core/styles";

import { useSavedLinkToClipboard } from "../../../../contexts/savedLinkToClipboard";

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
import { findUserRegisterReferenceList } from "../../../../api/privateUser";
import { COMPANY_NAME } from "../../../../config/environment";
import { useAuth } from "../../../../contexts/auth";
import { ReferenceLinkContainer, UserReferenceListHeader, UserRefrenceListContainer } from "./ReferencesCSS";
import SavedLinkToClipboard from "../../../SavedLinkToClipboard";
import { findUserRegisterReferral } from "../../../../api/user";
import { upsertRegisterReferral } from "../../../../api/privateUser";
import { XXS } from "../../../../design/breakpoints";
import copyToClipboard from "../../../../browser/copyToClipboard";

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

const UserReferenceDetailWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  
  padding: "0.25rem 0.5rem 0.25rem 0.25rem",
  borderRadius: "0.25rem",

  transition: "all 0.2s",

  ":hover": {
    backgroundColor: "#efefef",
  }
});

// const UserCreated = styled("button", {
const ReferenceUserCreated = styled("span", {
  display: "flex",
  alignItems: "center",
  marginLeft: "auto",
  
  fontSize: "0.85rem",
  // marginRight: "1rem",
  // color: "#ff1676",
  // color: blue,
  // border: "none",
  // background: "none",

  opacity: 0.5,

  [XXS]: {
    display: "none",
  }

  // cursor: "pointer",
  // transition: "all 0.2s",

  // ":hover": {
  //   opacity: 0.7,
  // },
});

const NoBlockedUser = styled("div", {
  display: "flex",
  alignItems: "center",
});

const References = () => {
  // @ts-ignore
  const { user } = useAuth();
  // @ts-ignore
  const { setSnackbarOpen } = useSavedLinkToClipboard();

  const [useReferralCode, setUseReferralCode] = useState(false);
  
  const [userRegisterReferenceList, setUserRegisterReferenceList] = useState(null);

  const referralCode = `https://www.codenjobs.com/register?ref_username=${user.username}`;

  const classes = useStyles();

  useEffect(() => {
    findUserRegisterReferral(user.username)
      .then(({ data, error }) => {
        if (error) {
          console.log("findUserRegisterReferral error");
          console.error(error);
          return;
        }

        setUseReferralCode(data);

        
      }).catch(error => {
        console.log("findUserRegisterReferral catch error");
        console.error(error);
      });

    findUserRegisterReferenceList()
      .then(({ data, error }) => {
        if (error) {
          console.log("findUserRegisterReferenceList");
          console.error(error);
          return;
        }

        // alert(data); []

        setUserRegisterReferenceList(data);
        // console.log("data");
        // console.log(data);

        // setUserRegisterReferenceList([
        //   { 
        //     username: "codenjobs",
        //     profileImage: "https://res.cloudinary.com/codenjobs/image/upload/v1650548871/user/profile/image/yurp4krbdkbbzmookpi1.png",
        //   },
        //   { 
        //     username: "tripster",
        //     profileImage: "https://res.cloudinary.com/codenjobs/image/upload/v1650548871/user/profile/image/yurp4krbdkbbzmookpi1.png",
        //   },
        // ]);

      }).catch(error => {
        console.log("findUserRegisterReferenceList catch error");
        console.error(error);
      });
  }, []);

  return (
    <>
      <SettingsContentPreferencesHeader>References</SettingsContentPreferencesHeader>
      <SettingsContentPreferencesDetailWrapper>
        <SettingsContentDetail>
          <SettingsContentDetailLabel>
            Do you want to use a referral code for {COMPANY_NAME}?
          </SettingsContentDetailLabel>
          <SettingsContentDetailText>
            {
              useReferralCode ?
                <Tooltip title="Referral code to clipboard" >
                  <ReferenceLinkContainer
                    onClick={() => {
                      copyToClipboard(referralCode);
                      setSnackbarOpen(true);
                    }}
                  >
                    <LinkIcon /> <span style={{
                      marginLeft: "0.25rem",
                    }} >
                      {referralCode}
                    </span>
                  </ReferenceLinkContainer>
                </Tooltip>
                :
                `You don't want to use it`
            }
          </SettingsContentDetailText>
        </SettingsContentDetail>
        <div style={{
          marginRight: "0.25rem",
        }}>
          <FormControlLabel
            control={
              <Switch
                style={{
                  color: useReferralCode ? "rgb(17, 160, 245)" : "#efefef",
                }}
                checked={useReferralCode}
                onChange={async () => {
                  const { data, error } = await upsertRegisterReferral();

                  if (error) {
                    console.log("upsertRegisterReferral error");
                    console.error(error);
                  }

                  setUseReferralCode(data);
                }}
                color="primary"
              />
            }
            label={useReferralCode ? "Yes" : "No"}
          />
        </div>
      </SettingsContentPreferencesDetailWrapper>

      {
        useReferralCode && 
        (userRegisterReferenceList !== null && userRegisterReferenceList.length > 0) 
        && 
        <UserReferenceListHeader>
          {userRegisterReferenceList.length === 1 ? "User" : "Users" } from your referral code
        </UserReferenceListHeader>
      }

      {useReferralCode && <div style={{
        margin: "0 1rem 1.5rem"
      }}>
        {(userRegisterReferenceList !== null && userRegisterReferenceList.length > 0) ? userRegisterReferenceList.map(({ 
          username,
          profile_image,
          created_at,
        }) => {
          // alert(created_at);
            
          return (
          // <div key={username} style={{
          //   display: "flex",
          //   marginBottom: "1rem",
          //   marginRight: "0.25rem",
          //   border: `2px solid ${black}`,
          //   borderRadius: "0.5rem",
          //   padding: "0.5rem",
          // }}>
          //   <Link href={`/user/${username}`} >
          //     <UserReferenceDetailWrapper>
          //       <Avatar
          //         className={classes.avatar}
          //         src={profileImage}
          //       />
          //       <span style={{
          //         marginLeft: "0.5rem",
          //       }}>
          //         {username}
          //       </span>
          //     </UserReferenceDetailWrapper>
          //   </Link>
          //   <ReferenceUserCreated>
          //     1 day ago
          //   </ReferenceUserCreated>
          // </div>

            <UserRefrenceListContainer 
              key={username}
            >
              <div style={{
                display: "flex",
              }}>
                <Link href={`/user/${username}`} >
                  <UserReferenceDetailWrapper>
                    <Avatar
                      className={classes.avatar}
                      src={profile_image}
                    />
                    <span style={{
                      marginLeft: "0.5rem",
                    }}>
                      {username}
                    </span>
                  </UserReferenceDetailWrapper>
                </Link>
                <ReferenceUserCreated>
                  {moment.utc(created_at).fromNow()}
                </ReferenceUserCreated>
              </div>

              <span style={{
                padding: "0.25rem 0.5rem",
              }} >
                The user hasn't paid any service at our website yet
              </span>
            </UserRefrenceListContainer>
          );
        }) : <NoBlockedUser>
          <ErrorIcon style={{
            color: "rgb(17, 160, 245)",
          }} />
          <span style={{
            color: "rgb(17, 160, 245)",
            marginLeft: "0.25rem",
          }}>
            {"You don't have any user who used your referral code yet"}
          </span>
        </NoBlockedUser>}
      </div>}

      <SavedLinkToClipboard />
    </>
  );
};

export default References;