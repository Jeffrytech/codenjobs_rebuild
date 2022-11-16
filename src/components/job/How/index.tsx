import React from "react";

import {
  HowToApplyContainer,
  HowToApply,

  CompanyWebsite,
} from "./HowCSS";

import { validateEmail } from "../../../validators";
import { COMPANY_WEBSITE } from "../../../config/environment";

const How = ({
  company_name,
  company_website,

  job_how_to_apply,
}) => {
  return (
    <HowToApplyContainer>
      <HowToApply
        href={validateEmail(job_how_to_apply) ? `mailto:${job_how_to_apply}` : job_how_to_apply}
        target="_blank"
        rel="noopener noreferrer"
      >
        How to apply?
      </HowToApply>
      <span style={{
        lineHeight: "1.5rem",
      }}>
        Please, let <CompanyWebsite rel="noopener noreferrer" target="_blank" href={company_website} >{company_name}</CompanyWebsite> know you could find this on <b>{COMPANY_WEBSITE}</b> so we can help you search jobs better.
        {/* Please, let <CompanyWebsite rel="noopener noreferrer" target="_blank" href={company_website} >{company_name}</CompanyWebsite> know you could find this on <b>{COMPANY_WEBSITE}</b> as a way to support us so we can help you search jobs better. */}
        {/* Please, let <b>{company_name}</b> know you could find this on <b>codenet.dev</b> as a way to support us so we can help you search jobs better. */}
      </span>
    
      <br />

    </HowToApplyContainer>
  );
};

export default How;