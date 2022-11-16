import React from "react";
import Link from "next/link";

import {
  TopNavLinkContainer,
  TopNavLinkButtonWrapper,
  TopNavLinkButton,
} from "../TopNavLinkCSS";

// Categories and others?
// CryptoCategories later?
const Whitepaper = () => {

  return (
    <TopNavLinkContainer>
      <TopNavLinkButtonWrapper>
        <Link href="/company/whitepaper" >
          <TopNavLinkButton>Whitepaper</TopNavLinkButton>
        </Link>
      </TopNavLinkButtonWrapper>
    </TopNavLinkContainer>
  );
};

export default Whitepaper;