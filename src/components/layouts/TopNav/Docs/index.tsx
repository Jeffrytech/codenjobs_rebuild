import React from "react";

import {
  TopNavLinkContainer,
  TopNavLinkButtonWrapper,
  TopNavLinkDocsButton,
} from "../TopNavLinkCSS";
import ExternalLink from "../../../ExternalLink";
import { COMPANY_DOCS_WEBSITE } from "../../../../config/environment";

// Categories and others?
// CryptoCategories later?
const Docs = () => {

  return (
    <TopNavLinkContainer>
      <TopNavLinkButtonWrapper>
        <ExternalLink href={`${COMPANY_DOCS_WEBSITE}/en`} >
          {/* <TopNavLinkButton>Docs</TopNavLinkButton> */}
          <TopNavLinkDocsButton>Docs</TopNavLinkDocsButton>
        </ExternalLink>
      </TopNavLinkButtonWrapper>
    </TopNavLinkContainer>
  );
};

export default Docs;