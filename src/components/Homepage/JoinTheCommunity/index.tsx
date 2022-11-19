import Link from "next/link";
import ExternalLink from "../../ExternalLink";
import { COMPANY_ENGLISH_DOCS_WEBSITE } from "../../../config/environment";
import { darkBlue, white } from "../../../design/colors";
import {
  JoinTheCommunityDocsButton,
  JoinTheCommunityRegisterButton,
  JoinTheCommunitySection,
  JoinTheCommunityTitle,
} from "./JoinTheCommunityCSS";

const JoinTheCommunity = () => {
  return (
    <JoinTheCommunitySection id="join-the-community">
      <div>
        <JoinTheCommunityTitle>Join the community.</JoinTheCommunityTitle>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link href="/register">
            <JoinTheCommunityRegisterButton className="flex items-center">
              Get Started
            </JoinTheCommunityRegisterButton>
          </Link>
          <ExternalLink href={COMPANY_ENGLISH_DOCS_WEBSITE}>
            <JoinTheCommunityDocsButton className="flex items-center justify-center gap-2">
              Learn More
              <img
                src="/static/design/link_white.svg"
                className="h-[10px] mt-[2px]"
              />
            </JoinTheCommunityDocsButton>
          </ExternalLink>
        </div>
      </div>
    </JoinTheCommunitySection>
  );
};

export default JoinTheCommunity;
