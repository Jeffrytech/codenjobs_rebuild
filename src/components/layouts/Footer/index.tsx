import React from "react";
import Link from "next/link";

import { BsDiscord, BsTwitter } from "react-icons/bs";

import TelegramIcon from '@material-ui/icons/Telegram';
import CodeIcon from '@material-ui/icons/Code';

import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';

import { 
  FooterNav, 
  FooterLinkListContainer, 
  FooterLinkListLabel, 
  FooterLinkListSection, 
  FooterList,
  // FooterList, 

  Copyright,
  Contact,
} from "./FooterCSS";

import BitcoinImage from "../../../crypto/BitcoinImage";

import ExternalLink from "../../ExternalLink";
import BackgroundColor from "../../BackgroundColor";
import { COMPANY_CODE_OF_CONDUCT, COMPANY_WEBSITE, DISCORD_SERVER, TELEGRAM_BOT, TELEGRAM_CHANNEL, TELEGRAM_GROUP, TWITTER } from "../../../config/environment";

const Footer = () => {
  return (
    <footer style={{
      position: "relative",
      background: "white",
      
      bottom: 0,
    }}>
      <BackgroundColor $background="rgb(55, 66, 82)" style={{
      // <BackgroundColor $background="white" style={{
      // <BackgroundColor $background="white" style={{
        // Comment this later.
        // borderBottom: "2px solid #efefef",
        color: "white",
        // display: "flex",
        // flexWrap: "wrap",
      }} >
        {/* Or refer to the next js example */}
        <FooterNav>
          <FooterLinkListContainer>
            <FooterLinkListLabel>
              Find a job
            </FooterLinkListLabel>

            <FooterLinkListSection>
              <Link href="/jobs">
                <FooterList>
                  All
                </FooterList>
              </Link>
              <Link href="/jobs?&pay_in_cryptocurrency=true">
                <FooterList>
                  Pay in <span style={{
                    marginLeft: "0.25rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                    <BitcoinImage />
                  </span>
                  {/* Pay in cryptocurrency <BitcoinImage /> */}
                </FooterList>
              </Link>
              <Link href="/jobs?category=Programming" >
                <FooterList>
                  Programming
                </FooterList>
              </Link>
              <Link href="/jobs?category=Blockchain" >
                <FooterList>
                  Blockchain
                </FooterList>
              </Link>
              <Link href="/jobs?category=Design" >
                <FooterList>
                  Design
                </FooterList>
              </Link>
              <Link href="/jobs?category=Marketing" >
                <FooterList>
                  Marketing
                </FooterList>
              </Link>
              <Link href="/jobs?category=Customer%20Support" >
                <FooterList>
                  Customer Support
                </FooterList>
              </Link>
              <Link href="/jobs?category=Writing" >
                <FooterList>
                  Writing
                </FooterList>
              </Link>
              <Link href="/jobs?category=Product" >
                <FooterList>
                  Product
                </FooterList>
              </Link>
              <Link href="/jobs?category=Human%20Resource">
                <FooterList>
                  Human Resource
                </FooterList>
              </Link>
              <Link href="/jobs?category=Else" >
                <FooterList>
                  Not in the list
                </FooterList>
              </Link>

            </FooterLinkListSection>

          </FooterLinkListContainer>
          
          <FooterLinkListContainer>
            <FooterLinkListLabel>
              Community
            </FooterLinkListLabel>

            <FooterLinkListSection>
              {/* <ExternalLink href="https://www.nft.codenjobs.com/" >
                <FooterList>
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginLeft: "0.25rem",
                  }} >
                    <SolanaImage /> <span style={{
                      marginLeft: "0.5rem",
                    }}>
                      NFT Store
                    </span>
                  </div>
                </FooterList>
              </ExternalLink> */}

              <Link href="/blogs">
                <FooterList>
                  <CodeIcon /> <span style={{
                    marginLeft: "0.25rem",
                  }}>
                    Blog
                  </span>
                </FooterList>
              </Link>

              <ExternalLink href={TWITTER} >
                <FooterList>
                  <BsTwitter style={{
                    marginLeft: "0.225rem"
                  }} /> <span style={{
                    marginLeft: "0.5rem",
                  }}>
                    Twitter
                  </span>
                </FooterList>
              </ExternalLink>

              <ExternalLink href={DISCORD_SERVER} >
                <FooterList>
                  <BsDiscord style={{
                    marginLeft: "0.225rem"
                  }} /> <span style={{
                    marginLeft: "0.5rem",
                  }}>
                    Server
                  </span>
                </FooterList>
              </ExternalLink>

              <ExternalLink href={TELEGRAM_GROUP} >
                <FooterList>
                  <TelegramIcon /> <span style={{
                    marginLeft: "0.25rem",
                  }}>
                    Group
                  </span>
                </FooterList>
              </ExternalLink>

              <ExternalLink href={TELEGRAM_CHANNEL} >
                <FooterList>
                  <TelegramIcon /> <span style={{
                    marginLeft: "0.25rem",
                  }}>
                    Channel
                  </span>
                </FooterList>
              </ExternalLink>

              <ExternalLink href={TELEGRAM_BOT} >
                <FooterList>
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
                    Bot
                  </span>
                </FooterList>
              </ExternalLink>
              
              {/* <ExternalLink href="https://t.me/joinchat/lwSkcociXqY1NDU5" >
                <FooterList>
                  <TelegramIcon /> <span style={{
                    marginLeft: "0.25rem",
                  }}>
                    Group
                  </span>
                </FooterList>
              </ExternalLink> */}
              {/* Community */}
              
            </FooterLinkListSection>

          </FooterLinkListContainer>

          <FooterLinkListContainer>
            <FooterLinkListLabel>
              People
            </FooterLinkListLabel>
            <FooterLinkListSection>
              <Link href="/hiring">
                <FooterList>
                  <MonetizationOnIcon /> <span style={{
                    marginLeft: "0.25rem",
                  }}>
                    Hiring
                    {/* Recruiters */}
                  </span>
                </FooterList>
              </Link>
              <Link href="/forhire">
                <FooterList>
                  <PeopleAltIcon /> <span style={{
                    marginLeft: "0.25rem",
                  }}>
                    For Hire
                    {/* Candidates */}
                  </span>
                </FooterList>
              </Link>
              {/* <FooterList>
                <a
                  href="https://www.nft.codenjobs.com/#/artists"
                  target="_blank"
                  rel="noopener noreferrer"

                  style={{
                    display: "flex",
                    alignItems: "center",
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  <span style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "1.75rem",
                    justifyContent: "center",
                    marginLeft: "0.1rem",
                  }}>
                    ©️
                  </span>
                  <span style={{
                    marginLeft: "0.45rem",
                  }}>
                    NFT Creators
                  </span>
                </a>
              </FooterList> */}
            </FooterLinkListSection>
          </FooterLinkListContainer>

          <FooterLinkListContainer>
            <FooterLinkListLabel>
              Company
            </FooterLinkListLabel>
            <FooterLinkListSection>
              {/* <Link href="/about">
                <FooterList>
                  <span>
                    About
                  </span>
                </FooterList>
              </Link> */}
              <Link href="/company/whitepaper">
                <FooterList>
                  <span>
                    Whitepaper
                  </span>
                </FooterList>
              </Link>
              <Link href="/company/about">
                <FooterList>
                  <span>
                    Our Services
                    {/* About Code&Jobs */}
                  </span>
                </FooterList>
              </Link>
              <Link href="/company/policies/terms">
                <FooterList>
                  <span>
                    Terms & Conditions
                    {/* Terms of Service */}
                  </span>
                </FooterList>
              </Link>
              <Link href="/company/policies/privacy">
                <FooterList>
                  <span>
                    Privacy Policy
                  </span>
                </FooterList>
              </Link>
              <Link href={COMPANY_CODE_OF_CONDUCT}>
                <FooterList>
                  <span>
                    Code of Conduct
                  </span>
                </FooterList>
              </Link>
              <ExternalLink href={`https://docs.${COMPANY_WEBSITE}`} >
                <FooterList>
                  <span>
                    Docs
                  </span>
                </FooterList>
              </ExternalLink>
            </FooterLinkListSection>
          </FooterLinkListContainer>
        </FooterNav>
      </BackgroundColor>

      {/* Call to action or something here */}
      {/* <div>
        Hiring a talent?
      </div> */}
      
      <Copyright>
        <div style={{
          marginLeft: "0.5rem",
        }}>
          Copyright © {(new Date()).getFullYear()}
        </div>
        <div style={{
          display: "flex",
          alignItems: "center",

          marginRight: "0.5rem",
        }}>
          {/* <FindJob
              // Use real account
              href="/jobs"
              
              // rel="noopener noreferrer"
              // target="_blank"
            >
              Find a job
            </FindJob> */}
          <Contact
            // Use real account
            href={"mailto:support@codenjobs.com"}
            // href={`mailto:${supportEmail}`}
              
            // rel="noopener noreferrer"
            // target="_blank"
          >
            Contact
          </Contact>
          {/* <Twitter
              href="https://www.twitter.com"
              
              rel="noopener noreferrer"
              target="_blank"
            >
              <TwitterIcon />
            </Twitter>

            <LinkedIn
              // Use real account
              href="https://www.linkedin.com/in/job-board-for-programmers-and-recruiters-76970120a/"
              
              rel="noopener noreferrer"
              target="_blank"
            >
              <LinkedInIcon />
            </LinkedIn> */}
        </div>
      </Copyright>
    </footer>
  );
};

export default Footer;