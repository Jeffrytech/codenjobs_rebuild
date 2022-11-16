import React from "react";
import { Avatar } from "baseui/avatar";

import LocationOnIcon from "@material-ui/icons/LocationOn";

// import { Spacer } from "../../design/responsive";

import SecondaryWrapper from "../../SecondaryWrapper";
import {
  CompanyLogo,
  CompanyCard,
  CompanyName,
  CompanyDescription,
  // JobLinkButton
} from "./CompanyPreviewCSS";
import CentralizeChildren from "../../CentralizeChildren";

// import { API } from "../../../config/environment";

const CompanyPreview = ({
  company_logo,
  company_name,
  company_location,
  company_description,
  company_website,
  // job_how_to_apply
}) => {
  // alert(company_logo);

  return (
    <SecondaryWrapper>
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
        {/* <CentralizeChildren
          $style={{
            marginTop: "16px"
          }}
        >
          <JobLinkButton
            href={job_how_to_apply}
            target="_blank"
            rel="noopener noreferrer"
          >
            APPLY HERE
            </JobLinkButton >
        </CentralizeChildren> */}
      </CompanyCard>
    </SecondaryWrapper>
  );
};

export default CompanyPreview;