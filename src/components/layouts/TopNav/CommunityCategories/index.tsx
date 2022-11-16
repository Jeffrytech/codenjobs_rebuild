import React, { useState } from "react";
import Link from "next/link";

import TelegramIcon from '@material-ui/icons/Telegram';
import CodeIcon from '@material-ui/icons/Code';
import { BsDiscord, BsTwitter } from "react-icons/bs";
// import LinkedInIcon from '@material-ui/icons/LinkedIn';

import { useOnOutsideClick } from "../../../../useOutsideClick";

import TriangleDown from "baseui/icon/triangle-down";

import { 
  TopNavDropdownContainer, TopNavDropdownButtonWrapper, TopNavDropdownButton, TopNavDropdownContent, TopNavDropdownContentLinkWrapper 
} from "../TopNavDropdownCSS";
import { TELEGRAM_CHANNEL, TELEGRAM_GROUP, TELEGRAM_BOT, DISCORD_SERVER, TWITTER } from "../../../../config/environment";

// Categories and others?
const CommunityCategories = () => {
  const [showCommunityCategoriesDropdown, setShowCommunityCategoriesDropdown] = useState(false);

  // @ts-ignore
  // CommunityCategories.handleClickOutside = () => setShowCommunityCategoriesDropdown(false);

  const { innerBorderRef } = useOnOutsideClick(() => {
    setShowCommunityCategoriesDropdown(false);
  });

  return (
    <TopNavDropdownContainer>
      <TopNavDropdownButtonWrapper onClick={(e) => {
        e.preventDefault();

        setShowCommunityCategoriesDropdown(true);
      }} >
        <TopNavDropdownButton>Community</TopNavDropdownButton>
        {/* <TopNavDropdownButton>Find a Community</TopNavDropdownButton> */}
        {/* <TopNavDropdownButton>TopNavDropdown</TopNavDropdownButton> */}
        <TriangleDown />
      </TopNavDropdownButtonWrapper>
      {showCommunityCategoriesDropdown && <TopNavDropdownContent
        ref={innerBorderRef}
      >
        <Link href="/blogs" >
          <TopNavDropdownContentLinkWrapper>
            <CodeIcon /> <span style={{
              marginLeft: "0.25rem",
            }}>
              Blog
            </span>

          </TopNavDropdownContentLinkWrapper>
        </Link>

        <a
          // href="https://t.me/codenjobsgroup"
          href={TWITTER}

          rel="noopener noreferrer"
          target="_blank"

          style={{
            color: "black",
            textDecoration: "none",
          }}
        >
          <TopNavDropdownContentLinkWrapper>
            <BsTwitter style={{
              marginLeft: "0.25rem",
            }} /> <span style={{
              marginLeft: "0.5rem",
            }}>
              Twitter
            </span>
          </TopNavDropdownContentLinkWrapper>
        </a>

        <a
          // href="https://t.me/codenjobsgroup"
          href={DISCORD_SERVER}

          rel="noopener noreferrer"
          target="_blank"

          style={{
            color: "black",
            textDecoration: "none",
          }}
        >
          <TopNavDropdownContentLinkWrapper>
            <BsDiscord style={{
              marginLeft: "0.25rem",
            }} /> <span style={{
              marginLeft: "0.5rem",
            }}>
              Server
            </span>
          </TopNavDropdownContentLinkWrapper>
        </a>

        <a
          // href="https://t.me/codenjobsgroup"
          href={TELEGRAM_GROUP}

          rel="noopener noreferrer"
          target="_blank"

          style={{
            color: "black",
            textDecoration: "none",
          }}
        >
          <TopNavDropdownContentLinkWrapper>
            <TelegramIcon /> <span style={{
              marginLeft: "0.25rem",
            }}>
              Group
            </span>
          </TopNavDropdownContentLinkWrapper>
        </a>
                
        <a
          href={TELEGRAM_CHANNEL}

          rel="noopener noreferrer"
          target="_blank"

          style={{
            color: "black",
            textDecoration: "none",
          }}
        >
          <TopNavDropdownContentLinkWrapper>
            <TelegramIcon style={{
              marginLeft: "-0.1rem",
            }} /> 
            <span style={{
              marginLeft: "0.25rem",
            }}>
              {/* Telegram */}
              Channel
            </span>
          </TopNavDropdownContentLinkWrapper>
        </a>

        <a
          href={TELEGRAM_BOT}

          rel="noopener noreferrer"
          target="_blank"

          style={{
            color: "black",
            textDecoration: "none",
          }}
        >
          <TopNavDropdownContentLinkWrapper>
            <img 
              src="/static/logos/teloxide.png"
              style={{
                width: "1.2rem",
                marginLeft: "0.1rem",
              }}
              alt="Teloxide"
            />
            <span style={{
              marginLeft: "0.5rem",
            }}>
              {/* Telegram */}
              Bot
            </span>
          </TopNavDropdownContentLinkWrapper>
        </a>

      </TopNavDropdownContent>}
    </TopNavDropdownContainer>
  );
};

export default CommunityCategories;