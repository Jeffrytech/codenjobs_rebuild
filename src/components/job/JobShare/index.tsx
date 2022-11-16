import React from "react";

import ShareIcon from "@material-ui/icons/Share";

import {
  JobShareCard,

  JobShareContainer,
  JobShareWrapper,
  JobShareText,
  SocialShareWrapper,
} from "./JobShareCSS";

import SocialShare from "../../SocialShare";

const JobShare = ({
  title,
  url,
}) => {
  return (<JobShareCard>
    <JobShareContainer>
      <JobShareWrapper>
        <ShareIcon style={{
          color: "rgb(17, 160, 245)",
        }} />
        <JobShareText>
          Share
          {/* Share this job */}
          {/* Share this job with others */}
        </JobShareText>
        <SocialShareWrapper>
          <SocialShare
            title={title}
            url={url}
          />
        </SocialShareWrapper>
      </JobShareWrapper>
    </JobShareContainer>
  </JobShareCard>);
};

export default JobShare;