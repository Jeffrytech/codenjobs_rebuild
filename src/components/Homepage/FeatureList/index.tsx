import Link from "next/link";
import ExternalLink from "../../ExternalLink";
import { COMPANY_ENGLISH_DOCS_WEBSITE } from "../../../config/environment";
import {
  FeatureListNav,
  FeatureListNavLinkList,
  FeatureListNavLinkListButton,
  FeatureListNavLinkListButtonWrapper,
  FeatureListNavLinkListContainer,
  FeatureListNavLinkListContainerSplit,
  FeatureListNavLinkListDescription,
  FeatureListNavLinkListImage,
  FeatureListNavLinkListTitle,
  FeatureListSection,
  FeatureListTitle,
} from "./FeatureListCSS";
import { ArrowForwardIosOutlined } from "@material-ui/icons";
import Carousel from "../../carousel";

const JOBS = "Post or find a job.";
const FOR_HIRE = "Find candidates.";
const NFT_MARKET = "Buy or Sell NFTs.";
const LAUNCH_PAD = "Find new projects.";
const DEX = "Trade cryptocurrencies.";
const BLOGS = "Read blog posts.";

const options = [
  {
    name: "Jobs",
    text: JOBS,
    img: "job.svg",
    btnText: "Find a Job",
    to: "/jobs",
  },
  {
    name: "Launchpad",
    text: LAUNCH_PAD,
    img: "launchpad.svg",
    btnText: "New Projects",
    to: "/nft/projects",
  },
  {
    name: "For Hire",
    text: LAUNCH_PAD,
    img: "forhire.svg",
    btnText: "People For Hire",
    to: "/forhire",
  },
];

const FeatureList = () => {
  return (
    <FeatureListSection className="feature-section" id="feature-list-section">
      <FeatureListTitle>What We Do</FeatureListTitle>
      <FeatureListNav className="hidden sm:flex">
        <FeatureListNavLinkListContainer $first={true}>
          <FeatureListNavLinkList>
            <FeatureListNavLinkListImage src="/static/design/website_features/job.svg" />
            <FeatureListNavLinkListTitle>Jobs</FeatureListNavLinkListTitle>
            <FeatureListNavLinkListDescription>
              {JOBS}
            </FeatureListNavLinkListDescription>

            <FeatureListNavLinkListButtonWrapper>
              <ExternalLink href="/jobs">
                <FeatureListNavLinkListButton>
                  Find a job
                  <ArrowForwardIosOutlined
                    fontWeight="300"
                    fontSize="inherit"
                  />
                </FeatureListNavLinkListButton>
              </ExternalLink>
            </FeatureListNavLinkListButtonWrapper>
          </FeatureListNavLinkList>

          <FeatureListNavLinkList $second={true}>
            <FeatureListNavLinkListImage src="/static/design/website_features/forhire.svg" />
            <FeatureListNavLinkListTitle>For Hire</FeatureListNavLinkListTitle>
            <FeatureListNavLinkListDescription>
              {FOR_HIRE}
            </FeatureListNavLinkListDescription>

            <FeatureListNavLinkListButtonWrapper>
              <ExternalLink href="/forhire">
                <FeatureListNavLinkListButton>
                  {/* Learn More */}
                  People For Hire
                  <ArrowForwardIosOutlined
                    fontWeight="300"
                    fontSize="inherit"
                  />
                </FeatureListNavLinkListButton>
              </ExternalLink>
            </FeatureListNavLinkListButtonWrapper>
          </FeatureListNavLinkList>

          <FeatureListNavLinkList>
            <FeatureListNavLinkListImage src="/static/design/website_features/market.svg" />
            <FeatureListNavLinkListTitle>
              NFT Market
            </FeatureListNavLinkListTitle>
            <FeatureListNavLinkListDescription>
              {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et justo blandit, porttitor leo at, pretium ex. */}
              {NFT_MARKET}
            </FeatureListNavLinkListDescription>

            <FeatureListNavLinkListButtonWrapper>
              <FeatureListNavLinkListButton disabled={true}>
                {/* Buy NFTs */}
                Trade NFTs
                <ArrowForwardIosOutlined fontWeight="300" fontSize="inherit" />
              </FeatureListNavLinkListButton>
            </FeatureListNavLinkListButtonWrapper>
          </FeatureListNavLinkList>
        </FeatureListNavLinkListContainer>

        {/* <FeatureListNavLinkListContainerSplit /> */}

        <FeatureListNavLinkListContainer>
          <FeatureListNavLinkList>
            <FeatureListNavLinkListImage src="/static/design/website_features/launchpad.svg" />
            <FeatureListNavLinkListTitle>Laucnhpad</FeatureListNavLinkListTitle>
            <FeatureListNavLinkListDescription>
              {LAUNCH_PAD}
              {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et justo blandit, porttitor leo at, pretium ex. */}
            </FeatureListNavLinkListDescription>

            <FeatureListNavLinkListButtonWrapper>
              <ExternalLink href="/nft/projects">
                <FeatureListNavLinkListButton>
                  New Projects
                  <ArrowForwardIosOutlined
                    fontWeight="300"
                    fontSize="inherit"
                  />
                </FeatureListNavLinkListButton>
              </ExternalLink>
            </FeatureListNavLinkListButtonWrapper>
          </FeatureListNavLinkList>

          <FeatureListNavLinkList $second={true}>
            <FeatureListNavLinkListImage src="/static/design/website_features/dex.svg" />
            <FeatureListNavLinkListTitle>DEX</FeatureListNavLinkListTitle>
            <FeatureListNavLinkListDescription>
              {DEX}
              {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et justo blandit, porttitor leo at, pretium ex. */}
            </FeatureListNavLinkListDescription>

            <FeatureListNavLinkListButtonWrapper>
              <FeatureListNavLinkListButton disabled={true}>
                Swap Tokens
                {/* Swap */}
                <ArrowForwardIosOutlined fontWeight="300" fontSize="inherit" />
              </FeatureListNavLinkListButton>
            </FeatureListNavLinkListButtonWrapper>
          </FeatureListNavLinkList>

          <FeatureListNavLinkList>
            <FeatureListNavLinkListImage src="/static/design/website_features/blog.svg" />
            <FeatureListNavLinkListTitle>Blogs</FeatureListNavLinkListTitle>
            <FeatureListNavLinkListDescription>
              {BLOGS}
              {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et justo blandit, porttitor leo at, pretium ex. */}
            </FeatureListNavLinkListDescription>

            <FeatureListNavLinkListButtonWrapper>
              <ExternalLink href="/blogs">
                <FeatureListNavLinkListButton>
                  Read a blog
                  <ArrowForwardIosOutlined
                    fontWeight="300"
                    fontSize="inherit"
                  />
                </FeatureListNavLinkListButton>
              </ExternalLink>
            </FeatureListNavLinkListButtonWrapper>
          </FeatureListNavLinkList>
        </FeatureListNavLinkListContainer>
      </FeatureListNav>
      <div className="sm:block block py-8 featured">
        <Carousel
          autoplay={true}
          autoplaySpeed={2500}
          dots={true}
          infinite={true}
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          nextArrow={
            <div>
              <img
                alt=""
                className="-scale-x-100 mr-4"
                src="/static/icons/ArrowsLeft.svg"
              />
            </div>
          }
          prevArrow={
            <div>
              <img alt="" className="ml-4" src="/static/icons/ArrowsLeft.svg" />
            </div>
          }
        >
          {options.map(({ name, btnText, img, text, to }) => (
            <div key={name}>
              <div className="flex flex-col items-center">
                <img alt="" src={`/static/design/website_features/${img}`} />
                <h4 className="mb-2 text-lg font-semibold">{name}</h4>
                <p className="mb-3">{text}</p>
                <ExternalLink href={to}>
                  <FeatureListNavLinkListButton className="bg-[#26619C] text-white">
                    {btnText}
                    <ArrowForwardIosOutlined
                      fontWeight="300"
                      fontSize="inherit"
                    />
                  </FeatureListNavLinkListButton>
                </ExternalLink>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </FeatureListSection>
  );
};

export default FeatureList;
