import React, { useState } from "react";
import Link from "next/link";

import TriangleDown from "baseui/icon/triangle-down";

import { TopNavDropdownContainer, TopNavDropdownButtonWrapper, TopNavDropdownButton, TopNavDropdownContent, TopNavDropdownContentLinkWrapper } from "../TopNavDropdownCSS";
import { COMPANY_CODE_OF_CONDUCT, COMPANY_WEBSITE } from "../../../../config/environment";
import ExternalLink from "../../../ExternalLink";
import { useOnOutsideClick } from "../../../../useOutsideClick";

// Categories and others?
const CompanyCategories= () => {
  const [showCompanyCategoriesDropdown, setShowCompanyCategoriesDropdown] = useState(false);
    
  const { innerBorderRef } = useOnOutsideClick(() => {
    setShowCompanyCategoriesDropdown(false);
  });

  return (
    <TopNavDropdownContainer>
      <TopNavDropdownButtonWrapper onClick={(e) => {
        e.preventDefault();

        setShowCompanyCategoriesDropdown(true);
      }} >
        <TopNavDropdownButton>Company</TopNavDropdownButton>
        {/* <TopNavDropdownButton>TopNavDropdown</TopNavDropdownButton> */}
        <TriangleDown />
      </TopNavDropdownButtonWrapper>
      {showCompanyCategoriesDropdown && <TopNavDropdownContent
        ref={innerBorderRef}
      >
        <Link href="/company/whitepaper" >
          <TopNavDropdownContentLinkWrapper>Whitepaper</TopNavDropdownContentLinkWrapper>
        </Link>
        <Link href="/company/about" >
          <TopNavDropdownContentLinkWrapper>Our Services</TopNavDropdownContentLinkWrapper>
        </Link>
        <Link href="/company/policies/terms" >
          <TopNavDropdownContentLinkWrapper>Terms & Conditions</TopNavDropdownContentLinkWrapper>
        </Link>
        <Link href="/company/policies/privacy" >
          <TopNavDropdownContentLinkWrapper>Privacy Policy</TopNavDropdownContentLinkWrapper>
        </Link>
        <Link href={COMPANY_CODE_OF_CONDUCT} >
          <TopNavDropdownContentLinkWrapper>Code of Conduct</TopNavDropdownContentLinkWrapper>
        </Link>
        <ExternalLink href={`https://docs.${COMPANY_WEBSITE}`} >
          <TopNavDropdownContentLinkWrapper>Docs</TopNavDropdownContentLinkWrapper>
        </ExternalLink>
      </TopNavDropdownContent>}
    </TopNavDropdownContainer>
  );
};

export default CompanyCategories;