/* eslint-disable no-trailing-spaces */
import React, { useState } from "react";
// import onClickOutside from "react-onclickoutside";

// import { withStyle } from "baseui";
// import { styled } from "baseui";

import SearchIcon from "@material-ui/icons/Search";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import CodeIcon from '@material-ui/icons/Code';
// import CreateIcon from "@material-ui/icons/Create";
// import EditIcon from '@material-ui/icons/Edit';
// import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
// import TelegramIcon from '@material-ui/icons/Telegram';

import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';

import Link from "next/link";

import PersonIcon from "@material-ui/icons/Person";
import TriangleDown from "baseui/icon/triangle-down";

import TopNavLinks from "../TopNav/TopNavLinks";

// import Shadow from "../Shadow";
// import { useShadow } from "../../../contexts/shadow";

import {
  // ForHire,
  // Hiring,
  // FindJob,
  // PostJob,
  SignInButton,
  SignUpButton,

  LoginPromptContainer,
  EmptyUserContainer,
  LoginPromptDropDownContainer,
  LoginPromptDropdownWrapper,
  LoginPromptDropdownLabel,
} from "./LoginPromptCSS";
import { useShadow } from "../../../contexts/shadow";
import { useOnOutsideClick } from "../../../useOutsideClick";
// import { Link } from "@material-ui/core";

const LoginPrompt = () => {
  // @ts-ignore
  const { showShadow, setShowShadow } = useShadow();
  
  // Extract later?
  const LoginPrompotDropdownLink = ({
    href,
    children,
  }) => {
    return (<div onClick={() => {
      setShowShadow(false);
    }}>
      <Link href={href} >
        {children}
      </Link>
    </div>);
  };

  const [showLoginPromptDropdown, setShowLoginPromptDropdown] = useState(false);

  const { innerBorderRef } = useOnOutsideClick(() => {
    setShowLoginPromptDropdown(false);
    setShowShadow(false);
  });

  return (<>
    <LoginPromptContainer>
      <TopNavLinks />
      {/* <Link href={"/forhire"}>
        <ForHire>For Hire</ForHire>
      </Link>
      <Link href={"/hiring"}>
        <Hiring>Hiring</Hiring>
      </Link>
      <Link href={"/jobs"}>
        <FindJob>Find a job</FindJob>
      </Link> */}
      {/* <Link href={"/job/post"}>
        <PostJob>
          Post a job
        </PostJob>
      </Link> */}
      
      <Link href={"/signin"}>
        <SignInButton>
          Sign In
        </SignInButton>
      </Link>
      <Link href={"/register"}>
        <SignUpButton>
          Sign Up
        </SignUpButton>
      </Link>
      <EmptyUserContainer onClick={(e) => {
        e.preventDefault();
        setShowLoginPromptDropdown(!showLoginPromptDropdown);
        // setShowShadow(!showShadow);
      }}>
        <PersonIcon />
        <TriangleDown />
      </EmptyUserContainer>
      {/* Update this later. */}
      {
        showLoginPromptDropdown && (<LoginPromptDropDownContainer
          ref={innerBorderRef}
        >
          {/* <Link href="/job/post" >
            <LoginPromptDropdownWrapper>
              <CreateIcon />
              <LoginPromptDropdownLabel>
                Post a job
              </LoginPromptDropdownLabel>
            </LoginPromptDropdownWrapper>
          </Link> */}
          <LoginPrompotDropdownLink href="/jobs" >
            <LoginPromptDropdownWrapper>
              <SearchIcon />
              <LoginPromptDropdownLabel>
                Find a job
              </LoginPromptDropdownLabel>
            </LoginPromptDropdownWrapper>
          </LoginPrompotDropdownLink>
          {/* <Link href="/jobs" >
            <LoginPromptDropdownWrapper>
              <PeopleAltIcon />
              <LoginPromptDropdownLabel>
                Hiring | For Hire
              </LoginPromptDropdownLabel>
            </LoginPromptDropdownWrapper>
          </Link> */}
          <LoginPrompotDropdownLink href="/hiring" >
            <LoginPromptDropdownWrapper>
              <MonetizationOnIcon />
              <LoginPromptDropdownLabel>
                Hiring
              </LoginPromptDropdownLabel>
            </LoginPromptDropdownWrapper>
          </LoginPrompotDropdownLink>

          <LoginPrompotDropdownLink href="/forhire" >
            <LoginPromptDropdownWrapper>
              <PeopleAltIcon />
              <LoginPromptDropdownLabel>
                For Hire
              </LoginPromptDropdownLabel>
            </LoginPromptDropdownWrapper>
          </LoginPrompotDropdownLink>

          <LoginPrompotDropdownLink href="/blogs" >
            {/* <Link href="/blogs" > */}
            <LoginPromptDropdownWrapper>
              <CodeIcon />
              <LoginPromptDropdownLabel>
                Blogs
              </LoginPromptDropdownLabel>
            </LoginPromptDropdownWrapper>
            {/* </Link> */}
          </LoginPrompotDropdownLink>

          {/* <a style={{
            color: "#121212",
            textDecoration: "none",
          }} href={TELEGRAM_GROUP} >
            <LoginPromptDropdownWrapper>
              <BsDiscord style={{
                marginLeft: "0.25rem",
              }} />

              <LoginPromptDropdownLabel>
                <span style={{
                  marginLeft: "0.25rem",
                }}>
                  Server
                </span>
              </LoginPromptDropdownLabel>
            </LoginPromptDropdownWrapper>
          </a>

          <a style={{
            color: "#121212",
            textDecoration: "none",
          }} href={TELEGRAM_GROUP} >
            <LoginPromptDropdownWrapper>
              <TelegramIcon />

              <LoginPromptDropdownLabel>
                Group
              </LoginPromptDropdownLabel>
            </LoginPromptDropdownWrapper>
          </a>

          <a style={{
            color: "#121212",
            textDecoration: "none",
          }} href={TELEGRAM_CHANNEL} >
            <LoginPromptDropdownWrapper>
              <TelegramIcon />
              
              <LoginPromptDropdownLabel>
                Channel
              </LoginPromptDropdownLabel>
            </LoginPromptDropdownWrapper>
          </a>

          <a style={{
            color: "#121212",
            textDecoration: "none",
          }} href={TELEGRAM_BOT} >
            <LoginPromptDropdownWrapper>
              <img
                src="/static/logos/teloxide.png"
                style={{
                  width: "1.2rem",
                  marginLeft: "0.1rem",
                  marginRight: "0.25rem",
                }}
                alt="Teloxide"
              />
              <LoginPromptDropdownLabel>
                Bot
              </LoginPromptDropdownLabel>
            </LoginPromptDropdownWrapper>
          </a> */}

          {/* <LoginPrompotDropdownLink href="/signin"> */}
          <a style={{
            color: "#121212",
            textDecoration: "none",
          }} href="/signin">
            <LoginPromptDropdownWrapper>
              <ExitToAppIcon />
              <LoginPromptDropdownLabel>
                Sign In / Sign Up
              </LoginPromptDropdownLabel>
            </LoginPromptDropdownWrapper>
          </a>
          {/* </LoginPrompotDropdownLink> */}
        </LoginPromptDropDownContainer>)
      }
    </LoginPromptContainer>
  </>);
};

export default LoginPrompt;
