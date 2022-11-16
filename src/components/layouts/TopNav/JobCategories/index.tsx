import React, { useState } from "react";
import Link from "next/link";

import TriangleDown from "baseui/icon/triangle-down";

import { TopNavDropdownContainer, TopNavDropdownButtonWrapper, TopNavDropdownButton, TopNavDropdownContent, TopNavDropdownContentLinkWrapper } from "../TopNavDropdownCSS";
import BitcoinImage from "../../../../crypto/BitcoinImage";
import { useOnOutsideClick } from "../../../../useOutsideClick";

// Categories and others?
const JobCategories = () => {
  const [showJobCategoriesDropdown, setShowJobCategoriesDropdown] = useState(false);

  const { innerBorderRef } = useOnOutsideClick(() => {
    setShowJobCategoriesDropdown(false);
  });

  return (
    <TopNavDropdownContainer>
      <TopNavDropdownButtonWrapper onClick={(e) => {
        e.preventDefault();

        setShowJobCategoriesDropdown(true);
      }} >
        <TopNavDropdownButton>Find a job</TopNavDropdownButton>
        {/* <TopNavDropdownButton>TopNavDropdown</TopNavDropdownButton> */}
        <TriangleDown />
      </TopNavDropdownButtonWrapper>
      {showJobCategoriesDropdown && <TopNavDropdownContent
        ref={innerBorderRef}
      >
        <Link href="/jobs" >
          <TopNavDropdownContentLinkWrapper>All</TopNavDropdownContentLinkWrapper>
        </Link>
        <Link href="/jobs?&pay_in_cryptocurrency=true" >
          <TopNavDropdownContentLinkWrapper><span style={{
            marginRight: "0.25rem",
          }} >Pay in</span> <BitcoinImage /></TopNavDropdownContentLinkWrapper>
        </Link>
                
        {/* <Link href="/jobs?category=Programming" >
                    <TopNavDropdownContentLinkWrapper><BitcoinImage /> Pay</TopNavDropdownContentLinkWrapper>
                </Link> */}
        {/* <Link href="/jobs?category=Programming" >
                    <TopNavDropdownContentLinkWrapper>Programming</TopNavDropdownContentLinkWrapper>
                </Link>
                <Link href="/jobs?category=Blockchain" >
                    <TopNavDropdownContentLinkWrapper>Blockchain</TopNavDropdownContentLinkWrapper>
                </Link> */}
        {/* <Link href="/jobs?category=Design" >
                    <TopNavDropdownContentLinkWrapper>Design</TopNavDropdownContentLinkWrapper>
                </Link>
                <Link href="/jobs?category=Marketing" >
                    <TopNavDropdownContentLinkWrapper>Marketing</TopNavDropdownContentLinkWrapper>
                </Link>
                <Link href="/jobs?category=Customer%20Support" >
                    <TopNavDropdownContentLinkWrapper>Customer Support</TopNavDropdownContentLinkWrapper>
                </Link>
                <Link href="/jobs?category=Writing" >
                    <TopNavDropdownContentLinkWrapper>Writing</TopNavDropdownContentLinkWrapper>
                </Link>
                <Link href="/jobs?category=Product" >
                    <TopNavDropdownContentLinkWrapper>Product</TopNavDropdownContentLinkWrapper>
                </Link>
                <Link href="/jobs?category=Human%20Resource" >
                    <TopNavDropdownContentLinkWrapper>Human Resource</TopNavDropdownContentLinkWrapper>
                </Link>
                <Link href="/jobs?category=Else" >
                    <TopNavDropdownContentLinkWrapper>Not in the list</TopNavDropdownContentLinkWrapper>
                </Link>
                 */}
        {/* <Link href="/jobs" >
                    <TopNavDropdownContentLinkWrapper>All</TopNavDropdownContentLinkWrapper>
                </Link> */}
      </TopNavDropdownContent>}
    </TopNavDropdownContainer>
  );
};

export default JobCategories;