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
  FeatureListTitle 
} from "./FeatureListCSS";

const JOBS = "Post or find a job.";
const FOR_HIRE = "Find candidates.";
const NFT_MARKET = "Buy or Sell NFTs.";
const LAUNCH_PAD = "Find new projects.";
const DEX = "Trade cryptocurrencies.";
const BLOGS = "Read blog posts.";

const FeatureList = () => {
  return (
    <FeatureListSection
      id="feature-list-section"
    >
      <FeatureListTitle>
        What We Do
      </FeatureListTitle>
      <FeatureListNav>
        <FeatureListNavLinkListContainer
          $first={true}
        >
          <FeatureListNavLinkList>
            <FeatureListNavLinkListImage 
              src="/static/design/website_features/job.svg"
            />
            <FeatureListNavLinkListTitle>
              Jobs
            </FeatureListNavLinkListTitle>
            <FeatureListNavLinkListDescription>
              {JOBS}
              {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et justo blandit, porttitor leo at, pretium ex. */}
            </FeatureListNavLinkListDescription>

            <FeatureListNavLinkListButtonWrapper>
              <ExternalLink
                href="/jobs"
              >
                <FeatureListNavLinkListButton>
                  <span
                    style={{
                      marginRight: "0.5rem",
                    }}
                  >
                    {/* Learn More */}
                    Find a job
                  </span>

                  <img
                    src="/static/design/link_white.svg"
                  />
                </FeatureListNavLinkListButton>
              </ExternalLink>
            </FeatureListNavLinkListButtonWrapper>
            
          </FeatureListNavLinkList>

          <FeatureListNavLinkList
            $second={true}
          >
            <FeatureListNavLinkListImage
              src="/static/design/website_features/forhire.svg"
            />
            <FeatureListNavLinkListTitle>
            For Hire
            </FeatureListNavLinkListTitle>
            <FeatureListNavLinkListDescription>
              {FOR_HIRE}
              {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et justo blandit, porttitor leo at, pretium ex. */}
            </FeatureListNavLinkListDescription>

            <FeatureListNavLinkListButtonWrapper>
              <ExternalLink
                href="/forhire"
              >
                <FeatureListNavLinkListButton>
                  <span
                    style={{
                      marginRight: "0.5rem",
                    }}
                  >
                    {/* Learn More */}
                  People For Hire
                  </span>

                  <img
                    src="/static/design/link_white.svg"
                  />
                </FeatureListNavLinkListButton>
              </ExternalLink>
            </FeatureListNavLinkListButtonWrapper>
          </FeatureListNavLinkList>

          <FeatureListNavLinkList>
            <FeatureListNavLinkListImage
              src="/static/design/website_features/market.svg"
            />
            <FeatureListNavLinkListTitle>
            NFT Market
            </FeatureListNavLinkListTitle>
            <FeatureListNavLinkListDescription>
              {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et justo blandit, porttitor leo at, pretium ex. */}
              {NFT_MARKET}
            </FeatureListNavLinkListDescription>

            <FeatureListNavLinkListButtonWrapper>
              <FeatureListNavLinkListButton
                disabled={true}
              >
                <span
                  style={{
                    marginRight: "0.5rem",
                  }}
                >
                  {/* Buy NFTs */}
                Trade NFTs
                </span>

                <img
                  src="/static/design/link_white.svg"
                />
              </FeatureListNavLinkListButton>
            </FeatureListNavLinkListButtonWrapper>
        
          </FeatureListNavLinkList>
        </FeatureListNavLinkListContainer>

        {/* <FeatureListNavLinkListContainerSplit /> */}

        <FeatureListNavLinkListContainer>

          <FeatureListNavLinkList>
            <FeatureListNavLinkListImage
              src="/static/design/website_features/launchpad.svg"
            />
            <FeatureListNavLinkListTitle>
              Laucnhpad
            </FeatureListNavLinkListTitle>
            <FeatureListNavLinkListDescription>
              {LAUNCH_PAD}
              {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et justo blandit, porttitor leo at, pretium ex. */}
            </FeatureListNavLinkListDescription>

            <FeatureListNavLinkListButtonWrapper>
              <ExternalLink
                href="/nft/projects"
              >
                <FeatureListNavLinkListButton>
                  <span
                    style={{
                      marginRight: "0.5rem",
                    }}
                  >
                    New Projects
                  </span>

                  <img
                    src="/static/design/link_white.svg"
                  />
                </FeatureListNavLinkListButton>
              </ExternalLink>
            </FeatureListNavLinkListButtonWrapper>

          </FeatureListNavLinkList>
          
          <FeatureListNavLinkList
            $second={true}
          >
            <FeatureListNavLinkListImage
              src="/static/design/website_features/dex.svg"
            />
            <FeatureListNavLinkListTitle>
              DEX
            </FeatureListNavLinkListTitle>
            <FeatureListNavLinkListDescription>
              {DEX}
              {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et justo blandit, porttitor leo at, pretium ex. */}
            </FeatureListNavLinkListDescription>

            <FeatureListNavLinkListButtonWrapper>
              <FeatureListNavLinkListButton
                disabled={true}
              >
                <span
                  style={{
                    marginRight: "0.5rem",
                  }}
                >
                  Swap Tokens
                  {/* Swap */}
                </span>

                <img
                  src="/static/design/link_white.svg"
                />
              </FeatureListNavLinkListButton>
            </FeatureListNavLinkListButtonWrapper>
          </FeatureListNavLinkList>

          <FeatureListNavLinkList>
            <FeatureListNavLinkListImage
              src="/static/design/website_features/blog.svg"
            />
            <FeatureListNavLinkListTitle>
              Blogs
            </FeatureListNavLinkListTitle>
            <FeatureListNavLinkListDescription>
              {BLOGS}
              {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et justo blandit, porttitor leo at, pretium ex. */}
            </FeatureListNavLinkListDescription>

            <FeatureListNavLinkListButtonWrapper>
              <ExternalLink
                href="/blogs"
              >
                <FeatureListNavLinkListButton>
                  <span
                    style={{
                      marginRight: "0.5rem",
                    }}
                  >
                    Read a blog
                  </span>

                  <img
                    src="/static/design/link_white.svg"
                  />
                </FeatureListNavLinkListButton>
              </ExternalLink>
            </FeatureListNavLinkListButtonWrapper>

          </FeatureListNavLinkList>
        </FeatureListNavLinkListContainer>
      </FeatureListNav>
    </FeatureListSection>
  );
};

export default FeatureList;