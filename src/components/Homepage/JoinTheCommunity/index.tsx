import Link from "next/link";
import ExternalLink from "../../ExternalLink";
import { COMPANY_ENGLISH_DOCS_WEBSITE } from "../../../config/environment";
import { darkBlue, white } from "../../../design/colors";
import { JoinTheCommunityDocsButton, JoinTheCommunityRegisterButton, JoinTheCommunitySection, JoinTheCommunityTitle } from "./JoinTheCommunityCSS";

const JoinTheCommunity = () => {
  return (
    <JoinTheCommunitySection
      id="join-the-community"
    >
      <div>
        <JoinTheCommunityTitle
        >
          Join the community.
        </JoinTheCommunityTitle>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link
            href="/register"
          >
            <JoinTheCommunityRegisterButton>
              Get Started
            </JoinTheCommunityRegisterButton>
          </Link>
          <ExternalLink
            href={COMPANY_ENGLISH_DOCS_WEBSITE}
          >
            <JoinTheCommunityDocsButton>
              <span
                style={{
                  marginRight: "0.5rem",
                }}
              >
                Learn More
              </span>
              <img
                src="/static/design/link_white.svg"
              />
            </JoinTheCommunityDocsButton>
          </ExternalLink>
          
        </div>
      </div>
    </JoinTheCommunitySection>
  );
};

export default JoinTheCommunity;