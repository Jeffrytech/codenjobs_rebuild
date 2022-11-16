// Include Channel, Group, Bot

import React, { useState, useEffect } from "react";

import TelegramIcon from '@material-ui/icons/Telegram';
import { BsDiscord, BsTwitter } from "react-icons/bs";
// import DiscordIcon from '@material-ui/icons/Discord';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
// import CopyRightIcon from '@material-ui/icons/Copyright';

import CodeIcon from '@material-ui/icons/Code';

import { useSolanaCodeTokenDetails } from "../../contexts/solanaCodeToken";

import {
  CommunityCard, // Extract this
  CommunityTitle,
  CommunityListContainer,
  CommunityList,
  CommunityDescription,
  CommunityLink,

  CommunityButtonsWrapper,
  CommunityNewBlogPostButton,
  CommunityNewJobPostButton,
} from "./CommunityCSS";

import { 
  findTotalJobs, 
  findTotalCandidates, 
  findTotalRecruiters, 
  findTotalPageviews, 
  findTotalBlogs,
} from "../../api/stat";
// import SearchListSkeleton from "../SearchList/SearchListSkeleton";
import CommunitySkeleton from "./CommunitySkeleton";
import Link from "next/link";
import ExternalLink from "../ExternalLink";
import SolanaImage from "../../crypto/SolanaImage";
import { findTelegramGroupMemberCount, findTelegramChannelSubscriberCount } from "../../api/telegram";
import { CODE_SOLANA_TOKEN, DISCORD_SERVER, SOLSCAN, TELEGRAM_BOT, TELEGRAM_CHANNEL, TELEGRAM_GROUP, TWITTER } from "../../config/environment";
import { findCodenjobsDiscordServerMemberCount } from "../../api/discord";
import { findTwitterTotalFollowers } from "../../api/twitter";
import { blue, discord, telegram } from "../../design/colors";
import { useAuth } from "../../contexts/auth";
import { useLoginRequired } from "../../contexts/loginRequired";
import { useRouter } from "next/router";

// Extract this?
const CommunityButtons = () => {
  const router = useRouter();
  // @ts-ignore
  const { user } = useAuth();
  // @ts-ignore
  const { setLoginRequired } = useLoginRequired();

  return (
    <CommunityButtonsWrapper>
      {/* <CommunityNewBlogPostButton href="/blog/post" > */}
      <CommunityNewBlogPostButton
        onClick={async (e) => {
          e.preventDefault();

          const redirect = "/blog/post";

          if (!user) {
            setLoginRequired({
              show: true,
              title: "Login Required",
              description: `Login first before you post a blog`,
              // description: `Login first before you message u/${username}`,
              // description: "Login first before you follow the user.",
              // description: "Login or register to the website first.",
              from: redirect,
            });
            return;
          }

          // router.push(messageToUser);
          router.push(redirect);

        }}
      >
        <CodeIcon />
        <span style={{
          marginLeft: "0.25rem",
        }} >
          Post a blog
        </span>
      </CommunityNewBlogPostButton>
      <CommunityNewJobPostButton
        onClick={async (e) => {
          e.preventDefault();

          const redirect = "/job/post";

          if (!user) {
            setLoginRequired({
              show: true,
              title: "Login Required",
              description: `Login first before you post a job`,
              // description: `Login first before you message u/${username}`,
              // description: "Login first before you follow the user.",
              // description: "Login or register to the website first.",
              from: redirect,
            });
            return;
          }

          // router.push(messageToUser);
          router.push(redirect);
        }}

        // style={{
        //   marginTop: "1rem",
        // }}
         
        // href="/job/post" 
      >
        <MonetizationOnIcon />
        <span style={{
          marginLeft: "0.25rem",
        }} >
          Post a job
        </span>
      </CommunityNewJobPostButton>
    </CommunityButtonsWrapper>
  );
};

const Community = ({
  list = undefined,

}) => {



  // const [totalR, setHiring] = useState(null);
  // const []

  // @ts-ignore
  const { solanaCodeTokenTotalHolders, codeTokenPrice } = useSolanaCodeTokenDetails();

  const title = "Our Community";

  const [totalJobs, setTotalJobs] = useState(null);
  const [totalRecruiters, setTotalRecruiters] = useState(null);
  const [totalCandidates, setTotalCandidates] = useState(null);

  // Telegram
  const [groupMemberCount, setGroupMemberCount] = useState(null);
  const [channelSubscriberCount, setChannelSubscriberCount] = useState(null);

  const [discordServerMemberCount, setDiscordServerMemberCount] = useState(null);
  const [twitterTotalFollowers, setTwitterTotalFollowers] = useState(null);
  
  const [totalPageViews, setTotalPageviews] = useState(null);
  const [totalBlogs, setTotalBlogs] = useState(null);
  
  // const [totalNfts, setTotalNfts] = useState(null);
  // const [totalNftCreators, setTotalNftCreators] = useState(null);

  useEffect(() => {
    // Make it to async account and Promise.all?

    
    findTotalJobs().then(({ data: count }) => {
      // console.log(data)
      setTotalJobs(count);
    }).catch(error => {
      console.log("findTotalJobs error");
      console.error(error);
    });

    findTotalCandidates().then(({ data: count }) => {
      // console.log(data)
      setTotalCandidates(count);
    }).catch(error => {
      console.log("findTotalCandidates error");
      console.error(error);
    });

    findTotalRecruiters().then(({ data: count }) => {
      // console.log(data)
      setTotalRecruiters(count);
    }).catch(error => {
      console.log("findTotalRecruiters error");
      console.error(error);
    });

    findTelegramGroupMemberCount().then(({ data: count }) => {
      // console.log(data)
      setGroupMemberCount(count);
    }).catch(error => {
      console.log("findTelegramGroupMemberCount error");
      console.error(error);
    });

    findCodenjobsDiscordServerMemberCount().then(({ data: count }) => {
      // console.log(data)
      setDiscordServerMemberCount(count);
    }).catch(error => {
      console.log("findCodenjobsDiscordServerMemberCount error");
      console.error(error);
    });

    findTelegramChannelSubscriberCount().then(({ data: count }) => {
      // console.log(data)
      setChannelSubscriberCount(count);
    }).catch(error => {
      console.log("findTelegramChannelSubscriberCount error");
      console.error(error);
    });

    findTotalPageviews().then(({ data: count }) => {
      // console.log(data)
      setTotalPageviews(count);
      // alert(count);

    }).catch(error => {
      console.log("findTotalPageviews error");
      console.error(error);
    });

    findTotalBlogs().then(({ data: count }) => {
      // console.log(data)
      setTotalBlogs(count);
      // alert(count);

    }).catch(error => {
      console.log("findTotalBlogs error");
      console.error(error);
    });

    findTwitterTotalFollowers().then(({ data: count }) => {
      // setTotalBlogs(count);
      setTwitterTotalFollowers(count);

    }).catch(error => {
      console.log("findTwitterTotalFollowers error");
      console.error(error);
    });

    // axios.get("https://cdn.syndication.twimg.com/widgets/followbutton/info.json?screen_names=codenjobs").then((response) => {
    //   console.log("response");
    //   console.log(response);
    //   // setTotalBlogs(count);
    //   // alert(count);

    // }).catch(error => {
    //   console.log("Twitter total followers count error");
    //   console.error(error);
    // })
  }, []);

  if (
    totalJobs === null
    || totalRecruiters === null 
    || totalCandidates === null 
    || channelSubscriberCount === null
    || totalPageViews === null
    || totalBlogs === null
    || discordServerMemberCount === null
    // Uncomment this later
    // || totalNfts === null
    // || totalNftCreators === null
  ) {
    // return null;
    return <CommunityCard $list={list} >
      <CommunitySkeleton />
    </CommunityCard>;
  } else {
    return (
      <CommunityCard $list={list} >
        <CommunityTitle>
          {title}
        </CommunityTitle>

        <CommunityListContainer>
          <CommunityDescription>
            Some <b>Code&Jobs</b> users are skilled professionals, others need their skills. We will help you find a right job and candidate.
            {/* Some <b>Code&Jobs</b> users are skilled professionals, some need their skills. We will help you find a right job and candidate. */}
          </CommunityDescription>

          <div style={{
            display: "flex",
            flexWrap: "wrap",
            // marginTop: "1rem",
            // marginBottom: "0.5rem",
          }}>
            <div style={{
              flex: "1 1 50%",
              marginBottom: "1rem",
            }}>
              <h5 style={{
                margin: 0,
                fontSize: "1rem",
              }}>
                Jobs
              </h5>
              <div style={{
                fontSize: "0.85rem",
                opacity: "0.7",
                marginTop: "0.1rem",
                display: "flex",
              }} >
                <Link href={`/jobs`} >
                  <CommunityLink>
                    {totalJobs}
                  </CommunityLink>
                </Link>
              </div>
            </div>

            <div style={{
              flex: "1 1 50%",
              marginBottom: "1rem",
            }}>
              <h5 style={{
                margin: 0,
                fontSize: "1rem",
              }}>
                Pageviews
              </h5>
              <div style={{
                fontSize: "0.85rem",
                opacity: "0.7",
                marginTop: "0.1rem",
                display: "flex",
              }} >
                <Link href={`/pageviews`} >
                  <CommunityLink>
                    {/* {totalPageViews}/day */}
                    {totalPageViews}/month
                  </CommunityLink>
                </Link>
                {/* {totalPageViews}/month */}
                {/* 2700/month */}
                {/* <Link href={`/user/${username}/followers`} >
                  <ProfileFollowersLink>
                    {followers}
                  </ProfileFollowersLink>
                </Link> */}
              </div>
            </div>
          </div>

          <div style={{
            display: "flex",
            flexWrap: "wrap",
            // marginTop: "1rem",
            // marginBottom: "0.5rem",
          }}>
            <div style={{
              flex: "1 1 50%",
              marginBottom: "1rem",
            }}>
              <h5 style={{
                margin: 0,
                fontSize: "1rem",
              }}>
                Blogs
              </h5>
              <div style={{
                fontSize: "0.85rem",
                opacity: "0.7",
                marginTop: "0.1rem",
                display: "flex",
              }} >
                <Link href={`/blogs`} >
                  <CommunityLink>
                    {totalBlogs}
                  </CommunityLink>
                </Link>
              </div>
            </div>

            <div style={{
              flex: "1 1 50%",
              marginBottom: "1rem",
            }}>
              <h5 style={{
                margin: 0,
                fontSize: "1rem",
              }}>
                Holders
              </h5>
              <div style={{
                fontSize: "0.85rem",
                opacity: "0.7",
                marginTop: "0.1rem",
                display: "flex",
              }} >
                <ExternalLink href={`${SOLSCAN}/token/${CODE_SOLANA_TOKEN}`} >
                  <CommunityLink>
                    <SolanaImage />
                    <span style={{
                      marginLeft: "0.25rem",
                    }}>
                      {solanaCodeTokenTotalHolders}
                    </span>
                  </CommunityLink>
                </ExternalLink>
              </div>
            </div>

            {/* <div style={{
              flex: "1 1 50%",
              marginBottom: "1rem",
            }}>
              <h5 style={{
                margin: 0,
                fontSize: "1rem",
              }}>
                NFTs
              </h5>
              <div style={{
                fontSize: "0.85rem",
                opacity: "0.7",
                marginTop: "0.1rem",
                display: "flex",
              }} >
                <ExternalLink href="https://www.nft.codenjobs.com/#/artworks" >
                  <CommunityLink>
                    <SolanaImage />
                    <span style={{
                      marginLeft: "0.25rem",
                    }}>
                      Solana
                    </span>
                  </CommunityLink>
                </ExternalLink>
              </div>
            </div> */}
          </div>

          {/* <CommunityButtonWrapper>
            <CommunityNewBlogPostButton href="/blog/post" >
              <CodeIcon />
              <span style={{
                marginLeft: "0.25rem",
              }} >
                Post a blog
              </span>
            </CommunityNewBlogPostButton>
          </CommunityButtonWrapper> */}
          <CommunityButtons
            // list={list} 
          />

          <CommunityList>
            <a
              href="/hiring"
              target="_blank"
              rel="noopener noreferrer"

              style={{
                display: "flex",
                alignItems: "center",
                color: "black",
                textDecoration: "none",
              }}
            >
              {/* <CommunityIcon /> */}
              <MonetizationOnIcon />
              <span style={{
                marginLeft: "0.25rem",
              }}>
                {totalRecruiters} Recruiters
                {/* Channel for job notifications */}
              </span>

            </a>
          </CommunityList>

          <CommunityList>
            <a
              href="/forhire"
              target="_blank"
              rel="noopener noreferrer"

              style={{
                display: "flex",
                alignItems: "center",
                color: "black",
                textDecoration: "none",
              }}
            >
              <PeopleAltIcon />
              <span style={{
                marginLeft: "0.25rem",
              }}>
                {totalCandidates} Candidates
              </span>
            </a>
          </CommunityList>

          {/* <CommunityList>
            <a
              href="https://www.nft.codenjobs.com/#/artists"
              target="_blank"
              rel="noopener noreferrer"

              style={{
                display: "flex",
                alignItems: "center",
                color: "black",
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
                marginLeft: "0.5rem",
              }}>
                2 NFT Creators
              </span>
            </a>
          </CommunityList> */}

          <CommunityList>
            <a
              href={TWITTER}
              target="_blank"
              rel="noopener noreferrer"

              style={{
                display: "flex",
                alignItems: "center",
                color: "black",
                textDecoration: "none",
              }}
            >
              <BsTwitter style={{
                marginLeft: "0.225rem",
                color: blue,
              }} />
              <span style={{
                marginLeft: "0.5rem",
              }}>
                {twitterTotalFollowers} Followers
                {/* Channel for job notifications */}
              </span>
            </a>
          </CommunityList>

          <CommunityList>
            <a
              href={DISCORD_SERVER}
              target="_blank"
              rel="noopener noreferrer"

              style={{
                display: "flex",
                alignItems: "center",
                color: "black",
                textDecoration: "none",
              }}
            >
              <BsDiscord style={{
                marginLeft: "0.225rem",
                color: discord,
              }} />
              <span style={{
                marginLeft: "0.5rem",
              }}>
                Server with {discordServerMemberCount} members
                {/* Channel for job notifications */}
              </span>
            </a>
          </CommunityList>

          <CommunityList>
            <a
              href={TELEGRAM_GROUP}
              target="_blank"
              rel="noopener noreferrer"

              style={{
                display: "flex",
                alignItems: "center",
                color: "black",
                textDecoration: "none",
              }}
            >
              <TelegramIcon style={{
                color: telegram,
              }} />
              <span style={{
                marginLeft: "0.25rem",
              }}>
                Group with {groupMemberCount} members
                {/* Channel for job notifications */}
              </span>
            </a>
          </CommunityList>

          <CommunityList>
            <a
              href={TELEGRAM_CHANNEL}
              target="_blank"
              rel="noopener noreferrer"

              style={{
                display: "flex",
                alignItems: "center",
                color: "black",
                textDecoration: "none",
              }}
            >
              <TelegramIcon style={{
                color: telegram,
              }} />
              <span style={{
                marginLeft: "0.25rem",
              }}>
                Channel with {channelSubscriberCount} subscribers
                {/* Channel for job notifications */}
              </span>
            </a>
          </CommunityList>

          <CommunityList>
            <a
              href={TELEGRAM_BOT}
              target="_blank"
              rel="noopener noreferrer"

              style={{
                display: "flex",
                alignItems: "center",
                color: "black",
                textDecoration: "none",
              }}
            >
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
                {/* Teloxide Rust bot to help you */}
                {/* Bot to help you find a job */}
                Rust bot to help you
                {/* {title} */}
              </span>
            </a>
          </CommunityList>
        </CommunityListContainer>
      </CommunityCard>
    );
  }
  
};

export default Community;