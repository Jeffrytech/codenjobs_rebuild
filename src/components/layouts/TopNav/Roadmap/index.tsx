import React from "react";
import Link from "next/link";

import { 
  TopNavLinkContainer, 
  TopNavLinkButtonWrapper, 
  TopNavLinkButton, 
} from "../TopNavLinkCSS";

// Categories and others?
// CryptoCategories later?
const Roadmap = () => {

  return (
    <TopNavLinkContainer>
      <TopNavLinkButtonWrapper>
        <Link href="/company/roadmap" >
          <TopNavLinkButton>Roadmap</TopNavLinkButton>
        </Link>
      </TopNavLinkButtonWrapper>
    </TopNavLinkContainer>
  );
};

export default Roadmap;