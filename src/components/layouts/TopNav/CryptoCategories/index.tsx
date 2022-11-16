import React, { useState } from "react";

import { useOnOutsideClick } from "../../../../useOutsideClick";

import TriangleDown from "baseui/icon/triangle-down";

import { TopNavDropdownContainer, TopNavDropdownButtonWrapper, TopNavDropdownButton, TopNavDropdownContent, TopNavDropdownContentLinkWrapper } from "../TopNavDropdownCSS";
import ExternalLink from "../../../ExternalLink";
import SolanaImage from "../../../../crypto/SolanaImage";

// Categories and others?
const CryptoCategories = () => {
  const [showCryptoCategoriesDropdown, setShowCryptoCategoriesDropdown] = useState(false);

  // @ts-ignore
  // CryptoCategories.handleClickOutside = () => 

  const { innerBorderRef } = useOnOutsideClick(() => {
    setShowCryptoCategoriesDropdown(false);
  });

  return (
    <TopNavDropdownContainer>
      <TopNavDropdownButtonWrapper onClick={(e) => {
        e.preventDefault();

        setShowCryptoCategoriesDropdown(true);
      }} >
        <TopNavDropdownButton>Crypto</TopNavDropdownButton>
        {/* <TopNavDropdownButton>TopNavDropdown</TopNavDropdownButton> */}
        <TriangleDown />
      </TopNavDropdownButtonWrapper>
      {showCryptoCategoriesDropdown && <TopNavDropdownContent
        ref={innerBorderRef}
      >
        <ExternalLink href="https://www.nft.codenjobs.com/" >
          <TopNavDropdownContentLinkWrapper>
            {/* <BitcoinImage /> */}
            <SolanaImage />
            <span style={{
              marginLeft: "0.25rem",
              // marginLeft: "0.5rem",
            }} >
              NFT Store
            </span> 
          </TopNavDropdownContentLinkWrapper>
        </ExternalLink>
                
        {/* <Link href="/jobs?category=Programming" >
                    <TopNavDropdownContentLinkWrapper>Programming</TopNavDropdownContentLinkWrapper>
                </Link> */}
      </TopNavDropdownContent>}
    </TopNavDropdownContainer>
  );
};

export default CryptoCategories;