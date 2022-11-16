/* eslint-disable no-trailing-spaces */
import React, { useState, useEffect } from "react";

import Link from "next/link";

import { Avatar } from "baseui/avatar";
import TriangleDown from "baseui/icon/triangle-down";

// import onClickOutside from "react-onclickoutside";

import Favico from "favico.js-slevomat";

// https://material-ui.com/pt/api/tooltip/
import { Badge, makeStyles, Tooltip } from "@material-ui/core";

// import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import Email from "@material-ui/icons/Email";
import Notification from '@mui/icons-material/Notifications';
import Settings from "@material-ui/icons/Settings";
import CodeIcon from '@material-ui/icons/Code';
// import CreateIcon from "@material-ui/icons/Create";
// import EditIcon from '@material-ui/icons/Edit';

import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';

// import WorkIcon from '@material-ui/icons/Work';
import SearchIcon from "@material-ui/icons/Search";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import TopNavLinks from "../TopNav/TopNavLinks";

import { useSolanaCodeTokenDetails } from "../../../contexts/solanaCodeToken";

import {
  // ForHire,
  // Hiring,
  // FindJob,

  UserFeaturesCotnainer,
  UserIconWrapper,
  UserContainer,
  // UserDetails,
  // Username,
  // UserCredit,
  UserDropDownContainer,

  UserDropdownProfile,

  UserDropdownWrapper,
  UserDropdownLabel,
  UserMobileLinksContainer,

} from "./UserCSS";

// import env from "../../../config/environment";
import { findNumberOfUnreadInboxMessages } from "../../../api/privateMessage";
import { findNumberOfUnreadNotificationList } from "../../../api/privateNotification";
import Create from "./Create";
import { useShadow } from "../../../contexts/shadow";
import { COMPANY_LOGO_WHITE } from "../../../config/environment";
import { useOnOutsideClick } from "../../../useOutsideClick";
// const API = `${env.API}`;

const useStyles = makeStyles(theme => ({
  customBadge: {
    backgroundColor: "rgb(17, 160, 245)",
    color: "white",
  }
}));

const User = ({
  user,
  logout,
}) => {
  // @ts-ignore
  // const { showShadow, setShowShadow } = useShadow();

  const { solanaCodeTokenPrice } = useSolanaCodeTokenDetails();

  const classes = useStyles();

  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [numberOfUnreadInboxMessages, setNumberOfUnreadInboxMessages] = useState(0);

  const [numberOfUnreadNotifications, setNumberOfUnreadNotifications] = useState(0);

  // // @ts-ignore
  // User.handleClickOutside = () => {
  //   setShowUserDropdown(false);
  //   // setShowShadow(false);
  // }

  const { innerBorderRef } = useOnOutsideClick(() => {
    setShowUserDropdown(false);
  });


  const {
    // email,
    username,
    image,

    balance,
  } = user;

  // alert(image);

  // console.log("user");
  // console.log(user);

  const findNotifications = async (favicon: Favico) => {

    try {
      const { data: numberOfUnreadInboxMessages } = await findNumberOfUnreadInboxMessages();
      setNumberOfUnreadInboxMessages(numberOfUnreadInboxMessages);

      const { data: numberOfUnreadNotificationList } = await findNumberOfUnreadNotificationList();
      setNumberOfUnreadNotifications(numberOfUnreadNotificationList);

      favicon.badge(numberOfUnreadInboxMessages + numberOfUnreadNotificationList);
    } catch (error) {
      console.log("findNotifications error");
      console.error(error);
    }

  };

  useEffect(() => {
    const favicon = new Favico({
      // position: 'do   wnleft',
      position: "up",
      animation: "popFade",
      bgColor: "#11A0F5",
      textColor: "#fff"
    });

    findNotifications(favicon);

    // Clean up with this
    return () => {
      favicon.badge(0);
    };
  }, []);

  return (<>
    {/* <Shadow /> */}
    <UserFeaturesCotnainer>
      {/* Make it to a dropdown for desktop later? */}
      <TopNavLinks />
      {/* <Link href="/forhire" >
          <ForHire style={{
            marginRight: "1rem",
          }}>
            For Hire
          </ForHire>
        </Link>

        <Link href="/hiring" >
          <Hiring style={{
            marginRight: "1rem",
          }}>
            Hiring
          </Hiring>
        </Link>

        <Link href="/jobs" >
          <FindJob>
            Find a job
          </FindJob>
        </Link> */}

      <Tooltip title="Notificaiton" arrow >
        <UserIconWrapper >
          <Link href={numberOfUnreadNotifications > 0 ? "/notifications/unread" : "/notifications/all"} >
            <Badge
              classes={{ badge: classes.customBadge }}
              max={5}

              badgeContent={numberOfUnreadNotifications} 
              // badgeContent={6} 

              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <Notification style={{
                // fontSize: "1rem",
              }} />
            </Badge>
          </Link>
        </UserIconWrapper>
      </Tooltip>

      <Tooltip title="Message" arrow >
        <UserIconWrapper onClick={() => {
          // if (showShadow) {
          //   setShowShadow(false);
          // }
        }} >
          {/* If there is message, send to inbox */}
          {/* If there is no message send to compose */}

          <Link href={numberOfUnreadInboxMessages > 0 ? "/message/inbox/unread" : "/message/inbox"} >
            <Badge
              classes={{ badge: classes.customBadge }}
              max={5}

              badgeContent={numberOfUnreadInboxMessages} // Get this with axios

              anchorOrigin={{
                // vertical: "bottom",
                vertical: "top",
                horizontal: "right",
                // horizontal: "left",
              }}
            >
              <Email style={{
                // fontSize: "1rem",
              }} />
            </Badge>
          </Link>
        </UserIconWrapper>
      </Tooltip>

      <Create username={username} image={image} />

      <UserContainer
        title={username}
        onClick={(e) => {
          e.preventDefault();
          setShowUserDropdown(!showUserDropdown);
          // setShowShadow(!showShadow);
        }}
      >
        <Avatar
          name={username}
          size="scale800"
          src={image || ""}
        // src={image ? `${API}/${image}` : ""}
        />
        {/* <UserDetails>
            <Username>{username}</Username>
            <UserCredit><b>$</b>0</UserCredit>
          </UserDetails> */}
        <TriangleDown style={{
          marginLeft: "0.5rem",
        }} />
      </UserContainer>

      {
        showUserDropdown && (<UserDropDownContainer
          ref={innerBorderRef}
        >
          {/* Include this later when you include payments */}
          <UserDropdownProfile>
            <Avatar
              // name={username}
              // name={"Code Token"}
              name={"Code "}
              size="scale800"
              src={image || COMPANY_LOGO_WHITE}
              // src={image || ""}
              // src={image ? `${API}/${image}` : ""}
            />
            <div style={{
              display: "flex",
              flexFlow: "column",
              // marginLeft: "0.25rem",
              marginLeft: "0.5rem",
            }}>
              <b>{username}</b>
              <span style={{
                opacity: 0.5,
                marginTop: "0.1rem",
              }}>
                {/* ${(balance * solanaCodeTokenPrice).toFixed(6)} */}
                ${(balance * solanaCodeTokenPrice).toFixed(2)}
                {/* ${balance} */}
                {/* {credit} */}
              </span>
            </div>
          </UserDropdownProfile>
          {/* Include this later when you include payments */}
          {/* <Link href="/transactions" >
              <UserDropdownWrapper>
                <AttachMoneyIcon />
                <UserDropdownLabel>
                  0
                </UserDropdownLabel>
              </UserDropdownWrapper>
            </Link> */}
          <div onClick={() => {
            // setShowShadow(false);
          }}>
            <Link href={`/user/${username}`} >
              <UserDropdownWrapper>
                <AccountBoxIcon />
                <UserDropdownLabel>
                  Profile
                </UserDropdownLabel>
              </UserDropdownWrapper>
            </Link>
          </div>

          <div onClick={() => {
            // setShowShadow(false);
          }}>
            <Link href="/settings/profile" >
              <UserDropdownWrapper>
                <Settings />
                <UserDropdownLabel>
                  Settings
                </UserDropdownLabel>
              </UserDropdownWrapper>
            </Link>
          </div>

          <UserMobileLinksContainer>
            <div onClick={() => {
              // setShowShadow(false);
            }}>
              <Link href="/jobs" >
                <UserDropdownWrapper>
                  <SearchIcon />
                  <UserDropdownLabel>
                    Find a job
                  </UserDropdownLabel>
                </UserDropdownWrapper>
              </Link>
            </div>

            <div onClick={() => {
              // setShowShadow(false);
            }}>
              <Link href="/hiring" >
                <UserDropdownWrapper>
                  <MonetizationOnIcon />
                  <UserDropdownLabel>
                    Hiring
                  </UserDropdownLabel>
                </UserDropdownWrapper>
              </Link>
            </div>

            <div onClick={() => {
              // setShowShadow(false);
            }}>
              <Link href="/forhire" >
                <UserDropdownWrapper>
                  <PeopleAltIcon />
                  <UserDropdownLabel>
                    For Hire
                  </UserDropdownLabel>
                </UserDropdownWrapper>
              </Link>
            </div>

            {/* Extract this. */}
            <div onClick={() => {
              // setShowShadow(false);
            }}>
              <Link href="/blogs" >
                <UserDropdownWrapper>
                  <CodeIcon />
                  <UserDropdownLabel>
                    Blogs
                  </UserDropdownLabel>
                </UserDropdownWrapper>
              </Link>
            </div>
          </UserMobileLinksContainer>

          <UserDropdownWrapper>
            <ExitToAppIcon />
            <UserDropdownLabel onClick={logout} >
              Log Out
            </UserDropdownLabel>
          </UserDropdownWrapper>
        </UserDropDownContainer>)
      }
    </UserFeaturesCotnainer>
  </>
  );
};

export default User;

{/* <Link href="/hiring" >
            <LoginPromptDropdownWrapper>
              <MonetizationOnIcon />
              <LoginPromptDropdownLabel>
                Hiring
              </LoginPromptDropdownLabel>
            </LoginPromptDropdownWrapper>
          </Link>

          <Link href="/forhire" >
            <LoginPromptDropdownWrapper>
              <PeopleAltIcon />
              <LoginPromptDropdownLabel>
                For Hire
              </LoginPromptDropdownLabel>
            </LoginPromptDropdownWrapper>
          </Link>

          <Link href="/blogs" >
            <LoginPromptDropdownWrapper>
              <EditIcon />
              <LoginPromptDropdownLabel>
                Blog
              </LoginPromptDropdownLabel>
            </LoginPromptDropdownWrapper>
          </Link> */}