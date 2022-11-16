import React from "react";
import { Avatar } from "baseui/avatar";

import LocationOnIcon from "@material-ui/icons/LocationOn";

// import { Spacer } from "../../design/responsive";

import {
  CompanyLogo,
  
  CompanyCard,

  CompanyName,
  CompanyDescription,
  JobLinkButton,
} from "./JobPostSecondaryCSS";

// import { API } from "../../../config/environment";
// import { useRouter } from "next/router";

import { validateEmail } from "../../../validators";
import MoreJobsFromTheUser from "../MoreJobsFromTheUser";
// import Telegram from "../../Telegram";
import Community from "../../Community";
import CentralizeChildren from "../../CentralizeChildren";
import TopUsersForHire from "../../TopUsersForHire";
import { useSolanaCodeTokenDetails } from "../../../contexts/solanaCodeToken";
import JobPostSecondaryWrapper from "../../JobPostSecondaryWrapper";

// import Community from "../../Community";

const JobPostSecondary = ({
  job_status,

  company_logo,
  company_name,
  company_location,
  company_description,
  company_website,

  job_how_to_apply,
  
  job_id,
  username,
}) => {
  // @ts-ignore
  const { solanaCodeTokenPrice } = useSolanaCodeTokenDetails();

  // const router = useRouter();
  
  if (job_status === "Draft") {
    return null;
  }
  if (job_status === "Hold") {
    return null;
  }
  if (job_status === "Review") {
    return null;
  }
  if (job_status === "Closed") {
    return null;
  }

  return (
    <JobPostSecondaryWrapper>
      <CompanyCard>
        <CentralizeChildren $style={{
          paddingBottom: "1rem",
        }}>
          <CompanyLogo
            href={company_website}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Avatar
              name={company_name}
              size="5rem"
              src={company_logo || ""} // Should use this instead.
              // src={`${API}/${company_logo}`} // Should use this instead.
            />
          </CompanyLogo>
        </CentralizeChildren>
        <CompanyName
          href={company_website}
          target="_blank"
          rel="noopener noreferrer"
        >
          {company_name}
        </CompanyName>
        {/* <Spacer h="a" /> */}
        <CentralizeChildren>
          <LocationOnIcon style={{ fontSize: "1.5rem" }} /> {company_location}
        </CentralizeChildren>
        {/* <Spacer h="a" /> */}
        <CompanyDescription>
          {company_description}
        </CompanyDescription>
        <CentralizeChildren
          $style={{
            marginTop: "1rem"
          }}
        >
          <JobLinkButton
            href={validateEmail(job_how_to_apply) ? `mailto:${job_how_to_apply}` : job_how_to_apply}
            target="_blank"
            rel="noopener noreferrer"
          >
            APPLY HERE
          </JobLinkButton >
        </CentralizeChildren>
      </CompanyCard>
      
      <MoreJobsFromTheUser 
        job_id={job_id}
        username={username}
      />

      {/* <Telegram /> */}
      <Community />

      {/* <CodePriceCard codePrice={solanaCodeTokenPrice} /> */}
      <TopUsersForHire />
      
    </JobPostSecondaryWrapper>
  );
};

export default JobPostSecondary;